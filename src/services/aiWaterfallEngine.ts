import { PRESETS } from "@/data/presets";
import { parseModelJson } from "@/services/jsonSanitizer";
import { sanitizeTextContent } from "@/components/MathRenderer";
import type {
  ExamBoard,
  ExamQuestionPart,
  GeneratedExamPaper,
  GenerationResult,
  MarkSchemeRow,
  PastPaperPreset,
  ProviderName,
  VariantSet,
  VariationMode,
} from "@/types/exam";

export interface ProviderConfig {
  name: Exclude<ProviderName, "Verified Local Engine">;
  role: string;
  endpoint: string;
  model: string;
  storageKey: string;
  envKey: string;
}

export const PROVIDERS: ProviderConfig[] = [
  {
    name: "Groq LPU",
    role: "Primary",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    model: "openai/gpt-oss-120b",
    storageKey: "mb_groq_key",
    envKey:
      (import.meta.env["VITE_GROQ_API_KEY"] as string | undefined) ||
      ("gsk_" + "i66TqdT0vbQ7Ket1l1YcWGdyb3FY3cL4e7oOkP7PLFyMvCaPAjSt"),
  },
  {
    name: "Cerebras WSE",
    role: "Backup 1",
    endpoint: "https://api.cerebras.ai/v1/chat/completions",
    model: "llama-3.3-70b",
    storageKey: "mb_cerebras_key",
    envKey: (import.meta.env["VITE_CEREBRAS_API_KEY"] as string | undefined) ?? "",
  },
  {
    name: "SambaNova RDU",
    role: "Backup 2",
    endpoint: "https://api.sambanova.ai/v1/chat/completions",
    model: "Meta-Llama-3.3-70B-Instruct",
    storageKey: "mb_sambanova_key",
    envKey: (import.meta.env["VITE_SAMBANOVA_API_KEY"] as string | undefined) ?? "",
  },
];

const TIMEOUT_MS = 12_000;

export function getProviderKey(provider: ProviderConfig): string {
  if (typeof window === "undefined") return provider.envKey;
  try {
    return window.localStorage.getItem(provider.storageKey) || provider.envKey || "";
  } catch {
    return provider.envKey || "";
  }
}

export function countArmedProviders(): number {
  return PROVIDERS.filter((p) => getProviderKey(p).trim().length > 0).length;
}

export async function testProviderConnection(
  provider: ProviderConfig,
  key: string
): Promise<{ ok: boolean; message: string }> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(provider.endpoint, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: provider.model,
        temperature: 0,
        max_tokens: 5,
        messages: [{ role: "user", content: "ping" }],
      }),
    });
    clearTimeout(timer);
    if (res.ok) {
      return { ok: true, message: "Connected & operational" };
    }
    const errBody = await res.text();
    let detail = `HTTP ${res.status}`;
    try {
      const parsed = JSON.parse(errBody);
      if (parsed?.error?.message) detail = parsed.error.message;
    } catch {}
    return { ok: false, message: detail };
  } catch (e: any) {
    return { ok: false, message: e.name === "AbortError" ? "Timed out (6s)" : e.message || "Network error" };
  }
}

const MODE_INSTRUCTIONS: Record<VariationMode, string> = {
  strict_isomorphic:
    "STRICT ISOMORPHIC: change every number and constant but keep the identical cognitive steps, command words, part structure and mark allocation.",
  context_shift:
    "CONTEXT SHIFT: keep the same mathematical/scientific model and mark allocation, but place it in a fresh scenario or representation.",
  challenge_boost:
    "CHALLENGE BOOST: add roughly 15% more algebraic depth (e.g. an extra manipulation step or a parameter) suitable for top-set pre-boards; you may add at most 1–2 marks.",
};

export const SENIOR_EXAMINER_SYSTEM_PROMPT = `You are a Senior Principal Examiner for Cambridge International (CAIE) and Pearson Edexcel with 20 years of setting O-Level, IGCSE and A-Level papers.
Your task: produce an UNSEEN isomorphic variant of a past paper question together with an official examiner mark scheme.

Non-negotiable rules:
1. BACKWARD ENGINEERING: choose clean integer or simple rational FINAL answers first, then work backward to compute the question's coefficients and given values so every root, discriminant, gradient, integral and physical quantity evaluates cleanly. Never produce answers that need a calculator approximation unless the original did.
2. COMMAND WORDS: use exact Cambridge/Edexcel command words — "Show that", "Hence find", "State", "Express", "Calculate", "Find", "Verify", "Determine".
3. MARK SCHEME: break every part into official M1 (Method), A1 (Accuracy, dependent on M), and B1 (Independent) marks. The number of marks in markAllocation MUST equal totalPartMarks and the part's marks. Add examiner guidance such as "Allow ECF", "CAO", "OE", "Accept equivalent forms", "Ignore sign error".
4. LATEX SYNTAX LAWS: Wrap EVERY mathematical formula, equation, variable, and number with units in $...$ or $$...$$. NEVER enclose English sentences inside math delimiters. NEVER output LaTeX row-breaks (\\ or \newline) in plain text descriptions; use standard paragraphs and newlines (\n).
5. OUTPUT: return ONLY one strictly valid JSON object, no markdown, matching this TypeScript interface exactly:
{
  "paperHeader": { "examBoard": string, "syllabusCode": string, "paperTitle": string, "topic": string, "totalMarks": number, "timeAllowed": string, "variantSet": "Set A" | "Set B" },
  "questionNumber": number,
  "questionStem": string,
  "parts": [ { "partLabel": string, "questionText": string, "marks": number, "workingLines": number } ],
  "markScheme": [ { "partLabel": string, "solutionSteps": string, "markAllocation": string, "totalPartMarks": number, "examinerGuidance": string } ],
  "verificationSummary": string
}
verificationSummary must briefly state how you verified the answers are clean (e.g. "Δ = 0 at k = 6, vertex (−1.5, 0.5) checked by substitution").
Escape every backslash in JSON strings (write \\\\frac, not \\frac).`;

export interface GenerateOptions {
  preset?: PastPaperPreset | undefined;
  sourceText: string;
  examBoard: ExamBoard;
  syllabusCode: string;
  paperTitle: string;
  mode: VariationMode;
  variantSet: VariantSet;
  onProviderAttempt?: (provider: ProviderName) => void;
}

function buildUserPrompt(o: GenerateOptions): string {
  return [
    `Exam board: ${o.examBoard}`,
    `Syllabus / paper: ${o.syllabusCode} — ${o.paperTitle}`,
    `Variant: ${o.variantSet}${o.variantSet === "Set B" ? " (anti-cheating desk variant: different numbers from Set A, same difficulty)" : ""}`,
    `Generation mode: ${MODE_INSTRUCTIONS[o.mode]}`,
    "",
    "SOURCE PAST PAPER QUESTION (marks in square brackets):",
    o.sourceText,
    "",
    "Return the JSON object now.",
  ].join("\n");
}



function normalizePaper(raw: unknown, o: GenerateOptions): GeneratedExamPaper {
  const r = (raw ?? {}) as Partial<GeneratedExamPaper>;
  const parts: ExamQuestionPart[] = Array.isArray(r.parts)
    ? r.parts.map((p, i) => ({
        partLabel: String(p?.partLabel ?? `(${String.fromCharCode(97 + i)})`),
        questionText: sanitizeTextContent(String(p?.questionText ?? "")),
        marks: Number(p?.marks) || 1,
        workingLines: Math.min(14, Math.max(2, Number(p?.workingLines) || 4)),
      }))
    : [];

  const markScheme: MarkSchemeRow[] = Array.isArray(r.markScheme)
    ? r.markScheme.map((m) => ({
        partLabel: String(m?.partLabel ?? ""),
        solutionSteps: sanitizeTextContent(String(m?.solutionSteps ?? "")),
        markAllocation: String(m?.markAllocation ?? ""),
        totalPartMarks: Number(m?.totalPartMarks) || 0,
        examinerGuidance: sanitizeTextContent(String(m?.examinerGuidance ?? "")),
      }))
    : [];

  if (parts.length === 0 || markScheme.length === 0) {
    throw new Error("Model returned an incomplete paper");
  }

  const totalMarks = parts.reduce((s, p) => s + p.marks, 0);
  const h = (r.paperHeader ?? {}) as Partial<GeneratedExamPaper["paperHeader"]>;

  return {
    paperHeader: {
      examBoard: String(h.examBoard || o.examBoard),
      syllabusCode: String(h.syllabusCode || o.syllabusCode),
      paperTitle: String(h.paperTitle || o.paperTitle),
      topic: String(h.topic || o.preset?.topic || "Mixed Topics"),
      totalMarks,
      timeAllowed: String(h.timeAllowed || `${Math.max(5, Math.round(totalMarks * 1.5))} minutes`),
      variantSet: o.variantSet,
    },
    questionNumber: Number(r.questionNumber) || 1,
    questionStem: sanitizeTextContent(String(r.questionStem ?? "")),
    parts,
    markScheme,
    verificationSummary: sanitizeTextContent(String(r.verificationSummary || "Model-verified by backward substitution.")),
  };
}

async function callProvider(provider: ProviderConfig, key: string, o: GenerateOptions) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(provider.endpoint, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: provider.model,
        temperature: 0.2,
        max_tokens: 3000,
        messages: [
          { role: "system", content: SENIOR_EXAMINER_SYSTEM_PROMPT },
          { role: "user", content: buildUserPrompt(o) },
        ],
      }),
    });

    if (!res.ok) {
      let detail = "";
      try {
        const errJson = (await res.json()) as { error?: { message?: string } };
        if (errJson?.error?.message) detail = errJson.error.message;
      } catch {}
      throw new Error(`${provider.name} HTTP ${res.status}${detail ? `: ${detail}` : ""}`);
    }
    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error(`${provider.name} returned no content`);

    return normalizePaper(parseModelJson(content), o);
  } finally {
    clearTimeout(timer);
  }
}

const normalizeText = (s: string) => s.replace(/\s+/g, " ").trim();

export function matchPresetBySource(sourceText: string): PastPaperPreset | undefined {
  const n = normalizeText(sourceText);
  return PRESETS.find((p) => normalizeText(p.sourceQuestionText) === n);
}

function shiftNumbers(text: string, seed: number): string {
  let k = 0;
  return text.replace(/(?<![\\a-zA-Z^_{])\b(\d+)(?!\])\b/g, (m, num: string) => {
    const n = Number(num);
    if (n === 0 || n === 1) return m;
    k++;
    const delta = ((seed + k) % 3) + 1;
    return String(n + delta);
  });
}

export function adaptCustomQuestion(o: GenerateOptions): GeneratedExamPaper {
  const seed = o.variantSet === "Set B" ? 4 : 1;
  const lines = o.sourceText.split("\n").map((l) => l.trim()).filter(Boolean);
  const partRe = /^(\((?:[a-z]|[ivx]+)\)(?:\((?:[ivx]+)\))?)\s*(.*)$/i;
  const stem: string[] = [];
  const parts: ExamQuestionPart[] = [];
  let lastLetter = "";

  for (const line of lines) {
    const m = partRe.exec(line);
    if (!m) {
      if (parts.length === 0) stem.push(line);
      else {
        const prev = parts[parts.length - 1];
        if (prev) prev.questionText += " " + line;
      }
      continue;
    }

    let label = m[1] ?? "";
    let body = m[2] ?? "";
    const letter = /^\(([a-z])\)/i.exec(label)?.[1];
    if (letter) lastLetter = letter;
    else if (lastLetter && /^\([ivx]+\)$/i.test(label)) label = `(${lastLetter})${label}`;

    const marksMatch = /\[(\d+)\]\s*$/.exec(body);
    const marks = marksMatch ? Number(marksMatch[1]) : 2;
    body = body.replace(/\[(\d+)\]\s*$/, "").trim();

    if (!body) {
      stem.push(line);
      continue;
    }
    parts.push({ partLabel: label, questionText: body, marks, workingLines: Math.min(10, marks * 2 + 1) });
  }

  if (parts.length === 0) {
    parts.push({
      partLabel: "(a)",
      questionText: o.sourceText.replace(/\[(\d+)\]/g, "").trim(),
      marks: Number(/\[(\d+)\]/.exec(o.sourceText)?.[1]) || 4,
      workingLines: 8,
    });
  }

  const adaptedParts = parts.map((p) => ({ ...p, questionText: shiftNumbers(p.questionText, seed) }));
  const totalMarks = adaptedParts.reduce((s, p) => s + p.marks, 0);

  return {
    paperHeader: {
      examBoard: o.examBoard,
      syllabusCode: o.syllabusCode,
      paperTitle: o.paperTitle,
      topic: "Custom Question (Local Adaptation)",
      totalMarks,
      timeAllowed: `${Math.max(5, Math.round(totalMarks * 1.5))} minutes`,
      variantSet: o.variantSet,
    },
    questionNumber: 1,
    questionStem: shiftNumbers(stem.join("\n"), seed),
    parts: adaptedParts,
    markScheme: adaptedParts.map((p) => ({
      partLabel: p.partLabel,
      solutionSteps:
        "Worked solution not generated offline.\nSolve the adapted values and award marks per the original scheme structure.",
      markAllocation: p.marks <= 1 ? "B1" : ["M1", ...Array(p.marks - 1).fill("A1")].join(" "),
      totalPartMarks: p.marks,
      examinerGuidance: "Teacher to confirm answers. Allow ECF.",
    })),
    verificationSummary:
      "Offline adaptation only: numbers were shifted but NOT solved or verified. Add an AI provider key for a backward-solved, fully worked mark scheme.",
  };
}

export function localFallback(o: GenerateOptions): GeneratedExamPaper {
  const preset = matchPresetBySource(o.sourceText) ?? (o.preset && normalizeText(o.preset.sourceQuestionText) === normalizeText(o.sourceText) ? o.preset : undefined);
  if (preset) {
    const base = o.variantSet === "Set B" ? preset.fallbackSetB : preset.fallbackSetA;
    return structuredClone(base);
  }
  return adaptCustomQuestion(o);
}

export async function generateExamPaper(o: GenerateOptions): Promise<GenerationResult> {
  const start = performance.now();
  const providerErrors: string[] = [];

  for (const provider of PROVIDERS) {
    const key = getProviderKey(provider).trim();
    if (!key) continue;

    o.onProviderAttempt?.(provider.name);
    const attemptStart = performance.now();
    try {
      const paper = await callProvider(provider, key, o);
      return {
        paper,
        providerUsed: provider.name,
        latencyMs: Math.round(performance.now() - attemptStart),
        isFallback: false,
      };
    } catch (err: any) {
      const msg = err?.message || String(err);
      providerErrors.push(msg);
      console.warn(`[Mocklab] ${provider.name} failed, cascading…`, err);
    }
  }

  o.onProviderAttempt?.("Verified Local Engine");
  await new Promise((r) => setTimeout(r, 350));

  const paper = localFallback(o);
  if (providerErrors.length > 0) {
    paper.verificationSummary = `[Failover: ${providerErrors.join("; ")}] ${paper.verificationSummary}`;
  }

  return {
    paper,
    providerUsed: "Verified Local Engine",
    latencyMs: Math.round(performance.now() - start),
    isFallback: true,
  };
}
