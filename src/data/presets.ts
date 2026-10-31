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
    value: "9709/12",
    label: "CAIE 9709/12 — A-Level Pure Mathematics 1",
    examBoard: "CAIE (Cambridge)",
    syllabusCode: "9709/12",
    paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
  },
  {
    value: "4024/12",
    label: "CAIE 4024/12 — O-Level Mathematics (Syllabus D)",
    examBoard: "CAIE (Cambridge)",
    syllabusCode: "4024/12",
    paperTitle: "Mathematics (Syllabus D) — Paper 1",
  },
  {
    value: "5054/22",
    label: "CAIE 5054/22 — O-Level Physics Paper 2 (Theory)",
    examBoard: "CAIE (Cambridge)",
    syllabusCode: "5054/22",
    paperTitle: "Physics — Paper 2 Theory",
  },
  {
    value: "9702/42",
    label: "CAIE 9702/42 — A-Level Physics Paper 4",
    examBoard: "CAIE (Cambridge)",
    syllabusCode: "9702/42",
    paperTitle: "Physics — Paper 4 A Level Structured Questions",
  },
  {
    value: "WMA11/01",
    label: "Edexcel WMA11/01 — International A-Level Pure Math 1",
    examBoard: "Pearson Edexcel",
    syllabusCode: "WMA11/01",
    paperTitle: "International Advanced Level Pure Mathematics P1",
  },
];

/* ------------------------------------------------------------------ */
/* Preset 1 — Quadratics & Tangents                                   */
/* ------------------------------------------------------------------ */
const quadratics: PastPaperPreset = {
  id: "caie-9709-quadratics",
  label: "CAIE 9709/12 Pure Math 1 — Quadratics & Tangents",
  examBoard: "CAIE (Cambridge)",
  syllabusCode: "9709/12",
  paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
  topic: "Quadratics & Tangents",
  sourceQuestionText:
    "The equation of a curve is $y = 2x^2 + kx + k - 1$, where $k$ is a constant.\n(a) Given that the line $y = 2x + 3$ is a tangent to the curve, find the value of $k$. [3]\n(b) Using this value of $k$, express $2x^2 + kx + k - 1$ in the form $2(x + a)^2 + b$, and state the coordinates of the vertex of the curve. [4]",
  fallbackSetA: {
    paperHeader: {
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "9709/12",
      paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
      topic: "Quadratics & Tangents",
      totalMarks: 7,
      timeAllowed: "12 minutes",
      variantSet: "Set A",
    },
    questionNumber: 1,
    questionStem:
      "The equation of a curve is $y = 3x^2 + mx + m + 2$, where $m$ is a positive constant.",
    parts: [
      {
        partLabel: "(a)",
        questionText:
          "Given that the line $y = 6x - 1$ is a tangent to the curve, find the value of $m$.",
        marks: 3,
        workingLines: 6,
      },
      {
        partLabel: "(b)",
        questionText:
          "Using this value of $m$, express $3x^2 + mx + m + 2$ in the form $3(x + a)^2 + b$, and state the coordinates of the vertex of the curve.",
        marks: 4,
        workingLines: 7,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps:
          "$3x^2 + mx + m + 2 = 6x - 1 \\Rightarrow 3x^2 + (m - 6)x + (m + 3) = 0$\nTangent $\\Rightarrow \\Delta = 0$: $(m - 6)^2 - 12(m + 3) = 0$\n$m^2 - 24m = 0 \\Rightarrow m(m - 24) = 0$\n$m = 24$ (since $m > 0$)",
        markAllocation: "M1 M1 A1",
        totalPartMarks: 3,
        examinerGuidance:
          "M1 equate & rearrange to 3-term quadratic. M1 apply $b^2 - 4ac = 0$. A1 CAO; must reject $m = 0$.",
      },
      {
        partLabel: "(b)",
        solutionSteps:
          "$3x^2 + 24x + 26 = 3(x^2 + 8x) + 26$\n$= 3(x + 4)^2 - 48 + 26$\n$= 3(x + 4)^2 - 22$\nVertex at $(-4, -22)$",
        markAllocation: "B1 M1 A1 B1",
        totalPartMarks: 4,
        examinerGuidance:
          "B1 $a = 4$. M1 completing the square correctly. A1 $b = -22$. B1 FT vertex $(-a, b)$ — allow ECF from their $a, b$.",
      },
    ],
    verificationSummary:
      "Backward-solved: Δ = m(m − 24) = 0 ⇒ m = 24. Tangency point x = −3, y = −19 lies on both curve and line. Vertex (−4, −22) verified by substitution.",
  },
  fallbackSetB: {
    paperHeader: {
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "9709/12",
      paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
      topic: "Quadratics & Tangents",
      totalMarks: 7,
      timeAllowed: "12 minutes",
      variantSet: "Set B",
    },
    questionNumber: 1,
    questionStem:
      "The equation of a curve is $y = x^2 + px + 2p - 3$, where $p$ is a positive constant.",
    parts: [
      {
        partLabel: "(a)",
        questionText:
          "Given that the line $y = 4x - 7$ is a tangent to the curve, find the value of $p$.",
        marks: 3,
        workingLines: 6,
      },
      {
        partLabel: "(b)",
        questionText:
          "Using this value of $p$, express $x^2 + px + 2p - 3$ in the form $(x + a)^2 + b$, and state the coordinates of the vertex of the curve.",
        marks: 4,
        workingLines: 7,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps:
          "$x^2 + px + 2p - 3 = 4x - 7 \\Rightarrow x^2 + (p - 4)x + (2p + 4) = 0$\nTangent $\\Rightarrow \\Delta = 0$: $(p - 4)^2 - 4(2p + 4) = 0$\n$p^2 - 16p = 0 \\Rightarrow p(p - 16) = 0$\n$p = 16$ (since $p > 0$)",
        markAllocation: "M1 M1 A1",
        totalPartMarks: 3,
        examinerGuidance:
          "M1 equate & rearrange. M1 apply $b^2 - 4ac = 0$. A1 CAO; reject $p = 0$.",
      },
      {
        partLabel: "(b)",
        solutionSteps:
          "$x^2 + 16x + 29 = (x + 8)^2 - 64 + 29$\n$= (x + 8)^2 - 35$\nVertex at $(-8, -35)$",
        markAllocation: "B1 M1 A1 B1",
        totalPartMarks: 4,
        examinerGuidance: "B1 $a = 8$. M1 completing the square. A1 $b = -35$. B1 FT vertex; allow ECF.",
      },
    ],
    verificationSummary:
      "Backward-solved: Δ = p(p − 16) = 0 ⇒ p = 16. Tangency point x = −6, y = −31 lies on both curve and line. Vertex (−8, −35) verified.",
  },
};

/* ------------------------------------------------------------------ */
/* Preset 2 — Calculus & Volume of Revolution                         */
/* ------------------------------------------------------------------ */
const calculus: PastPaperPreset = {
  id: "caie-9709-calculus",
  label: "CAIE 9709/12 Pure Math 1 — Calculus & Volume of Revolution",
  examBoard: "CAIE (Cambridge)",
  syllabusCode: "9709/12",
  paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
  topic: "Differentiation, Normals & Volume of Revolution",
  sourceQuestionText:
    "A curve has equation $y = \\frac{6}{\\sqrt{3x - 2}}$.\n(a) Find the equation of the normal to the curve at the point where $x = 2$, giving your answer in the form $ax + by + c = 0$. [5]\n(b) Find the exact volume obtained when the region bounded by the curve, the $x$-axis, and the lines $x = 1$ and $x = 2$ is rotated through $360^\\circ$ about the $x$-axis. [4]",
  fallbackSetA: {
    paperHeader: {
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "9709/12",
      paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
      topic: "Differentiation, Normals & Volume of Revolution",
      totalMarks: 9,
      timeAllowed: "15 minutes",
      variantSet: "Set A",
    },
    questionNumber: 2,
    questionStem: "A curve has equation $y = \\frac{8}{\\sqrt{2x + 1}}$.",
    parts: [
      {
        partLabel: "(a)",
        questionText:
          "Find the equation of the normal to the curve at the point where $x = 4$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
        marks: 5,
        workingLines: 9,
      },
      {
        partLabel: "(b)",
        questionText:
          "Find the exact volume obtained when the region bounded by the curve, the $x$-axis, and the lines $x = 0$ and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis.",
        marks: 4,
        workingLines: 8,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps:
          "At $x = 4$: $y = \\frac{8}{\\sqrt{9}} = \\frac{8}{3}$\n$\\frac{dy}{dx} = 8 \\times \\left(-\\frac{1}{2}\\right)(2x + 1)^{-\\frac{3}{2}} \\times 2 = -8(2x + 1)^{-\\frac{3}{2}}$\nAt $x = 4$: $\\frac{dy}{dx} = -\\frac{8}{27}$, so normal gradient $= \\frac{27}{8}$\n$y - \\frac{8}{3} = \\frac{27}{8}(x - 4)$\n$81x - 24y - 260 = 0$",
        markAllocation: "B1 M1 A1 M1 A1",
        totalPartMarks: 5,
        examinerGuidance:
          "B1 $y = \\frac{8}{3}$. M1 chain rule with $(2x+1)^{-3/2}$. A1 $-\\frac{8}{27}$. M1 normal through point with $m_1 m_2 = -1$. A1 OE integer form.",
      },
      {
        partLabel: "(b)",
        solutionSteps:
          "$V = \\pi \\int_0^4 \\frac{64}{2x + 1}\\, dx$\n$= \\pi \\left[32 \\ln(2x + 1)\\right]_0^4$\n$= 32\\pi(\\ln 9 - \\ln 1)$\n$= 64\\pi \\ln 3$",
        markAllocation: "M1 A1 M1 A1",
        totalPartMarks: 4,
        examinerGuidance:
          "M1 $\\pi \\int y^2\\, dx$ with $y^2 = \\frac{64}{2x+1}$. A1 $32\\ln(2x+1)$. M1 correct limits applied. A1 exact; accept $32\\pi \\ln 9$ OE.",
      },
    ],
    verificationSummary:
      "Backward-solved: 2(4) + 1 = 9 gives √9 = 3, so y = 8/3 exactly. Normal passes through (4, 8/3): 324 − 64 − 260 = 0 ✓. Volume integral evaluates to 64π ln 3.",
  },
  fallbackSetB: {
    paperHeader: {
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "9709/12",
      paperTitle: "Mathematics — Paper 1 Pure Mathematics 1",
      topic: "Differentiation, Normals & Volume of Revolution",
      totalMarks: 9,
      timeAllowed: "15 minutes",
      variantSet: "Set B",
    },
    questionNumber: 2,
    questionStem: "A curve has equation $y = \\frac{12}{\\sqrt{4x - 3}}$.",
    parts: [
      {
        partLabel: "(a)",
        questionText:
          "Find the equation of the normal to the curve at the point where $x = 3$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$ and $c$ are integers.",
        marks: 5,
        workingLines: 9,
      },
      {
        partLabel: "(b)",
        questionText:
          "Find the exact volume obtained when the region bounded by the curve, the $x$-axis, and the lines $x = 1$ and $x = 3$ is rotated through $360^\\circ$ about the $x$-axis.",
        marks: 4,
        workingLines: 8,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps:
          "At $x = 3$: $y = \\frac{12}{\\sqrt{9}} = 4$\n$\\frac{dy}{dx} = 12 \\times \\left(-\\frac{1}{2}\\right)(4x - 3)^{-\\frac{3}{2}} \\times 4 = -24(4x - 3)^{-\\frac{3}{2}}$\nAt $x = 3$: $\\frac{dy}{dx} = -\\frac{24}{27} = -\\frac{8}{9}$, so normal gradient $= \\frac{9}{8}$\n$y - 4 = \\frac{9}{8}(x - 3)$\n$9x - 8y + 5 = 0$",
        markAllocation: "B1 M1 A1 M1 A1",
        totalPartMarks: 5,
        examinerGuidance:
          "B1 $y = 4$. M1 chain rule with $(4x-3)^{-3/2}$. A1 $-\\frac{8}{9}$. M1 normal with $m_1 m_2 = -1$. A1 OE integer form.",
      },
      {
        partLabel: "(b)",
        solutionSteps:
          "$V = \\pi \\int_1^3 \\frac{144}{4x - 3}\\, dx$\n$= \\pi \\left[36 \\ln(4x - 3)\\right]_1^3$\n$= 36\\pi(\\ln 9 - \\ln 1)$\n$= 72\\pi \\ln 3$",
        markAllocation: "M1 A1 M1 A1",
        totalPartMarks: 4,
        examinerGuidance:
          "M1 $\\pi \\int y^2\\, dx$ with $y^2 = \\frac{144}{4x-3}$. A1 $36\\ln(4x-3)$. M1 limits. A1 exact; accept $36\\pi \\ln 9$ OE.",
      },
    ],
    verificationSummary:
      "Backward-solved: 4(3) − 3 = 9 gives y = 4 exactly. Normal passes through (3, 4): 27 − 32 + 5 = 0 ✓. Lower limit 4(1) − 3 = 1 gives ln 1 = 0; volume = 72π ln 3.",
  },
};

/* ------------------------------------------------------------------ */
/* Preset 3 — O-Level Physics Kinematics & Dynamics                   */
/* ------------------------------------------------------------------ */
const physics: PastPaperPreset = {
  id: "caie-5054-kinematics",
  label: "CAIE 5054/22 O-Level Physics — Kinematics & Dynamics",
  examBoard: "CAIE (Cambridge)",
  syllabusCode: "5054/22",
  paperTitle: "Physics — Paper 2 Theory",
  topic: "Kinematics & Dynamics",
  sourceQuestionText:
    "A car of mass $1200\\text{ kg}$ travels along a straight horizontal road at a constant speed of $25\\text{ m/s}$. The resistive force acting on the car is $850\\text{ N}$.\n(a) State the driving force produced by the engine. [1]\n(b) The driver applies the brakes and the car decelerates uniformly to rest in $4.0\\text{ s}$. Calculate:\n(i) the deceleration of the car [2]\n(ii) the braking distance [2]\n(iii) the total stopping force acting on the car. [3]",
  fallbackSetA: {
    paperHeader: {
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "5054/22",
      paperTitle: "Physics — Paper 2 Theory",
      topic: "Kinematics & Dynamics",
      totalMarks: 8,
      timeAllowed: "10 minutes",
      variantSet: "Set A",
    },
    questionNumber: 3,
    questionStem:
      "A car of mass $1500\\text{ kg}$ travels along a straight horizontal road at a constant speed of $30\\text{ m/s}$. The resistive force acting on the car is $950\\text{ N}$.\nThe driver then applies the brakes and the car decelerates uniformly to rest in $5.0\\text{ s}$.",
    parts: [
      {
        partLabel: "(a)",
        questionText: "State the driving force produced by the engine while the car moves at constant speed.",
        marks: 1,
        workingLines: 2,
      },
      {
        partLabel: "(b)(i)",
        questionText: "Calculate the deceleration of the car.",
        marks: 2,
        workingLines: 3,
      },
      {
        partLabel: "(b)(ii)",
        questionText: "Calculate the braking distance.",
        marks: 2,
        workingLines: 3,
      },
      {
        partLabel: "(b)(iii)",
        questionText: "Calculate the total stopping force acting on the car.",
        marks: 3,
        workingLines: 4,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps: "Constant speed $\\Rightarrow$ resultant force $= 0$\nDriving force $= 950\\text{ N}$",
        markAllocation: "B1",
        totalPartMarks: 1,
        examinerGuidance: "Unit required. CAO.",
      },
      {
        partLabel: "(b)(i)",
        solutionSteps: "$a = \\frac{\\Delta v}{t} = \\frac{30 - 0}{5.0}$\n$a = 6.0\\text{ m/s}^2$",
        markAllocation: "M1 A1",
        totalPartMarks: 2,
        examinerGuidance: "Accept $-6.0\\text{ m/s}^2$ if called acceleration. OE.",
      },
      {
        partLabel: "(b)(ii)",
        solutionSteps: "$s = \\frac{1}{2}(u + v)t = \\frac{1}{2}(30 + 0)(5.0)$\n$s = 75\\text{ m}$",
        markAllocation: "M1 A1",
        totalPartMarks: 2,
        examinerGuidance: "Accept area under v–t graph method. OE.",
      },
      {
        partLabel: "(b)(iii)",
        solutionSteps: "$F = ma$\n$F = 1500 \\times 6.0$\n$F = 9000\\text{ N}$",
        markAllocation: "B1 M1 A1",
        totalPartMarks: 3,
        examinerGuidance: "B1 for $F = ma$ stated. Allow ECF from (b)(i). Accept $9.0\\text{ kN}$.",
      },
    ],
    verificationSummary:
      "Verified: 30 ÷ 5.0 = 6.0 m/s² exactly; ½ × 30 × 5.0 = 75 m; 1500 × 6.0 = 9000 N. All values terminate cleanly to 2 s.f.",
  },
  fallbackSetB: {
    paperHeader: {
      examBoard: "CAIE (Cambridge)",
      syllabusCode: "5054/22",
      paperTitle: "Physics — Paper 2 Theory",
      topic: "Kinematics & Dynamics",
      totalMarks: 8,
      timeAllowed: "10 minutes",
      variantSet: "Set B",
    },
    questionNumber: 3,
    questionStem:
      "A car of mass $1800\\text{ kg}$ travels along a straight horizontal road at a constant speed of $24\\text{ m/s}$. The resistive force acting on the car is $1100\\text{ N}$.\nThe driver then applies the brakes and the car decelerates uniformly to rest in $6.0\\text{ s}$.",
    parts: [
      {
        partLabel: "(a)",
        questionText: "State the driving force produced by the engine while the car moves at constant speed.",
        marks: 1,
        workingLines: 2,
      },
      {
        partLabel: "(b)(i)",
        questionText: "Calculate the deceleration of the car.",
        marks: 2,
        workingLines: 3,
      },
      {
        partLabel: "(b)(ii)",
        questionText: "Calculate the braking distance.",
        marks: 2,
        workingLines: 3,
      },
      {
        partLabel: "(b)(iii)",
        questionText: "Calculate the total stopping force acting on the car.",
        marks: 3,
        workingLines: 4,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps: "Constant speed $\\Rightarrow$ resultant force $= 0$\nDriving force $= 1100\\text{ N}$",
        markAllocation: "B1",
        totalPartMarks: 1,
        examinerGuidance: "Unit required. CAO.",
      },
      {
        partLabel: "(b)(i)",
        solutionSteps: "$a = \\frac{\\Delta v}{t} = \\frac{24 - 0}{6.0}$\n$a = 4.0\\text{ m/s}^2$",
        markAllocation: "M1 A1",
        totalPartMarks: 2,
        examinerGuidance: "Accept $-4.0\\text{ m/s}^2$ if called acceleration. OE.",
      },
      {
        partLabel: "(b)(ii)",
        solutionSteps: "$s = \\frac{1}{2}(u + v)t = \\frac{1}{2}(24 + 0)(6.0)$\n$s = 72\\text{ m}$",
        markAllocation: "M1 A1",
        totalPartMarks: 2,
        examinerGuidance: "Accept area under v–t graph method. OE.",
      },
      {
        partLabel: "(b)(iii)",
        solutionSteps: "$F = ma$\n$F = 1800 \\times 4.0$\n$F = 7200\\text{ N}$",
        markAllocation: "B1 M1 A1",
        totalPartMarks: 3,
        examinerGuidance: "B1 for $F = ma$ stated. Allow ECF from (b)(i). Accept $7.2\\text{ kN}$.",
      },
    ],
    verificationSummary:
      "Verified: 24 ÷ 6.0 = 4.0 m/s² exactly; ½ × 24 × 6.0 = 72 m; 1800 × 4.0 = 7200 N. All values terminate cleanly to 2 s.f.",
  },
};

/* ------------------------------------------------------------------ */
/* Preset 4 — Edexcel Coordinate Geometry & Circles                   */
/* ------------------------------------------------------------------ */
const circles: PastPaperPreset = {
  id: "edexcel-wma11-circles",
  label: "Edexcel WMA11/01 Pure Math 1 — Coordinate Geometry & Circles",
  examBoard: "Pearson Edexcel",
  syllabusCode: "WMA11/01",
  paperTitle: "International Advanced Level Pure Mathematics P1",
  topic: "Coordinate Geometry & Circles",
  sourceQuestionText:
    "A circle $C$ has equation $x^2 + y^2 - 8x + 6y = 0$.\n(a) Find the coordinates of the centre of $C$ and the exact radius of $C$. [3]\n(b) Verify that the point $P(8, 0)$ lies on $C$ and find the equation of the tangent to $C$ at $P$. [4]",
  fallbackSetA: {
    paperHeader: {
      examBoard: "Pearson Edexcel",
      syllabusCode: "WMA11/01",
      paperTitle: "International Advanced Level Pure Mathematics P1",
      topic: "Coordinate Geometry & Circles",
      totalMarks: 7,
      timeAllowed: "11 minutes",
      variantSet: "Set A",
    },
    questionNumber: 4,
    questionStem: "A circle $C$ has equation $x^2 + y^2 - 10x + 24y = 0$.",
    parts: [
      {
        partLabel: "(a)",
        questionText: "Find the coordinates of the centre of $C$ and the radius of $C$.",
        marks: 3,
        workingLines: 5,
      },
      {
        partLabel: "(b)",
        questionText:
          "Verify that the point $P(10, 0)$ lies on $C$ and find an equation of the tangent to $C$ at $P$, giving your answer in the form $ax + by + c = 0$.",
        marks: 4,
        workingLines: 7,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps:
          "$(x - 5)^2 - 25 + (y + 12)^2 - 144 = 0$\n$(x - 5)^2 + (y + 12)^2 = 169$\nCentre $(5, -12)$, radius $= 13$",
        markAllocation: "M1 A1 A1",
        totalPartMarks: 3,
        examinerGuidance: "M1 attempt to complete the square in $x$ and $y$. A1 centre. A1 radius CAO.",
      },
      {
        partLabel: "(b)",
        solutionSteps:
          "$10^2 + 0^2 - 10(10) + 24(0) = 100 - 100 = 0$ ✓\nGradient of radius $= \\frac{0 - (-12)}{10 - 5} = \\frac{12}{5}$\nTangent gradient $= -\\frac{5}{12}$\n$y - 0 = -\\frac{5}{12}(x - 10)$\n$5x + 12y - 50 = 0$",
        markAllocation: "B1 M1 M1 A1",
        totalPartMarks: 4,
        examinerGuidance:
          "B1 substitution shown with conclusion. M1 radius gradient. M1 negative reciprocal & line through $P$. A1 OE integer form.",
      },
    ],
    verificationSummary:
      "Backward-solved from 5-12-13 Pythagorean triple: r² = 25 + 144 = 169 ⇒ r = 13. P(10, 0) satisfies C. Tangent ⟂ radius: (12/5)(−5/12) = −1 ✓.",
  },
  fallbackSetB: {
    paperHeader: {
      examBoard: "Pearson Edexcel",
      syllabusCode: "WMA11/01",
      paperTitle: "International Advanced Level Pure Mathematics P1",
      topic: "Coordinate Geometry & Circles",
      totalMarks: 7,
      timeAllowed: "11 minutes",
      variantSet: "Set B",
    },
    questionNumber: 4,
    questionStem: "A circle $C$ has equation $x^2 + y^2 + 6x - 8y = 0$.",
    parts: [
      {
        partLabel: "(a)",
        questionText: "Find the coordinates of the centre of $C$ and the radius of $C$.",
        marks: 3,
        workingLines: 5,
      },
      {
        partLabel: "(b)",
        questionText:
          "Verify that the point $P(0, 8)$ lies on $C$ and find an equation of the tangent to $C$ at $P$, giving your answer in the form $ax + by + c = 0$.",
        marks: 4,
        workingLines: 7,
      },
    ],
    markScheme: [
      {
        partLabel: "(a)",
        solutionSteps:
          "$(x + 3)^2 - 9 + (y - 4)^2 - 16 = 0$\n$(x + 3)^2 + (y - 4)^2 = 25$\nCentre $(-3, 4)$, radius $= 5$",
        markAllocation: "M1 A1 A1",
        totalPartMarks: 3,
        examinerGuidance: "M1 attempt to complete the square. A1 centre. A1 radius CAO.",
      },
      {
        partLabel: "(b)",
        solutionSteps:
          "$0^2 + 8^2 + 6(0) - 8(8) = 64 - 64 = 0$ ✓\nGradient of radius $= \\frac{8 - 4}{0 - (-3)} = \\frac{4}{3}$\nTangent gradient $= -\\frac{3}{4}$\n$y - 8 = -\\frac{3}{4}x$\n$3x + 4y - 32 = 0$",
        markAllocation: "B1 M1 M1 A1",
        totalPartMarks: 4,
        examinerGuidance:
          "B1 substitution with conclusion. M1 radius gradient. M1 negative reciprocal & line through $P$. A1 OE integer form.",
      },
    ],
    verificationSummary:
      "Backward-solved from 3-4-5 triple: r² = 9 + 16 = 25 ⇒ r = 5. P(0, 8) satisfies C. Tangent ⟂ radius: (4/3)(−3/4) = −1 ✓.",
  },
};

export const PRESETS: PastPaperPreset[] = [quadratics, calculus, physics, circles];

export function findPreset(id: string): PastPaperPreset | undefined {
  return PRESETS.find((p) => p.id === id);
}
