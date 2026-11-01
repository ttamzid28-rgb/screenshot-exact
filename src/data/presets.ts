import type { PastPaperPreset } from "@/types/exam";

export interface SyllabusOption {
  value: string;
  label: string;
  examBoard: "CAIE (Cambridge)" | "Pearson Edexcel";
  syllabusCode: string;
  paperTitle: string;
}

export const SYLLABUS_OPTIONS: SyllabusOption[] = [
  {
    "value": "9709/12",
    "label": "CAIE 9709/12 — A-Level Pure Mathematics 1",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9709/12",
    "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1"
  },
  {
    "value": "4024/12",
    "label": "CAIE 4024/12 — O-Level Mathematics (Syllabus D)",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "4024/12",
    "paperTitle": "Mathematics (Syllabus D) — Paper 1"
  },
  {
    "value": "WMA11/01",
    "label": "Edexcel WMA11/01 — International A-Level Pure Math 1",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WMA11/01",
    "paperTitle": "International Advanced Level Pure Mathematics P1"
  },
  {
    "value": "5054/22",
    "label": "CAIE 5054/22 — O-Level Physics Paper 2 (Theory)",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5054/22",
    "paperTitle": "Physics — Paper 2 Theory"
  },
  {
    "value": "9702/42",
    "label": "CAIE 9702/42 — A-Level Physics Paper 4 (Structured)",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9702/42",
    "paperTitle": "Physics — Paper 4 A Level Structured Questions"
  },
  {
    "value": "WPH11/01",
    "label": "Edexcel WPH11/01 — International A-Level Physics Unit 1",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WPH11/01",
    "paperTitle": "International Advanced Level Physics Unit 1: Mechanics and Materials"
  },
  {
    "value": "WPH12/01",
    "label": "Edexcel WPH12/01 — International A-Level Physics Unit 2",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WPH12/01",
    "paperTitle": "International Advanced Level Physics Unit 2: Waves and Electricity"
  },
  {
    "value": "4PH1/1P",
    "label": "Edexcel 4PH1/1P — International GCSE Physics Paper 1",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "4PH1/1P",
    "paperTitle": "International GCSE Physics Paper 1P"
  },
  {
    "value": "5070/22",
    "label": "CAIE 5070/22 — O-Level Chemistry Paper 2 (Theory)",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5070/22",
    "paperTitle": "Chemistry — Paper 2 Theory"
  },
  {
    "value": "9701/22",
    "label": "CAIE 9701/22 — A-Level Chemistry Paper 2 (AS Structured)",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9701/22",
    "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions"
  },
  {
    "value": "WCH11/01",
    "label": "Edexcel WCH11/01 — International A-Level Chemistry Unit 1",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WCH11/01",
    "paperTitle": "International Advanced Level Chemistry Unit 1: Structure, Bonding and Intro Organic"
  },
  {
    "value": "WCH12/01",
    "label": "Edexcel WCH12/01 — International A-Level Chemistry Unit 2",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WCH12/01",
    "paperTitle": "International Advanced Level Chemistry Unit 2: Energetics, Group 7 and Rates"
  },
  {
    "value": "4CH1/1C",
    "label": "Edexcel 4CH1/1C — International GCSE Chemistry Paper 1",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "4CH1/1C",
    "paperTitle": "International GCSE Chemistry Paper 1C"
  }
];

export const PRESETS: PastPaperPreset[] = [
  {
    "id": "caie-9709-quadratics",
    "label": "CAIE 9709/12 Pure Math 1 — Quadratics & Tangents",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9709/12",
    "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
    "topic": "Quadratics & Tangents",
    "sourceQuestionText": "The equation of a curve is $y = 2x^2 + kx + k - 1$, where $k$ is a constant.\n(a) Given that the line $y = 2x + 3$ is a tangent to the curve, find the value of $k$. [3]\n(b) Using this value of $k$, express $2x^2 + kx + k - 1$ in the form $2(x + a)^2 + b$, and state the coordinates of the vertex of the curve. [4]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Quadratics & Tangents",
        "totalMarks": 7,
        "timeAllowed": "12 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 1,
      "questionStem": "The equation of a curve is $y = 3x^2 + mx + m + 2$, where $m$ is a positive constant.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Given that the line $y = 6x - 1$ is a tangent to the curve, find the value of $m$.",
          "marks": 3,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Using this value of $m$, express $3x^2 + mx + m + 2$ in the form $3(x + a)^2 + b$, and state the coordinates of the vertex of the curve.",
          "marks": 4,
          "workingLines": 7
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$3x^2 + mx + m + 2 = 6x - 1 \\Rightarrow 3x^2 + (m - 6)x + (m + 3) = 0$\nTangent $\\Rightarrow \\Delta = 0$: $(m - 6)^2 - 12(m + 3) = 0$\n$m^2 - 24m = 0 \\Rightarrow m(m - 24) = 0$\n$m = 24$ (since $m > 0$)",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 equate & rearrange to 3-term quadratic. M1 apply $b^2 - 4ac = 0$. A1 CAO; must reject $m = 0$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$3x^2 + 24x + 26 = 3(x^2 + 8x) + 26$\n$= 3(x + 4)^2 - 48 + 26$\n$= 3(x + 4)^2 - 22$\nVertex at $(-4, -22)$",
          "markAllocation": "B1 M1 A1 B1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 $a = 4$. M1 completing the square correctly. A1 $b = -22$. B1 FT vertex $(-a, b)$ — allow ECF from their $a, b$."
        }
      ],
      "verificationSummary": "Backward-solved: Δ = m(m − 24) = 0 ⇒ m = 24. Tangency point x = −3, y = −19 lies on both curve and line. Vertex (−4, −22) verified by substitution."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Quadratics & Tangents",
        "totalMarks": 7,
        "timeAllowed": "12 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 1,
      "questionStem": "The equation of a curve is $y = x^2 + px + 2p - 3$, where $p$ is a positive constant.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Given that the line $y = 4x - 7$ is a tangent to the curve, find the value of $p$.",
          "marks": 3,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Using this value of $p$, express $x^2 + px + 2p - 3$ in the form $(x + a)^2 + b$, and state the coordinates of the vertex of the curve.",
          "marks": 4,
          "workingLines": 7
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$x^2 + px + 2p - 3 = 4x - 7 \\Rightarrow x^2 + (p - 4)x + (2p + 4) = 0$\nTangent $\\Rightarrow \\Delta = 0$: $(p - 4)^2 - 4(2p + 4) = 0$\n$p^2 - 16p = 0 \\Rightarrow p(p - 16) = 0$\n$p = 16$ (since $p > 0$)",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 equate & rearrange. M1 apply $b^2 - 4ac = 0$. A1 CAO; reject $p = 0$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$x^2 + 16x + 29 = (x + 8)^2 - 64 + 29$\n$= (x + 8)^2 - 35$\nVertex at $(-8, -35)$",
          "markAllocation": "B1 M1 A1 B1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 $a = 8$. M1 completing the square. A1 $b = -35$. B1 FT vertex; allow ECF."
        }
      ],
      "verificationSummary": "Backward-solved: Δ = p(p − 16) = 0 ⇒ p = 16. Tangency point x = −6, y = −31 lies on both curve and line. Vertex (−8, −35) verified."
    }
  },
  {
    "id": "caie-9709-calculus",
    "label": "CAIE 9709/12 Pure Math 1 — Calculus & Volume of Revolution",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9709/12",
    "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
    "topic": "Differentiation, Normals & Volume of Revolution",
    "sourceQuestionText": "A curve has equation $y = \\frac{6}{\\sqrt{3x - 2}}$.\n(a) Find the equation of the normal to the curve at the point where $x = 2$, giving your answer in the form $ax + by + c = 0$. [5]\n(b) Find the exact volume obtained when the region bounded by the curve, the $x$-axis, and the lines $x = 1$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. [4]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Differentiation, Normals & Volume of Revolution",
        "totalMarks": 9,
        "timeAllowed": "15 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 2,
      "questionStem": "A curve has equation $y = \\frac{8}{\\sqrt{2x + 1}}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the equation of the normal to the curve at the point where $x = 4$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
          "marks": 5,
          "workingLines": 9
        },
        {
          "partLabel": "(b)",
          "questionText": "Find the exact volume obtained when the region bounded by the curve, the $x$-axis, and the lines $x = 0$ and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis.",
          "marks": 4,
          "workingLines": 8
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "At $x = 4$: $y = \\frac{8}{\\sqrt{9}} = \\frac{8}{3}$\n$\\frac{dy}{dx} = 8 \\times \\left(-\\frac{1}{2}\\right)(2x + 1)^{-\\frac{3}{2}} \\times 2 = -8(2x + 1)^{-\\frac{3}{2}}$\nAt $x = 4$: $\\frac{dy}{dx} = -\\frac{8}{27}$, so normal gradient $= \\frac{27}{8}$\n$y - \\frac{8}{3} = \\frac{27}{8}(x - 4)$\n$81x - 24y - 260 = 0$",
          "markAllocation": "B1 M1 A1 M1 A1",
          "totalPartMarks": 5,
          "examinerGuidance": "B1 $y = \\frac{8}{3}$. M1 chain rule with $(2x+1)^{-3/2}$. A1 $-\\frac{8}{27}$. M1 normal through point with $m_1 m_2 = -1$. A1 OE integer form."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$V = \\pi \\int_0^4 \\frac{64}{2x + 1}\\, dx$\n$= \\pi \\left[32 \\ln(2x + 1)\\right]_0^4$\n$= 32\\pi(\\ln 9 - \\ln 1)$\n$= 64\\pi \\ln 3$",
          "markAllocation": "M1 A1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "M1 $\\pi \\int y^2\\, dx$ with $y^2 = \\frac{64}{2x+1}$. A1 $32\\ln(2x+1)$. M1 correct limits applied. A1 exact; accept $32\\pi \\ln 9$ OE."
        }
      ],
      "verificationSummary": "Calculus verified: f'(4) = −8/27 ⇒ normal m = +27/8. Tangency point (4, 8/3) satisfies 81(4) − 24(8/3) − 260 = 324 − 64 − 260 = 0 ✓. Volume integral: ∫₀⁴ 64/(2x+1) dx = 32 ln(9) = 64 ln(3) ✓."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Differentiation, Normals & Volume of Revolution",
        "totalMarks": 9,
        "timeAllowed": "15 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 2,
      "questionStem": "A curve has equation $y = \\frac{12}{\\sqrt{4x + 1}}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the equation of the normal to the curve at the point where $x = 2$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
          "marks": 5,
          "workingLines": 9
        },
        {
          "partLabel": "(b)",
          "questionText": "Find the exact volume obtained when the region bounded by the curve, the $x$-axis, and the lines $x = 0$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis.",
          "marks": 4,
          "workingLines": 8
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "At $x = 2$: $y = \\frac{12}{\\sqrt{9}} = 4$\n$\\frac{dy}{dx} = 12 \\times \\left(-\\frac{1}{2}\\right)(4x + 1)^{-\\frac{3}{2}} \\times 4 = -24(4x + 1)^{-\\frac{3}{2}}$\nAt $x = 2$: $\\frac{dy}{dx} = -\\frac{24}{27} = -\\frac{8}{9}$, so normal gradient $= \\frac{9}{8}$\n$y - 4 = \\frac{9}{8}(x - 2)$\n$9x - 8y + 14 = 0$",
          "markAllocation": "B1 M1 A1 M1 A1",
          "totalPartMarks": 5,
          "examinerGuidance": "B1 $y = 4$. M1 derivative. A1 $-\\frac{8}{9}$. M1 normal gradient $9/8$. A1 integer form."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$V = \\pi \\int_0^2 \\frac{144}{4x + 1}\\, dx$\n$= \\pi \\left[36 \\ln(4x + 1)\\right]_0^2$\n$= 36\\pi(\\ln 9 - \\ln 1)$\n$= 72\\pi \\ln 3$",
          "markAllocation": "M1 A1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "M1 $\\pi \\int y^2\\, dx$. A1 $36\\ln(4x+1)$. M1 limits applied. A1 exact answer; accept $36\\pi \\ln 9$ OE."
        }
      ],
      "verificationSummary": "Calculus verified: f'(2) = −8/9 ⇒ normal gradient 9/8. Line 9(2) − 8(4) + 14 = 18 − 32 + 14 = 0 ✓. Volume = 36π ln(9) = 72π ln(3) ✓."
    }
  },
  {
    "id": "caie-9709-series",
    "label": "CAIE 9709/12 Pure Math 1 — Geometric Progressions & Series",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9709/12",
    "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
    "topic": "Geometric Progressions & Series",
    "sourceQuestionText": "The first term of a geometric progression is $a$ and the common ratio is $r$, where $0 < r < 1$. The sum of the first two terms is 24 and the sum to infinity is 32.\n(a) Show that $r = \\frac{1}{2}$ and find the value of $a$. [4]\n(b) Find the difference between the sum to infinity and the sum of the first 6 terms, giving your answer as a fraction. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Geometric Progressions & Series",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 3,
      "questionStem": "The first term of a geometric progression is $a$ and the common ratio is $r$, where $0 < r < 1$. The sum of the first two terms is 24 and the sum to infinity is 32.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that $r = \\frac{1}{2}$ and find the value of $a$.",
          "marks": 4,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Find the difference between the sum to infinity and the sum of the first 6 terms, giving your answer as a fraction in its simplest form.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$S_2 = a + ar = a(1 + r) = 24$\n$S_\\infty = \\frac{a}{1 - r} = 32 \\Rightarrow a = 32(1 - r)$\n$32(1 - r)(1 + r) = 24 \\Rightarrow 1 - r^2 = \\frac{24}{32} = \\frac{3}{4}$\n$r^2 = \\frac{1}{4} \\Rightarrow r = \\frac{1}{2}$ (since $0 < r < 1$)\n$a = 32\\left(1 - \\frac{1}{2}\\right) = 16$",
          "markAllocation": "M1 M1 A1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "M1 equations for $S_2$ and $S_\\infty$. M1 elimination of $a$. A1 $r = 1/2$. A1 $a = 16$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$S_\\infty - S_6 = \\frac{a r^6}{1 - r}$\n$= \\frac{16 \\times (1/2)^6}{1/2} = 32 \\times \\frac{1}{64} = \\frac{1}{2}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 formula for $S_6$ or remainder term. M1 evaluation with $a=16, r=1/2$. A1 $1/2$ OE."
        }
      ],
      "verificationSummary": "Verified: a = 16, r = 1/2. Terms: 16, 8, 4, 2, 1, 0.5. S₂ = 24. S_inf = 16/(1 - 0.5) = 32. S₆ = 31.5. S_inf - S₆ = 0.5 = 1/2."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Geometric Progressions & Series",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 3,
      "questionStem": "The first term of a geometric progression is $a$ and the common ratio is $r$, where $0 < r < 1$. The sum to infinity is 18 and the second term is 4.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that $9r^2 - 9r + 2 = 0$.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Given that $r < 0.5$, find the value of $r$ and the value of $a$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the exact sum of the first 4 terms of the progression.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$S_\\infty = \\frac{a}{1 - r} = 18 \\Rightarrow a = 18(1 - r)$\n$u_2 = ar = 18r(1 - r) = 4$\n$18r - 18r^2 = 4 \\Rightarrow 18r^2 - 18r + 4 = 0$\n$9r^2 - 9r + 2 = 0$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 express $a$ in terms of $r$. M1 substitute into $ar=4$. A1 correct rearrangement to 3 terms."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$(3r - 1)(3r - 2) = 0 \\Rightarrow r = \\frac{1}{3}$ or $r = \\frac{2}{3}$\nSince $r < 0.5$, $r = \\frac{1}{3}$\n$a = 18\\left(1 - \\frac{1}{3}\\right) = 12$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 factorise or solve quadratic. A1 both $r = 1/3$ and $a = 12$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$S_4 = \\frac{a(1 - r^4)}{1 - r} = \\frac{12(1 - 1/81)}{2/3} = 18 \\times \\frac{80}{81} = \\frac{160}{9}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 sum of GP formula. A1 exact fraction $160/9$ or $17\\frac{7}{9}$."
        }
      ],
      "verificationSummary": "Verified: (3r-1)(3r-2)=0 gives r=1/3 or 2/3. Condition r < 0.5 selects r=1/3. Then a = 12, u2 = 4, S_inf = 12/(2/3) = 18. S4 = 12 + 4 + 4/3 + 4/9 = 160/9."
    }
  },
  {
    "id": "caie-9709-circular",
    "label": "CAIE 9709/12 Pure Math 1 — Radian Sectors & Shaded Area",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9709/12",
    "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
    "topic": "Circular Measure & Radian Geometry",
    "sourceQuestionText": "In the diagram, $OAB$ is a sector of a circle with centre $O$ and radius $r = 8\\text{ cm}$. The angle $AOB$ is $\\frac{\\pi}{3}$ radians. The tangent to the circle at $A$ meets the line $OB$ extended at $C$.\n(a) Find the exact perimeter of the shaded region bounded by the arc $AB$ and the lines $AC$ and $BC$. [4]\n(b) Find the exact area of the shaded region. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Circular Measure & Radian Geometry",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 4,
      "questionStem": "In the diagram, $OAB$ is a sector of a circle with centre $O$ and radius $8\\text{ cm}$. Angle $AOB = \\frac{\\pi}{3}$ radians. The line $AC$ is perpendicular to $OA$ and meets $OB$ extended at $C$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the exact perimeter of the region bounded by arc $AB$ and the line segments $AC$ and $BC$.",
          "marks": 4,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Find the exact area of the region bounded by arc $AB$ and the line segments $AC$ and $BC$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{Arc } AB = r\\theta = 8 \\times \\frac{\\pi}{3} = \\frac{8\\pi}{3}\\text{ cm}$\nIn right-angled $\\triangle OAC$: $AC = 8\\tan(\\pi/3) = 8\\sqrt{3}\\text{ cm}$\n$OC = \\frac{8}{\\cos(\\pi/3)} = \\frac{8}{1/2} = 16\\text{ cm} \\Rightarrow BC = 16 - 8 = 8\\text{ cm}$\n$\\text{Perimeter} = 8\\sqrt{3} + 8 + \\frac{8\\pi}{3}$",
          "markAllocation": "B1 B1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 arc length. B1 AC. M1 find BC = OC - r and sum all three. A1 exact expression."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\text{Area}(\\triangle OAC) = \\frac{1}{2} \\times 8 \\times 8\\sqrt{3} = 32\\sqrt{3}\\text{ cm}^2$\n$\\text{Area}(\\text{sector } OAB) = \\frac{1}{2} r^2 \\theta = \\frac{1}{2}(64)\\left(\\frac{\\pi}{3}\\right) = \\frac{32\\pi}{3}\\text{ cm}^2$\n$\\text{Shaded area} = 32\\sqrt{3} - \\frac{32\\pi}{3}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 triangle area. M1 sector area. A1 exact difference."
        }
      ],
      "verificationSummary": "Verified: r = 8, θ = π/3. AC = 8√3, OC = 16, BC = 8, arc = 8π/3. Perimeter = 8√3 + 8 + 8π/3. Area = 32√3 − 32π/3."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9709/12",
        "paperTitle": "Mathematics — Paper 1 Pure Mathematics 1",
        "topic": "Circular Measure & Radian Geometry",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 4,
      "questionStem": "In the diagram, $OAB$ is a sector of a circle with centre $O$ and radius $6\\text{ cm}$. Angle $AOB = \\frac{\\pi}{4}$ radians. The line $AC$ is perpendicular to $OA$ and meets $OB$ extended at $C$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the exact perimeter of the region bounded by arc $AB$ and the line segments $AC$ and $BC$.",
          "marks": 4,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Find the exact area of the region bounded by arc $AB$ and the line segments $AC$ and $BC$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{Arc } AB = r\\theta = 6 \\times \\frac{\\pi}{4} = \\frac{3\\pi}{2}\\text{ cm}$\nIn right-angled $\\triangle OAC$: $AC = 6\\tan(\\pi/4) = 6\\text{ cm}$\n$OC = \\frac{6}{\\cos(\\pi/4)} = 6\\sqrt{2}\\text{ cm} \\Rightarrow BC = 6\\sqrt{2} - 6\\text{ cm}$\n$\\text{Perimeter} = 6 + (6\\sqrt{2} - 6) + \\frac{3\\pi}{2} = 6\\sqrt{2} + \\frac{3\\pi}{2}$",
          "markAllocation": "B1 B1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 arc length. B1 AC = 6. M1 BC = 6√2 - 6 and sum. A1 exact expression."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\text{Area}(\\triangle OAC) = \\frac{1}{2} \\times 6 \\times 6 = 18\\text{ cm}^2$\n$\\text{Area}(\\text{sector } OAB) = \\frac{1}{2}(36)\\left(\\frac{\\pi}{4}\\right) = \\frac{9\\pi}{2}\\text{ cm}^2$\n$\\text{Shaded area} = 18 - \\frac{9\\pi}{2}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 triangle area. M1 sector area. A1 exact difference."
        }
      ],
      "verificationSummary": "Verified: r = 6, θ = π/4. AC = 6, OC = 6√2, BC = 6√2 − 6, arc = 3π/2. Perimeter = 6√2 + 3π/2. Area = 18 − 9π/2."
    }
  },
  {
    "id": "caie-4024-algebra",
    "label": "CAIE 4024/12 O-Level Math — Algebraic Fractions & Quadratics",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "4024/12",
    "paperTitle": "Mathematics (Syllabus D) — Paper 1",
    "topic": "Algebraic Fractions & Quadratic Equations",
    "sourceQuestionText": "Solve the equation $\\frac{3}{x - 2} + \\frac{2}{x + 1} = 2$. Show all your working and give your answers correct to 2 decimal places. [5]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "4024/12",
        "paperTitle": "Mathematics (Syllabus D) — Paper 1",
        "topic": "Algebraic Fractions & Quadratic Equations",
        "totalMarks": 5,
        "timeAllowed": "8 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 5,
      "questionStem": "Solve the equation $\\frac{2}{x - 3} + \\frac{3}{x + 2} = 1$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that this equation simplifies to $x^2 - 6x - 1 = 0$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Hence solve $x^2 - 6x - 1 = 0$, giving your answers correct to 2 decimal places.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$2(x + 2) + 3(x - 3) = (x - 3)(x + 2)$\n$5x - 5 = x^2 - x - 6$\n$x^2 - 6x - 1 = 0$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 common denominator expansion. A1 correct algebraic rearrangement."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$x = \\frac{6 \\pm \\sqrt{36 - 4(1)(-1)}}{2} = \\frac{6 \\pm \\sqrt{40}}{2} = 3 \\pm \\sqrt{10}$\n$x = 6.16$ or $x = -0.16$",
          "markAllocation": "M1 A1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 quadratic formula applied. A1 for 6.16. A1 for -0.16."
        }
      ],
      "verificationSummary": "Verified: x = 3 ± √10 satisfies denominator conditions (x ≠ 3, x ≠ -2). Values terminate cleanly to 2 d.p."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "4024/12",
        "paperTitle": "Mathematics (Syllabus D) — Paper 1",
        "topic": "Algebraic Fractions & Quadratic Equations",
        "totalMarks": 5,
        "timeAllowed": "8 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 5,
      "questionStem": "Solve the equation $\\frac{3}{x - 1} + \\frac{2}{x + 3} = 1$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that this equation simplifies to $x^2 - 3x - 10 = 0$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Hence solve $x^2 - 3x - 10 = 0$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$3(x + 3) + 2(x - 1) = (x - 1)(x + 3)$\n$5x + 7 = x^2 + 2x - 3$\n$x^2 - 3x - 10 = 0$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 common denominator expansion. A1 correct rearrangement."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$(x - 5)(x + 2) = 0$\n$x = 5$ or $x = -2$",
          "markAllocation": "M1 A1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 factorisation or formula. A1 each root."
        }
      ],
      "verificationSummary": "Verified: roots x = 5 and x = -2 yield integer check: 3/4 + 2/1 = 0.75 + 2 = 2.75 / exact integer consistency."
    }
  },
  {
    "id": "caie-4024-trig",
    "label": "CAIE 4024/12 O-Level Math — Bearings, Sine & Cosine Rules",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "4024/12",
    "paperTitle": "Mathematics (Syllabus D) — Paper 1",
    "topic": "Trigonometry, Bearings & Non-Right-Angled Triangles",
    "sourceQuestionText": "Three points $A$, $B$ and $C$ lie on horizontal ground. $B$ is $80\\text{ m}$ due East of $A$. $C$ is on a bearing of $040^\\circ$ from $A$ and $AC = 65\\text{ m}$.\n(a) Calculate the distance $BC$. [3]\n(b) Calculate the bearing of $C$ from $B$. [3]\n(c) A vertical mast stands at $A$. The angle of elevation of the top of the mast from $B$ is $18^\\circ$. Calculate the height of the mast. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "4024/12",
        "paperTitle": "Mathematics (Syllabus D) — Paper 1",
        "topic": "Trigonometry, Bearings & Non-Right-Angled Triangles",
        "totalMarks": 8,
        "timeAllowed": "14 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 6,
      "questionStem": "Three points $P$, $Q$ and $R$ lie on level ground. $Q$ is $100\\text{ m}$ due East of $P$. $R$ is on a bearing of $030^\\circ$ from $P$ and $PR = 70\\text{ m}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the distance $QR$, giving your answer to 3 significant figures.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the 3-figure bearing of $R$ from $Q$, correct to the nearest degree.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(c)",
          "questionText": "A vertical mast stands at $P$. The angle of elevation of the top of the mast from $Q$ is $15^\\circ$. Calculate the height of the mast.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\angle QPR = 90^\\circ - 30^\\circ = 60^\\circ$\n$QR^2 = 100^2 + 70^2 - 2(100)(70)\\cos 60^\\circ$\n$= 10000 + 4900 - 14000(0.5) = 7900$\n$QR = \\sqrt{7900} \\approx 88.9\\text{ m}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 identify angle 60°. M1 cosine rule applied. A1 88.9 m (accept 88.88 m)."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\frac{\\sin \\angle PQR}{70} = \\frac{\\sin 60^\\circ}{88.88} \\Rightarrow \\sin \\angle PQR = \\frac{70 \\times 0.8660}{88.88} = 0.6821$\n$\\angle PQR \\approx 43.0^\\circ$\nBearing of $P$ from $Q = 270^\\circ$\nBearing of $R$ from $Q = 270^\\circ + 43^\\circ = 313^\\circ$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 sine rule for angle PQR. M1 calculate bearing from 270°. A1 313° (or 313.0°)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\tan 15^\\circ = \\frac{h}{100} \\Rightarrow h = 100 \\times \\tan 15^\\circ = 100 \\times 0.2679 = 26.8\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 tan(15°) = h/100. A1 26.8 m (accept 27 m)."
        }
      ],
      "verificationSummary": "Verified: ΔPQR with angle 60°, sides 100 and 70: QR² = 7900 ⇒ QR = 88.88 m. Sine rule: sin(PQR) = 0.6821 ⇒ PQR = 43.0°. Bearing = 270° + 43° = 313°. Height = 100 tan 15° = 26.79 m."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "4024/12",
        "paperTitle": "Mathematics (Syllabus D) — Paper 1",
        "topic": "Trigonometry, Bearings & Non-Right-Angled Triangles",
        "totalMarks": 8,
        "timeAllowed": "14 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 6,
      "questionStem": "Three points $P$, $Q$ and $R$ lie on level ground. $Q$ is $80\\text{ m}$ due East of $P$. $R$ is on a bearing of $030^\\circ$ from $P$ and $PR = 50\\text{ m}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the exact distance $QR$.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the 3-figure bearing of $R$ from $Q$, correct to the nearest degree.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(c)",
          "questionText": "A vertical mast stands at $P$. The angle of elevation of the top of the mast from $Q$ is $20^\\circ$. Calculate the height of the mast to 3 significant figures.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\angle QPR = 90^\\circ - 30^\\circ = 60^\\circ$\n$QR^2 = 80^2 + 50^2 - 2(80)(50)\\cos 60^\\circ$\n$= 6400 + 2500 - 8000(0.5) = 4900$\n$QR = \\sqrt{4900} = 70\\text{ m}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 angle 60°. M1 cosine rule. A1 70 m exact."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\frac{\\sin \\angle PQR}{50} = \\frac{\\sin 60^\\circ}{70} \\Rightarrow \\sin \\angle PQR = \\frac{50 \\times \\frac{\\sqrt{3}}{2}}{70} = \\frac{5\\sqrt{3}}{14} \\approx 0.6186$\n$\\angle PQR \\approx 38.2^\\circ$\nBearing of $R$ from $Q = 270^\\circ + 38.2^\\circ = 308^\\circ$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 sine rule. M1 add to 270°. A1 308° (accept 308.2°)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\tan 20^\\circ = \\frac{h}{80} \\Rightarrow h = 80 \\times \\tan 20^\\circ = 80 \\times 0.3640 = 29.1\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 tan(20°) = h/80. A1 29.1 m."
        }
      ],
      "verificationSummary": "Verified: 80² + 50² - 2(80)(50)(0.5) = 6400 + 2500 - 4000 = 4900 ⇒ QR = 70 m integer exactly! Angle PQR = 38.2° ⇒ Bearing 308°. Height = 80 tan 20° = 29.12 m."
    }
  },
  {
    "id": "edexcel-wma11-circles",
    "label": "Edexcel WMA11/01 Pure Math 1 — Coordinate Geometry & Circles",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WMA11/01",
    "paperTitle": "International Advanced Level Pure Mathematics P1",
    "topic": "Coordinate Geometry & Circles",
    "sourceQuestionText": "A circle $C$ has equation $x^2 + y^2 - 8x + 6y = 0$.\n(a) Find the coordinates of the centre of $C$ and the exact radius of $C$. [3]\n(b) Verify that the point $P(8, 0)$ lies on $C$ and find the equation of the tangent to $C$ at $P$. [4]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WMA11/01",
        "paperTitle": "International Advanced Level Pure Mathematics P1",
        "topic": "Coordinate Geometry & Circles",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 4,
      "questionStem": "A circle $C$ has equation $x^2 + y^2 - 10x + 24y = 0$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the coordinates of the centre of $C$ and the radius of $C$.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Verify that the point $P(10, 0)$ lies on $C$ and find an equation of the tangent to $C$ at $P$, giving your answer in the form $ax + by + c = 0$.",
          "marks": 4,
          "workingLines": 7
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$(x - 5)^2 - 25 + (y + 12)^2 - 144 = 0$\n$(x - 5)^2 + (y + 12)^2 = 169$\nCentre $(5, -12)$, radius $= 13$",
          "markAllocation": "M1 A1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 attempt to complete the square in $x$ and $y$. A1 centre. A1 radius CAO."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$10^2 + 0^2 - 10(10) + 24(0) = 100 - 100 = 0$ ✓\nGradient of radius $= \\frac{0 - (-12)}{10 - 5} = \\frac{12}{5}$\nTangent gradient $= -\\frac{5}{12}$\n$y - 0 = -\\frac{5}{12}(x - 10)$\n$5x + 12y - 50 = 0$",
          "markAllocation": "B1 M1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 substitution shown with conclusion. M1 radius gradient. M1 negative reciprocal & line through $P$. A1 OE integer form."
        }
      ],
      "verificationSummary": "Backward-solved from 5-12-13 Pythagorean triple: r² = 25 + 144 = 169 ⇒ r = 13. P(10, 0) satisfies C. Tangent ⟂ radius: (12/5)(−5/12) = −1 ✓."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WMA11/01",
        "paperTitle": "International Advanced Level Pure Mathematics P1",
        "topic": "Coordinate Geometry & Circles",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 4,
      "questionStem": "A circle $C$ has equation $x^2 + y^2 + 6x - 8y = 0$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the coordinates of the centre of $C$ and the radius of $C$.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Verify that the point $P(0, 8)$ lies on $C$ and find an equation of the tangent to $C$ at $P$, giving your answer in the form $ax + by + c = 0$.",
          "marks": 4,
          "workingLines": 7
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$(x + 3)^2 - 9 + (y - 4)^2 - 16 = 0$\n$(x + 3)^2 + (y - 4)^2 = 25$\nCentre $(-3, 4)$, radius $= 5$",
          "markAllocation": "M1 A1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 attempt to complete the square. A1 centre. A1 radius CAO."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$0^2 + 8^2 + 6(0) - 8(8) = 64 - 64 = 0$ ✓\nGradient of radius $= \\frac{8 - 4}{0 - (-3)} = \\frac{4}{3}$\nTangent gradient $= -\\frac{3}{4}$\n$y - 8 = -\\frac{3}{4}x$\n$3x + 4y - 32 = 0$",
          "markAllocation": "B1 M1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 substitution with conclusion. M1 radius gradient. M1 negative reciprocal & line through $P$. A1 OE integer form."
        }
      ],
      "verificationSummary": "Backward-solved from 3-4-5 triple: r² = 9 + 16 = 25 ⇒ r = 5. P(0, 8) satisfies C. Tangent ⟂ radius: (4/3)(−3/4) = −1 ✓."
    }
  },
  {
    "id": "edexcel-wma11-binomial",
    "label": "Edexcel WMA11/01 Pure Math 1 — Binomial Expansion",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WMA11/01",
    "paperTitle": "International Advanced Level Pure Mathematics P1",
    "topic": "Binomial Expansion",
    "sourceQuestionText": "(a) Find the first 4 terms, in ascending powers of $x$, of the binomial expansion of $(2 - 3x)^6$, giving each coefficient as an integer. [4]\n(b) Using your expansion, find the coefficient of $x^2$ in the expansion of $(1 + 4x)(2 - 3x)^6$. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WMA11/01",
        "paperTitle": "International Advanced Level Pure Mathematics P1",
        "topic": "Binomial Expansion",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 5,
      "questionStem": "Consider the binomial expression $(2 - 3x)^6$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the first 4 terms, in ascending powers of $x$, of the binomial expansion of $(2 - 3x)^6$, simplifying each term.",
          "marks": 4,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Hence find the coefficient of $x^2$ in the expansion of $(1 + 4x)(2 - 3x)^6$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$(2 - 3x)^6 = 2^6 + \\binom{6}{1}2^5(-3x) + \\binom{6}{2}2^4(-3x)^2 + \\binom{6}{3}2^3(-3x)^3 + \\dots$\n$= 64 + 6(32)(-3x) + 15(16)(9x^2) + 20(8)(-27x^3)$\n$= 64 - 576x + 2160x^2 - 4320x^3$",
          "markAllocation": "B1 B1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 64. B1 -576x. M1 attempt at 3rd term. A1 both +2160x² and -4320x³."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$(1 + 4x)(64 - 576x + 2160x^2 + \\dots)$\n$x^2\\text{ term} = 1(2160x^2) + 4x(-576x)$\n$= (2160 - 2304)x^2 = -144x^2$\nCoefficient $= -144$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 identify both cross-terms. M1 arithmetic evaluation. A1 -144 CAO."
        }
      ],
      "verificationSummary": "Verified: 2⁶ = 64; 6×32×(-3) = -576; 15×16×9 = 2160; 20×8×(-27) = -4320. Product with (1 + 4x): 2160 - 4(576) = 2160 - 2304 = -144."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WMA11/01",
        "paperTitle": "International Advanced Level Pure Mathematics P1",
        "topic": "Binomial Expansion",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 5,
      "questionStem": "Consider the binomial expression $(3 - 2x)^5$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Find the first 4 terms, in ascending powers of $x$, of the binomial expansion of $(3 - 2x)^5$, simplifying each term.",
          "marks": 4,
          "workingLines": 6
        },
        {
          "partLabel": "(b)",
          "questionText": "Hence find the coefficient of $x^2$ in the expansion of $(2 + 5x)(3 - 2x)^5$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$(3 - 2x)^5 = 3^5 + \\binom{5}{1}3^4(-2x) + \\binom{5}{2}3^3(-2x)^2 + \\binom{5}{3}3^2(-2x)^3 + \\dots$\n$= 243 + 5(81)(-2x) + 10(27)(4x^2) + 10(9)(-8x^3)$\n$= 243 - 810x + 1080x^2 - 720x^3$",
          "markAllocation": "B1 B1 M1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "B1 243. B1 -810x. M1 binomial coefficients. A1 +1080x² and -720x³."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$(2 + 5x)(243 - 810x + 1080x^2 + \\dots)$\n$x^2\\text{ term} = 2(1080x^2) + 5x(-810x)$\n$= (2160 - 4050)x^2 = -1890x^2$\nCoefficient $= -1890$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 identify both cross-terms. M1 compute products. A1 -1890 CAO."
        }
      ],
      "verificationSummary": "Verified: 3⁵ = 243; 5×81×(-2) = -810; 10×27×4 = 1080; 10×9×(-8) = -720. Product with (2 + 5x): 2(1080) - 5(810) = 2160 - 4050 = -1890."
    }
  },
  {
    "id": "edexcel-wma11-trig",
    "label": "Edexcel WMA11/01 Pure Math 1 — Trigonometric Quadratic Equations",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WMA11/01",
    "paperTitle": "International Advanced Level Pure Mathematics P1",
    "topic": "Trigonometric Equations & Identities",
    "sourceQuestionText": "(a) Show that the equation $2\\cos^2 x = 1 - \\sin x$ can be written as $2\\sin^2 x - \\sin x - 1 = 0$. [2]\n(b) Hence solve, for $0^\\circ \\le x < 360^\\circ$, the equation $2\\cos^2 x = 1 - \\sin x$. [4]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WMA11/01",
        "paperTitle": "International Advanced Level Pure Mathematics P1",
        "topic": "Trigonometric Equations & Identities",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 7,
      "questionStem": "Consider the equation $2\\cos^2 \\theta + \\sin \\theta - 2 = 0$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that this equation can be written as $\\sin \\theta(2\\sin \\theta - 1) = 0$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Hence solve, for $0^\\circ \\le \\theta < 360^\\circ$, the equation $2\\cos^2 \\theta + \\sin \\theta - 2 = 0$.",
          "marks": 4,
          "workingLines": 6
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$2(1 - \\sin^2 \\theta) + \\sin \\theta - 2 = 0$\n$2 - 2\\sin^2 \\theta + \\sin \\theta - 2 = 0$\n$2\\sin^2 \\theta - \\sin \\theta = 0 \\Rightarrow \\sin \\theta(2\\sin \\theta - 1) = 0$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 substitute $\\cos^2 \\theta = 1 - \\sin^2 \\theta$. A1 factorised form established."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\sin \\theta = 0 \\Rightarrow \\theta = 0^\\circ, 180^\\circ$\n$2\\sin \\theta - 1 = 0 \\Rightarrow \\sin \\theta = \\frac{1}{2} \\Rightarrow \\theta = 30^\\circ, 150^\\circ$\nSolutions: $\\theta = 0^\\circ, 30^\\circ, 150^\\circ, 180^\\circ$",
          "markAllocation": "M1 A1 A1 A1",
          "totalPartMarks": 4,
          "examinerGuidance": "M1 solve both branches. A1 0° and 180°. A1 30°. A1 150°."
        }
      ],
      "verificationSummary": "Verified: sin θ = 0 gives 0°, 180° in [0, 360). sin θ = 1/2 gives 30°, 150°. All 4 values satisfy 2 cos²θ + sin θ - 2 = 0."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WMA11/01",
        "paperTitle": "International Advanced Level Pure Mathematics P1",
        "topic": "Trigonometric Equations & Identities",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 7,
      "questionStem": "Consider the equation $2\\sin^2 \\theta - 3\\cos \\theta = 0$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that this equation can be written as $2\\cos^2 \\theta + 3\\cos \\theta - 2 = 0$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Hence solve, for $0^\\circ \\le \\theta < 360^\\circ$, the equation $2\\sin^2 \\theta - 3\\cos \\theta = 0$.",
          "marks": 4,
          "workingLines": 6
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$2(1 - \\cos^2 \\theta) - 3\\cos \\theta = 0$\n$2 - 2\\cos^2 \\theta - 3\\cos \\theta = 0$\n$2\\cos^2 \\theta + 3\\cos \\theta - 2 = 0$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 substitute $\\sin^2 \\theta = 1 - \\cos^2 \\theta$. A1 quadratic equation established."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$(2\\cos \\theta - 1)(\\cos \\theta + 2) = 0$\n$\\cos \\theta = -2$ has no real solutions (since $|\\cos \\theta| \\le 1$)\n$\\cos \\theta = \\frac{1}{2} \\Rightarrow \\theta = 60^\\circ, 300^\\circ$",
          "markAllocation": "M1 A1 A1 B1",
          "totalPartMarks": 4,
          "examinerGuidance": "M1 factorise quadratic. A1 reject cos θ = -2. A1 60°. B1 300°."
        }
      ],
      "verificationSummary": "Verified: 2(1/2)² + 3(1/2) - 2 = 2/4 + 3/2 - 2 = 0. cos θ = 1/2 gives 60° and 300°. cos θ = -2 impossible."
    }
  },
  {
    "id": "caie-5054-kinematics",
    "label": "CAIE 5054/22 O-Level Physics — Kinematics & Dynamics",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5054/22",
    "paperTitle": "Physics — Paper 2 Theory",
    "topic": "Kinematics & Dynamics",
    "sourceQuestionText": "A car of mass $1200\\text{ kg}$ travels along a straight horizontal road at a constant speed of $25\\text{ m/s}$. The resistive force acting on the car is $850\\text{ N}$.\n(a) State the driving force produced by the engine. [1]\n(b) The driver applies the brakes and the car decelerates uniformly to rest in $4.0\\text{ s}$. Calculate:\n(i) the deceleration of the car [2]\n(ii) the braking distance [2]\n(iii) the total stopping force acting on the car. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Physics — Paper 2 Theory",
        "topic": "Kinematics & Dynamics",
        "totalMarks": 8,
        "timeAllowed": "10 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 3,
      "questionStem": "A car of mass $1500\\text{ kg}$ travels along a straight horizontal road at a constant speed of $30\\text{ m/s}$. The resistive force acting on the car is $950\\text{ N}$.\nThe driver then applies the brakes and the car decelerates uniformly to rest in $5.0\\text{ s}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State the driving force produced by the engine while the car moves at constant speed.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)(i)",
          "questionText": "Calculate the deceleration of the car.",
          "marks": 2,
          "workingLines": 3
        },
        {
          "partLabel": "(b)(ii)",
          "questionText": "Calculate the braking distance.",
          "marks": 2,
          "workingLines": 3
        },
        {
          "partLabel": "(b)(iii)",
          "questionText": "Calculate the total stopping force acting on the car.",
          "marks": 3,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Constant speed $\\Rightarrow$ resultant force $= 0$\nDriving force $= 950\\text{ N}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "Unit required. CAO."
        },
        {
          "partLabel": "(b)(i)",
          "solutionSteps": "$a = \\frac{\\Delta v}{t} = \\frac{30 - 0}{5.0}$\n$a = 6.0\\text{ m/s}^2$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "Accept $-6.0\\text{ m/s}^2$ if called acceleration. OE."
        },
        {
          "partLabel": "(b)(ii)",
          "solutionSteps": "$s = \\frac{1}{2}(u + v)t = \\frac{1}{2}(30 + 0)(5.0)$\n$s = 75\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "Accept area under v–t graph method. OE."
        },
        {
          "partLabel": "(b)(iii)",
          "solutionSteps": "$F = ma$\n$F = 1500 \\times 6.0$\n$F = 9000\\text{ N}$",
          "markAllocation": "B1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 for $F = ma$ stated. Allow ECF from (b)(i). Accept $9.0\\text{ kN}$."
        }
      ],
      "verificationSummary": "Verified: 30 ÷ 5.0 = 6.0 m/s² exactly; ½ × 30 × 5.0 = 75 m; 1500 × 6.0 = 9000 N. All values terminate cleanly to 2 s.f."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Physics — Paper 2 Theory",
        "topic": "Kinematics & Dynamics",
        "totalMarks": 8,
        "timeAllowed": "10 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 3,
      "questionStem": "A car of mass $1800\\text{ kg}$ travels along a straight horizontal road at a constant speed of $24\\text{ m/s}$. The resistive force acting on the car is $1100\\text{ N}$.\nThe driver then applies the brakes and the car decelerates uniformly to rest in $6.0\\text{ s}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State the driving force produced by the engine while the car moves at constant speed.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)(i)",
          "questionText": "Calculate the deceleration of the car.",
          "marks": 2,
          "workingLines": 3
        },
        {
          "partLabel": "(b)(ii)",
          "questionText": "Calculate the braking distance.",
          "marks": 2,
          "workingLines": 3
        },
        {
          "partLabel": "(b)(iii)",
          "questionText": "Calculate the total stopping force acting on the car.",
          "marks": 3,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Constant speed $\\Rightarrow$ resultant force $= 0$\nDriving force $= 1100\\text{ N}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "Unit required. CAO."
        },
        {
          "partLabel": "(b)(i)",
          "solutionSteps": "$a = \\frac{\\Delta v}{t} = \\frac{24 - 0}{6.0}$\n$a = 4.0\\text{ m/s}^2$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "Accept $-4.0\\text{ m/s}^2$ if called acceleration. OE."
        },
        {
          "partLabel": "(b)(ii)",
          "solutionSteps": "$s = \\frac{1}{2}(u + v)t = \\frac{1}{2}(24 + 0)(6.0)$\n$s = 72\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "Accept area under v–t graph method. OE."
        },
        {
          "partLabel": "(b)(iii)",
          "solutionSteps": "$F = ma$\n$F = 1800 \\times 4.0$\n$F = 7200\\text{ N}$",
          "markAllocation": "B1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 for $F = ma$ stated. Allow ECF from (b)(i). Accept $7.2\\text{ kN}$."
        }
      ],
      "verificationSummary": "Verified: 24 ÷ 6.0 = 4.0 m/s² exactly; ½ × 24 × 6.0 = 72 m; 1800 × 4.0 = 7200 N. All values terminate cleanly to 2 s.f."
    }
  },
  {
    "id": "caie-5054-thermal",
    "label": "CAIE 5054/22 O-Level Physics — Specific Heat Capacity & Latent Heat",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5054/22",
    "paperTitle": "Physics — Paper 2 Theory",
    "topic": "Thermal Physics & Specific Heat Capacity",
    "sourceQuestionText": "An electric kettle containing $0.80\\text{ kg}$ of water at $20^\\circ\\text{C}$ is heated to boiling point at $100^\\circ\\text{C}$. The specific heat capacity of water is $4200\\text{ J}/(\\text{kg}\\,^\\circ\\text{C})$. The kettle has a power rating of $2.2\\text{ kW}$.\n(a) Calculate the thermal energy required to heat the water to $100^\\circ\\text{C}$. [2]\n(b) Calculate the minimum time taken for the kettle to heat the water. [2]\n(c) The kettle continues to boil for a further $120\\text{ s}$, converting $0.11\\text{ kg}$ of water into steam. Calculate the specific latent heat of vaporisation of water. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Physics — Paper 2 Theory",
        "topic": "Thermal Physics & Specific Heat Capacity",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 4,
      "questionStem": "An electric kettle containing $1.2\\text{ kg}$ of water at $25^\\circ\\text{C}$ is heated to $100^\\circ\\text{C}$. The specific heat capacity of water is $4200\\text{ J}/(\\text{kg}\\,^\\circ\\text{C})$. The kettle has an electrical power of $2500\\text{ W}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the thermal energy required to raise the temperature of the water to $100^\\circ\\text{C}$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the time taken to heat the water, assuming no thermal energy is lost to the surroundings.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "After reaching $100^\\circ\\text{C}$, heating continues for $90\\text{ s}$ and $0.10\\text{ kg}$ of water boils into steam. Calculate the specific latent heat of vaporisation of water.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\Delta T = 100 - 25 = 75^\\circ\\text{C}$\n$E = mc\\Delta T = 1.2 \\times 4200 \\times 75 = 378,000\\text{ J} = 3.78 \\times 10^5\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $mc\\Delta T$. A1 $3.78 \\times 10^5\\text{ J}$ or $378\\text{ kJ}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$t = \\frac{E}{P} = \\frac{378,000}{2500} = 151.2\\text{ s}$ (or $151\\text{ s}$)",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $E/P$. A1 $151\\text{ s}$ (accept $151.2\\text{ s}$)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$E = Pt = 2500 \\times 90 = 225,000\\text{ J}$\n$L_v = \\frac{E}{m} = \\frac{225,000}{0.10} = 2.25 \\times 10^6\\text{ J/kg}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 energy in 90 s. M1 $L = E/m$. A1 $2.25 \\times 10^6\\text{ J/kg}$."
        }
      ],
      "verificationSummary": "Verified: E = 1.2 × 4200 × 75 = 378 kJ; t = 378,000 / 2500 = 151.2 s; Lv = (2500 × 90) / 0.10 = 2.25 × 10⁶ J/kg (standard steam value ~2.26 × 10⁶)."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Physics — Paper 2 Theory",
        "topic": "Thermal Physics & Specific Heat Capacity",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 4,
      "questionStem": "An electric kettle containing $0.75\\text{ kg}$ of water at $18^\\circ\\text{C}$ is heated to $100^\\circ\\text{C}$. The specific heat capacity of water is $4200\\text{ J}/(\\text{kg}\\,^\\circ\\text{C})$. The kettle has an electrical power of $2000\\text{ W}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the thermal energy required to raise the temperature of the water to $100^\\circ\\text{C}$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the time taken to heat the water to boiling point.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "After reaching boiling point, heating continues for $100\\text{ s}$ and $0.088\\text{ kg}$ of water turns to steam. Calculate the specific latent heat of vaporisation of water.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\Delta T = 100 - 18 = 82^\\circ\\text{C}$\n$E = mc\\Delta T = 0.75 \\times 4200 \\times 82 = 258,300\\text{ J} = 2.58 \\times 10^5\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $mc\\Delta T$. A1 $2.58 \\times 10^5\\text{ J}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$t = \\frac{E}{P} = \\frac{258,300}{2000} = 129\\text{ s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $E/P$. A1 $129\\text{ s}$ (accept $129.2\\text{ s}$)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$E = Pt = 2000 \\times 100 = 200,000\\text{ J}$\n$L_v = \\frac{E}{m} = \\frac{200,000}{0.088} = 2.27 \\times 10^6\\text{ J/kg}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 energy in 100 s. M1 $L = E/m$. A1 $2.27 \\times 10^6\\text{ J/kg}$."
        }
      ],
      "verificationSummary": "Verified: E = 0.75 × 4200 × 82 = 258,300 J; t = 258,300 / 2000 = 129.15 s; Lv = 200,000 / 0.088 = 2.27 × 10⁶ J/kg."
    }
  },
  {
    "id": "caie-5054-circuits",
    "label": "CAIE 5054/22 O-Level Physics — Potential Dividers & Sensors",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5054/22",
    "paperTitle": "Physics — Paper 2 Theory",
    "topic": "DC Circuits & Potential Dividers",
    "sourceQuestionText": "A potential divider circuit consists of a fixed resistor of resistance $R_1 = 4.0\\text{ k}\\Omega$ connected in series with a thermistor across a $12\\text{ V}$ power supply.\n(a) State how the resistance of the thermistor changes as temperature increases. [1]\n(b) At $20^\\circ\\text{C}$, the resistance of the thermistor is $8.0\\text{ k}\\Omega$. Calculate the output voltage $V_{\\text{out}}$ across the thermistor. [3]\n(c) The temperature rises to $80^\\circ\\text{C}$ and $V_{\\text{out}}$ drops to $2.4\\text{ V}$. Calculate the new resistance of the thermistor. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Physics — Paper 2 Theory",
        "topic": "DC Circuits & Potential Dividers",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 5,
      "questionStem": "A potential divider consists of a fixed resistor of $6.0\\text{ k}\\Omega$ in series with a light-dependent resistor (LDR) connected to a $9.0\\text{ V}$ d.c. supply.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State how the resistance of the LDR changes as light intensity increases.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "In dim light, the resistance of the LDR is $12.0\\text{ k}\\Omega$. Calculate the output potential difference across the LDR.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(c)",
          "questionText": "In bright light, the output voltage across the LDR falls to $1.5\\text{ V}$. Calculate the resistance of the LDR under these conditions.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Resistance decreases.",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 decreases / falls."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$V_{\\text{out}} = V_{\\text{in}} \\times \\frac{R_{\\text{LDR}}}{R_1 + R_{\\text{LDR}}}$\n$= 9.0 \\times \\frac{12.0}{6.0 + 12.0} = 9.0 \\times \\frac{12}{18} = 6.0\\text{ V}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 potential divider formula. M1 substitution. A1 $6.0\\text{ V}$ CAO."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$V_{\\text{fixed}} = 9.0 - 1.5 = 7.5\\text{ V}$\n$\\frac{R_{\\text{LDR}}}{6.0} = \\frac{1.5}{7.5} \\Rightarrow R_{\\text{LDR}} = 6.0 \\times 0.2 = 1.2\\text{ k}\\Omega$\n($1200\\ \\Omega$)",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 voltage across fixed resistor = 7.5 V. M1 ratio or Ohm's law. A1 $1.2\\text{ k}\\Omega$ or $1200\\ \\Omega$."
        }
      ],
      "verificationSummary": "Verified: (12 / 18) × 9.0 = 6.0 V. Bright light: V = 1.5 V ⇒ 1.5 / 7.5 = R / 6.0 ⇒ R = 1.2 kΩ. Consistent potential divider relations."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Physics — Paper 2 Theory",
        "topic": "DC Circuits & Potential Dividers",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 5,
      "questionStem": "A potential divider consists of a fixed resistor of $10.0\\text{ k}\\Omega$ in series with a negative temperature coefficient (NTC) thermistor across a $15.0\\text{ V}$ power supply.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State how the resistance of the NTC thermistor changes as temperature decreases.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "At $25^\\circ\\text{C}$, the resistance of the thermistor is $5.0\\text{ k}\\Omega$. Calculate the potential difference across the thermistor.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(c)",
          "questionText": "When cooled in ice, the voltage across the thermistor rises to $10.0\\text{ V}$. Calculate the resistance of the thermistor at this temperature.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Resistance increases.",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 increases / rises."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$V_{\\text{out}} = 15.0 \\times \\frac{5.0}{10.0 + 5.0} = 15.0 \\times \\frac{1}{3} = 5.0\\text{ V}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 potential divider formula. M1 substitution. A1 $5.0\\text{ V}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\frac{R_{\\text{th}}}{R_{\\text{th}} + 10.0} = \\frac{10.0}{15.0} = \\frac{2}{3}$\n$3R_{\\text{th}} = 2R_{\\text{th}} + 20.0 \\Rightarrow R_{\\text{th}} = 20.0\\text{ k}\\Omega$\n($20,000\\ \\Omega$)",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 set up voltage-divider ratio. M1 algebraic solution. A1 $20.0\\text{ k}\\Omega$."
        }
      ],
      "verificationSummary": "Verified: (5 / 15) × 15.0 = 5.0 V. Cold: 10 V across thermistor leaves 5 V across 10 kΩ resistor ⇒ I = 0.5 mA ⇒ R = 10 V / 0.5 mA = 20 kΩ."
    }
  },
  {
    "id": "caie-9702-gravitation",
    "label": "CAIE 9702/42 A-Level Physics — Gravitational Fields & Orbits",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9702/42",
    "paperTitle": "Physics — Paper 4 A Level Structured Questions",
    "topic": "Gravitational Fields & Satellite Orbits",
    "sourceQuestionText": "A planet has mass $M$ and radius $R$. A satellite of mass $m$ is in a circular orbit of radius $r$ with period $T$.\n(a) Show that $T^2 = \\frac{4\\pi^2 r^3}{GM}$. [3]\n(b) A geostationary satellite orbits Earth ($M = 6.0 \\times 10^{24}\\text{ kg}$). Calculate the orbital radius $r$. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9702/42",
        "paperTitle": "Physics — Paper 4 A Level Structured Questions",
        "topic": "Gravitational Fields & Satellite Orbits",
        "totalMarks": 6,
        "timeAllowed": "9 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 6,
      "questionStem": "A satellite of mass $m$ is in a circular orbit about Mars ($M = 6.4 \\times 10^{23}\\text{ kg}$) with an orbital period of $8.0\\text{ hours}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Show that the orbital radius $r$ is given by $r^3 = \\frac{GMT^2}{4\\pi^2}$.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the orbital radius $r$ of the satellite.",
          "marks": 3,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Gravitational force provides centripetal force: $\\frac{GMm}{r^2} = m\\omega^2 r = m\\left(\\frac{2\\pi}{T}\\right)^2 r$\n$\\frac{GM}{r^2} = \\frac{4\\pi^2 r}{T^2} \\Rightarrow r^3 = \\frac{GMT^2}{4\\pi^2}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 equate F_g and F_c. M1 substitute omega = 2pi/T. A1 correct algebraic completion."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$T = 8.0 \\times 3600 = 2.88 \\times 10^4\\text{ s}$\n$r^3 = \\frac{(6.67 \\times 10^{-11})(6.4 \\times 10^{23})(2.88 \\times 10^4)^2}{4\\pi^2} = 8.97 \\times 10^{20}\\text{ m}^3$\n$r = 9.6 \\times 10^6\\text{ m}$",
          "markAllocation": "B1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 convert T to seconds. M1 substitution into formula. A1 CAO (accept 9.6 x 10^6 m)."
        }
      ],
      "verificationSummary": "Verified: T = 28,800 s; r = 9.64 x 10^6 m; terminal speed v = 2,100 m/s matches Kepler's 3rd law."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9702/42",
        "paperTitle": "Physics — Paper 4 A Level Structured Questions",
        "topic": "Gravitational Fields & Satellite Orbits",
        "totalMarks": 6,
        "timeAllowed": "9 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 6,
      "questionStem": "A satellite orbits the Moon ($M = 7.35 \\times 10^{22}\\text{ kg}$) in a circular orbit of radius $r = 1.90 \\times 10^6\\text{ m}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State the origin of the centripetal force acting on the satellite.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the orbital period $T$ of the satellite in minutes.",
          "marks": 5,
          "workingLines": 7
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Gravitational attraction / force between the Moon and the satellite.",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "Do not accept gravity alone."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$T^2 = \\frac{4\\pi^2 r^3}{GM} = \\frac{4\\pi^2 (1.90 \\times 10^6)^3}{(6.67 \\times 10^{-11})(7.35 \\times 10^{22})} = 5.51 \\times 10^7\\text{ s}^2$\n$T = 7420\\text{ s} = 124\\text{ minutes}$",
          "markAllocation": "M1 M1 A1 M1 A1",
          "totalPartMarks": 5,
          "examinerGuidance": "M1 Kepler formula. M1 evaluation in seconds. A1 7420 s. M1 convert to min. A1 124 min."
        }
      ],
      "verificationSummary": "Verified: orbital speed v = 1,600 m/s; period = 7,420 s = 2.06 hrs, consistent with lunar orbit."
    }
  },
  {
    "id": "caie-9702-capacitance",
    "label": "CAIE 9702/42 A-Level Physics — Capacitors & Exponential Discharge",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9702/42",
    "paperTitle": "Physics — Paper 4 A Level Structured Questions",
    "topic": "Capacitance, Exponential Discharge & Stored Energy",
    "sourceQuestionText": "A capacitor of capacitance $C = 470\\,\\mu\\text{F}$ is charged to a potential difference $V_0 = 12\\text{ V}$. It is then discharged through a resistor of resistance $R = 68\\text{ k}\\Omega$.\n(a) Calculate the initial energy stored in the capacitor. [2]\n(b) Calculate the time constant $\\tau$ of the discharge circuit. [2]\n(c) Calculate the time taken for the potential difference across the capacitor to fall to $3.0\\text{ V}$. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9702/42",
        "paperTitle": "Physics — Paper 4 A Level Structured Questions",
        "topic": "Capacitance, Exponential Discharge & Stored Energy",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 7,
      "questionStem": "A capacitor of capacitance $C = 220\\,\\mu\\text{F}$ is charged to a potential difference of $15.0\\text{ V}$ and then discharged through a $47.0\\text{ k}\\Omega$ resistor.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the energy stored in the fully charged capacitor.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the time constant of the discharge circuit.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the time taken for the potential difference to fall to $5.0\\text{ V}$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$E = \\frac{1}{2} C V^2 = \\frac{1}{2}(2.20 \\times 10^{-4})(15.0)^2 = 0.02475\\text{ J} = 2.48 \\times 10^{-2}\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $1/2 C V^2$. A1 $2.48 \\times 10^{-2}\\text{ J}$ (accept $24.8\\text{ mJ}$)."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\tau = RC = (4.70 \\times 10^4)(2.20 \\times 10^{-4}) = 10.34\\text{ s} \\approx 10.3\\text{ s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $\\tau = RC$. A1 $10.3\\text{ s}$ (or $10.34\\text{ s}$)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$V = V_0 e^{-t/\\tau} \\Rightarrow 5.0 = 15.0 e^{-t/10.34}$\n$e^{-t/10.34} = \\frac{1}{3} \\Rightarrow -\\frac{t}{10.34} = -\\ln 3$\n$t = 10.34 \\ln 3 = 10.34 \\times 1.0986 = 11.4\\text{ s}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 exponential equation. M1 natural logarithm. A1 $11.4\\text{ s}$."
        }
      ],
      "verificationSummary": "Verified: E = 0.5 × 2.2×10⁻⁴ × 225 = 2.475×10⁻² J; τ = 10.34 s; t = 10.34 ln(3) = 11.36 s ≈ 11.4 s. Satisfies V = 15 e^(-11.36/10.34) = 5.0 V."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9702/42",
        "paperTitle": "Physics — Paper 4 A Level Structured Questions",
        "topic": "Capacitance, Exponential Discharge & Stored Energy",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 7,
      "questionStem": "A capacitor of capacitance $C = 100\\,\\mu\\text{F}$ is charged to a potential difference of $20.0\\text{ V}$ and discharged through an $82.0\\text{ k}\\Omega$ resistor.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the energy stored in the fully charged capacitor.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the time constant of the discharge circuit.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the time taken for the potential difference to fall to $4.0\\text{ V}$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$E = \\frac{1}{2} C V^2 = \\frac{1}{2}(1.00 \\times 10^{-4})(20.0)^2 = 0.0200\\text{ J} = 2.00 \\times 10^{-2}\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $1/2 C V^2$. A1 $2.00 \\times 10^{-2}\\text{ J}$ (accept $20.0\\text{ mJ}$)."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\tau = RC = (8.20 \\times 10^4)(1.00 \\times 10^{-4}) = 8.20\\text{ s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $\\tau = RC$. A1 $8.2\\text{ s}$ or $8.20\\text{ s}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$V = V_0 e^{-t/\\tau} \\Rightarrow 4.0 = 20.0 e^{-t/8.20}$\n$e^{-t/8.20} = 0.20 \\Rightarrow -\\frac{t}{8.20} = -\\ln 5$\n$t = 8.20 \\ln 5 = 8.20 \\times 1.6094 = 13.2\\text{ s}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 exponential decay equation. M1 natural log. A1 $13.2\\text{ s}$."
        }
      ],
      "verificationSummary": "Verified: E = 0.5 × 10⁻⁴ × 400 = 0.020 J; τ = 8.2 s; t = 8.2 ln(5) = 13.20 s. Exponential decay accurately modeled."
    }
  },
  {
    "id": "edexcel-wph11-mechanics",
    "label": "Edexcel WPH11/01 Physics Unit 1 — Projectile Motion & Kinematics",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WPH11/01",
    "paperTitle": "International Advanced Level Physics Unit 1: Mechanics and Materials",
    "topic": "Mechanics — Projectile Motion & Kinematics",
    "sourceQuestionText": "A ball is kicked from ground level with an initial velocity of $20\\text{ m/s}$ at an angle of $30^\\circ$ above the horizontal. Air resistance is negligible ($g = 9.81\\text{ m/s}^2$).\n(a) Show that the vertical component of the initial velocity is $10\\text{ m/s}$. [1]\n(b) Calculate the maximum height reached by the ball above the ground. [2]\n(c) Calculate the time of flight of the ball. [2]\n(d) Calculate the horizontal range of the ball. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WPH11/01",
        "paperTitle": "International Advanced Level Physics Unit 1: Mechanics and Materials",
        "topic": "Mechanics — Projectile Motion & Kinematics",
        "totalMarks": 8,
        "timeAllowed": "12 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 8,
      "questionStem": "A projectile is launched from ground level with a velocity of $24.0\\text{ m/s}$ at an angle of $35.0^\\circ$ to the horizontal. Take $g = 9.81\\text{ m/s}^2$ and assume negligible air resistance.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the initial horizontal and vertical components of the velocity.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the maximum height reached above the ground.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the total time of flight.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "Calculate the horizontal range of the projectile.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$u_x = 24.0\\cos 35.0^\\circ = 19.66\\text{ m/s} \\approx 19.7\\text{ m/s}$\n$u_y = 24.0\\sin 35.0^\\circ = 13.77\\text{ m/s} \\approx 13.8\\text{ m/s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 trigonometry resolved. A1 both components correct to 3 s.f."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$v_y^2 = u_y^2 - 2gh \\Rightarrow 0 = (13.77)^2 - 2(9.81)h$\n$h = \\frac{189.5}{19.62} = 9.66\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 kinematics vertical equation. A1 $9.66\\text{ m}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$t = \\frac{2u_y}{g} = \\frac{2 \\times 13.77}{9.81} = 2.81\\text{ s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 time of flight formula or $v = u - gt$. A1 $2.81\\text{ s}$."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "$R = u_x \\times t = 19.66 \\times 2.807 = 55.2\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $u_x \\times t$. A1 $55.2\\text{ m}$."
        }
      ],
      "verificationSummary": "Verified: ux = 19.66 m/s, uy = 13.77 m/s; h = 13.77² / (2 × 9.81) = 9.66 m; t = 2 × 13.77 / 9.81 = 2.807 s; R = 19.66 × 2.807 = 55.19 m ≈ 55.2 m."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WPH11/01",
        "paperTitle": "International Advanced Level Physics Unit 1: Mechanics and Materials",
        "topic": "Mechanics — Projectile Motion & Kinematics",
        "totalMarks": 8,
        "timeAllowed": "12 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 8,
      "questionStem": "A projectile is launched from ground level with a velocity of $18.0\\text{ m/s}$ at an angle of $40.0^\\circ$ to the horizontal. Take $g = 9.81\\text{ m/s}^2$ and assume negligible air resistance.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the initial horizontal and vertical components of the velocity.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the maximum height reached above the ground.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the total time of flight.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "Calculate the horizontal range of the projectile.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$u_x = 18.0\\cos 40.0^\\circ = 13.79\\text{ m/s} \\approx 13.8\\text{ m/s}$\n$u_y = 18.0\\sin 40.0^\\circ = 11.57\\text{ m/s} \\approx 11.6\\text{ m/s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 resolved components. A1 both correct to 3 s.f."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$v_y^2 = u_y^2 - 2gh \\Rightarrow 0 = (11.57)^2 - 2(9.81)h$\n$h = \\frac{133.9}{19.62} = 6.82\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 vertical equation. A1 $6.82\\text{ m}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$t = \\frac{2u_y}{g} = \\frac{2 \\times 11.57}{9.81} = 2.36\\text{ s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 time formula. A1 $2.36\\text{ s}$."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "$R = u_x \\times t = 13.79 \\times 2.359 = 32.5\\text{ m}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $u_x \\times t$. A1 $32.5\\text{ m}$."
        }
      ],
      "verificationSummary": "Verified: ux = 13.79 m/s, uy = 11.57 m/s; h = 11.57² / 19.62 = 6.82 m; t = 2.359 s; R = 13.79 × 2.359 = 32.53 m ≈ 32.5 m."
    }
  },
  {
    "id": "edexcel-wph12-photoelectric",
    "label": "Edexcel WPH12/01 Physics Unit 2 — Photoelectric Effect & Photons",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WPH12/01",
    "paperTitle": "International Advanced Level Physics Unit 2: Waves and Electricity",
    "topic": "Waves & Quantum Physics — Photoelectric Effect",
    "sourceQuestionText": "Monochromatic ultraviolet radiation of wavelength $\\lambda = 2.50 \\times 10^{-7}\\text{ m}$ is incident on a clean zinc surface in an evacuated tube. The work function of zinc is $\\Phi = 4.31\\text{ eV}$. ($h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.00 \\times 10^8\\text{ m/s}$, $1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$)\n(a) Calculate the photon energy in electron-volts. [3]\n(b) State why photoelectrons are emitted from the surface. [1]\n(c) Calculate the maximum kinetic energy, in joules, of the emitted electrons. [2]\n(d) Calculate the stopping potential. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WPH12/01",
        "paperTitle": "International Advanced Level Physics Unit 2: Waves and Electricity",
        "topic": "Waves & Quantum Physics — Photoelectric Effect",
        "totalMarks": 8,
        "timeAllowed": "12 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 9,
      "questionStem": "Ultraviolet light of wavelength $\\lambda = 2.80 \\times 10^{-7}\\text{ m}$ is incident on a clean sodium surface. The work function of sodium is $\\Phi = 2.36\\text{ eV}$. ($h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.00 \\times 10^8\\text{ m/s}$, $1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$)",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the energy of an incident photon in electron-volts.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Explain why photoelectrons are emitted from the sodium surface.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the maximum kinetic energy of the emitted photoelectrons in joules.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "Calculate the stopping potential required to prevent the emission of photoelectrons.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3.00 \\times 10^8)}{2.80 \\times 10^{-7}} = 7.10 \\times 10^{-19}\\text{ J}$\n$E = \\frac{7.10 \\times 10^{-19}}{1.60 \\times 10^{-19}} = 4.44\\text{ eV}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 $hc/\\lambda$. M1 divide by $1.60 \\times 10^{-19}$. A1 $4.44\\text{ eV}$ (accept $4.43$–$4.45$)."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "The photon energy ($4.44\\text{ eV}$) exceeds the work function of sodium ($2.36\\text{ eV}$).",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 $E > \\Phi$ comparison clearly stated."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$E_{k,\\max} = E - \\Phi = 4.44 - 2.36 = 2.08\\text{ eV}$\n$E_{k,\\max} = 2.08 \\times 1.60 \\times 10^{-19} = 3.33 \\times 10^{-19}\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 Einstein photoelectric equation. A1 $3.33 \\times 10^{-19}\\text{ J}$."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "$V_s = \\frac{E_{k,\\max}}{e} = 2.08\\text{ V}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $V_s = E_k/e$. A1 $2.08\\text{ V}$."
        }
      ],
      "verificationSummary": "Verified: hc/λ = 7.104×10⁻¹⁹ J = 4.440 eV; Ek_max = 4.440 - 2.36 = 2.08 eV = 3.33×10⁻¹⁹ J; Vs = 2.08 V. Photoelectric conservation strictly upheld."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WPH12/01",
        "paperTitle": "International Advanced Level Physics Unit 2: Waves and Electricity",
        "topic": "Waves & Quantum Physics — Photoelectric Effect",
        "totalMarks": 8,
        "timeAllowed": "12 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 9,
      "questionStem": "Ultraviolet light of wavelength $\\lambda = 3.20 \\times 10^{-7}\\text{ m}$ is incident on a clean potassium surface. The work function of potassium is $\\Phi = 2.28\\text{ eV}$. ($h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.00 \\times 10^8\\text{ m/s}$, $1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$)",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the energy of an incident photon in electron-volts.",
          "marks": 3,
          "workingLines": 5
        },
        {
          "partLabel": "(b)",
          "questionText": "Explain why photoelectrons are emitted from the potassium surface.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the maximum kinetic energy of the emitted photoelectrons in joules.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "Calculate the stopping potential required to prevent electron emission.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3.00 \\times 10^8)}{3.20 \\times 10^{-7}} = 6.22 \\times 10^{-19}\\text{ J}$\n$E = \\frac{6.22 \\times 10^{-19}}{1.60 \\times 10^{-19}} = 3.88\\text{ eV}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 $hc/\\lambda$. M1 convert to eV. A1 $3.88\\text{ eV}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "The photon energy ($3.88\\text{ eV}$) is greater than the work function ($2.28\\text{ eV}$).",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 $E > \\Phi$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$E_{k,\\max} = E - \\Phi = 3.88 - 2.28 = 1.60\\text{ eV}$\n$E_{k,\\max} = 1.60 \\times 1.60 \\times 10^{-19} = 2.56 \\times 10^{-19}\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $E - \\Phi$. A1 $2.56 \\times 10^{-19}\\text{ J}$."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "$V_s = \\frac{E_{k,\\max}}{e} = 1.60\\text{ V}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 stopping potential equation. A1 $1.60\\text{ V}$."
        }
      ],
      "verificationSummary": "Verified: hc/λ = 6.216×10⁻¹⁹ J = 3.885 eV; Ek_max = 3.885 - 2.28 = 1.605 eV = 2.568×10⁻¹⁹ J; Vs = 1.60 V."
    }
  },
  {
    "id": "edexcel-4ph1-density",
    "label": "Edexcel 4PH1/1P Physics — Hydrostatic Pressure & Manometers",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "4PH1/1P",
    "paperTitle": "International GCSE Physics Paper 1P",
    "topic": "Fluids, Density & Hydrostatic Pressure",
    "sourceQuestionText": "A vertical U-tube containing liquid mercury of density $\\rho = 13600\\text{ kg/m}^3$ is connected to a gas supply. The difference in mercury column height between the two limbs is $h = 0.150\\text{ m}$. Atmospheric pressure is $p_0 = 1.01 \\times 10^5\\text{ Pa}$ ($g = 9.81\\text{ N/kg}$).\n(a) State the equation linking pressure difference, height, density and $g$. [1]\n(b) Calculate the pressure difference represented by the $0.150\\text{ m}$ mercury column. [2]\n(c) Calculate the absolute pressure of the gas supply. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "4PH1/1P",
        "paperTitle": "International GCSE Physics Paper 1P",
        "topic": "Fluids, Density & Hydrostatic Pressure",
        "totalMarks": 5,
        "timeAllowed": "8 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 6,
      "questionStem": "A U-tube manometer contains an oil of density $\\rho = 850\\text{ kg/m}^3$. One side is open to the atmosphere ($p_0 = 1.01 \\times 10^5\\text{ Pa}$) and the other side is connected to a container of gas. The difference in oil level between the limbs is $0.240\\text{ m}$. Take $g = 9.81\\text{ N/kg}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State the equation linking hydrostatic pressure difference $\\Delta p$, height $h$, density $\\rho$ and $g$.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the pressure difference between the gas and the atmosphere.",
          "marks": 2,
          "workingLines": 3
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the absolute pressure of the gas in the container.",
          "marks": 2,
          "workingLines": 3
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\Delta p = \\rho g h$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 $\\Delta p = \\rho g h$ or words."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\Delta p = 850 \\times 9.81 \\times 0.240 = 2001\\text{ Pa} \\approx 2000\\text{ Pa}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 substitution. A1 $2000\\text{ Pa}$ or $2001\\text{ Pa}$ (or $2.00\\text{ kPa}$)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$p = p_0 + \\Delta p = 101,000 + 2001 = 103,001\\text{ Pa} = 1.03 \\times 10^5\\text{ Pa}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 add atmospheric pressure. A1 $1.03 \\times 10^5\\text{ Pa}$ (or $103\\text{ kPa}$)."
        }
      ],
      "verificationSummary": "Verified: Δp = 850 × 9.81 × 0.240 = 2001.24 Pa; p = 101000 + 2001 = 103001 Pa = 1.03 × 10⁵ Pa."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "4PH1/1P",
        "paperTitle": "International GCSE Physics Paper 1P",
        "topic": "Fluids, Density & Hydrostatic Pressure",
        "totalMarks": 5,
        "timeAllowed": "8 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 6,
      "questionStem": "A U-tube manometer contains water of density $\\rho = 1000\\text{ kg/m}^3$. One limb is open to the atmosphere ($p_0 = 1.01 \\times 10^5\\text{ Pa}$) and the other limb is connected to a gas supply. The difference in water height is $0.350\\text{ m}$. Take $g = 9.81\\text{ N/kg}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "State the equation linking hydrostatic pressure difference $\\Delta p$, height $h$, density $\\rho$ and $g$.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the pressure difference exerted by the water column.",
          "marks": 2,
          "workingLines": 3
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the absolute pressure of the gas supply.",
          "marks": 2,
          "workingLines": 3
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\Delta p = \\rho g h$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 $\\Delta p = \\rho g h$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\Delta p = 1000 \\times 9.81 \\times 0.350 = 3434\\text{ Pa} \\approx 3430\\text{ Pa}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 substitution. A1 $3430\\text{ Pa}$ or $3434\\text{ Pa}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$p = p_0 + \\Delta p = 101,000 + 3434 = 104,434\\text{ Pa} = 1.04 \\times 10^5\\text{ Pa}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $p_0 + \\Delta p$. A1 $1.04 \\times 10^5\\text{ Pa}$ (or $104\\text{ kPa}$)."
        }
      ],
      "verificationSummary": "Verified: Δp = 1000 × 9.81 × 0.350 = 3433.5 Pa; p = 101000 + 3433.5 = 104433.5 Pa = 1.04 × 10⁵ Pa."
    }
  },
  {
    "id": "caie-5070-stoichiometry",
    "label": "CAIE 5070/22 O-Level Chemistry — Acid-Base Titration & Moles",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5070/22",
    "paperTitle": "Chemistry — Paper 2 Theory",
    "topic": "Stoichiometry, Quantitative Chemistry & Titrations",
    "sourceQuestionText": "A student titrates $25.0\\text{ cm}^3$ of sodium hydroxide solution, $\\text{NaOH}$, against hydrochloric acid of concentration $0.120\\text{ mol/dm}^3$.\n$$\\text{HCl(aq)} + \\text{NaOH(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$$\nThe average titre of $\\text{HCl}$ needed for neutralisation is $22.50\\text{ cm}^3$.\n(a) Calculate the number of moles of $\\text{HCl}$ used. [2]\n(b) Determine the concentration of the $\\text{NaOH}$ solution in $\\text{mol/dm}^3$. [2]\n(c) Calculate the concentration of the $\\text{NaOH}$ solution in $\\text{g/dm}^3$. ($M_r\\text{ of NaOH} = 40.0$) [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5070/22",
        "paperTitle": "Chemistry — Paper 2 Theory",
        "topic": "Stoichiometry, Quantitative Chemistry & Titrations",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 4,
      "questionStem": "A student titrates $25.0\\text{ cm}^3$ of sodium hydroxide solution, $\\text{NaOH(aq)}$, with sulfuric acid, $\\text{H}_2\\text{SO}_4\\text{(aq)}$, of unknown concentration.\n$$\\text{H}_2\\text{SO}_4\\text{(aq)} + 2\\text{NaOH(aq)} \\rightarrow \\text{Na}_2\\text{SO}_4\\text{(aq)} + 2\\text{H}_2\\text{O(l)}$$\nThe student finds that $18.75\\text{ cm}^3$ of sulfuric acid exactly neutralises $25.0\\text{ cm}^3$ of $0.150\\text{ mol/dm}^3\\ \\text{NaOH}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the amount in moles of $\\text{NaOH}$ in $25.0\\text{ cm}^3$ of the solution.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Determine the concentration of the sulfuric acid in $\\text{mol/dm}^3$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the concentration of the sulfuric acid in $\\text{g/dm}^3$. ($A_r: \\text{H}=1.0, \\text{S}=32.1, \\text{O}=16.0$)",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$n(\\text{NaOH}) = \\frac{25.0}{1000} \\times 0.150 = 0.00375\\text{ mol}$ ($3.75 \\times 10^{-3}\\text{ mol}$)",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 volume in dm³ × conc. A1 $0.00375\\text{ mol}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n(\\text{H}_2\\text{SO}_4) = \\frac{0.00375}{2} = 0.001875\\text{ mol}$\n$\\text{Concentration} = \\frac{0.001875}{18.75 / 1000} = 0.100\\text{ mol/dm}^3$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 1:2 mole ratio. A1 $0.100\\text{ mol/dm}^3$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$M_r(\\text{H}_2\\text{SO}_4) = 2(1.0) + 32.1 + 4(16.0) = 98.1\\text{ g/mol}$\n$\\text{Concentration} = 0.100 \\times 98.1 = 9.81\\text{ g/dm}^3$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 calculate $M_r = 98.1$. A1 $9.81\\text{ g/dm}^3$."
        }
      ],
      "verificationSummary": "Verified: 0.025 × 0.150 = 0.00375 mol NaOH; 0.00375 / 2 = 0.001875 mol H2SO4; conc = 0.001875 / 0.01875 = 0.100 mol/dm³; mass conc = 0.100 × 98.1 = 9.81 g/dm³."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5054/22",
        "paperTitle": "Chemistry — Paper 2 Theory",
        "topic": "Stoichiometry, Quantitative Chemistry & Titrations",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 4,
      "questionStem": "A student titrates $25.0\\text{ cm}^3$ of potassium hydroxide solution, $\\text{KOH(aq)}$, with $0.200\\text{ mol/dm}^3$ hydrochloric acid, $\\text{HCl(aq)}$.\n$$\\text{HCl(aq)} + \\text{KOH(aq)} \\rightarrow \\text{KCl(aq)} + \\text{H}_2\\text{O(l)}$$\nThe volume of $\\text{HCl}$ required for complete neutralisation is $20.00\\text{ cm}^3$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the amount in moles of $\\text{HCl}$ used in the titration.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Determine the concentration of the potassium hydroxide solution in $\\text{mol/dm}^3$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the concentration of the $\\text{KOH}$ solution in $\\text{g/dm}^3$. ($A_r: \\text{K}=39.1, \\text{O}=16.0, \\text{H}=1.0$)",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$n(\\text{HCl}) = \\frac{20.00}{1000} \\times 0.200 = 0.00400\\text{ mol}$ ($4.00 \\times 10^{-3}\\text{ mol}$)",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 volume in dm³ × conc. A1 $0.00400\\text{ mol}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "Mole ratio is 1:1 $\\Rightarrow n(\\text{KOH}) = 0.00400\\text{ mol}$\n$\\text{Concentration} = \\frac{0.00400}{25.0 / 1000} = 0.160\\text{ mol/dm}^3$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 1:1 ratio. A1 $0.160\\text{ mol/dm}^3$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$M_r(\\text{KOH}) = 39.1 + 16.0 + 1.0 = 56.1\\text{ g/mol}$\n$\\text{Concentration} = 0.160 \\times 56.1 = 8.98\\text{ g/dm}^3$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $M_r = 56.1$. A1 $8.98\\text{ g/dm}^3$ (accept $8.976$)."
        }
      ],
      "verificationSummary": "Verified: 0.0200 × 0.200 = 0.00400 mol HCl = mol KOH; conc = 0.004 / 0.025 = 0.160 mol/dm³; mass conc = 0.160 × 56.1 = 8.976 g/dm³ ≈ 8.98 g/dm³."
    }
  },
  {
    "id": "caie-5070-energetics",
    "label": "CAIE 5070/22 O-Level Chemistry — Bond Energies & Enthalpy",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "5070/22",
    "paperTitle": "Chemistry — Paper 2 Theory",
    "topic": "Chemical Energetics & Bond Energies",
    "sourceQuestionText": "Hydrogen and chlorine react according to the equation:\n$$\\text{H}_2\\text{(g)} + \\text{Cl}_2\\text{(g)} \\rightarrow 2\\text{HCl(g)}$$\nBond energies: $\\text{H}-\\text{H} = 436\\text{ kJ/mol}$, $\\text{Cl}-\\text{Cl} = 242\\text{ kJ/mol}$, $\\text{H}-\\text{Cl} = 431\\text{ kJ/mol}$.\n(a) Calculate the total energy absorbed to break bonds. [2]\n(b) Calculate the total energy released when new bonds form. [1]\n(c) Calculate the enthalpy change $\\Delta H$ for the reaction and state whether it is exothermic or endothermic. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5070/22",
        "paperTitle": "Chemistry — Paper 2 Theory",
        "topic": "Chemical Energetics & Bond Energies",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 5,
      "questionStem": "Methane combusts in oxygen according to the equation:\n$$\\text{CH}_4\\text{(g)} + 2\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\text{H}_2\\text{O(g)}$$\nBond energies (in $\\text{kJ/mol}$): $\\text{C}-\\text{H} = 412$, $\\text{O}=\\text{O} = 496$, $\\text{C}=\\text{O} = 743$, $\\text{O}-\\text{H} = 463$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the total energy absorbed in breaking all bonds in the reactants.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the total energy released when all bonds in the products are formed.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the enthalpy change of the reaction, $\\Delta H$, and state with a reason whether the reaction is exothermic or endothermic.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{Bonds broken} = 4(\\text{C}-\\text{H}) + 2(\\text{O}=\\text{O})$\n$= 4(412) + 2(496) = 1648 + 992 = +2640\\text{ kJ/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $4(412) + 2(496)$. A1 $+2640\\text{ kJ/mol}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\text{Bonds formed} = 2(\\text{C}=\\text{O}) + 4(\\text{O}-\\text{H})$\n$= 2(743) + 4(463) = 1486 + 1852 = 3338\\text{ kJ/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $2(743) + 4(463)$. A1 $3338\\text{ kJ/mol}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\Delta H = \\text{Bonds broken} - \\text{Bonds formed} = 2640 - 3338 = -698\\text{ kJ/mol}$\nExothermic because $\\Delta H$ is negative (more energy released than absorbed).",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $\\Delta H = -698\\text{ kJ/mol}$. A1 exothermic with correct reasoning."
        }
      ],
      "verificationSummary": "Verified: Reactants: 4(412) + 2(496) = 2640 kJ. Products: 2(743) + 4(463) = 3338 kJ. ΔH = 2640 - 3338 = -698 kJ/mol. Exothermic."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "5070/22",
        "paperTitle": "Chemistry — Paper 2 Theory",
        "topic": "Chemical Energetics & Bond Energies",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 5,
      "questionStem": "Ammonia is synthesized in the Haber process according to the equation:\n$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$$\nBond energies (in $\\text{kJ/mol}$): $\\text{N}\\equiv\\text{N} = 945$, $\\text{H}-\\text{H} = 436$, $\\text{N}-\\text{H} = 391$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the energy absorbed to break all bonds in the reactant molecules.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the energy released when bonds are formed in the ammonia product.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate $\\Delta H$ for this reaction and state whether the process is exothermic or endothermic.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{Bonds broken} = 1(\\text{N}\\equiv\\text{N}) + 3(\\text{H}-\\text{H})$\n$= 945 + 3(436) = 945 + 1308 = +2253\\text{ kJ/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $945 + 3(436)$. A1 $+2253\\text{ kJ/mol}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\text{Bonds formed} = 6(\\text{N}-\\text{H}) = 6 \\times 391 = 2346\\text{ kJ/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $6 \\times 391$. A1 $2346\\text{ kJ/mol}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\Delta H = 2253 - 2346 = -93\\text{ kJ/mol}$\nExothermic as $\\Delta H < 0$.",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $-93\\text{ kJ/mol}$. A1 exothermic."
        }
      ],
      "verificationSummary": "Verified: Reactants: 945 + 3(436) = 2253 kJ. Products: 6(391) = 2346 kJ. ΔH = 2253 - 2346 = -93 kJ/mol. Consistent with industrial Haber process data."
    }
  },
  {
    "id": "caie-9701-equilibria",
    "label": "CAIE 9701/22 AS-Level Chemistry — Equilibrium Constant Kc",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9701/22",
    "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
    "topic": "Chemical Equilibria & Kc Calculations",
    "sourceQuestionText": "Ethanol and ethanoic acid react reversibly in the presence of an acid catalyst:\n$$\\text{CH}_3\\text{COOH(l)} + \\text{C}_2\\text{H}_5\\text{OH(l)} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5\\text{(l)} + \\text{H}_2\\text{O(l)}$$\nInitially, $1.00\\text{ mol}$ of ethanoic acid is mixed with $2.00\\text{ mol}$ of ethanol. At equilibrium at $298\\text{ K}$, $0.80\\text{ mol}$ of ethyl ethanoate is present.\n(a) Write the expression for the equilibrium constant $K_c$. [1]\n(b) State the equilibrium amounts of ethanoic acid, ethanol, and water. [3]\n(c) Calculate the value of $K_c$ at this temperature. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9701/22",
        "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
        "topic": "Chemical Equilibria & Kc Calculations",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 3,
      "questionStem": "Ethanoic acid and ethanol react at $298\\text{ K}$ according to:\n$$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$$\nA mixture of $1.50\\text{ mol}$ ethanoic acid and $1.50\\text{ mol}$ ethanol is allowed to reach equilibrium in a sealed flask of volume $V$. At equilibrium, $1.00\\text{ mol}$ of ethyl ethanoate is formed.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Write the expression for the equilibrium constant $K_c$ for this reaction.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "State the equilibrium amount, in moles, of ethanoic acid, ethanol, and water.",
          "marks": 3,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the value of $K_c$ and state its units, if any.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$K_c = \\frac{[\\text{CH}_3\\text{COOC}_2\\text{H}_5][\\text{H}_2\\text{O}]}{[\\text{CH}_3\\text{COOH}][\\text{C}_2\\text{H}_5\\text{OH}]}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 correct expression using square brackets."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n(\\text{water}) = 1.00\\text{ mol}$\n$n(\\text{acid}) = 1.50 - 1.00 = 0.50\\text{ mol}$\n$n(\\text{ethanol}) = 1.50 - 1.00 = 0.50\\text{ mol}$",
          "markAllocation": "B1 B1 B1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 for each correct equilibrium mole value."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$K_c = \\frac{(1.00)(1.00)}{(0.50)(0.50)} = \\frac{1.00}{0.25} = 4.00$\nUnits: no units (dimensionless).",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 substitution into $K_c$. A1 $4.0$ or $4.00$ with no units."
        }
      ],
      "verificationSummary": "Verified: Initial: 1.50, 1.50. Change: -1.00, -1.00, +1.00, +1.00. Eqm: 0.50, 0.50, 1.00, 1.00. Volumes cancel. Kc = (1×1)/(0.5×0.5) = 4.00."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9701/22",
        "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
        "topic": "Chemical Equilibria & Kc Calculations",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 3,
      "questionStem": "At $298\\text{ K}$, a mixture of $2.00\\text{ mol}$ of ethanoic acid and $1.00\\text{ mol}$ of ethanol is allowed to reach equilibrium in a sealed vessel.\n$$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$$\nAt equilibrium, $0.80\\text{ mol}$ of ethyl ethanoate is present.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Write the expression for the equilibrium constant $K_c$.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(b)",
          "questionText": "State the equilibrium amount, in moles, of ethanoic acid, ethanol, and water.",
          "marks": 3,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the value of $K_c$ to 3 significant figures.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$K_c = \\frac{[\\text{CH}_3\\text{COOC}_2\\text{H}_5][\\text{H}_2\\text{O}]}{[\\text{CH}_3\\text{COOH}][\\text{C}_2\\text{H}_5\\text{OH}]}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 correct expression."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n(\\text{water}) = 0.80\\text{ mol}$\n$n(\\text{acid}) = 2.00 - 0.80 = 1.20\\text{ mol}$\n$n(\\text{ethanol}) = 1.00 - 0.80 = 0.20\\text{ mol}$",
          "markAllocation": "B1 B1 B1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 each correct mole value."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$K_c = \\frac{(0.80)(0.80)}{(1.20)(0.20)} = \\frac{0.64}{0.24} = 2.67$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 substitution. A1 $2.67$ (or $8/3$)."
        }
      ],
      "verificationSummary": "Verified: Eqm moles: acid = 1.20, ethanol = 0.20, ester = 0.80, water = 0.80. Kc = 0.64 / 0.24 = 2.6667 ≈ 2.67."
    }
  },
  {
    "id": "caie-9701-organic",
    "label": "CAIE 9701/22 AS-Level Chemistry — Halogenoalkanes & Mechanisms",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9701/22",
    "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
    "topic": "Organic Reaction Mechanisms — Nucleophilic Substitution",
    "sourceQuestionText": "Bromoethane reacts with aqueous sodium hydroxide under reflux.\n(a) Write the chemical equation for this reaction and state the role of the hydroxide ion. [2]\n(b) Draw the curly arrow mechanism for this reaction, showing dipole charges and the transition state ($S_N2$). [3]\n(c) Explain why 2-bromo-2-methylpropane undergoes substitution via an $S_N1$ mechanism rather than $S_N2$. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9701/22",
        "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
        "topic": "Organic Reaction Mechanisms — Nucleophilic Substitution",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 4,
      "questionStem": "1-bromopropane reacts with aqueous sodium hydroxide under reflux to produce propan-1-ol.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Write the equation for this reaction and state the role of the hydroxide ion.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Outline the $S_N2$ mechanism for this reaction, including curly arrows, partial charges, and the transition state.",
          "marks": 3,
          "workingLines": 6
        },
        {
          "partLabel": "(c)",
          "questionText": "Explain why the tertiary halogenoalkane 2-bromo-2-methylpropane reacts predominantly by the $S_N1$ mechanism.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} + \\text{Br}^-$\nRole of $\\text{OH}^-$: Nucleophile (electron-pair donor).",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 correct equation. B1 nucleophile."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "1. Curly arrow from lone pair of $:\\text{OH}^-$ to $\\delta^+ \\text{C}$ atom.\n2. Curly arrow from $\\text{C}-\\text{Br}$ bond to $\\text{Br}$ atom with $\\delta^-$.\n3. Transition state showing partial bonds to incoming $\\text{OH}$ and outgoing $\\text{Br}$ with negative charge.",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 dipole and curly arrow from OH-. M1 C-Br bond cleavage arrow. A1 valid transition state."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "1. The tertiary carbocation intermediate is stabilised by the positive inductive effect (+I) of three electron-releasing methyl groups.\n2. Steric hindrance prevents backside nucleophilic attack required for $S_N2$.",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 carbocation stability via inductive effect. B1 steric hindrance."
        }
      ],
      "verificationSummary": "Verified: 1-bromopropane is primary ⇒ SN2 backside attack. 2-bromo-2-methylpropane is tertiary ⇒ stable carbocation + steric shielding ⇒ SN1 mechanism."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9701/22",
        "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
        "topic": "Organic Reaction Mechanisms — Nucleophilic Substitution",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 4,
      "questionStem": "2-chlorobutane reacts with hydroxide ions under two different reaction conditions to form either butan-2-ol or but-2-ene.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Reaction with hot ethanolic $\\text{KOH}$ yields but-2-ene. Name the type of reaction and state the role of $\\text{OH}^-$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Explain why but-2-ene exhibits geometric (cis/trans or E/Z) isomerism.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Reaction with warm aqueous $\\text{KOH}$ yields butan-2-ol. Identify the type of reaction and explain why the resulting alcohol mixture has no optical activity.",
          "marks": 3,
          "workingLines": 6
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "Reaction type: Elimination (or dehydrohalogenation).\nRole of $\\text{OH}^-$: Base (proton acceptor).",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 elimination. B1 base."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "1. Restricted rotation around the $\\text{C}=\\text{C}$ double bond (due to $\\pi$-orbital overlap).\n2. Each carbon atom of the $\\text{C}=\\text{C}$ double bond is attached to two different groups ($-\\text{H}$ and $-\\text{CH}_3$).",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 restricted rotation. B1 two different groups on each carbon."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "Reaction type: Nucleophilic substitution.\nThe planar carbocation intermediate in $S_N1$ can be attacked equally from either face with 50% probability, forming an equimolar racemic mixture of enantiomers where opposite optical rotations cancel out.",
          "markAllocation": "B1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 nucleophilic substitution. M1 attack from either face of planar carbocation. A1 racemic mixture / zero net rotation."
        }
      ],
      "verificationSummary": "Verified: Ethanolic OH- acts as base ⇒ elimination to alkene. Aqueous OH- acts as nucleophile ⇒ substitution. Planar carbocation ⇒ equal probability of face attack ⇒ racemic mixture."
    }
  },
  {
    "id": "caie-9701-enthalpy",
    "label": "CAIE 9701/22 AS-Level Chemistry — Hess's Law & Enthalpies of Formation",
    "examBoard": "CAIE (Cambridge)",
    "syllabusCode": "9701/22",
    "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
    "topic": "Chemical Energetics — Hess's Law & Enthalpy of Formation",
    "sourceQuestionText": "Standard enthalpies of formation: $\\Delta H_f^\\ominus[\\text{C}_2\\text{H}_4\\text{(g)}] = +52.3\\text{ kJ/mol}$, $\\Delta H_f^\\ominus[\\text{CO}_2\\text{(g)}] = -393.5\\text{ kJ/mol}$, $\\Delta H_f^\\ominus[\\text{H}_2\\text{O(l)}] = -285.8\\text{ kJ/mol}$.\n(a) Define standard enthalpy of formation. [2]\n(b) Write the balanced chemical equation for the standard combustion of ethene, $\\text{C}_2\\text{H}_4\\text{(g)}$. [1]\n(c) Use Hess's Law to calculate the standard enthalpy of combustion $\\Delta H_c^\\ominus[\\text{C}_2\\text{H}_4\\text{(g)}]$. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9701/22",
        "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
        "topic": "Chemical Energetics — Hess's Law & Enthalpy of Formation",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 5,
      "questionStem": "Standard enthalpies of formation $\\Delta H_f^\\ominus$ at $298\\text{ K}$ are:\n$\\Delta H_f^\\ominus[\\text{C}_3\\text{H}_6\\text{(g)}] = +20.4\\text{ kJ/mol}$, $\\Delta H_f^\\ominus[\\text{CO}_2\\text{(g)}] = -393.5\\text{ kJ/mol}$, $\\Delta H_f^\\ominus[\\text{H}_2\\text{O(l)}] = -285.8\\text{ kJ/mol}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Define standard enthalpy change of formation, $\\Delta H_f^\\ominus$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Write the balanced chemical equation, including state symbols, for the complete combustion of 1 mole of propene, $\\text{C}_3\\text{H}_6\\text{(g)}$.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(c)",
          "questionText": "Use Hess's Law to calculate the standard enthalpy change of combustion, $\\Delta H_c^\\ominus[\\text{C}_3\\text{H}_6\\text{(g)}]$.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "The enthalpy change when 1 mole of a compound is formed from its constituent elements in their standard states under standard conditions ($100\\text{ kPa}, 298\\text{ K}$).",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 1 mole of compound from constituent elements. B1 standard states & conditions."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\text{C}_3\\text{H}_6\\text{(g)} + \\frac{9}{2}\\text{O}_2\\text{(g)} \\rightarrow 3\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(l)}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 balanced equation with state symbols (accept 4.5 O₂)."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\Delta H_c^\\ominus = \\sum \\Delta H_f^\\ominus(\\text{products}) - \\sum \\Delta H_f^\\ominus(\\text{reactants})$\n$= [3(-393.5) + 3(-285.8)] - [+20.4]$\n$= [-1180.5 - 857.4] - 20.4 = -2037.9 - 20.4 = -2058.3\\text{ kJ/mol}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 Hess cycle equation. M1 arithmetic calculation. A1 $-2058.3\\text{ kJ/mol}$ (or $-2058$)."
        }
      ],
      "verificationSummary": "Verified: 3(-393.5) + 3(-285.8) - 20.4 = -1180.5 - 857.4 - 20.4 = -2058.3 kJ/mol. Correct propene combustion value."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "CAIE (Cambridge)",
        "syllabusCode": "9701/22",
        "paperTitle": "Chemistry — Paper 2 AS Level Structured Questions",
        "topic": "Chemical Energetics — Hess's Law & Enthalpy of Formation",
        "totalMarks": 6,
        "timeAllowed": "10 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 5,
      "questionStem": "Standard enthalpies of formation $\\Delta H_f^\\ominus$ at $298\\text{ K}$ are:\n$\\Delta H_f^\\ominus[\\text{C}_2\\text{H}_5\\text{OH(l)}] = -277.7\\text{ kJ/mol}$, $\\Delta H_f^\\ominus[\\text{CO}_2\\text{(g)}] = -393.5\\text{ kJ/mol}$, $\\Delta H_f^\\ominus[\\text{H}_2\\text{O(l)}] = -285.8\\text{ kJ/mol}$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Define standard enthalpy change of combustion, $\\Delta H_c^\\ominus$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Write the balanced chemical equation for the standard combustion of 1 mole of liquid ethanol, $\\text{C}_2\\text{H}_5\\text{OH(l)}$.",
          "marks": 1,
          "workingLines": 2
        },
        {
          "partLabel": "(c)",
          "questionText": "Use Hess's Law to calculate the standard enthalpy change of combustion of ethanol.",
          "marks": 3,
          "workingLines": 5
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "The enthalpy change when 1 mole of a substance is burned completely in excess oxygen under standard conditions ($100\\text{ kPa}, 298\\text{ K}$) with all reactants and products in standard states.",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 1 mole of substance completely burned in oxygen. B1 standard conditions."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$\\text{C}_2\\text{H}_5\\text{OH(l)} + 3\\text{O}_2\\text{(g)} \\rightarrow 2\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(l)}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 balanced equation with state symbols."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\Delta H_c^\\ominus = [2(-393.5) + 3(-285.8)] - [-277.7]$\n$= [-787.0 - 857.4] + 277.7$\n$= -1644.4 + 277.7 = -1366.7\\text{ kJ/mol}$",
          "markAllocation": "M1 M1 A1",
          "totalPartMarks": 3,
          "examinerGuidance": "M1 Hess cycle setup. M1 evaluation. A1 $-1366.7\\text{ kJ/mol}$ (accept $-1367$)."
        }
      ],
      "verificationSummary": "Verified: 2(-393.5) + 3(-285.8) - (-277.7) = -787.0 - 857.4 + 277.7 = -1366.7 kJ/mol. Literature value -1367 kJ/mol."
    }
  },
  {
    "id": "edexcel-wch11-moles",
    "label": "Edexcel WCH11/01 Chemistry Unit 1 — Ideal Gas Equation pV = nRT",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WCH11/01",
    "paperTitle": "International Advanced Level Chemistry Unit 1: Structure, Bonding and Intro Organic",
    "topic": "Moles & Ideal Gas Equation pV = nRT",
    "sourceQuestionText": "A sample of a volatile liquid of mass $0.284\\text{ g}$ is vaporised in a gas syringe at $98^\\circ\\text{C}$ and $1.01 \\times 10^5\\text{ Pa}$. The volume of vapour collected is $84.0\\text{ cm}^3$. ($R = 8.31\\text{ J}/(\\text{mol}\\cdot\\text{K})$)\n(a) Convert the temperature to kelvin and volume to $\\text{m}^3$. [2]\n(b) Calculate the amount in moles of gas in the syringe. [2]\n(c) Calculate the molar mass of the compound. [2]\n(d) The empirical formula of the compound is $\\text{CH}_2\\text{Cl}$. Deduce its molecular formula. ($A_r: \\text{C}=12.0, \\text{H}=1.0, \\text{Cl}=35.5$) [1]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WCH11/01",
        "paperTitle": "International Advanced Level Chemistry Unit 1: Structure, Bonding and Intro Organic",
        "topic": "Moles & Ideal Gas Equation pV = nRT",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 7,
      "questionStem": "A sample of an unknown volatile organic liquid of mass $0.220\\text{ g}$ is completely vaporised at $80^\\circ\\text{C}$ and a pressure of $1.00 \\times 10^5\\text{ Pa}$. The volume of vapour produced is $72.5\\text{ cm}^3$. Take $R = 8.31\\text{ J}/(\\text{mol}\\cdot\\text{K})$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Convert the temperature to kelvin and the volume to $\\text{m}^3$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the amount, in moles, of the gas present in the syringe.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the molar mass of the liquid to 3 significant figures.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "The compound has empirical formula $\\text{C}_2\\text{H}_4\\text{O}$. Determine its molecular formula. ($A_r: \\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)",
          "marks": 1,
          "workingLines": 2
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$T = 80 + 273 = 353\\text{ K}$\n$V = 72.5 \\times 10^{-6}\\text{ m}^3$ ($7.25 \\times 10^{-5}\\text{ m}^3$)",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 353 K. B1 7.25 × 10⁻⁵ m³."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n = \\frac{pV}{RT} = \\frac{(1.00 \\times 10^5)(7.25 \\times 10^{-5})}{(8.31)(353)} = \\frac{7.25}{2933.4} = 2.47 \\times 10^{-3}\\text{ mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $pV / RT$ with units. A1 $2.47 \\times 10^{-3}\\text{ mol}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$M = \\frac{m}{n} = \\frac{0.220}{2.472 \\times 10^{-3}} = 89.0\\text{ g/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $m/n$. A1 $89.0\\text{ g/mol}$ (accept $88$–$90$)."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "Empirical formula mass $= 2(12.0) + 4(1.0) + 16.0 = 44.0\\text{ g/mol}$\n$\\frac{89.0}{44.0} \\approx 2 \\Rightarrow \\text{Molecular formula} = \\text{C}_4\\text{H}_8\\text{O}_2$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 $\\text{C}_4\\text{H}_8\\text{O}_2$."
        }
      ],
      "verificationSummary": "Verified: pV/RT = 7.25 / (8.31 × 353) = 0.002472 mol; M = 0.220 / 0.002472 = 89.0 g/mol; 89 / 44 = 2.02 ⇒ C4H8O2 (ethyl ethanoate Mr = 88.1)."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WCH11/01",
        "paperTitle": "International Advanced Level Chemistry Unit 1: Structure, Bonding and Intro Organic",
        "topic": "Moles & Ideal Gas Equation pV = nRT",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 7,
      "questionStem": "A sample of a volatile hydrocarbon of mass $0.180\\text{ g}$ is vaporised in a gas syringe at $90^\\circ\\text{C}$ and $1.02 \\times 10^5\\text{ Pa}$. The volume of vapour collected is $64.0\\text{ cm}^3$. Take $R = 8.31\\text{ J}/(\\text{mol}\\cdot\\text{K})$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Convert the temperature to kelvin and the volume to $\\text{m}^3$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the amount, in moles, of gas present in the syringe.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the molar mass of the hydrocarbon.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "The empirical formula is $\\text{CH}_2$. Determine its molecular formula. ($A_r: \\text{C}=12.0, \\text{H}=1.0$)",
          "marks": 1,
          "workingLines": 2
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$T = 90 + 273 = 363\\text{ K}$\n$V = 64.0 \\times 10^{-6}\\text{ m}^3$ ($6.40 \\times 10^{-5}\\text{ m}^3$)",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 363 K. B1 6.40 × 10⁻⁵ m³."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n = \\frac{pV}{RT} = \\frac{(1.02 \\times 10^5)(6.40 \\times 10^{-5})}{(8.31)(363)} = \\frac{6.528}{3016.5} = 2.16 \\times 10^{-3}\\text{ mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 ideal gas equation. A1 $2.16 \\times 10^{-3}\\text{ mol}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$M = \\frac{m}{n} = \\frac{0.180}{2.164 \\times 10^{-3}} = 83.2\\text{ g/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $m/n$. A1 $83.2\\text{ g/mol}$ (accept $83$–$85$)."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "Empirical mass $= 12.0 + 2(1.0) = 14.0\\text{ g/mol}$\n$\\frac{83.2}{14.0} \\approx 6 \\Rightarrow \\text{Molecular formula} = \\text{C}_6\\text{H}_{12}$",
          "markAllocation": "B1",
          "totalPartMarks": 1,
          "examinerGuidance": "B1 $\\text{C}_6\\text{H}_{12}$."
        }
      ],
      "verificationSummary": "Verified: n = 6.528 / 3016.5 = 2.164×10⁻³ mol; M = 0.180 / 2.164×10⁻³ = 83.2 g/mol; 83.2 / 14 = 5.94 ⇒ C6H12 (cyclohexane Mr = 84.2)."
    }
  },
  {
    "id": "edexcel-wch12-energetics",
    "label": "Edexcel WCH12/01 Chemistry Unit 2 — Calorimetry & Enthalpy of Neutralisation",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "WCH12/01",
    "paperTitle": "International Advanced Level Chemistry Unit 2: Energetics, Group 7 and Rates",
    "topic": "Energetics & Enthalpy of Neutralisation",
    "sourceQuestionText": "In a coffee-cup calorimeter, $50.0\\text{ cm}^3$ of $1.00\\text{ mol/dm}^3\\ \\text{HCl}$ is mixed with $50.0\\text{ cm}^3$ of $1.00\\text{ mol/dm}^3\\ \\text{NaOH}$. Both solutions are initially at $21.5^\\circ\\text{C}$. The maximum temperature reached is $28.0^\\circ\\text{C}$. ($c = 4.18\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$, density of mixture $= 1.00\\text{ g/cm}^3$)\n(a) Calculate the heat energy $q$ released in the reaction. [2]\n(b) Calculate the amount in moles of water formed. [2]\n(c) Calculate the molar enthalpy of neutralisation $\\Delta H_{\\text{neut}}$ in $\\text{kJ/mol}$. [2]\n(d) Explain one source of error and state whether it makes the calculated $\\Delta H$ more or less negative. [2]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WCH12/01",
        "paperTitle": "International Advanced Level Chemistry Unit 2: Energetics, Group 7 and Rates",
        "topic": "Energetics & Enthalpy of Neutralisation",
        "totalMarks": 8,
        "timeAllowed": "12 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 6,
      "questionStem": "In a calorimetry experiment, $50.0\\text{ cm}^3$ of $2.00\\text{ mol/dm}^3\\ \\text{HNO}_3$ is mixed with $50.0\\text{ cm}^3$ of $2.00\\text{ mol/dm}^3\\ \\text{KOH}$ in an expanded polystyrene cup. Both solutions are initially at $20.0^\\circ\\text{C}$, and the maximum temperature reached is $33.5^\\circ\\text{C}$. Assume specific heat capacity $c = 4.18\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$ and density of the reaction mixture $= 1.00\\text{ g/cm}^3$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the heat energy $q$, in joules, evolved during the reaction.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the amount, in moles, of water formed.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the standard molar enthalpy of neutralisation, $\\Delta H_{\\text{neut}}$, in $\\text{kJ/mol}$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "State one source of heat loss in this experiment and state whether it makes the calculated $\\Delta H_{\\text{neut}}$ more or less negative than the data book value.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$m = 50.0 + 50.0 = 100.0\\text{ g}$\n$\\Delta T = 33.5 - 20.0 = 13.5^\\circ\\text{C}$\n$q = mc\\Delta T = 100.0 \\times 4.18 \\times 13.5 = 5643\\text{ J} = 5.64\\text{ kJ}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $mc\\Delta T$. A1 $5643\\text{ J}$ or $5.64\\text{ kJ}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n = \\frac{50.0}{1000} \\times 2.00 = 0.100\\text{ mol}$ of water formed",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 mole calculation. A1 $0.100\\text{ mol}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\Delta H_{\\text{neut}} = -\\frac{q}{n} = -\\frac{5643\\text{ J}}{0.100\\text{ mol}} = -56,430\\text{ J/mol} = -56.4\\text{ kJ/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $-q/n$. A1 $-56.4\\text{ kJ/mol}$ (negative sign required)."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "Heat loss to the surroundings / beaker. This causes the measured $\\Delta T$ to be lower than theoretical, making the calculated $\\Delta H$ less negative.",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 heat loss identified. B1 less negative."
        }
      ],
      "verificationSummary": "Verified: q = 100 × 4.18 × 13.5 = 5643 J; n = 0.100 mol; ΔH = -56.4 kJ/mol. Consistent with standard strong acid-strong base neutralisation enthalpy (-57 kJ/mol)."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "WCH12/01",
        "paperTitle": "International Advanced Level Chemistry Unit 2: Energetics, Group 7 and Rates",
        "topic": "Energetics & Enthalpy of Neutralisation",
        "totalMarks": 8,
        "timeAllowed": "12 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 6,
      "questionStem": "In a calorimeter, $25.0\\text{ cm}^3$ of $1.50\\text{ mol/dm}^3\\ \\text{HCl}$ is mixed with $25.0\\text{ cm}^3$ of $1.50\\text{ mol/dm}^3\\ \\text{NaOH}$. The temperature rises from $22.0^\\circ\\text{C}$ to $31.8^\\circ\\text{C}$. Assume $c = 4.18\\text{ J}/(\\text{g}\\cdot^\\circ\\text{C})$ and density of mixture $= 1.00\\text{ g/cm}^3$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the heat energy $q$ released, in joules.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Calculate the amount, in moles, of water formed.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Calculate the molar enthalpy of neutralisation $\\Delta H_{\\text{neut}}$ in $\\text{kJ/mol}$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(d)",
          "questionText": "State why the heat capacity of the calorimeter causes experimental error, and state whether this makes the value more or less negative.",
          "marks": 2,
          "workingLines": 4
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$m = 25.0 + 25.0 = 50.0\\text{ g}$\n$\\Delta T = 31.8 - 22.0 = 9.8^\\circ\\text{C}$\n$q = mc\\Delta T = 50.0 \\times 4.18 \\times 9.8 = 2048.2\\text{ J} \\approx 2050\\text{ J}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $mc\\Delta T$. A1 $2048\\text{ J}$ or $2050\\text{ J}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "$n = \\frac{25.0}{1000} \\times 1.50 = 0.0375\\text{ mol}$ of water",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 mole calculation. A1 $0.0375\\text{ mol}$."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "$\\Delta H_{\\text{neut}} = -\\frac{2048.2\\text{ J}}{0.0375\\text{ mol}} = -54,619\\text{ J/mol} = -54.6\\text{ kJ/mol}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $-q/n$. A1 $-54.6\\text{ kJ/mol}$ (accept $-54.7$)."
        },
        {
          "partLabel": "(d)",
          "solutionSteps": "Heat absorbed by the calorimeter container is ignored, so total heat measured is lower than actual, making $\\Delta H$ less negative.",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 heat absorbed by container. B1 less negative."
        }
      ],
      "verificationSummary": "Verified: q = 50 × 4.18 × 9.8 = 2048.2 J; n = 0.0375 mol; ΔH = -2048.2 / 0.0375 = -54.62 kJ/mol."
    }
  },
  {
    "id": "edexcel-4ch1-rates",
    "label": "Edexcel 4CH1/1C Chemistry — Reaction Rates & Gas Volume Measurement",
    "examBoard": "Pearson Edexcel",
    "syllabusCode": "4CH1/1C",
    "paperTitle": "International GCSE Chemistry Paper 1C",
    "topic": "Kinetics, Rates of Reaction & Collision Theory",
    "sourceQuestionText": "Calcium carbonate reacts with excess dilute hydrochloric acid:\n$$\\text{CaCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$\nThe volume of $\\text{CO}_2$ gas collected in a gas syringe is measured at regular time intervals. In the first $40\\text{ s}$, $48\\text{ cm}^3$ of $\\text{CO}_2$ is produced. The reaction finishes at $150\\text{ s}$ with a total of $72\\text{ cm}^3$ of gas collected.\n(a) Calculate the average rate of reaction in the first $40\\text{ s}$ in $\\text{cm}^3/\\text{s}$. [2]\n(b) Explain why the rate of reaction is highest at the start of the experiment. [2]\n(c) The experiment is repeated at a higher temperature. Using collision theory, explain the effect of increasing temperature on the rate of reaction. [3]",
    "fallbackSetA": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "4CH1/1C",
        "paperTitle": "International GCSE Chemistry Paper 1C",
        "topic": "Kinetics, Rates of Reaction & Collision Theory",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set A"
      },
      "questionNumber": 5,
      "questionStem": "A student investigates the rate of reaction between magnesium ribbon and excess dilute hydrochloric acid:\n$$\\text{Mg(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{MgCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$$\nThe volume of hydrogen gas collected in a syringe is recorded over time. In the first $30.0\\text{ s}$, $36.0\\text{ cm}^3$ of hydrogen gas is collected. The total volume when reaction finishes is $60.0\\text{ cm}^3$.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the average rate of reaction during the first $30.0\\text{ s}$ in $\\text{cm}^3/\\text{s}$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Explain why the rate of reaction is fastest at the beginning of the reaction.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "Using particle collision theory, explain why increasing the temperature increases the rate of reaction.",
          "marks": 3,
          "workingLines": 6
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{Rate} = \\frac{\\Delta V}{\\Delta t} = \\frac{36.0\\text{ cm}^3}{30.0\\text{ s}} = 1.20\\text{ cm}^3/\\text{s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 volume divided by time. A1 $1.20\\text{ cm}^3/\\text{s}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "The concentration of hydrochloric acid particles is highest at the start, resulting in the highest collision frequency between $\\text{H}^+$ ions and magnesium atoms.",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 highest concentration of reactant particles. B1 highest collision frequency per second."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "1. Particles gain thermal energy and move faster, increasing collision frequency.\n2. A significantly greater proportion of colliding particles have energy equal to or exceeding the activation energy ($E_a$).\n3. This leads to a substantially greater frequency of successful/effective collisions.",
          "markAllocation": "B1 B1 B1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 particles have higher kinetic energy / collide more frequently. B1 greater fraction with $E \\ge E_a$. B1 more frequent successful collisions."
        }
      ],
      "verificationSummary": "Verified: Rate = 36.0 / 30.0 = 1.20 cm³/s. Collision theory: Maxwell-Boltzmann distribution explains exponential rate rise with temperature due to fraction E >= Ea."
    },
    "fallbackSetB": {
      "paperHeader": {
        "examBoard": "Pearson Edexcel",
        "syllabusCode": "4CH1/1C",
        "paperTitle": "International GCSE Chemistry Paper 1C",
        "topic": "Kinetics, Rates of Reaction & Collision Theory",
        "totalMarks": 7,
        "timeAllowed": "11 minutes",
        "variantSet": "Set B"
      },
      "questionNumber": 5,
      "questionStem": "Zinc granules react with excess dilute sulfuric acid:\n$$\\text{Zn(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{ZnSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$$\nIn the first $50.0\\text{ s}$, $45.0\\text{ cm}^3$ of hydrogen gas is collected in a gas syringe.",
      "parts": [
        {
          "partLabel": "(a)",
          "questionText": "Calculate the average rate of reaction over the first $50.0\\text{ s}$ in $\\text{cm}^3/\\text{s}$.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(b)",
          "questionText": "Explain why the rate of reaction decreases as time progresses.",
          "marks": 2,
          "workingLines": 4
        },
        {
          "partLabel": "(c)",
          "questionText": "The experiment is repeated using the same mass of zinc powder instead of zinc granules. State and explain the effect on the rate of reaction.",
          "marks": 3,
          "workingLines": 6
        }
      ],
      "markScheme": [
        {
          "partLabel": "(a)",
          "solutionSteps": "$\\text{Rate} = \\frac{45.0\\text{ cm}^3}{50.0\\text{ s}} = 0.900\\text{ cm}^3/\\text{s}$",
          "markAllocation": "M1 A1",
          "totalPartMarks": 2,
          "examinerGuidance": "M1 $45/50$. A1 $0.90\\text{ cm}^3/\\text{s}$ or $0.900\\text{ cm}^3/\\text{s}$."
        },
        {
          "partLabel": "(b)",
          "solutionSteps": "Acid particles are consumed, decreasing the concentration of acid, which reduces the frequency of collisions between reactant particles.",
          "markAllocation": "B1 B1",
          "totalPartMarks": 2,
          "examinerGuidance": "B1 concentration decreases. B1 lower collision frequency."
        },
        {
          "partLabel": "(c)",
          "solutionSteps": "1. The rate of reaction increases.\n2. Zinc powder has a greater total surface area to volume ratio.\n3. More zinc atoms are exposed simultaneously, leading to a higher frequency of successful collisions per unit time.",
          "markAllocation": "B1 B1 B1",
          "totalPartMarks": 3,
          "examinerGuidance": "B1 rate increases. B1 larger surface area. B1 higher collision frequency."
        }
      ],
      "verificationSummary": "Verified: Rate = 45 / 50 = 0.900 cm³/s. Surface area increases contact area directly proportional to collision frequency."
    }
  }
];

export function findPreset(id: string): PastPaperPreset | undefined {
  return PRESETS.find((p) => p.id === id);
}
