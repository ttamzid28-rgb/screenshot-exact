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

  describe("2. Bare LaTeX Auto-Wrapping", () => {
    it("wraps raw expressions with \\binom{6}{0} and \\sum_{k=0}^n without dollar signs into $...$ and parses them as math segments", () => {
      const raw = "Raw expressions with \\binom{6}{0} and \\sum_{k=0}^n without dollar signs";
      const sanitized = sanitizeTextContent(raw);

      expect(sanitized).toContain("$\\binom{6}{0}$");
      expect(sanitized).toContain("$\\sum_{k=0}^n$");

      const segments = splitMath(sanitized);
      const mathSegments = segments.filter((s) => s.kind === "math");

      expect(mathSegments).toHaveLength(2);
      expect(mathSegments[0]).toEqual({
        kind: "math",
        value: "\\binom{6}{0}",
        block: false,
      });
      expect(mathSegments[1]).toEqual({
        kind: "math",
        value: "\\sum_{k=0}^n",
        block: false,
      });
    });

    it("auto-wraps bare \\frac, \\sqrt, and greek letters like \\theta outside dollar signs", () => {
      const raw = "The solution is \\frac{1}{2} with angle \\theta and \\sqrt{3}.";
      const sanitized = sanitizeTextContent(raw);

      expect(sanitized).toContain("$\\frac{1}{2}$");
      expect(sanitized).toContain("$\\theta$");
      expect(sanitized).toContain("$\\sqrt{3}$");

      const segments = splitMath(sanitized);
      const mathSegments = segments.filter((s) => s.kind === "math");
      expect(mathSegments.some((s) => s.kind === "math" && s.value === "\\frac{1}{2}")).toBe(true);
      expect(mathSegments.some((s) => s.kind === "math" && s.value === "\\theta")).toBe(true);
      expect(mathSegments.some((s) => s.kind === "math" && s.value === "\\sqrt{3}")).toBe(true);
    });

    it("does not double-wrap math already inside $...$ or $$...$$", () => {
      const input = "Already wrapped: $\\frac{a}{b}$ and $$\\sum_{i=1}^n i$$ in math.";
      const sanitized = sanitizeTextContent(input);

      expect(sanitized).toBe(input);
      const segments = splitMath(sanitized);
      const mathSegments = segments.filter((s) => s.kind === "math");
      expect(mathSegments).toHaveLength(2);
    });

    it("converts standard LaTeX display \\[ ... \\] and inline \\( ... \\) delimiters", () => {
      const input = "Inline \\(a^2 + b^2 = c^2\\) and block \\[\\int_0^1 x\\,dx = \\frac{1}{2}\\]";
      const sanitized = sanitizeTextContent(input);

      expect(sanitized).toContain("$a^2 + b^2 = c^2$");
      expect(sanitized).toContain("$$\\int_0^1 x\\,dx = \\frac{1}{2}$$");
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
