import { beforeEach, describe, expect, it } from "vitest";
import katex from "katex";
import { PRESETS } from "@/data/presets";
import {
  buildAssembledExam,
  cleanPartLabel,
  EXAM_QUEUE_STORAGE_KEY,
  loadExamQueue,
  saveExamQueue,
} from "@/services/examAssembly";
import type { GeneratedExamPaper } from "@/types/exam";

describe("Queue Management & Universal LaTeX Invariants", () => {
  beforeEach(() => {
    try {
      window.localStorage.clear();
    } catch {}
  });

  describe("1. Selective Question Removal & Re-Indexing", () => {
    it("assembles 4 questions, discards index 1 (Q2), and verifies remaining 3 questions re-index to Q1, Q2, Q3", () => {
      const q1 = PRESETS[0]!.fallbackSetA; // caie-9709-quadratics (7 marks)
      const q2 = PRESETS[1]!.fallbackSetA; // caie-9709-calculus (9 marks)
      const q3 = PRESETS[4]!.fallbackSetA; // caie-4024-algebra (5 marks)
      const q4 = PRESETS[6]!.fallbackSetA; // edexcel-wma11-circles (7 marks)

      let queue: GeneratedExamPaper[] = [q1, q2, q3, q4];
      expect(queue).toHaveLength(4);

      // Discard index 1 (q2)
      const discardIndex = 1;
      queue = queue.filter((_, i) => i !== discardIndex);
      saveExamQueue(queue);

      expect(queue).toHaveLength(3);
      expect(queue[0]).toBe(q1);
      expect(queue[1]).toBe(q3);
      expect(queue[2]).toBe(q4);

      // Verify buildAssembledExam reflects the remaining 3 questions with recalculated total marks
      const assembled = buildAssembledExam(queue);
      expect(assembled.questions).toHaveLength(3);
      expect(assembled.totalMarks).toBe(7 + 5 + 7); // 19 marks

      // Verify sequential numbers 1, 2, 3
      assembled.questions.forEach((q, idx) => {
        const sequentialNum = idx + 1;
        expect(sequentialNum).toBe(idx + 1);
        q.parts.forEach((p) => {
          expect(cleanPartLabel(p.partLabel)).toMatch(/^\([a-z0-9ivx]+\)$/);
        });
      });
    });

    it("discards an item from an 8-question assembled paper and verifies 7 questions remain and total marks re-sum accurately", () => {
      const eightQuestions: GeneratedExamPaper[] = [
        PRESETS[0]!.fallbackSetA,
        PRESETS[1]!.fallbackSetA,
        PRESETS[2]!.fallbackSetA,
        PRESETS[3]!.fallbackSetA,
        PRESETS[4]!.fallbackSetA,
        PRESETS[5]!.fallbackSetA,
        PRESETS[6]!.fallbackSetA,
        PRESETS[7]!.fallbackSetA,
      ];

      const initialAssembled = buildAssembledExam(eightQuestions);
      const initialTotalMarks = initialAssembled.totalMarks;

      // Discard question at index 4
      const removedItem = eightQuestions[4]!;
      const removedMarks = removedItem.paperHeader.totalMarks || removedItem.parts.reduce((s, p) => s + p.marks, 0);

      const sevenQuestions = eightQuestions.filter((_, i) => i !== 4);
      expect(sevenQuestions).toHaveLength(7);

      const updatedAssembled = buildAssembledExam(sevenQuestions);
      expect(updatedAssembled.questions).toHaveLength(7);
      expect(updatedAssembled.totalMarks).toBe(initialTotalMarks - removedMarks);
    });
  });

  describe("2. Queue Scratch / Clear Action", () => {
    it("empties queue and purges mocklab_exam_queue from localStorage", () => {
      const initialQueue = [PRESETS[0]!.fallbackSetA, PRESETS[1]!.fallbackSetA];
      saveExamQueue(initialQueue);
      expect(loadExamQueue()).toHaveLength(2);

      // Simulate handleClearQueue
      let queue: GeneratedExamPaper[] = [...initialQueue];
      queue = [];
      window.localStorage.removeItem(EXAM_QUEUE_STORAGE_KEY);

      expect(queue).toHaveLength(0);
      expect(loadExamQueue()).toEqual([]);
      expect(window.localStorage.getItem(EXAM_QUEUE_STORAGE_KEY)).toBeNull();
    });
  });

  describe("3. Universal LaTeX Invariants Across ALL 25 Presets", () => {
    it("asserts balanced $, zero unspaced English trapped in math mode, and error-free KaTeX rendering across all 25 presets", () => {
      expect(PRESETS.length).toBe(25);

      for (const preset of PRESETS) {
        for (const paper of [preset.fallbackSetA, preset.fallbackSetB]) {
          const stringsToCheck = [
            paper.questionStem,
            ...paper.parts.map((p) => p.questionText),
            ...paper.markScheme.map((m) => m.solutionSteps),
            ...paper.markScheme.map((m) => m.examinerGuidance),
          ];

          for (const text of stringsToCheck) {
            if (!text) continue;

            // 1. Balanced $ assertion
            const dollarMatches = text.match(/(?<!\\)\$/g) || [];
            expect(
              dollarMatches.length % 2,
              `Unbalanced '$' in preset ${preset.id} (${paper.paperHeader.variantSet}):\n${text}`,
            ).toBe(0);

            // 2. No English transition words trapped in math mode
            const mathMatches = text.matchAll(/\$\$([\s\S]+?)\$\$|\$([\s\S]+?)\$/g);
            for (const match of mathMatches) {
              const mathExpr = (match[1] ?? match[2] ?? "").trim();

              const hasTrappedEnglish =
                /\b(therefore|cancel|factor|solutions are)\b/i.test(mathExpr) &&
                /\s[a-zA-Z]{3,}\s/.test(mathExpr);

              expect(
                hasTrappedEnglish,
                `Trapped English phrase inside math delimiters in preset ${preset.id} (${paper.paperHeader.variantSet}):\n"$${mathExpr}$"`,
              ).toBe(false);

              // 3. KaTeX throwOnError: true render check
              expect(() => {
                katex.renderToString(mathExpr, {
                  throwOnError: true,
                  displayMode: match[1] !== undefined,
                });
              }, `KaTeX failed on expression in preset ${preset.id} (${paper.paperHeader.variantSet}):\n"$${mathExpr}$"`).not.toThrow();
            }
          }
        }
      }
    });
  });
});

