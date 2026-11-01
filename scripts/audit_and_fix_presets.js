import fs from "node:fs";
import path from "node:path";
import katex from "katex";

const PRESETS_FILE = path.resolve("src/data/presets.ts");

console.log("=== Auditing & Repairing Presets in:", PRESETS_FILE);

let content = fs.readFileSync(PRESETS_FILE, "utf8");

// Specific Fix 2: Preset 4 (caie-9709-circular)
const p4Idx = content.indexOf('"id": "caie-9709-circular"');
if (p4Idx === -1) {
  throw new Error("Could not find preset caie-9709-circular in presets.ts");
}

const p4EndIdx = content.indexOf('"id": "caie-4024-algebra"', p4Idx);
if (p4EndIdx === -1) {
  throw new Error("Could not find end of caie-9709-circular block");
}

let p4Block = content.slice(p4Idx, p4EndIdx);

// Exact prompt replacement strings:
const p4aSetA_string = "Arc $AB = r\\theta = 8 \\times \\frac{\\pi}{3} = \\frac{8\\pi}{3}\\text{ cm}$\n\nIn right-angled $\\triangle OAC$:\n$AC = 8\\tan(\\frac{\\pi}{3}) = 8\\sqrt{3}\\text{ cm}$\n$OC = \\frac{8}{\\cos(\\pi/3)} = 16\\text{ cm} \\Rightarrow BC = 16 - 8 = 8\\text{ cm}$\n\n$\\text{Perimeter} = 8\\sqrt{3} + 8 + \\frac{8\\pi}{3}\\text{ cm}$";

const p4bSetA_string = "$\\text{Area}(\\triangle OAC) = \\frac{1}{2} \\times 8 \\times 8\\sqrt{3} = 32\\sqrt{3}\\text{ cm}^2$\n$\\text{Area}(\\text{sector } OAB) = \\frac{1}{2} r^2 \\theta = \\frac{1}{2}(64)(\\frac{\\pi}{3}) = \\frac{32\\pi}{3}\\text{ cm}^2$\n\n$\\text{Shaded area} = 32\\sqrt{3} - \\frac{32\\pi}{3}\\text{ cm}^2$";

const p4aSetB_string = "Arc $AB = r\\theta = 6 \\times \\frac{\\pi}{4} = \\frac{3\\pi}{2}\\text{ cm}$\n\nIn right-angled $\\triangle OAC$:\n$AC = 6\\tan(\\frac{\\pi}{4}) = 6\\text{ cm}$\n$OC = \\frac{6}{\\cos(\\pi/4)} = 6\\sqrt{2}\\text{ cm} \\Rightarrow BC = 6\\sqrt{2} - 6\\text{ cm}$\n\n$\\text{Perimeter} = 6 + (6\\sqrt{2} - 6) + \\frac{3\\pi}{2} = 6\\sqrt{2} + \\frac{3\\pi}{2}\\text{ cm}$";

const p4bSetB_string = "$\\text{Area}(\\triangle OAC) = \\frac{1}{2} \\times 6 \\times 6 = 18\\text{ cm}^2$\n$\\text{Area}(\\text{sector } OAB) = \\frac{1}{2}(36)(\\frac{\\pi}{4}) = \\frac{9\\pi}{2}\\text{ cm}^2$\n\n$\\text{Shaded area} = 18 - \\frac{9\\pi}{2}\\text{ cm}^2$";

const regex = /"solutionSteps":\s*"([\s\S]*?)"(?=,\s*"markAllocation")/g;

const replacements = [
  JSON.stringify(p4aSetA_string),
  JSON.stringify(p4bSetA_string),
  JSON.stringify(p4aSetB_string),
  JSON.stringify(p4bSetB_string),
];

let matchCount = 0;
p4Block = p4Block.replace(regex, () => {
  const repl = replacements[matchCount++];
  console.log(`Replacing solutionSteps occurrence #${matchCount}`);
  return `"solutionSteps": ${repl}`;
});

content = content.slice(0, p4Idx) + p4Block + content.slice(p4EndIdx);
fs.writeFileSync(PRESETS_FILE, content, "utf8");
console.log("✓ Saved updated presets.ts");

// Reload and validate
const { PRESETS } = await import("../src/data/presets.ts?update=" + Date.now());

console.log(`Auditing ${PRESETS.length} presets with KaTeX...`);

let mathSegmentCount = 0;
let errors = 0;

for (const preset of PRESETS) {
  for (const paper of [preset.fallbackSetA, preset.fallbackSetB]) {
    const textFields = [
      { name: "questionStem", val: paper.questionStem },
      ...paper.parts.map((p, idx) => ({ name: `part[${idx}].questionText`, val: p.questionText })),
      ...paper.markScheme.map((m, idx) => ({ name: `markScheme[${idx}].solutionSteps`, val: m.solutionSteps })),
      ...paper.markScheme.map((m, idx) => ({ name: `markScheme[${idx}].examinerGuidance`, val: m.examinerGuidance })),
    ];

    for (const field of textFields) {
      if (!field.val) continue;

      // 1. Line-by-line dollar balance
      const lines = field.val.split("\n");
      lines.forEach((line, lineNo) => {
        const dollarCount = (line.match(/(?<!\\)\$/g) || []).length;
        if (dollarCount % 2 !== 0) {
          console.error(`[UNBALANCED $] Preset ${preset.id} (${paper.paperHeader.variantSet}) ${field.name} line ${lineNo + 1}: ${line}`);
          errors++;
        }
      });

      // 2. KaTeX compilation on all $$...$$ and single-line $...$
      const mathMatches = field.val.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g);
      for (const match of mathMatches) {
        mathSegmentCount++;
        const expr = (match[1] !== undefined ? match[1] : match[2] ?? "").trim();
        const isBlock = match[1] !== undefined;

        try {
          katex.renderToString(expr, {
            throwOnError: true,
            displayMode: isBlock,
          });
        } catch (err) {
          console.error(`[KATEX ERROR] Preset ${preset.id} (${paper.paperHeader.variantSet}) ${field.name}: "${expr}" -> ${err.message}`);
          errors++;
        }
      }
    }
  }
}

console.log(`\n=== Audit Summary ===`);
console.log(`Total Presets Audited: ${PRESETS.length}`);
console.log(`Total Math Expressions Validated: ${mathSegmentCount}`);
console.log(`Errors: ${errors}`);

if (errors > 0) {
  console.error(`Audit FAILED with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log(`All 25 presets PASSED KaTeX & dollar balance integrity checks cleanly!`);
}
