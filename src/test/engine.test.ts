import { describe, expect, it } from "vitest";

import { PRESETS } from "@/data/presets";
import { adaptCustomQuestion, localFallback } from "@/services/aiWaterfallEngine";
import { parseModelJson } from "@/services/jsonSanitizer";

const countMarks = (alloc: string) => alloc.split(/\s+/).filter(Boolean).length;

describe("LaTeX JSON sanitizer", () => {
  it("keeps single-backslash LaTeX commands intact instead of turning \\f/\\t/\\r into control chars", () => {
    const raw = '```json\n{"a": "$\\frac{1}{2} + \\theta + \\text{ m} + \\right) + \\sqrt{9}$"}\n```';
    expect(parseModelJson<{ a: string }>(raw).a).toBe("$\\frac{1}{2} + \\theta + \\text{ m} + \\right) + \\sqrt{9}$");
  });

  it("preserves real JSON newline escapes and already-doubled backslashes", () => {
    const raw = '{"a": "Line one\\nThe end \\\\pi"}';
    expect(parseModelJson<{ a: string }>(raw).a).toBe("Line one\nThe end \\pi");
  });

  it("treats \\neq as LaTeX, not newline + eq", () => {
    expect(parseModelJson<{ a: string }>('{"a": "$x \\neq 0$"}').a).toBe("$x \\neq 0$");
  });
});

describe("Verified presets", () => {
  for (const preset of PRESETS) {
    for (const paper of [preset.fallbackSetA, preset.fallbackSetB]) {
      it(`${preset.id} ${paper.paperHeader.variantSet}: part marks, scheme marks and total agree`, () => {
        const partTotal = paper.parts.reduce((s, p) => s + p.marks, 0);
        expect(partTotal).toBe(paper.paperHeader.totalMarks);
        for (const row of paper.markScheme) {
          expect(countMarks(row.markAllocation)).toBe(row.totalPartMarks);
          const part = paper.parts.find((p) => p.partLabel === row.partLabel);
          expect(part?.marks).toBe(row.totalPartMarks);
        }
      });
    }
  }

  it("Roll Set B returns the Set B variant offline", () => {
    const p = PRESETS[0];
    const paper = localFallback({
      sourceText: p.sourceQuestionText,
      examBoard: p.examBoard,
      syllabusCode: p.syllabusCode,
      paperTitle: p.paperTitle,
      mode: "strict_isomorphic",
      variantSet: "Set B",
    });
    expect(paper.paperHeader.variantSet).toBe("Set B");
    expect(paper.questionStem).toContain("x^2 + px + 2p - 3");
  });
});

describe("Custom question offline adaptation", () => {
  it("keeps the part structure and bracketed marks", () => {
    const paper = adaptCustomQuestion({
      sourceText: "Solve $x^2 - 5x + 6 = 0$.\n(a) Find the roots. [2]\n(b) Hence sketch. [3]",
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "4024/12",
      paperTitle: "Maths",
      mode: "strict_isomorphic",
      variantSet: "Set A",
    });
    expect(paper.parts.map((p) => [p.partLabel, p.marks])).toEqual([["(a)", 2], ["(b)", 3]]);
    expect(paper.paperHeader.totalMarks).toBe(5);
    expect(paper.verificationSummary).toMatch(/NOT solved/);
  });
});
