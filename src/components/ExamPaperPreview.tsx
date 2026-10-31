import { MathRenderer } from "@/components/MathRenderer";
import type { GeneratedExamPaper } from "@/types/exam";

interface Props {
  paper: GeneratedExamPaper;
  showWorkingLines: boolean;
  showCandidateHeader: boolean;
}

export function ExamPaperPreview({ paper, showWorkingLines, showCandidateHeader }: Props) {
  const h = paper.paperHeader;
  return (
    <article className="exam-sheet mx-auto w-full max-w-[210mm] px-8 py-10 sm:px-12">
      <header className="border-2 border-paper-rule">
        <div className="flex items-stretch justify-between gap-4 p-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-muted">
              {h.examBoard}
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-paper-foreground">
              {h.syllabusCode}
            </p>
            <p className="mt-1 font-serif text-base text-paper-foreground">{h.paperTitle}</p>
            <p className="mt-0.5 text-xs text-paper-muted">Topic: {h.topic}</p>
          </div>
          <div className="flex shrink-0 flex-col items-end justify-between gap-2 text-right">
            <span className="border-2 border-paper-rule px-3 py-1 font-mono text-lg font-bold tracking-widest">
              {h.variantSet.toUpperCase()}
            </span>
            <div className="text-xs text-paper-muted">
              <p>
                Time Allowed: <span className="font-semibold text-paper-foreground">{h.timeAllowed}</span>
              </p>
              <p>
                Total Marks: <span className="font-semibold text-paper-foreground">[{h.totalMarks}]</span>
              </p>
            </div>
          </div>
        </div>
        {showCandidateHeader && (
          <div className="grid grid-cols-1 gap-3 border-t-2 border-paper-rule px-4 py-3 text-sm sm:grid-cols-[2fr_1fr]">
            <div className="flex items-end gap-2">
              <span className="shrink-0 font-medium">Candidate Name:</span>
              <span className="mb-1 h-px flex-1 bg-paper-rule" />
            </div>
            <div className="flex items-end gap-2">
              <span className="shrink-0 font-medium">Centre/Roll No:</span>
              <span className="mb-1 h-px flex-1 bg-paper-rule" />
            </div>
          </div>
        )}
      </header>

      <p className="mt-4 text-xs italic text-paper-muted">
        Answer all parts. Show all necessary working. The number of marks is given in brackets [ ] at the end of each part.
      </p>

      <section className="mt-6 font-serif text-[15px] text-paper-foreground">
        <div className="flex gap-3">
          <span className="font-sans text-base font-bold">{paper.questionNumber}.</span>
          <MathRenderer text={paper.questionStem} className="block" />
        </div>

        <ol className="mt-5 space-y-6 pl-7">
          {paper.parts.map((part, i) => (
            <li key={`${part.partLabel}-${i}`} className="print-avoid-break">
              <div className="flex items-start gap-3">
                <span className="w-14 shrink-0 font-semibold">{part.partLabel}</span>
                <MathRenderer text={part.questionText} className="block flex-1" />
                <span className="shrink-0 pl-2 font-sans font-bold">[{part.marks}]</span>
              </div>
              {showWorkingLines && (
                <div className="mt-2 pl-[4.25rem]" aria-hidden>
                  {Array.from({ length: part.workingLines }).map((_, j) => (
                    <div key={j} className="working-line" />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-10 flex justify-between border-t border-paper-line pt-2 text-[10px] uppercase tracking-wider text-paper-muted">
        <span>
          {h.syllabusCode} · {h.variantSet}
        </span>
        <span>Unseen Pre-Board · Do not reproduce</span>
      </footer>
    </article>
  );
}
