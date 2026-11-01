import { Fragment, useMemo } from "react";
import katex from "katex";
import { cn } from "@/lib/utils";

export type Segment =
  | { kind: "text"; value: string }
  | { kind: "math"; value: string; block: boolean };

// STRICT INVARIANT: Inline math ($...$) MUST NOT match across newlines [^$\n]+.
// Block math ($$...$$) can span across multiple lines ([\s\S]+?).
export const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;

export function sanitizeTextContent(text: string): string {
  if (!text) return "";
  // 1. Unescape literal "\n" from JSON while protecting LaTeX commands (\neq, \nu, \nabla, etc.)
  let cleaned = text.replace(/\\n(?!(?:eq|e|otin|u|abla|atural|eg|ewline|ormalsize|ocorr)\b)/g, "\n");

  // 2. Normalize standard LaTeX display \[ ... \] and inline \( ... \)
  cleaned = cleaned.replace(/\\\[([\s\S]+?)\\\]/g, (_, m) => `$$${m}$$`);
  cleaned = cleaned.replace(/\\\(([\s\S]+?)\\\)/g, (_, m) => `$${m}$`);

  // 3. Strip trailing document row-breaks (\\) occurring in plain text
  cleaned = cleaned.replace(/\\\\+(\s*(\n|$))/g, "$1");
  cleaned = cleaned.replace(/^\s*\\\\+\s*$/gm, "");

  // 4. Per-line dollar balance guard: if a line has an odd number of $, strip the lone trailing $
  cleaned = cleaned
    .split("\n")
    .map((line) => {
      const count = (line.match(/(?<!\\)\$/g) || []).length;
      if (count % 2 !== 0) {
        const last = line.lastIndexOf("$");
        return line.slice(0, last) + line.slice(last + 1);
      }
      return line;
    })
    .join("\n");

  return cleaned;
}

export function splitMath(text: string): Segment[] {
  const sanitized = sanitizeTextContent(text);
  const segments: Segment[] = [];
  let lastIndex = 0;

  for (const match of sanitized.matchAll(MATH_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ kind: "text", value: sanitized.slice(lastIndex, index) });
    }
    const mathContent = match[1] !== undefined ? match[1] : match[2] ?? "";
    const isBlock = match[1] !== undefined;

    // Safety guard: if an inline math block contains full English sentences (preventing word squishing)
    if (!isBlock && /\b(Therefore|solutions|Factor|Cancel|substitute|gives|Hence|Find|equation|normal|curve)\s+[a-z]+/i.test(mathContent)) {
      segments.push({ kind: "text", value: mathContent });
    } else {
      segments.push({ kind: "math", value: mathContent.trim(), block: isBlock });
    }

    lastIndex = index + match[0].length;
  }

  if (lastIndex < sanitized.length) {
    segments.push({ kind: "text", value: sanitized.slice(lastIndex) });
  }

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
    // Graceful fallback: render escaped text instead of KaTeX's red error markup
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
            className="my-1.5 block overflow-x-auto text-center"
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
