import { Fragment, useMemo } from "react";
import katex from "katex";

import { cn } from "@/lib/utils";

export type Segment =
  | { kind: "text"; value: string }
  | { kind: "math"; value: string; block: boolean };

export const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|\$([\s\S]+?)\$/g;

const BARE_MATH_COMMANDS =
  "sum|binom|frac|sqrt|int|prod|cdot|times|theta|pi|alpha|beta|gamma|Delta|delta|partial|infty|approx|pm|mp|le|ge|leq|geq|neq|ne|sin|cos|tan|cot|sec|csc|ln|log|exp|rightarrow|Rightarrow|to";
const BARE_MATH_ARGS =
  "(?:\\s*(?:\\{[^{}]*\\}|\\[[^\\]]*\\]|_\\{[^{}]*\\}|\\^\\{[^{}]*\\}|_[a-zA-Z0-9+]|\\^[a-zA-Z0-9+]))*";
const BARE_MATH_REGEX = new RegExp(
  `(?<!\\$)\\\\(?:${BARE_MATH_COMMANDS})(?![a-zA-Z])${BARE_MATH_ARGS}(?!\\$)`,
  "g",
);

export function sanitizeTextContent(text: string): string {
  if (!text) return "";
  // Convert literal "\n" strings into real newline characters,
  // protecting actual LaTeX commands that start with "\n" (\neq, \ne, \notin, \nu, \nabla, \natural, \neg, \newline, \normalsize, \nocorr).
  let cleaned = text.replace(/\\n(?!(?:eq|e|otin|u|abla|atural|eg|ewline|ormalsize|ocorr)\b)/g, "\n");

  // Convert standard LaTeX display \[ ... \] and inline \( ... \) delimiters to $$ and $:
  cleaned = cleaned.replace(/\\\[([\s\S]+?)\\\]/g, (_, math) => `$$${math}$$`);
  cleaned = cleaned.replace(/\\\(([\s\S]+?)\\\)/g, (_, math) => `$${math}$`);

  // Auto-wrap bare LaTeX commands that appear outside $...$ (e.g. \binom{n}{k}, \sum_{k=0}^n, \frac{a}{b}, \theta, \cdot, \times, \pm)
  let result = "";
  let lastIndex = 0;
  for (const match of cleaned.matchAll(MATH_PATTERN)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) {
      result += cleaned.slice(lastIndex, idx).replace(BARE_MATH_REGEX, (m) => `$${m.trim()}$`);
    }
    result += match[0];
    lastIndex = idx + match[0].length;
  }
  if (lastIndex < cleaned.length) {
    result += cleaned.slice(lastIndex).replace(BARE_MATH_REGEX, (m) => `$${m.trim()}$`);
  }
  return result;
}

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
  const cleaned = useMemo(() => sanitizeTextContent(text ?? ""), [text]);
  const segments = useMemo(() => splitMath(cleaned), [cleaned]);
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
