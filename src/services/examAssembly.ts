import type { AssembledExam, ExamBoard, GeneratedExamPaper, VariantSet } from "@/types/exam";

export const EXAM_QUEUE_STORAGE_KEY = "mocklab_exam_queue_v3";

/**
 * Strips duplicate leading question number prefixes from part labels.
 * e.g. "1(a)" -> "(a)", "Q1(a)" -> "(a)", "1(b)(i)" -> "(b)(i)", "(a)" -> "(a)"
 */
export function cleanPartLabel(rawLabel: string): string {
  if (!rawLabel) return "(a)";
  const trimmed = rawLabel.trim();
  // Strip optional 'Q' and digits at the start
  const stripped = trimmed.replace(/^Q?\d+[\s.]*/i, "").trim();
  if (!stripped) return trimmed;
  return stripped.startsWith("(") ? stripped : `(${stripped})`;
}

/**
 * Formats a sequential question index with its clean part label.
 * e.g. (1, "(a)") -> "1(a)", (2, "2(a)") -> "2(a)", (3, "Q3(b)(i)") -> "3(b)(i)"
 */
export function formatSequentialQuestionPart(qIndex: number, rawLabel: string): string {
  const part = cleanPartLabel(rawLabel);
  return `${qIndex}${part}`;
}

/**
 * Compiles a list of generated exam questions into a single assembled multi-question exam paper.
 */
export function buildAssembledExam(
  questions: GeneratedExamPaper[],
  options?: { title?: string; variantSet?: VariantSet },
): AssembledExam {
  if (!questions || questions.length === 0) {
    return {
      title: "Pre-Board Mock Examination",
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "9709/12",
      paperTitle: "Pre-Board Mock Examination",
      variantSet: options?.variantSet || "Set A",
      totalMarks: 0,
      timeAllowed: "0 minutes",
      questions: [],
    };
  }

  const primary = questions[0]!;
  const totalMarks = questions.reduce((sum, q) => {
    const qTotal =
      typeof q.paperHeader?.totalMarks === "number"
        ? q.paperHeader.totalMarks
        : q.parts.reduce((s, p) => s + p.marks, 0);
    return sum + qTotal;
  }, 0);

  const timeAllowed = `${Math.round(totalMarks * 1.5)} minutes`;

  const uniqueSyllabi = Array.from(new Set(questions.map((q) => q.paperHeader.syllabusCode)));
  const syllabusCode = uniqueSyllabi.length === 1 ? uniqueSyllabi[0]! : `${primary.paperHeader.syllabusCode} (Combined)`;

  return {
    title: options?.title || `${primary.paperHeader.syllabusCode} Pre-Board Examination`,
    examBoard: (primary.paperHeader.examBoard as ExamBoard) || "CAIE (Cambridge)",
    syllabusCode,
    paperTitle: primary.paperHeader.paperTitle || "Pre-Board Mock Examination",
    variantSet: options?.variantSet || primary.paperHeader.variantSet || "Set A",
    totalMarks,
    timeAllowed,
    questions,
  };
}

/**
 * Safely loads the exam queue from localStorage.
 * Guarantees a safe fallback to [] if corrupted, non-array, or empty.
 */
export function loadExamQueue(): GeneratedExamPaper[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = window.localStorage.getItem(EXAM_QUEUE_STORAGE_KEY);
    if (!saved || typeof saved !== "string" || saved.trim() === "") return [];
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

/**
 * Safely persists the exam queue into localStorage.
 */
export function saveExamQueue(queue: GeneratedExamPaper[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, JSON.stringify(queue));
  } catch {}
}
