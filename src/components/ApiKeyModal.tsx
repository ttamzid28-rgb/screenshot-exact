import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Eye, EyeOff, KeyRound, Loader2, ShieldCheck, Trash2, XCircle } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PROVIDERS, testProviderConnection } from "@/services/aiWaterfallEngine";

const PLACEHOLDERS: Record<string, string> = {
  "Groq LPU": "gsk_...",
  "Cerebras WSE": "csk-...",
  "SambaNova RDU": "SambaNova API key",
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}

export function ApiKeyModal({ open, onOpenChange, onSaved }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [testing, setTesting] = useState(false);
  const [testResults, setTestResults] = useState<Record<string, { ok: boolean; message: string }>>({});

  useEffect(() => {
    if (!open) return;
    const next: Record<string, string> = {};
    for (const p of PROVIDERS) {
      next[p.storageKey] = window.localStorage.getItem(p.storageKey) || p.envKey || "";
    }
    setValues(next);
    setVisible({});
    setTestResults({});
  }, [open]);

  const save = () => {
    for (const p of PROVIDERS) {
      const v = (values[p.storageKey] ?? "").trim();
      if (v) window.localStorage.setItem(p.storageKey, v);
      else window.localStorage.removeItem(p.storageKey);
    }
    onSaved();
    toast.success("Keys saved to this browser");
    onOpenChange(false);
  };

  const clear = () => {
    for (const p of PROVIDERS) window.localStorage.removeItem(p.storageKey);
    setValues({});
    setTestResults({});
    onSaved();
    toast("All keys cleared — Verified Local Engine will serve papers");
  };

  const runKeyTests = async () => {
    setTesting(true);
    const results: Record<string, { ok: boolean; message: string }> = {};
    for (const p of PROVIDERS) {
      const activeKey = (values[p.storageKey] ?? "").trim() || p.envKey;
      if (!activeKey) {
        results[p.name] = { ok: false, message: "No key entered" };
        continue;
      }
      const outcome = await testProviderConnection(p, activeKey);
      results[p.name] = { ok: outcome.ok, message: outcome.message };
    }
    setTestResults(results);
    setTesting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <KeyRound className="size-5 text-primary" /> API Keys & Failover
          </DialogTitle>
          <DialogDescription>
            Keys stay in this browser only. With no keys, Mocklab serves verified offline papers.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {PROVIDERS.map((p) => {
            const v = values[p.storageKey] ?? "";
            const configured = v.trim().length > 0 || p.envKey.length > 0;
            const res = testResults[p.name];

            return (
              <div key={p.storageKey} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor={p.storageKey} className="text-sm font-semibold">
                    {p.name} <span className="font-normal text-muted-foreground">· {p.role}</span>
                  </Label>
                  <Badge variant={configured ? "verified" : "idle"}>
                    {configured ? "Configured" : "Not Set"}
                  </Badge>
                </div>
                <div className="relative">
                  <Input
                    id={p.storageKey}
                    type={visible[p.storageKey] ? "text" : "password"}
                    placeholder={PLACEHOLDERS[p.name]}
                    value={v}
                    autoComplete="off"
                    className="pr-10 font-mono text-xs"
                    onChange={(e) => setValues((s) => ({ ...s, [p.storageKey]: e.target.value }))}
                  />
                  <button
                    type="button"
                    aria-label={visible[p.storageKey] ? "Hide key" : "Show key"}
                    className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground hover:text-foreground"
                    onClick={() => setVisible((s) => ({ ...s, [p.storageKey]: !s[p.storageKey] }))}
                  >
                    {visible[p.storageKey] ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
                {res && (
                  <p className="flex items-center gap-1.5 text-xs">
                    {res.ok ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-medium">
                        <CheckCircle2 className="size-3.5" /> {res.message}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-destructive font-medium">
                        <XCircle className="size-3.5" /> {res.message}
                      </span>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end">
          <Button variant="outline" size="sm" disabled={testing} onClick={runKeyTests}>
            {testing ? <Loader2 className="animate-spin size-3.5 mr-1" /> : null}
            Test & Verify Keys
          </Button>
        </div>

        <div className="rounded-lg border bg-muted/60 p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Active failover pipeline
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {PROVIDERS.map((p) => (
              <span key={p.name} className="flex items-center gap-1.5">
                <span className="rounded-md border bg-card px-2 py-1 font-medium">
                  {p.name} <span className="text-muted-foreground">({p.role})</span>
                </span>
                <ArrowRight className="size-3 text-muted-foreground" />
              </span>
            ))}
            <span className="flex items-center gap-1 rounded-md bg-verified-soft px-2 py-1 font-medium text-verified">
              <ShieldCheck className="size-3" /> Local Verified Cache
            </span>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:justify-between">
          <Button variant="outline" onClick={clear}>
            <Trash2 className="mr-1 size-4" /> Clear Keys
          </Button>
          <Button onClick={save}>Save Keys to Browser</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
