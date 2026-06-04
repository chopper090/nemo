# Changelog

## v2.03.01 — 2026-06-04

- Fix mobile: barra dei tasti dell'header su 3 righe a tutta larghezza (brand · modalità · vista); tutti i pulsanti (Sølo/Sølve/Ear/Lick/Play/Tune/Lab + controlli vista) ora visibili e cliccabili, senza sovrapposizioni né tagli.

## v2.03.00 — 2026-06-04

- Modulo **PLAY** completo: accordo in evidenza + diagramma, testo con accordi, metronomo che avanza la progressione.
- Sincronizzazione: tap-tempo, sincronizza battendo, sync sull'audio MP3, editor durate, schemi di pennata.
- Zoom accordo: gradi e tutte le posizioni sul manico, tuning-aware (accordature multiple).
- Libreria canzoni + import (incolla o prompt AI), enarmonia e notazione IT/EN.
- Fix: barra pulsanti modalità scorrevole su mobile (Play raggiungibile da telefono).

Versionamento `MAJOR.MINOR.PATCH`:
- **MAJOR**: redesign / breaking change
- **MINOR**: nuova feature
- **PATCH**: bug fix

Branch `main` = produzione (live su GitHub Pages).
Branch `legacy-v1` = versione precedente archiviata (pre-cleanup massivo).

---

## v2.02.00 — 2026-05-30
Minor: espansione modulo Lick + fix layout mobile + ripristino `data.js`.

### Lick (libreria)
- Database lick ampliato **da 8 a 31**, in 9 categorie: Pentatonica, Scale & Modi (i 7 modi della maggiore), Legato, Blues, Bending, Sweep, Arpeggi, Alternate
- **Trasposizione tonalità** dal vivo (◀ / ▶ + reset) con tablatura, manico e playback aggiornati insieme
- Overlay **"scala sul manico"**: mostra l'intera scala attorno alle note del lick
- **Sidebar elenco lick collassabile** (stato persistito)
- Nuova tecnica **mezzo-bend (½)**; ogni lick ha descrizione didattica

### Logo
- Nuovo logo **Nemo "N"** (set A1) su tutte le icone (app, PWA, transparent, with-name)

### Fix
- **Layout mobile** del modulo Lick: risolte sovrapposizioni dei pulsanti e testo tagliato nella topbar (≤720px)
- Aggiunto **`data.js`** (tabelle didattiche LESSONS/LEVELS) che mancava nel deploy → Apprendi/Percorso ora completi

## v2.00.00 — 2026-05-28
Major: cleanup + UX + adaptive difficulty (cumulativo da 3 sessioni di lavoro).

### Cleanup codice
- Indice navigabile (TOC) inserito in cima al file
- Dedup `NOTES_EN` globale, `.logo-mini` base + override colore
- CSS variables `--c-mute/--c-border-dk/--c-surface-dk/--c-ear/--c-tuner/--c-resolve/--c-solo`
- Utility font classes `.f-ui-13-*`, `.f-mono-11`, `.f-serif-lg`
- Helper `wireDataButtons()` applicato a Resolve/Ear (refactor listener registration)

### UX quick-wins
- Pulse "in-tune" sul tuner, focus state migliorato (box-shadow), label "slack/taut" sui dot
- `prefers-reduced-motion` globale (WCAG 2.3.3)
- Onboarding sheet primo launch (3 path: sølo/sølve/ear)
- Lock icon + dashed border su lesson card bloccate, available più affordanti
- Stats weak items con icone `!`/`✓`
- Header buttons redesign (pill compatti, divisore Vista/Preferenze)
- Centratura titoli overlay tune/ear/resolve (grid 3-col simmetrico)
- Tuner rinominato "tune" (più compatto)
- Solo Mode: settings via icona ⚙ allineata a ear/sølve/tune
- Tuner: device picker + mic permission persist
- Resolve dial 1-100 aggiornato live durante drag

### Ear training
- Single mode trasformato in **trick mode**: 50% target, 50% intervallo vicino + risposta SÌ/NO
- Pill direzione esplicite: Melodico (asc/desc) vs Armonico (simultaneo) vs Misto

### Didattica adattiva (la grande novità)
- `Theory._tieredPools` per 6 famiglie (chordNames, intervalSem, majScaleSem, chromaticSem, extensionLabels, earSem) con 3 tier (★/★★/★★★)
- `LESSON_QUIZ_RESTRICTIONS` per 30+ lezioni dei moduli 1-6: coerenza didattica per livello
- Auto-derive restrict da `lesson.sections` per lezioni non mappate
- Toggle "📚 Solo concetti studiati" in Theory libera
- Adaptive difficulty Solo Mode: `pickWeakItem()` pesca più spesso le note/intervalli deboli
- UI hint "Pool: …" nella scelta livello del LessonTest

### Service Worker
- Cache bump: `nemo-v47-*` → `nemo-v51-concepts-known-adaptive` (forza invalidate su PWA/APK/EXE)

---

## v1.x — Versione legacy
Vedi branch `legacy-v1` per la storia precedente.
