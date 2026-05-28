# Note Trainer · Nemo

Webapp didattica per chitarristi: tuner cromatico, fretboard interattivo, solo trainer con drill (note/intervalli/accordi/scale), sistema CAGED, pentatoniche, ear training, sistema di lezioni con difficoltà adattiva.

🔗 **Live**: https://chopper090.github.io/note-trainer/

## Stack

Single-file HTML (~13k righe, no build). PWA installabile. Wrapper APK Android (TWA) + EXE Desktop (Electron) caricano il sito live → niente rebuild per aggiornamenti contenuto.

## Branch

- `main` — produzione (live su GitHub Pages)
- `legacy-v1` — archivio versione precedente al cleanup v2.x (pre-2026-05-28)

## Versionamento

`MAJOR.MINOR.PATCH` in `VERSION`. Storia completa in `CHANGELOG.md`.

## Deploy

```bash
./scripts/deploy.sh patch "fix: descrizione"
./scripts/deploy.sh minor "feat: descrizione"
./scripts/deploy.sh major "redesign: descrizione"
./scripts/deploy.sh nobump "docs: solo docs, no bump"
```

Lo script:
1. Bumpa `VERSION` (zero-pad: `2.00.01`)
2. Copia file aggiornati da `$SOURCE_DIR` (default `C:/Users/marco/OneDrive/0. AI/CLAUDE/Chitarra/SOLO trainer/`)
3. Aggiorna nome `CACHE` in `sw.js` per forzare invalidate PWA
4. `git commit` con messaggio standard `v<ver> · <msg>` → `git push` → `git tag v<ver>` → push tag

GitHub Pages aggiorna in ~30s, APK/EXE caricano la nuova versione al prossimo avvio.
