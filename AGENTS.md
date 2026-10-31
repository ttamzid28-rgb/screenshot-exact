<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- Exam generation lives in `src/services/aiWaterfallEngine.ts` and must always resolve to a paper: providers are tried in order, then the offline preset/adapter fallback — never surface a crash to the teacher.
- Always run model output through `parseModelJson` (sanitizer) — plain `JSON.parse` silently turns `\frac` into a form-feed.
- Preset papers in `src/data/presets.ts` are hand-verified; `src/test/engine.test.ts` checks marks agree, so keep it passing when editing presets.
- Print layout is controlled by `.no-print`, `.print-full`, `.print-page-break` utilities in `src/styles.css`.
