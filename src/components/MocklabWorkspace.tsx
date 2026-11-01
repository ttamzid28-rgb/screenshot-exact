import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Code,
  Dices,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  GraduationCap,
  KeyRound,
  Layers,
  Loader2,
  Printer,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import { ApiKeyModal } from "@/components/ApiKeyModal";
import { ExamPaperPreview } from "@/components/ExamPaperPreview";
import { MarkSchemePreview } from "@/components/MarkSchemePreview";
import { MathRenderer } from "@/components/MathRenderer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { PRESETS, SYLLABUS_OPTIONS, findPreset } from "@/data/presets";
import { cn } from "@/lib/utils";
import { countArmedProviders, generateExamPaper } from "@/services/aiWaterfallEngine";
import type {
  ExamBoard,
  GeneratedExamPaper,
  ProviderName,
  VariantSet,
  VariationMode,
} from "@/types/exam";

type View = "original" | "paper" | "scheme" | "pack";

interface Telemetry {
  provider: ProviderName;
  latencyMs: number | null;
  isFallback: boolean;
}

const MODES: { value: VariationMode; title: string; desc: string }[] = [
  { value: "strict_isomorphic", title: "Strict Isomorphic", desc: "New numbers & constants, identical cognitive steps" },
  { value: "context_shift", title: "Context Shift", desc: "Same mathematical/scientific model, fresh scenario" },
  { value: "challenge_boost", title: "Challenge Boost", desc: "+15% algebraic depth for top-set pre-boards" },
];

const BOARDS: ExamBoard[] = ["CAIE (Cambridge)", "Pearson Edexcel"];

function getPapaCambridgeUrl(code: string): string {
  if (code.includes("9709")) return "https://pastpapers.papacambridge.com/papers/caie/as-and-a-level-mathematics-9709";
  if (code.includes("4024")) return "https://pastpapers.papacambridge.com/papers/caie/o-level-mathematics-d-4024";
  if (code.includes("5054")) return "https://pastpapers.papacambridge.com/papers/caie/o-level-physics-5054";
  if (code.includes("9702")) return "https://pastpapers.papacambridge.com/papers/caie/as-and-a-level-physics-9702";
  if (code.includes("WMA11")) return "https://pastpapers.papacambridge.com/papers/edexcel";
  return "https://pastpapers.papacambridge.com";
}

function telemetryLabel(t: Telemetry): string {
  const ms = t.latencyMs !== null ? ` • ${t.latencyMs.toLocaleString()}ms` : "";
  switch (t.provider) {
    case "Groq LPU":
      return `⚡ Groq LPU${ms}`;
    case "Cerebras WSE":
      return `🛡️ Failover: Cerebras WSE${ms}`;
    case "SambaNova RDU":
      return `🔄 Backup: SambaNova RDU${ms}`;
    default:
      return t.latencyMs === null ? "✅ Verified Local Engine (Ready)" : `✅ Verified Local Engine${ms}`;
  }
}

export function MocklabWorkspace() {
  const initial = PRESETS[0]!;
  const [examBoard, setExamBoard] = useState<ExamBoard>(initial.examBoard);
  const [syllabus, setSyllabus] = useState(initial.syllabusCode);
  const [presetId, setPresetId] = useState(initial.id);
  const [sourcePreviewMode, setSourcePreviewMode] = useState<"edit" | "preview">("preview");

  const [sourceText, setSourceText] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("mocklab_source_text");
      if (saved) return saved;
    }
    return initial.sourceQuestionText;
  });

  const [mode, setMode] = useState<VariationMode>("strict_isomorphic");

  const [paper, setPaper] = useState<GeneratedExamPaper>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("mocklab_active_paper");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return initial.fallbackSetA;
  });

  const [telemetry, setTelemetry] = useState<Telemetry>({
    provider: "Verified Local Engine",
    latencyMs: null,
    isFallback: true,
  });
  const [generating, setGenerating] = useState<VariantSet | null>(null);
  const [activeProvider, setActiveProvider] = useState<ProviderName | null>(null);
  const [view, setView] = useState<View>("paper");
  const [showLines, setShowLines] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [keysOpen, setKeysOpen] = useState(false);
  const [armed, setArmed] = useState(0);

  useEffect(() => setArmed(countArmedProviders()), []);

  useEffect(() => {
    try {
      window.localStorage.setItem("mocklab_source_text", sourceText);
    } catch {}
  }, [sourceText]);

  useEffect(() => {
    try {
      window.localStorage.setItem("mocklab_active_paper", JSON.stringify(paper));
    } catch {}
  }, [paper]);

  const syllabusOption = SYLLABUS_OPTIONS.find((s) => s.value === syllabus) ?? SYLLABUS_OPTIONS[0]!;
  const currentPreset = findPreset(presetId);

  const loadPreset = (id: string) => {
    const p = findPreset(id);
    if (!p) return;
    setPresetId(id);
    setExamBoard(p.examBoard);
    setSyllabus(p.syllabusCode);
    setSourceText(p.sourceQuestionText);
    setPaper(p.fallbackSetA);
    setTelemetry({ provider: "Verified Local Engine", latencyMs: null, isFallback: true });
  };

  const changeSyllabus = (code: string) => {
    setSyllabus(code);
    const matched = PRESETS.find((p) => p.syllabusCode === code);
    if (matched) {
      loadPreset(matched.id);
    }
  };

  const changeBoard = (board: ExamBoard) => {
    setExamBoard(board);
    if (syllabusOption.examBoard !== board) {
      const first = SYLLABUS_OPTIONS.find((s) => s.examBoard === board);
      if (first) changeSyllabus(first.value);
    }
  };

  const run = async (variantSet: VariantSet) => {
    if (!sourceText.trim()) {
      toast.error("Paste a past paper question first");
      return;
    }
    setGenerating(variantSet);
    try {
      const result = await generateExamPaper({
        preset: findPreset(presetId),
        sourceText,
        examBoard,
        syllabusCode: syllabusOption.syllabusCode,
        paperTitle: syllabusOption.paperTitle,
        mode,
        variantSet,
        onProviderAttempt: setActiveProvider,
      });
      setPaper(result.paper);
      setTelemetry({ provider: result.providerUsed, latencyMs: result.latencyMs, isFallback: result.isFallback });
      toast.success(`${variantSet} ready`, {
        description: result.isFallback
          ? armed > 0
            ? "AI providers unavailable — served by the Verified Local Engine."
            : "Served by the Verified Local Engine."
          : `Generated by ${result.providerUsed} in ${result.latencyMs.toLocaleString()}ms.`,
      });
    } finally {
      setGenerating(null);
      setActiveProvider(null);
    }
  };

  const printPack = () => {
    setView("pack");
    window.setTimeout(() => window.print(), 150);
  };

  const unverified = paper.verificationSummary.startsWith("Offline adaptation");

  return (
    <div className="flex min-h-screen flex-col">
      {/* ---------------- Top navigation ---------------- */}
      <header className="no-print sticky top-0 z-30 border-b border-nav-border bg-nav text-nav-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-4 py-3 lg:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-md bg-primary-glow">
              <GraduationCap className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight">Mocklab</p>
              <p className="hidden text-[11px] text-nav-muted sm:block">
                Unseen Pre-Boards & Examiner Mark Schemes for CAIE & Edexcel
              </p>
            </div>
            <Badge variant="nav" className="ml-1 hidden md:inline-flex">
              <Layers className="mr-1 size-3" /> Isomorphic Exam & Mark Scheme Engine
            </Badge>
          </div>

          <div className="ml-auto flex flex-wrap items-center gap-2">
            <span
              className="rounded-full border border-nav-border px-3 py-1.5 font-mono text-xs text-nav-foreground"
              aria-live="polite"
            >
              {generating && activeProvider ? `⏳ ${activeProvider}…` : telemetryLabel(telemetry)}
            </span>
            <Button variant="nav" size="sm" onClick={() => setKeysOpen(true)}>
              <span className="relative">
                <KeyRound />
                {armed > 0 && <span className="absolute -right-1 -top-1 size-2 rounded-full bg-verified" />}
              </span>
              API Keys & Failover
              <span className="font-mono text-nav-muted">{armed}/3</span>
            </Button>
            <Button variant="navPrimary" size="sm" onClick={printPack}>
              <Printer /> Print Exam Pack
            </Button>
          </div>
        </div>
      </header>

      <main className="print-full mx-auto grid w-full max-w-[1600px] flex-1 gap-6 px-4 py-6 lg:grid-cols-[2fr_3fr] lg:px-6">
        {/* ---------------- Teacher Control Studio ---------------- */}
        <aside className="no-print space-y-5 lg:sticky lg:top-[76px] lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto lg:pr-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">
              Teacher Control Studio
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Build an unseen pre-board</h1>
          </div>

          <section className="space-y-4 rounded-lg border bg-card p-4">
            <div className="space-y-2">
              <Label>Exam board</Label>
              <div className="grid grid-cols-2 rounded-md bg-muted p-1" role="radiogroup">
                {BOARDS.map((b) => (
                  <button
                    key={b}
                    role="radio"
                    aria-checked={examBoard === b}
                    onClick={() => changeBoard(b)}
                    className={cn(
                      "rounded px-3 py-2 text-sm font-medium transition-colors",
                      examBoard === b ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Subject & paper</Label>
              <Select value={syllabus} onValueChange={changeSyllabus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SYLLABUS_OPTIONS.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Official past paper preset</Label>
              <Select value={presetId} onValueChange={loadPreset}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRESETS.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          <section className="space-y-3 rounded-lg border bg-card p-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="source">Source past paper question</Label>
              <div className="inline-flex rounded-md border bg-muted/60 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setSourcePreviewMode("edit")}
                  className={cn(
                    "flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium transition-colors",
                    sourcePreviewMode === "edit"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Code className="size-3" /> Edit LaTeX
                </button>
                <button
                  type="button"
                  onClick={() => setSourcePreviewMode("preview")}
                  className={cn(
                    "flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium transition-colors",
                    sourcePreviewMode === "preview"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Eye className="size-3" /> Preview Math
                </button>
              </div>
            </div>

            {sourcePreviewMode === "preview" ? (
              <div
                className="min-h-[170px] max-h-[280px] overflow-y-auto rounded-md border border-input bg-muted/20 p-3 font-serif text-xs leading-relaxed"
                title="Click 'Edit LaTeX' to modify"
              >
                <MathRenderer text={sourceText} className="block" />
              </div>
            ) : (
              <Textarea
                id="source"
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                rows={9}
                className="font-mono text-xs leading-relaxed"
              />
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-muted-foreground">
              <span>
                Use <code>$...$</code> for maths and <code>[3]</code> for marks.
              </span>
              <a
                href={getPapaCambridgeUrl(syllabusOption.syllabusCode)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                PapaCambridge Archive <ExternalLink className="size-3" />
              </a>
            </div>
          </section>

          <section className="space-y-2">
            <Label>Generation mode</Label>
            <div className="grid gap-2" role="radiogroup">
              {MODES.map((m) => (
                <button
                  key={m.value}
                  role="radio"
                  aria-checked={mode === m.value}
                  onClick={() => setMode(m.value)}
                  className={cn(
                    "flex items-start gap-3 rounded-lg border bg-card p-3 text-left transition-colors",
                    mode === m.value ? "border-primary-glow ring-1 ring-primary-glow" : "hover:border-ring",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                      mode === m.value ? "border-primary-glow" : "border-input",
                    )}
                  >
                    {mode === m.value && <span className="size-2 rounded-full bg-primary-glow" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{m.title}</span>
                    <span className="block text-xs text-muted-foreground">{m.desc}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-2 pb-4">
            <Button variant="hero" size="xl" className="w-full" disabled={!!generating} onClick={() => run("Set A")}>
              {generating === "Set A" ? (
                <>
                  <Loader2 className="animate-spin" /> Generating via {activeProvider ?? "engine"}…
                </>
              ) : (
                <>
                  <Sparkles /> Generate Unseen Mock & Mark Scheme
                </>
              )}
            </Button>
            <Button variant="outline" size="lg" className="w-full" disabled={!!generating} onClick={() => run("Set B")}>
              {generating === "Set B" ? (
                <>
                  <Loader2 className="animate-spin" /> Rolling Set B via {activeProvider ?? "engine"}…
                </>
              ) : (
                <>
                  <Dices /> Roll Set B (Anti-Cheating Desk Variant)
                </>
              )}
            </Button>
          </section>
        </aside>

        {/* ---------------- Live preview ---------------- */}
        <section className="print-full min-w-0 space-y-4">
          <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card p-2">
            <Tabs value={view} onValueChange={(v) => setView(v as View)}>
              <TabsList className="h-auto flex-wrap">
                <TabsTrigger value="original" className="gap-1.5">
                  <FileText className="size-4" /> Original Past Paper
                </TabsTrigger>
                <TabsTrigger value="paper" className="gap-1.5">
                  <FileText className="size-4" /> Student Question Paper
                </TabsTrigger>
                <TabsTrigger value="scheme" className="gap-1.5">
                  <FileCheck2 className="size-4" /> Examiner Mark Scheme (M1/A1/B1)
                </TabsTrigger>
                <TabsTrigger value="pack" className="gap-1.5">
                  <Layers className="size-4" /> Full Exam Pack
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex flex-wrap items-center gap-4 px-2 text-sm">
              <label className="flex items-center gap-2">
                <Switch checked={showLines} onCheckedChange={setShowLines} /> Write-on working lines
              </label>
              <label className="flex items-center gap-2">
                <Switch checked={showHeader} onCheckedChange={setShowHeader} /> Candidate header box
              </label>
            </div>
          </div>

          <div
            className={cn(
              "no-print flex items-start gap-2.5 rounded-lg px-4 py-3 text-sm",
              unverified ? "bg-muted text-muted-foreground" : "bg-verified text-verified-foreground",
            )}
          >
            {unverified ? <ShieldCheck className="mt-0.5 size-4 shrink-0" /> : <CheckCircle2 className="mt-0.5 size-4 shrink-0" />}
            <p>
              <span className="font-semibold">{unverified ? "Not verified · " : "Mathematically verified · "}</span>
              {paper.verificationSummary}
            </p>
          </div>

          <div className={cn("print-full rounded-lg bg-muted/70 p-3 sm:p-6", generating && "opacity-60 transition-opacity")}>
            {view === "original" && (
              <article className="exam-sheet mx-auto w-full max-w-[210mm] px-8 py-10 sm:px-12 relative">
                <header className="border-2 border-paper-rule">
                  <div className="flex items-stretch justify-between gap-4 p-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-muted">
                        {examBoard}
                      </p>
                      <p className="mt-1 font-mono text-2xl font-semibold text-paper-foreground">
                        {syllabusOption.syllabusCode}
                      </p>
                      <p className="mt-1 font-serif text-base text-paper-foreground">
                        {syllabusOption.paperTitle}
                      </p>
                      <p className="mt-0.5 text-xs text-paper-muted">
                        Topic: {currentPreset?.topic ?? "Benchmark Source Question"}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end justify-between gap-2 text-right">
                      <span className="border-2 border-paper-rule px-3 py-1 font-mono text-xs font-bold tracking-widest text-primary bg-primary/5">
                        ORIGINAL BENCHMARK
                      </span>
                      <div className="text-xs text-paper-muted">
                        <p>Official Past Paper Source</p>
                      </div>
                    </div>
                  </div>

                  {showHeader && (
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
                    <span className="font-sans text-base font-bold">1.</span>
                    <div className="block flex-1 leading-relaxed">
                      <MathRenderer text={sourceText} className="block leading-relaxed" />
                    </div>
                  </div>

                  {showLines && (
                    <div className="mt-8 space-y-2 pl-7" aria-hidden>
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div key={j} className="working-line" />
                      ))}
                    </div>
                  )}
                </section>

                <footer className="mt-10 flex justify-between border-t border-paper-line pt-2 text-[10px] uppercase tracking-wider text-paper-muted">
                  <span>{syllabusOption.syllabusCode} · Benchmark Past Paper</span>
                  <span>Official Archive</span>
                </footer>
              </article>
            )}

            {(view === "paper" || view === "pack") && (
              <ExamPaperPreview paper={paper} showWorkingLines={showLines} showCandidateHeader={showHeader} />
            )}
            {view === "pack" && <div className="print-page-break" />}
            {(view === "scheme" || view === "pack") && <MarkSchemePreview paper={paper} />}
          </div>
        </section>
      </main>

      <ApiKeyModal open={keysOpen} onOpenChange={setKeysOpen} onSaved={() => setArmed(countArmedProviders())} />
    </div>
  );
}
