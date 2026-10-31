import { Fragment, useMemo } from "react";
import katex from "katex";

import { cn } from "@/lib/utils";

type Segment =
  | { kind: "text"; value: string }
  | { kind: "math"; value: string; block: boolean };

const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;

export function splitMath(text: string): Segment[] {
  const segments: Segment[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(MATH_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) segments.push({ kind: "text", value: text.slice(lastIndex, index) });
    if (match[1] !== undefined) segments.push({ kind: "math", value: match[1], block: true });
    else segments.push({ kind: "math", value: match[2] ?? "", block: false });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) segments.push({ kind: "text", value: text.slice(lastIndex) });
  return segments;
}

function renderKatex(math: string, block: boolean): string {
  try {
    return katex.renderToString(math, {
      throwOnError: false,
      displayMode: block,
      strict: "ignore",
      output: "html",
    });
  } catch {
    // Absolute last resort: show the expression as escaped plain text, never raw $ delimiters.
    return math.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c] ?? c);
  }
}

function TextWithBreaks({ value }: { value: string }) {
  const lines = value.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

export function MathRenderer({ text, className }: { text: string; className?: string }) {
  const segments = useMemo(() => splitMath(text ?? ""), [text]);
  return (
    <span className={cn("leading-relaxed", className)}>
      {segments.map((seg, i) =>
        seg.kind === "text" ? (
          <TextWithBreaks key={i} value={seg.value} />
        ) : seg.block ? (
          <span
            key={i}
            className="block"
            dangerouslySetInnerHTML={{ __html: renderKatex(seg.value, true) }}
          />
        ) : (
          <span key={i} dangerouslySetInnerHTML={{ __html: renderKatex(seg.value, false) }} />
        ),
      )}
    </span>
  );
}

export default MathRenderer;
