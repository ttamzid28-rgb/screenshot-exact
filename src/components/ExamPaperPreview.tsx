import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Check, Edit3, Trash2 } from "lucide-react";
import { MathRenderer } from "@/components/MathRenderer";
import { Button } from "@/components/ui/button";
import type { AssembledExam, GeneratedExamPaper } from "@/types/exam";
import { cleanPartLabel } from "@/services/examAssembly";

interface Props {
  paper?: GeneratedExamPaper;
  assembledExam?: AssembledExam | null;
  showWorkingLines: boolean;
  showCandidateHeader: boolean;
  onRemoveQuestion?: (index: number) => void;
  onMoveQuestion?: (index: number, direction: "up" | "down") => void;
  onClearQueue?: () => void;
}

export function ExamPaperPreview({
  paper,
  assembledExam,
  showWorkingLines,
  showCandidateHeader,
  onRemoveQuestion,
  onMoveQuestion,
  onClearQueue,
}: Props) {
  // If assembledExam is provided, render the compiled multi-question paper
  if (assembledExam && assembledExam.questions.length > 0) {
    const questions = assembledExam.questions;
    return (
      <article className="exam-sheet mx-auto w-full max-w-[210mm] px-8 py-10 sm:px-12 relative bg-card text-card-foreground">
        {/* Sticky Assembly Control Bar */}
        <div className="no-print sticky top-2 z-10 mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card/95 p-3.5 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">
              Assembled Exam: {questions.length} Questions · {assembledExam.totalMarks} Marks ({assembledExam.timeAllowed})
            </span>
          </div>
          {onClearQueue && (
            <Button
              variant="destructive"
              size="sm"
              onClick={onClearQueue}
              className="inline-flex items-center gap-1.5 h-8 text-xs font-medium"
            >
              <Trash2 className="size-3.5" />
              <span>Scratch Everything & Start Fresh</span>
            </Button>
          )}
        </div>

        <header className="border-2 border-paper-rule">
          <div className="flex items-stretch justify-between gap-4 p-4">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-muted">
                {assembledExam.examBoard}
              </p>
              <p className="mt-1 font-mono text-2xl font-semibold text-paper-foreground">
                {assembledExam.syllabusCode}
              </p>
              <p className="mt-1 font-serif text-base text-paper-foreground">
                {assembledExam.paperTitle}
              </p>
              <p className="mt-0.5 text-xs text-paper-muted">
                {assembledExam.title} · {questions.length} Questions
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end justify-between gap-2 text-right">
              <span className="border-2 border-paper-rule px-3 py-1 font-mono text-lg font-bold tracking-widest">
                {assembledExam.variantSet.toUpperCase()}
              </span>
              <div className="text-xs text-paper-muted">
                <p>
                  Time Allowed:{" "}
                  <span className="font-semibold text-paper-foreground">
                    {assembledExam.timeAllowed}
                  </span>
                </p>
                <p>
                  Total Marks:{" "}
                  <span className="font-semibold text-paper-foreground">
                    [{assembledExam.totalMarks}]
                  </span>
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
          Answer all questions. Show all necessary working. The number of marks is given in brackets [ ] at the end of each question or part question.
        </p>

        {/* Sequential Question List */}
        <div className="mt-6 space-y-8">
          {questions.map((q, qIndex) => {
            const sequentialNumber = qIndex + 1;
            const qWorkingLinesTotal = q.parts.reduce(
              (sum, p) => sum + (p.workingLines || 0),
              0,
            );
            // Page break div between questions where workingLines > 6 to prevent awkward splits
            const needsPageBreak =
              qIndex > 0 &&
              (qWorkingLinesTotal > 6 || q.parts.some((p) => (p.workingLines || 0) > 6));

            return (
              <div key={`assembled-q-${sequentialNumber}`}>
                {needsPageBreak && (
                  <div className="print:break-before-page h-0 w-full" aria-hidden />
                )}

                {/* Individual Question Control Strip */}
                <div className="no-print mb-3 flex items-center justify-between rounded-md border border-paper-line bg-muted/40 px-3 py-1.5 text-xs">
                  <span className="font-semibold text-muted-foreground">
                    Question {sequentialNumber} of {questions.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={qIndex === 0}
                      onClick={() => onMoveQuestion?.(qIndex, "up")}
                      className="h-7 px-2 text-xs"
                      title="Move Question Up"
                    >
                      <ArrowUp className="size-3 mr-1" /> Move Up
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={qIndex === questions.length - 1}
                      onClick={() => onMoveQuestion?.(qIndex, "down")}
                      className="h-7 px-2 text-xs"
                      title="Move Question Down"
                    >
                      <ArrowDown className="size-3 mr-1" /> Move Down
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveQuestion?.(qIndex)}
                      className="h-7 px-2 text-xs text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      title={`Discard Question ${sequentialNumber}`}
                    >
                      <Trash2 className="size-3 mr-1" /> Discard Q{sequentialNumber}
                    </Button>
                  </div>
                </div>

                <section className="print:break-inside-avoid print:mb-8 font-serif text-[15px] text-paper-foreground">
                  <div className="flex gap-3">
                    <span className="font-sans text-base font-bold shrink-0">
                      {sequentialNumber}.
                    </span>
                    <div className="block flex-1">
                      <MathRenderer text={q.questionStem} className="block leading-relaxed" />
                    </div>
                  </div>

                  <ol className="mt-4 space-y-5 pl-7">
                    {q.parts.map((part, pIndex) => (
                      <li
                        key={`assembled-part-${sequentialNumber}-${pIndex}`}
                        className="print:break-inside-avoid"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-14 shrink-0 font-semibold">
                            {cleanPartLabel(part.partLabel)}
                          </span>
                          <div className="block flex-1">
                            <MathRenderer text={part.questionText} className="block leading-relaxed" />
                          </div>
                          <span className="shrink-0 pl-2 font-sans font-bold">
                            [{part.marks}]
                          </span>
                        </div>

                        {showWorkingLines && (
                          <div className="mt-2 pl-[4.25rem]" aria-hidden>
                            {Array.from({ length: part.workingLines || 4 }).map((_, j) => (
                              <div key={j} className="working-line" />
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            );
          })}
        </div>

        {/* End of paper marker */}
        <div className="mt-12 text-center font-bold tracking-widest text-xs uppercase text-paper-foreground print:break-inside-avoid print:mt-16">
          — END OF QUESTION PAPER —
        </div>

        <footer className="mt-10 flex justify-between border-t border-paper-line pt-2 text-[10px] uppercase tracking-wider text-paper-muted">
          <span>
            {assembledExam.syllabusCode} · {assembledExam.variantSet}
          </span>
          <span>Unseen Pre-Board · Do not reproduce</span>
        </footer>
      </article>
    );
  }

  // Fallback single question rendering
  if (!paper) {
    return null;
  }

  return <SingleQuestionPaperPreview paper={paper} showWorkingLines={showWorkingLines} showCandidateHeader={showCandidateHeader} />;
}

function SingleQuestionPaperPreview({
  paper,
  showWorkingLines,
  showCandidateHeader,
}: {
  paper: GeneratedExamPaper;
  showWorkingLines: boolean;
  showCandidateHeader: boolean;
}) {
  const [editable, setEditable] = useState(false);
  const [stem, setStem] = useState(paper.questionStem);
  const [parts, setParts] = useState(paper.parts);
  const h = paper.paperHeader;

  useEffect(() => {
    setStem(paper.questionStem);
    setParts(paper.parts);
  }, [paper]);

  return (
    <article className="exam-sheet mx-auto w-full max-w-[210mm] px-8 py-10 sm:px-12 relative bg-card text-card-foreground">
      <div className="no-print absolute top-3 right-3">
        <button
          type="button"
          onClick={() => setEditable((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded border border-paper-line bg-card px-2.5 py-1 text-xs font-medium text-paper-muted hover:text-paper-foreground transition-colors shadow-sm"
        >
          {editable ? <Check className="size-3 text-emerald-600" /> : <Edit3 className="size-3" />}
          {editable ? "Done Editing" : "Edit Text"}
        </button>
      </div>

      <header className="border-2 border-paper-rule">
        <div className="flex items-stretch justify-between gap-4 p-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-muted">
              {h.examBoard}
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold text-paper-foreground">
              {h.syllabusCode}
            </p>
            <p className="mt-1 font-serif text-base text-paper-foreground">
              {h.paperTitle}
            </p>
            <p className="mt-0.5 text-xs text-paper-muted">
              Topic: {h.topic}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end justify-between gap-2 text-right">
            <span className="border-2 border-paper-rule px-3 py-1 font-mono text-lg font-bold tracking-widest">
              {h.variantSet.toUpperCase()}
            </span>
            <div className="text-xs text-paper-muted">
              <p>
                Time Allowed:{" "}
                <span className="font-semibold text-paper-foreground">
                  {h.timeAllowed}
                </span>
              </p>
              <p>
                Total Marks:{" "}
                <span className="font-semibold text-paper-foreground">
                  [{h.totalMarks}]
                </span>
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
        Answer all questions. Show all necessary working. The number of marks is given in brackets [ ] at the end of each question or part question.
      </p>

      <section className="mt-6 font-serif text-[15px] text-paper-foreground">
        <div className="flex gap-3">
          <span className="font-sans text-base font-bold shrink-0">{paper.questionNumber}.</span>
          {editable ? (
            <textarea
              value={stem}
              onChange={(e) => setStem(e.target.value)}
              rows={3}
              className="w-full rounded border border-input bg-background p-2 font-serif text-sm leading-relaxed"
            />
          ) : (
            <div className="block flex-1 leading-relaxed">
              <MathRenderer text={stem} className="block leading-relaxed" />
            </div>
          )}
        </div>

        <ol className="mt-4 space-y-5 pl-7">
          {parts.map((p, i) => (
            <li key={i} className="print:break-inside-avoid">
              <div className="flex items-start gap-3">
                <span className="w-14 shrink-0 font-semibold">{cleanPartLabel(p.partLabel)}</span>
                {editable ? (
                  <div className="flex-1 space-y-2">
                    <textarea
                      value={p.questionText}
                      onChange={(e) => {
                        const updated = [...parts];
                        const cur = updated[i];
                        if (cur) {
                          updated[i] = { ...cur, questionText: e.target.value };
                          setParts(updated);
                        }
                      }}
                      rows={2}
                      className="w-full rounded border border-input bg-background p-2 font-serif text-sm leading-relaxed"
                    />
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <label className="flex items-center gap-1">
                        Marks:
                        <input
                          type="number"
                          value={p.marks}
                          min={1}
                          max={20}
                          onChange={(e) => {
                            const updated = [...parts];
                            const cur = updated[i];
                            if (cur) {
                              updated[i] = { ...cur, marks: Number(e.target.value) || 1 };
                              setParts(updated);
                            }
                          }}
                          className="w-14 rounded border border-input bg-background px-1 py-0.5 font-sans"
                        />
                      </label>
                      <label className="flex items-center gap-1">
                        Working lines:
                        <input
                          type="number"
                          value={p.workingLines}
                          min={0}
                          max={20}
                          onChange={(e) => {
                            const updated = [...parts];
                            const cur = updated[i];
                            if (cur) {
                              updated[i] = { ...cur, workingLines: Number(e.target.value) || 0 };
                              setParts(updated);
                            }
                          }}
                          className="w-14 rounded border border-input bg-background px-1 py-0.5 font-sans"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="block flex-1 leading-relaxed">
                    <MathRenderer text={p.questionText} className="block leading-relaxed" />
                  </div>
                )}
                <span className="shrink-0 pl-2 font-sans font-bold">[{p.marks}]</span>
              </div>

              {showWorkingLines && (
                <div className="mt-2 pl-[4.25rem]" aria-hidden>
                  {Array.from({ length: p.workingLines }).map((_, j) => (
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
        <span>MockLab Engine · Verified Isomorphic Variant</span>
      </footer>
    </article>
  );
}

export default ExamPaperPreview;
