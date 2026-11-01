import { describe, expect, it } from "vitest";
import katex from "katex";
import {
  MATH_PATTERN,
  sanitizeTextContent,
  splitMath,
} from "@/components/MathRenderer";

describe("LaTeX Sanitizer & MathRenderer Integrity", () => {
  describe("1. Newline Unescaping & Protected Commands", () => {
    it("unescapes literal \\n\\n to real newlines while strictly preserving \\neq and \\nu", () => {
      const input = "Step 1: Calculate discriminant.\\n\\nStep 2: Check condition \\neq 0 and angle \\nu = \\pi/3.";
      const sanitized = sanitizeTextContent(input);

      // Verify literal \n\n became real newlines
      expect(sanitized).toContain("Step 1: Calculate discriminant.\n\nStep 2:");
      expect(sanitized).not.toContain("\\n\\n");

      // Verify \neq and \nu were NOT corrupted into newline + eq or newline + u
      expect(sanitized).toContain("\\neq");
      expect(sanitized).toContain("\\nu");
      expect(sanitized).not.toContain("\neq");
      expect(sanitized).not.toContain("\nu");
    });

    it("preserves other standard LaTeX commands starting with \\n (\\notin, \\nabla, \\neg, etc.)", () => {
      const input = "Given x \\notin S and gradient \\nabla f \\neq 0 with \\neg P.";
      const sanitized = sanitizeTextContent(input);

      expect(sanitized).toContain("\\notin");
      expect(sanitized).toContain("\\nabla");
      expect(sanitized).toContain("\\neq");
      expect(sanitized).toContain("\\neg");
    });
  });

  describe("2. Universal Delimiter Normalization & Single-Line Invariants", () => {
    it("converts standard LaTeX display \\[ ... \] and inline \\( ... \\) delimiters to $$ and $", () => {
      const input = "Inline \\(a^2 + b^2 = c^2\\) and block \\[\\int_0^1 x\\,dx = \\frac{1}{2}\\]";
      const sanitized = sanitizeTextContent(input);

      expect(sanitized).toContain("$a^2 + b^2 = c^2$");
      expect(sanitized).toContain("$$\\int_0^1 x\\,dx = \\frac{1}{2}$$");

      const segments = splitMath(sanitized);
      const mathSegments = segments.filter((s) => s.kind === "math");
      expect(mathSegments).toHaveLength(2);
      expect(mathSegments[0]?.block).toBe(false);
      expect(mathSegments[1]?.block).toBe(true);
    });

    it("enforces strict single-line inline math ($[^$\\n]+?$) so inline math never spans across newlines", () => {
      const multilineInput = "Line 1 with open $x + y = 1\nLine 2 with $z = 2$ and closing $.";
      const sanitized = sanitizeTextContent(multilineInput);
      const segments = splitMath(sanitized);

      // Math across newlines must not be joined into a giant broken inline block
      const multiLineMath = segments.find(
        (s) => s.kind === "math" && s.value.includes("\n") && !s.block,
      );
      expect(multiLineMath).toBeUndefined();
    });

    it("strips trailing document row-breaks (\\\\) occurring in plain text", () => {
      const input = "First line\\\\\nSecond line\\\\\nThird line";
      const sanitized = sanitizeTextContent(input);

      expect(sanitized).not.toMatch(/\\\\/);
      expect(sanitized).toBe("First line\nSecond line\nThird line");
    });

    it("applies per-line dollar balance guard stripping orphaned trailing $", () => {
      const input = "Line with balanced $x = 1$.\nLine with orphaned $x = 2 and extra $\nClean line.";
      const sanitized = sanitizeTextContent(input);

      const lines = sanitized.split("\n");
      for (const line of lines) {
        const count = (line.match(/(?<!\\)\$/g) || []).length;
        expect(count % 2).toBe(0);
      }
    });

    it("protects English sentences from word-squishing when trapped inside inline math delimiters", () => {
      const trappedInput = "Step 1: $Therefore the only valid solutions are x = 3$";
      const segments = splitMath(trappedInput);

      // Trapped English sentence must fall back to plain text to preserve spaces
      const textSeg = segments.find(
        (s) => s.kind === "text" && s.value.includes("Therefore the only valid solutions"),
      );
      expect(textSeg).toBeDefined();
    });
  });

  describe("3. Verification Banner LaTeX Formatting", () => {
    it("produces valid math segments for KaTeX from verification strings containing $729$ and $x^{2}$", () => {
      const summary = "Mathematically verified: expansion coefficient for $x^{2}$ is $729$ and constant term is $-2916$.";
      const sanitized = sanitizeTextContent(summary);
      const segments = splitMath(sanitized);

      const mathSegments = segments.filter((s) => s.kind === "math");
      expect(mathSegments.length).toBeGreaterThanOrEqual(2);

      const x2Seg = mathSegments.find((s) => s.kind === "math" && s.value === "x^{2}");
      const numSeg = mathSegments.find((s) => s.kind === "math" && s.value === "729");

      expect(x2Seg).toBeDefined();
      expect(numSeg).toBeDefined();

      // Ensure every math segment compiles cleanly with KaTeX
      for (const seg of mathSegments) {
        if (seg.kind === "math") {
          expect(() => {
            const html = katex.renderToString(seg.value, {
              throwOnError: true,
              displayMode: seg.block,
            });
            expect(html).toContain("katex");
          }).not.toThrow();
        }
      }
    });

    it("compiles complex verification summaries without unhandled KaTeX exceptions", () => {
      const complexSummary =
        "Verified by backward substitution: roots $x = -2, 5$, discriminant $\\Delta = 49 > 0$, vertex $(-1.5, 0.5)$.";
      const sanitized = sanitizeTextContent(complexSummary);
      const segments = splitMath(sanitized);

      const mathSegments = segments.filter((s) => s.kind === "math");
      expect(mathSegments.length).toBeGreaterThan(0);

      for (const seg of mathSegments) {
        if (seg.kind === "math") {
          const rendered = katex.renderToString(seg.value, {
            throwOnError: false,
            displayMode: seg.block,
          });
          expect(rendered).toBeTruthy();
        }
      }
    });
  });
});
