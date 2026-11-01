import { describe, expect, it } from "vitest";
import katex from "katex";
import { PRESETS } from "@/data/presets";
import {
  sanitizeTextContent,
  splitMath,
} from "@/components/MathRenderer";

describe("Mark Scheme LaTeX Robustness & Preset Hygiene", () => {
  describe("1. Full Equation Delimitation & Line-Break Sanitization", () => {
    it("strips trailing LaTeX row-breaks (\\\\) and preserves block math equations as a single KaTeX math segment", () => {
      const input =
        "Using $\\cos^2\\theta = 1 - \\sin^2\\theta$, substitute into the given relation:\\\\\n\n$$1 - \\sin^2\\theta = 1 - \\sin\\theta$$\n\n\\\\\nCancel the 1 on both sides and multiply by -1 to obtain $\\sin^2\\theta - \\sin\\theta = 0$.";

      const sanitized = sanitizeTextContent(input);

      // Trailing \\ must be stripped
      expect(sanitized).not.toContain("relation:\\\\");
      expect(sanitized).toContain("relation:\n");

      // Standalone \\\\ line must be removed
      expect(sanitized).not.toMatch(/^\s*\\\\+\s*$/m);

      const segments = splitMath(sanitized);

      // The full equation must be parsed as a single block math segment without fragmentation
      const equationSegment = segments.find(
        (s) => s.kind === "math" && s.value.includes("1 - \\sin^2\\theta = 1 - \\sin\\theta"),
      );

      expect(equationSegment).toBeDefined();
      expect(equationSegment?.block).toBe(true);

      // Verify KaTeX compiles the equation cleanly
      expect(() => {
        katex.renderToString(equationSegment!.value, {
          throwOnError: true,
          displayMode: true,
        });
      }).not.toThrow();
    });

    it("strips trailing \\\\ from bullet lines and parses delimited equation branches cleanly", () => {
      const bulletInput = [
        "Factor the quadratic obtained in part (a):",
        "- $\\sin\\theta = 0 \\Rightarrow \\theta = 0^\\circ, 180^\\circ.$\\\\",
        "- $\\sin\\theta = 1 \\Rightarrow \\theta = 90^\\circ.$\\\\",
      ].join("\n");

      const sanitized = sanitizeTextContent(bulletInput);

      // Trailing row-breaks must be stripped
      expect(sanitized).not.toContain(".\\\\");

      const segments = splitMath(sanitized);
      const mathSegments = segments.filter((s) => s.kind === "math");

      expect(mathSegments.length).toBeGreaterThanOrEqual(2);

      const branch1 = mathSegments.find((s) => s.value.includes("\\sin\\theta = 0"));
      const branch2 = mathSegments.find((s) => s.value.includes("\\sin\\theta = 1"));

      expect(branch1).toBeDefined();
      expect(branch2).toBeDefined();

      // Ensure KaTeX renders both branches without error
      for (const branch of [branch1!, branch2!]) {
        expect(() => {
          katex.renderToString(branch.value, {
            throwOnError: true,
            displayMode: branch.block,
          });
        }).not.toThrow();
      }
    });
  });

  describe("2. Preset Bank Hygiene Invariants", () => {
    it("ensures every preset in PRESETS contains 0 instances of unescaped \\\\ in plain text outside of math delimiters", () => {
      for (const preset of PRESETS) {
        for (const paper of [preset.fallbackSetA, preset.fallbackSetB]) {
          for (const row of paper.markScheme) {
            // Strip any valid math blocks $$...$$ and single-line $...$
            const stepsText = row.solutionSteps.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*?\$/g, "");
            expect(stepsText, `Preset ${preset.id} ${paper.paperHeader.variantSet} ${row.partLabel} solutionSteps`).not.toMatch(
              /\\\\/,
            );

            const guidanceText = row.examinerGuidance.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*?\$/g, "");
            expect(guidanceText, `Preset ${preset.id} ${paper.paperHeader.variantSet} ${row.partLabel} examinerGuidance`).not.toMatch(
              /\\\\/,
            );
          }
        }
      }
    });

    it("verifies edexcel-wma11-trig Fallback Set A equations are fully wrapped and formatted", () => {
      const trigPreset = PRESETS.find((p) => p.id === "edexcel-wma11-trig");
      expect(trigPreset).toBeDefined();

      const part3a = trigPreset!.fallbackSetA.markScheme.find((m) => m.partLabel === "(a)");
      expect(part3a).toBeDefined();

      // Verify the equation is wrapped in $$...$$ or $...$
      expect(part3a!.solutionSteps).toContain("$$1 - \\sin^2\\theta = 1 - \\sin\\theta$$");
      expect(part3a!.solutionSteps).not.toContain("\\\\");
    });
  });
});
