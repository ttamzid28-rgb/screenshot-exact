import React from "react";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  Layers,
  Printer,
  Trash2,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { GeneratedExamPaper } from "@/types/exam";

interface ExamAssemblyDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  queue: GeneratedExamPaper[];
  onReorder: (newQueue: GeneratedExamPaper[]) => void;
  onRemove: (index: number) => void;
  onClear: () => void;
  onPreviewQuestion: (paper: GeneratedExamPaper) => void;
  onViewAssembled: () => void;
  onPrintAssembledPack: () => void;
}

export function ExamAssemblyDrawer({
  open,
  onOpenChange,
  queue,
  onReorder,
  onRemove,
  onClear,
  onPreviewQuestion,
  onViewAssembled,
  onPrintAssembledPack,
}: ExamAssemblyDrawerProps) {
  const totalMarks = queue.reduce(
    (sum, q) =>
      sum + (q.paperHeader?.totalMarks || q.parts.reduce((s, p) => s + p.marks, 0)),
    0,
  );
  const timeAllowed = Math.round(totalMarks * 1.5);

  const hasMixedSyllabus =
    queue.length > 1 &&
    queue.some(
      (q) =>
        q.paperHeader?.syllabusCode !== queue[0]?.paperHeader?.syllabusCode ||
        q.paperHeader?.examBoard !== queue[0]?.paperHeader?.examBoard,
    );

  const moveUp = (index: number) => {
    if (index <= 0) return;
    const next = [...queue];
    const item = next[index]!;
    next[index] = next[index - 1]!;
    next[index - 1] = item;
    onReorder(next);
  };

  const moveDown = (index: number) => {
    if (index >= queue.length - 1) return;
    const next = [...queue];
    const item = next[index]!;
    next[index] = next[index + 1]!;
    next[index + 1] = item;
    onReorder(next);
  };

  const handleClear = () => {
    onClear();
    toast.success("Exam paper queue cleared", {
      description: "All assembled questions have been removed from the queue.",
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col p-0 sm:max-w-xl md:max-w-2xl bg-card text-card-foreground border-l shadow-2xl"
      >
        <SheetHeader className="border-b px-6 py-5 bg-muted/40">
          <div className="flex items-center gap-2 text-primary-glow">
            <Layers className="size-5" />
            <SheetTitle className="text-xl font-bold tracking-tight">
              Pre-Board Paper Assembly Queue
            </SheetTitle>
          </div>
          <SheetDescription className="text-xs text-muted-foreground mt-1">
            Reorder and curate questions into an authentic multi-question examination paper.
          </SheetDescription>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs font-semibold py-1 px-3 bg-background">
              {queue.length} {queue.length === 1 ? "Question" : "Questions"} · {totalMarks} Marks
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs py-1 px-3">
              ⏱️ {timeAllowed} minutes (Allocated Time)
            </Badge>
          </div>
        </SheetHeader>

        {/* Informational Banner for Mixed Syllabi */}
        {hasMixedSyllabus && (
          <div className="mx-6 mt-4 flex items-start gap-2.5 rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300">
            <AlertTriangle className="size-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Mixed Syllabus Paper</p>
              <p className="text-[11px] opacity-90">
                Note: Assembling a mixed-syllabus paper. Header defaults to the primary syllabus.
              </p>
            </div>
          </div>
        )}

        {/* Question List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {queue.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center text-muted-foreground">
              <FileText className="size-10 mb-2 stroke-1 opacity-50" />
              <p className="text-sm font-medium">Assembly Queue is empty</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-xs">
                Click <span className="font-semibold text-foreground">"Add Question to Exam Paper"</span> in the Teacher Studio sidebar to queue questions here.
              </p>
            </div>
          ) : (
            queue.map((q, index) => {
              const qMarks =
                q.paperHeader?.totalMarks ||
                q.parts.reduce((s, p) => s + p.marks, 0);

              return (
                <div
                  key={`${q.paperHeader?.syllabusCode}-${index}-${qMarks}`}
                  className="group relative flex flex-col gap-3 rounded-lg border bg-background p-4 shadow-sm transition-all hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                        Q{index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-muted-foreground">
                            {q.paperHeader?.syllabusCode}
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs font-semibold text-foreground">
                            {q.paperHeader?.topic || "Exam Question"}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 font-serif">
                          {q.questionStem.replace(/[$#*_]/g, "")}
                        </p>
                      </div>
                    </div>

                    <Badge variant="outline" className="font-mono text-xs font-bold shrink-0">
                      [{qMarks} marks]
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/50 pt-2.5 text-xs">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-xs"
                        disabled={index === 0}
                        onClick={() => moveUp(index)}
                        title="Move Up"
                      >
                        <ArrowUp className="size-3 mr-1" /> Up
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-xs"
                        disabled={index === queue.length - 1}
                        onClick={() => moveDown(index)}
                        title="Move Down"
                      >
                        <ArrowDown className="size-3 mr-1" /> Down
                      </Button>
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                        onClick={() => onPreviewQuestion(q)}
                        title="Preview Question in Studio"
                      >
                        <Eye className="size-3 mr-1" /> Preview
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive transition-colors"
                        onClick={() => onRemove(index)}
                        title="Remove Question"
                      >
                        <Trash2 className="size-3 text-destructive/80 group-hover:text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        <SheetFooter className="border-t bg-muted/30 px-6 py-4 flex-col sm:flex-col gap-2">
          <div className="flex w-full items-center justify-between gap-3">
            <Button
              variant="outline"
              size="sm"
              disabled={queue.length === 0}
              onClick={handleClear}
              className="text-muted-foreground hover:text-destructive"
            >
              Clear All
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={queue.length === 0}
                onClick={onViewAssembled}
                className="font-medium"
              >
                <FileText className="size-4 mr-1.5" /> View Assembled Pre-Board
              </Button>
              <Button
                variant="default"
                size="sm"
                disabled={queue.length === 0}
                onClick={onPrintAssembledPack}
                className="font-medium"
              >
                <Printer className="size-4 mr-1.5" /> Print Assembled Exam Pack
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
