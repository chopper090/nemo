# Nemo — Session Context (handoff compatto)

> Stato aggiornato dell'app dopo refactor + espansione didattica + motore di apprendimento.

## Progetto
**Nemo** — app PWA (no build) per studio chitarra: teoria, pratica con pitch-detection, ear training. Deploy Netlify, installabile su Android. Lingua UI: italiano.

## File (cartella `SOLO trainer/`)
- `index.html` (~4.5k righe) — **tutta la logica** inline + HTML body. NON è IIFE-wrapped (globali condivisi tra script).
- `styles.css` — **tutto il CSS** (estratto da index.html).
- `data.js` — **tabelle dati**: `LESSONS` (101 lezioni) + `LEVELS` (Percorso). Caricato `<script src>` PRIMA dello script principale.
- `fretboard-lab.html` — sub-feature linkata.
- `sw.js` — service worker. **Cache `nemo-v63-quiz-validity`** (bumpare ad ogni cambio asset). STATIC_ASSETS include styles.css + data.js.
- `manifest.json`, `icon*.png/svg` — PWA. Loghi attuali: `icon.svg`, `icon-192/512(.maskable).png`, `icon-transparent.png`, `icon-with-name.png`.
- Preview: server statico su `localhost:8765/index.html` (root = cartella SOLO trainer).

## Persistenza
`localStorage` chiave `nt-profile-<nome>` (+ legacy `nt-progress`). Oggetto globale `progress`. **SCHEMA_VERSION = 3**, migrazioni in `migrateProgress`.

## Viewtabs
🎸 Pratica · 📖 Apprendi · 🧠 Teoria · 🗺️ Percorso · 🎵 Brani · 📊 Stats. Overlay: Solo, Ear, Resolve, Tuner, Phrase (ritmo).

## Motore di apprendimento (implementato)
- **SRS** (SM-2-lite) in `recordStat`: sotto-oggetto `.srs {reps,interval,ease,due,lapses}`. Config in `SRS_CONFIG`. Oggetto `SRS` (`getDue/dueCount/forecast`). `opts.skipSRS` per item non ri-somministrabili.
- **Remediation** (`triggers/suggest/start`) + banner sotto le viewtabs + card "Ripasso" in Stats + previsione 7 giorni.
- **recommendNext()** (cervello "cosa faccio adesso") + `progress.loopState` (loop Lezione→Quiz→Pratica) + chip "Continua/Ripassa".
- **startSrsReview/startPracticeReview** — ripasso instrada theory o drill di pratica con config ristretta.
- **Diagnostic** (onboarding): 6 domande → lezione di partenza.
- **Mastery**: 8 pilastri SP, `spForConcept`, cap 100 SP/giorno. Quickcheck lezione → SP del pilastro giusto (via `relatedTheoryMode`, skipSRS).

## Curriculum (data.js, 11 moduli / 101 lezioni)
Ordine Apprendi (badge = posizione, NON l'id): 1 Fondamenta · 2 Ritmo&Tempo · 3 Tecnica · 4 Intervalli · 5 Accordi · 6 Scale&Modi · 7 Manico&CAGED · 8 Voicing · 9 Armonia funz. · 10 Applicazione · 11 Musicalità&Metodo. (`LEARN_MODULES` in index.html definisce ordine/titoli; gli `id` modulo restano stabili.) Audio lezioni: modi `sequence`, `sequence_chords`, `arpeggio_then_chord`, **`rhythm`** (durate reali in movimenti + accenti, per le lezioni di Ritmo).

## Quiz/Theory (13 generatori) — VALIDITÀ verificata
- Difficoltà LIBERA proporzionale al livello (`suggestedFreeDifficulty` → tier 1/2/3). Lesson-test hanno difficoltà propria.
- XP proporzionale: `5 × QUESTION_EFFORT[tipo] × moltiplicatore difficoltà`.
- **Speller diatonico** `spellNote(rootPc,degreeNumber,sem,notation)` + `ROOT_SPELLING` + `rootDisplayName`: nomi corretti in ogni tonalità (Mi#, Dob, Sibb…). Verificato 84/84 scale maggiori.
- `degreeInChord` usa la funzione REALE dell'accordo (dim7→bb7, aug→#5) da `c.tones`.
- `noteByEar` ora RELATIVO (riferimento Do). Tritono = "b5/#4".
- Sanitizer opzioni in `Theory.next()` (no duplicati, corretta sempre presente).

## Convenzioni
- Dopo modifiche a CSS/data/asset: **bumpare `CACHE` in sw.js**.
- Verifica in-browser via preview eval (gli screenshot vanno in timeout in questo ambiente → usare DOM/computed-style).
- Mantenere conceptKey prefissi (usati da PILLARS/SRS).
