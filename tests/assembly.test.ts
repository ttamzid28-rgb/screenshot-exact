import { beforeEach, describe, expect, it } from "vitest";
import { PRESETS } from "@/data/presets";
import {
  buildAssembledExam,
  cleanPartLabel,
  formatSequentialQuestionPart,
  loadExamQueue,
  saveExamQueue,
  EXAM_QUEUE_STORAGE_KEY,
} from "@/services/examAssembly";
import type { GeneratedExamPaper } from "@/types/exam";

describe("Multi-Question Pre-Board Assembly Integrity", () => {
  const sampleQuestions: GeneratedExamPaper[] = [
    PRESETS[0]!.fallbackSetA, // caie-9709-quadratics (7 marks)
    PRESETS[1]!.fallbackSetA, // caie-9709-calculus (9 marks)
    PRESETS[4]!.fallbackSetA, // caie-4024-algebra (5 marks)
    PRESETS[6]!.fallbackSetA, // edexcel-wma11-circles (7 marks)
  ];

  describe("1. Cumulative Marks Invariant", () => {
    it("asserts assembledExam.totalMarks === sum of all question part marks", () => {
      const assembled = buildAssembledExam(sampleQuestions);
      const calculatedPartTotal = sampleQuestions.reduce(
        (sum, q) => sum + q.parts.reduce((s, p) => s + p.marks, 0),
        0,
      );

      expect(assembled.totalMarks).toBe(calculatedPartTotal);
      expect(assembled.totalMarks).toBe(7 + 9 + 5 + 7); // 28 marks
    });

    it("asserts mark scheme row totals equal totalMarks", () => {
      const assembled = buildAssembledExam(sampleQuestions);
      const schemeMarksTotal = assembled.questions
        .flatMap((q) => q.markScheme)
        .reduce((sum, row) => sum + row.totalPartMarks, 0);

      expect(schemeMarksTotal).toBe(assembled.totalMarks);
    });

    it("calculates proportional time allowed dynamically (Math.round(totalMarks * 1.5))", () => {
      const assembled = buildAssembledExam(sampleQuestions);
      const expectedTime = `${Math.round(28 * 1.5)} minutes`; // 42 minutes
      expect(assembled.timeAllowed).toBe(expectedTime);
    });
  });

  describe("2. Sequential Numbering Invariant", () => {
    it("re-indexes questions queued out of order cleanly to 1, 2, 3 without duplicate prefixes", () => {
      // Simulate questions with non-consecutive / out-of-order original questionNumbers and dirty labels
      const outOfOrderQuestions: GeneratedExamPaper[] = [
        {
          ...PRESETS[4]!.fallbackSetA,
          questionNumber: 5,
          parts: [
            { partLabel: "5(a)", questionText: "Solve x", marks: 2, workingLines: 4 },
            { partLabel: "Q5(b)", questionText: "Hence evaluate", marks: 3, workingLines: 4 },
          ],
          markScheme: [
            { partLabel: "5(a)", solutionSteps: "step", markAllocation: "M1 A1", totalPartMarks: 2, examinerGuidance: "" },
            { partLabel: "Q5(b)", solutionSteps: "step", markAllocation: "M1 A1 A1", totalPartMarks: 3, examinerGuidance: "" },
          ],
        },
        {
          ...PRESETS[0]!.fallbackSetA,
          questionNumber: 1,
          parts: [
            { partLabel: "(a)", questionText: "Tangent", marks: 3, workingLines: 4 },
            { partLabel: "(b)", questionText: "Vertex", marks: 4, workingLines: 4 },
          ],
          markScheme: [
            { partLabel: "(a)", solutionSteps: "step", markAllocation: "M1 M1 A1", totalPartMarks: 3, examinerGuidance: "" },
            { partLabel: "(b)", solutionSteps: "step", markAllocation: "B1 M1 A1 B1", totalPartMarks: 4, examinerGuidance: "" },
          ],
        },
        {
          ...PRESETS[1]!.fallbackSetA,
          questionNumber: 8,
          parts: [
            { partLabel: "8(a)", questionText: "Normal", marks: 5, workingLines: 4 },
            { partLabel: "8(b)", questionText: "Volume", marks: 4, workingLines: 4 },
          ],
          markScheme: [
            { partLabel: "8(a)", solutionSteps: "step", markAllocation: "B1 M1 A1 M1 A1", totalPartMarks: 5, examinerGuidance: "" },
            { partLabel: "8(b)", solutionSteps: "step", markAllocation: "M1 A1 M1 A1", totalPartMarks: 4, examinerGuidance: "" },
          ],
        },
      ];

      const assembled = buildAssembledExam(outOfOrderQuestions);

      // Verify clean part labels for paper preview
      const q1Labels = assembled.questions[0]!.parts.map((p) => cleanPartLabel(p.partLabel));
      expect(q1Labels).toEqual(["(a)", "(b)"]);

      const q2Labels = assembled.questions[1]!.parts.map((p) => cleanPartLabel(p.partLabel));
      expect(q2Labels).toEqual(["(a)", "(b)"]);

      const q3Labels = assembled.questions[2]!.parts.map((p) => cleanPartLabel(p.partLabel));
      expect(q3Labels).toEqual(["(a)", "(b)"]);

      // Verify sequential question + part display in mark scheme
      const markSchemeLabels = assembled.questions.flatMap((q, qIdx) => {
        const qNum = qIdx + 1;
        return q.markScheme.map((row) => formatSequentialQuestionPart(qNum, row.partLabel));
      });

      expect(markSchemeLabels).toEqual([
        "1(a)",
        "1(b)",
        "2(a)",
        "2(b)",
        "3(a)",
        "3(b)",
      ]);

      // Ensure no double digits like "15(a)" or "21(a)" or "38(a)"
      for (const label of markSchemeLabels) {
        expect(label).not.toMatch(/^\d{2,}\(/);
        expect(label).not.toMatch(/Q/i);
      }
    });

    it("cleanPartLabel handles edge cases: nested subparts (b)(i), unbracketed labels, and pure letters", () => {
      expect(cleanPartLabel("(a)")).toBe("(a)");
      expect(cleanPartLabel("1(a)")).toBe("(a)");
      expect(cleanPartLabel("Q1(a)")).toBe("(a)");
      expect(cleanPartLabel("1(b)(i)")).toBe("(b)(i)");
      expect(cleanPartLabel("Q4(c)(ii)")).toBe("(c)(ii)");
      expect(cleanPartLabel("a")).toBe("(a)");
      expect(cleanPartLabel("(b)")).toBe("(b)");
    });
  });

  describe("3. Resilient Storage Guard", () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it("defaults safely to [] when mocklab_exam_queue is empty string", () => {
      window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, "");
      expect(loadExamQueue()).toEqual([]);
    });

    it("defaults safely to [] when mocklab_exam_queue is whitespace", () => {
      window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, "   ");
      expect(loadExamQueue()).toEqual([]);
    });

    it("defaults safely to [] when mocklab_exam_queue is corrupted JSON", () => {
      window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, "{ corrupted_data: [123,, ]");
      expect(loadExamQueue()).toEqual([]);
    });

    it("defaults safely to [] when mocklab_exam_queue is a JSON non-array value", () => {
      window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, JSON.stringify({ not: "an array" }));
      expect(loadExamQueue()).toEqual([]);

      window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, "12345");
      expect(loadExamQueue()).toEqual([]);

      window.localStorage.setItem(EXAM_QUEUE_STORAGE_KEY, "true");
      expect(loadExamQueue()).toEqual([]);
    });

    it("successfully persists and retrieves valid questions queue", () => {
      saveExamQueue(sampleQuestions);
      const loaded = loadExamQueue();
      expect(loaded.length).toBe(sampleQuestions.length);
      expect(loaded[0]?.paperHeader.syllabusCode).toBe(sampleQuestions[0]?.paperHeader.syllabusCode);
    });
  });
});
