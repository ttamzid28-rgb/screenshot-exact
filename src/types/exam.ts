export type ExamBoard = "CAIE (Cambridge)" | "Pearson Edexcel";

export type VariationMode = "strict_isomorphic" | "context_shift" | "challenge_boost";

export type VariantSet = "Set A" | "Set B";

export type ProviderName = "Groq LPU" | "Cerebras WSE" | "SambaNova RDU" | "Verified Local Engine";

export interface ExamQuestionPart {
  partLabel: string;
  questionText: string;
  marks: number;
  workingLines: number;
}

export interface MarkSchemeRow {
  partLabel: string;
  solutionSteps: string;
  markAllocation: string;
  totalPartMarks: number;
  examinerGuidance: string;
}

export interface GeneratedExamPaper {
  paperHeader: {
    examBoard: string;
    syllabusCode: string;
    paperTitle: string;
    topic: string;
    totalMarks: number;
    timeAllowed: string;
    variantSet: VariantSet;
  };
  questionNumber: number;
  questionStem: string;
  parts: ExamQuestionPart[];
  markScheme: MarkSchemeRow[];
  verificationSummary: string;
}

export interface PastPaperPreset {
  id: string;
  label: string;
  examBoard: ExamBoard;
  syllabusCode: string;
  paperTitle: string;
  topic: string;
  sourceQuestionText: string;
  fallbackSetA: GeneratedExamPaper;
  fallbackSetB: GeneratedExamPaper;
}

export interface GenerationResult {
  paper: GeneratedExamPaper;
  providerUsed: ProviderName;
  latencyMs: number;
  isFallback: boolean;
}

export interface AssembledExam {
  title: string;
  examBoard: ExamBoard;
  syllabusCode: string;
  paperTitle: string;
  variantSet: VariantSet;
  totalMarks: number;
  timeAllowed: string;
  questions: GeneratedExamPaper[];
}
