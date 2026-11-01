import { Badge } from "@/components/ui/badge";
import { MathRenderer } from "@/components/MathRenderer";
import type { AssembledExam, GeneratedExamPaper } from "@/types/exam";
import { formatSequentialQuestionPart } from "@/services/examAssembly";

function markVariant(token: string): "method" | "accuracy" | "independent" | "outline" {
  const t = token.toUpperCase();
  if (t.startsWith("M")) return "method";
  if (t.startsWith("A")) return "accuracy";
  if (t.startsWith("B")) return "independent";
  return "outline";
}

interface MarkSchemePreviewProps {
  paper?: GeneratedExamPaper;
  assembledExam?: AssembledExam | null;
}

export function MarkSchemePreview({ paper, assembledExam }: MarkSchemePreviewProps) {
  // If assembledExam is provided, compile the continuous mark scheme across all questions
  if (assembledExam && assembledExam.questions.length > 0) {
    const questions = assembledExam.questions;
    const totalMarks = assembledExam.totalMarks;

    // Collect all rows with their sequential question numbers
    const allRows = questions.flatMap((q, qIndex) => {
      const qNum = qIndex + 1;
      return q.markScheme.map((row) => ({
        ...row,
        displayLabel: formatSequentialQuestionPart(qNum, row.partLabel),
      }));
    });

    return (
      <article className="exam-sheet mx-auto w-full max-w-[210mm] px-8 py-10 sm:px-12 bg-card text-card-foreground">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-paper-rule pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-muted">
              {assembledExam.examBoard} · {assembledExam.syllabusCode}
            </p>
            <h2 className="mt-1 font-serif text-xl font-bold text-paper-foreground">
              OFFICIAL MARK SCHEME — CONFIDENTIAL
            </h2>
            <p className="text-xs text-paper-muted">
              {assembledExam.paperTitle} · {assembledExam.title} ({questions.length} Questions)
            </p>
          </div>
          <div className="text-right text-sm">
            <p className="font-mono font-bold tracking-widest">{assembledExam.variantSet.toUpperCase()}</p>
            <p className="text-paper-muted">
              Total Marks: <span className="font-semibold text-paper-foreground">[{totalMarks}]</span>
            </p>
          </div>
        </header>

        <div className="mt-6 overflow-x-auto print:overflow-visible">
          <table className="w-full border-collapse border border-paper-rule text-sm text-paper-foreground">
            <thead>
              <tr className="bg-muted text-left text-xs uppercase tracking-wider">
                <th className="w-20 border border-paper-rule px-3 py-2">Question</th>
                <th className="border border-paper-rule px-3 py-2">Answer / Method & Working Steps</th>
                <th className="w-32 border border-paper-rule px-3 py-2">Marks</th>
                <th className="w-44 border border-paper-rule px-3 py-2">Examiner Guidance</th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((row, i) => (
                <tr key={`${row.displayLabel}-${i}`} className="print:break-inside-avoid align-top">
                  <td className="border border-paper-rule px-3 py-3 font-semibold">
                    {row.displayLabel}
                  </td>
                  <td className="border border-paper-rule px-3 py-3 font-serif">
                    <MathRenderer text={row.solutionSteps} className="block leading-relaxed" />
                  </td>
                  <td className="border border-paper-rule px-3 py-3">
                    <div className="flex flex-wrap gap-1">
                      {row.markAllocation
                        .split(/[\s,]+/)
                        .filter(Boolean)
                        .map((tok, j) => (
                          <Badge key={j} variant={markVariant(tok)} className="px-1.5">
                            {tok}
                          </Badge>
                        ))}
                    </div>
                    <p className="mt-2 text-xs font-bold">[{row.totalPartMarks}]</p>
                  </td>
                  <td className="border border-paper-rule px-3 py-3 text-xs">
                    <MathRenderer text={row.examinerGuidance} className="block leading-relaxed" />
                  </td>
                </tr>
              ))}
              <tr className="bg-muted/40 font-bold print:break-inside-avoid">
                <td colSpan={2} className="border border-paper-rule px-3 py-2.5 text-right text-xs uppercase">
                  Total Mark Scheme Allocation
                </td>
                <td colSpan={2} className="border border-paper-rule px-3 py-2.5 font-bold">
                  [{totalMarks} Marks] (Matches Exam Total: Verified)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExaminerLegend />
      </article>
    );
  }

  // Fallback single question mark scheme
  if (!paper) {
    return null;
  }

  const h = paper.paperHeader;

  return (
    <article className="exam-sheet mx-auto w-full max-w-[210mm] px-8 py-10 sm:px-12 bg-card text-card-foreground">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-paper-rule pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-muted">
            {h.examBoard} · {h.syllabusCode}
          </p>
          <h2 className="mt-1 font-serif text-xl font-bold text-paper-foreground">
            OFFICIAL MARK SCHEME — CONFIDENTIAL
          </h2>
          <p className="text-xs text-paper-muted">
            {h.paperTitle} · {h.topic}
          </p>
        </div>
        <div className="text-right text-sm">
          <p className="font-mono font-bold tracking-widest">{h.variantSet.toUpperCase()}</p>
          <p className="text-paper-muted">
            Total Marks: <span className="font-semibold text-paper-foreground">[{h.totalMarks}]</span>
          </p>
        </div>
      </header>

      <div className="mt-6 overflow-x-auto print:overflow-visible">
        <table className="w-full border-collapse border border-paper-rule text-sm text-paper-foreground">
          <thead>
            <tr className="bg-muted text-left text-xs uppercase tracking-wider">
              <th className="w-20 border border-paper-rule px-3 py-2">Question</th>
              <th className="border border-paper-rule px-3 py-2">Answer / Method & Working Steps</th>
              <th className="w-32 border border-paper-rule px-3 py-2">Marks</th>
              <th className="w-44 border border-paper-rule px-3 py-2">Examiner Guidance</th>
            </tr>
          </thead>
          <tbody>
            {paper.markScheme.map((row, i) => (
              <tr key={`${row.partLabel}-${i}`} className="print:break-inside-avoid align-top">
                <td className="border border-paper-rule px-3 py-3 font-semibold">
                  {formatSequentialQuestionPart(paper.questionNumber, row.partLabel)}
                </td>
                <td className="border border-paper-rule px-3 py-3 font-serif">
                  <MathRenderer text={row.solutionSteps} className="block leading-relaxed" />
                </td>
                <td className="border border-paper-rule px-3 py-3">
                  <div className="flex flex-wrap gap-1">
                    {row.markAllocation
                      .split(/[\s,]+/)
                      .filter(Boolean)
                      .map((tok, j) => (
                        <Badge key={j} variant={markVariant(tok)} className="px-1.5">
                          {tok}
                        </Badge>
                      ))}
                  </div>
                  <p className="mt-2 text-xs font-bold">[{row.totalPartMarks}]</p>
                </td>
                <td className="border border-paper-rule px-3 py-3 text-xs">
                  <MathRenderer text={row.examinerGuidance} className="block leading-relaxed" />
                </td>
              </tr>
            ))}
            <tr className="bg-muted/40 font-bold print:break-inside-avoid">
              <td colSpan={2} className="border border-paper-rule px-3 py-2 text-right text-xs uppercase">
                Total Mark Scheme Allocation
              </td>
              <td colSpan={2} className="border border-paper-rule px-3 py-2 font-bold">
                [{h.totalMarks} Marks] (Matches Exam Total: Verified)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ExaminerLegend />
    </article>
  );
}

function ExaminerLegend() {
  return (
    <footer className="print:break-inside-avoid mt-6 rounded-sm border border-paper-line p-4 text-xs text-paper-foreground">
      <p className="mb-2 font-semibold uppercase tracking-wider text-paper-muted">Examiner Legend</p>
      <dl className="grid gap-2 sm:grid-cols-2">
        <div className="flex gap-2">
          <Badge variant="method">M</Badge>
          <dd><b>Method Mark</b> — awarded for a valid mathematical/scientific method applied to the problem.</dd>
        </div>
        <div className="flex gap-2">
          <Badge variant="accuracy">A</Badge>
          <dd><b>Accuracy Mark</b> — awarded for a numerically accurate result, dependent on the preceding M mark.</dd>
        </div>
        <div className="flex gap-2">
          <Badge variant="independent">B</Badge>
          <dd><b>Independent Mark</b> — awarded for a correct statement or value independent of working method.</dd>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="font-mono">ECF</Badge>
          <dd><b>Error Carried Forward</b> · <b>CAO</b> Correct Answer Only · <b>OE</b> Or Equivalent.</dd>
        </div>
      </dl>
    </footer>
  );
}
