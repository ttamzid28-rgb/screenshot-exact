/**
 * Repairs LLM JSON output that contains un-doubled LaTeX backslashes.
 * Valid JSON escapes (\" \\ \/ \uXXXX and \n \t \r \b \f not starting a LaTeX word)
 * are preserved; single backslashes before LaTeX control words are doubled.
 */

const LATEX_WORDS = [
  "frac", "dfrac", "tfrac", "sqrt", "theta", "tan", "text", "textbf", "times", "to",
  "right", "rightarrow", "Rightarrow", "left", "leftarrow", "Leftarrow", "pi", "int",
  "iint", "circ", "neq", "ne", "leq", "le", "geq", "ge", "Delta", "delta", "alpha",
  "beta", "gamma", "lambda", "mu", "nu", "sigma", "omega", "phi", "rho", "tau",
  "epsilon", "infty", "sin", "cos", "sec", "csc", "cot", "ln", "log", "exp", "lim",
  "sum", "prod", "cdot", "cdots", "ldots", "dots", "pm", "mp", "approx", "equiv",
  "quad", "qquad", "begin", "end", "mathrm", "mathbf", "operatorname", "displaystyle",
  "boxed", "overline", "underline", "vec", "hat", "bar", "dot", "binom", "therefore",
  "because", "implies", "iff", "in", "notin", "cup", "cap", "subset", "forall",
  "exists", "partial", "nabla", "degree", "angle", "triangle", "perp", "parallel",
  "mathbb", "bigl", "bigr", "Bigl", "Bigr", "div", "rm", "hline", "newline",
].sort((a, b) => b.length - a.length);

function latexWordAt(source: string, start: number): string | null {
  const match = /^[a-zA-Z]+/.exec(source.slice(start, start + 24));
  if (!match) return null;
  const letters = match[0];
  // Whole letter-run must be a known LaTeX word (so "\nThe" stays a newline + "The").
  return LATEX_WORDS.includes(letters) ? letters : null;
}

export function stripCodeFences(raw: string): string {
  let text = raw.trim();
  const fenced = /```(?:json)?\s*([\s\S]*?)```/i.exec(text);
  if (fenced) text = fenced[1].trim();
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first !== -1 && last > first) text = text.slice(first, last + 1);
  return text;
}

export function sanitizeLatexJson(raw: string): string {
  const text = stripCodeFences(raw);
  let out = "";
  let inString = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (!inString) {
      if (ch === '"') inString = true;
      out += ch;
      continue;
    }
    if (ch === '"') {
      inString = false;
      out += ch;
      continue;
    }
    if (ch === "\n") {
      out += "\\n";
      continue;
    }
    if (ch !== "\\") {
      out += ch;
      continue;
    }
    const next = text[i + 1];
    if (next === "\\" || next === '"' || next === "/") {
      out += ch + next;
      i++;
      continue;
    }
    if (next === "u" && /^[0-9a-fA-F]{4}$/.test(text.slice(i + 2, i + 6)) && !latexWordAt(text, i + 1)) {
      out += ch;
      continue;
    }
    if (next !== undefined && /[a-zA-Z]/.test(next)) {
      if (latexWordAt(text, i + 1)) {
        out += "\\\\";
        continue;
      }
      if ("ntrbf".includes(next)) {
        out += ch;
        continue;
      }
    }
    // Any other lone backslash (\, \( \{ \% \Gamma-like unknowns) becomes a literal backslash.
    out += "\\\\";
  }
  return out;
}

export function parseModelJson<T>(raw: string): T {
  const cleaned = stripCodeFences(raw);
  try {
    return JSON.parse(cleaned) as T;
  } catch {
    return JSON.parse(sanitizeLatexJson(raw)) as T;
  }
}
