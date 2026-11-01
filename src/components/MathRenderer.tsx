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

function isEquationLine(str: string): boolean {
  const trimmed = str.trim().replace(/[.,;:]$/, "").trim();
  if (/^\$\$[\s\S]+\$\$$/.test(trimmed) || /^\$[^\$]+\$$/.test(trimmed)) {
    return false;
  }
  const hasEnglishWords =
    /\b(using|substitute|substituting|cancel|multiply|obtain|hence|therefore|where|because|since|given|consider|show|prove|find|calculate|state|express|determine|verify|factor|factorise|factorising|dividing|adding|subtracting|then|with|and|the|from|into|both|sides)\b/i.test(
      trimmed,
    );
  if (hasEnglishWords) {
    return false;
  }
  const hasRelation = /(=|\\Rightarrow|\\rightarrow|\\le|\\ge|\\approx|<|>)/.test(trimmed);
  if (!hasRelation) {
    return false;
  }
  const hasMath =
    /(\\(?:sin|cos|tan|cot|sec|csc|theta|pi|alpha|beta|gamma|Delta|delta|sqrt|frac|pm|mp|cdot|times|int|sum|binom|ln|log|exp)\b|\^|_|[0-9a-zA-Z]\s*[+\-*/=]\s*[0-9a-zA-Z])/.test(
      trimmed,
    );
  return hasMath;
}

export function sanitizeTextContent(text: string): string {
  if (!text) return "";
  // 1. Convert literal "\n" strings into real newline characters,
  // protecting actual LaTeX commands that start with "\n" (\neq, \ne, \notin, \nu, \nabla, \natural, \neg, \newline, \normalsize, \nocorr).
  let cleaned = text.replace(/\\n(?!(?:eq|e|otin|u|abla|atural|eg|ewline|ormalsize|ocorr)\b)/g, "\n");

  // 2. Strip standalone \\ lines outside math
  cleaned = cleaned.replace(/^\s*\\+\s*$/gm, "");

  // 3. Strip trailing \\ before a newline or end of string
  cleaned = cleaned.replace(/\\+\s*(\n|$)/g, "\n");

  // Convert standard LaTeX display \[ ... \] and inline \( ... \) delimiters to $$ and $:
  cleaned = cleaned.replace(/\\\[([\s\S]+?)\\\]/g, (_, math) => `$$${math}$$`);
  cleaned = cleaned.replace(/\\\(([\s\S]+?)\\\)/g, (_, math) => `$${math}$`);

  // Clean degree formatting: normalize unicode degree symbol
  cleaned = cleaned.replace(/(\d+(?:\.\d+)?)\s*°/g, "$1^\\circ");

  // Full-Line Equation Auto-Wrapping:
  // Detect non-delimited lines representing full equations and wrap them in $$...$$ or $...$ for bullet items
  const lines = cleaned.split("\n");
  const processedLines = lines.map((line) => {
    const bulletMatch = line.match(/^(\s*(?:[•\-*]|\(\w+\))\s+)(.+)$/);
    const prefix = bulletMatch?.[1] ?? "";
    const body = bulletMatch?.[2] ?? line;

    if (isEquationLine(body)) {
      const matchPunct = body.match(/^(.*?)([.,;:]?)$/);
      const expr = matchPunct?.[1]?.trim() ?? body.trim();
      const punct = matchPunct?.[2] ?? "";

      if (prefix) {
        return `${prefix}$${expr}$${punct}`;
      } else {
        return `$$${expr}$$${punct ? `\n` : ""}`;
      }
    }
    return line;
  });
  cleaned = processedLines.join("\n");

  // Clean up excessive newlines
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  // Auto-wrap bare LaTeX commands & degree expressions outside of $...$
  let result = "";
  let lastIndex = 0;
  for (const match of cleaned.matchAll(MATH_PATTERN)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) {
      let nonMath = cleaned.slice(lastIndex, idx);
      nonMath = nonMath.replace(/\\{2,}/g, " ");
      nonMath = nonMath.replace(/(?<!\$)\b(\d+)\^\{?\\circ\}?(?!\$)/g, (_, d) => `$${d}^\\circ$`);
      result += nonMath.replace(BARE_MATH_REGEX, (m) => `$${m.trim()}$`);
    }
    result += match[0];
    lastIndex = idx + match[0].length;
  }
  if (lastIndex < cleaned.length) {
    let nonMath = cleaned.slice(lastIndex);
    nonMath = nonMath.replace(/\\{2,}/g, " ");
    nonMath = nonMath.replace(/(?<!\$)\b(\d+)\^\{?\\circ\}?(?!\$)/g, (_, d) => `$${d}^\\circ$`);
    result += nonMath.replace(BARE_MATH_REGEX, (m) => `$${m.trim()}$`);
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
