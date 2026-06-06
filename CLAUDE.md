# CLAUDE.md — Nemo

**Scopo.** PWA educativa per chitarristi: **ear training**, riconoscimento note/intervalli/
accordi/scale sul fretboard, studio brani con sync audio, 60+ lezioni adattive, gamification
(XP, streak, mastery polygon). 6 moduli (Practice/Learn/Theory/Path/Resolve/Ear/Tuner).

**Stack.** **Single-file** `index.html` (~12.3k righe) + `styles.css` (~4.2k) + `data.js`
(~2.5k, tabelle lezioni). PWA (`manifest.json`, `sw.js`). Web Audio (YIN pitch detection, synth
ADSR). Font Inter/JetBrains/Cormorant. Wrapper **Electron** (desktop) + **TWA** (Android).

**Mappa file.** `index.html` (app), `fretboard-lab.html` (editor manico — chiarire se attivo o
archiviabile), `styles.css`, `data.js`, `manifest.json`, `sw.js`, `VERSION`, `CHANGELOG.md`.
Sottocartelle: `desktop-app/` (Electron), `mobile-app/` (TWA), `icons/` (set a1/c4 + script),
`scripts/` (deploy.sh), `marketing/` (asset editoriali — valutare repo separato).

**Dove stanno i dati.** `localStorage` (progresso, XP, streak). Lezioni in `data.js`.

**Come si edita.** Lezioni → `data.js`. Documentare quale **icon set è attivo** (a1 vs c4) nel README.

**Gotcha.** In root file di esplorazione stantii da archiviare: `logo_concepts*.html`,
`logo_preview.html`, `Prompt.txt`, `solo_app_report.md`, doc di sessione (IMPROVEMENT_PLAN,
SESSION_CONTEXT). `scripts/deploy.sh` ha un `SOURCE_DIR` hardcodato esterno. Branch `legacy-v1`.

**Deploy.** GitHub Pages (`chopper090.github.io/nemo/`) + Netlify. Versionare con `_scripts\Publish-Project.ps1`.
