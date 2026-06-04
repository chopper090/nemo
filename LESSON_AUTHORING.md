# Authoring lezioni — guida per generare contenuti con altri LLM

## Come usare questo file

1. Apri ChatGPT, Gemini, Claude (web) — qualsiasi LLM
2. Copia-incolla il **prompt template** sotto, sostituisci i parametri tra `{{}}`
3. L'LLM produce uno o più oggetti JS
4. Copia-incolla l'output **direttamente nella chat di Claude Code**
5. Claude Code li aggiunge all'array `LESSONS` in `index.html`

---

## Programma sommario (60 lezioni)

```
MODULO 1 — Fondamenta              [L1-L5]    ✅ FATTO
MODULO 2 — Intervalli completi      [L6-L14]   ◻️  DA SCRIVERE  (priorità 1)
MODULO 3 — Costruzione accordi      [L15-L25]  ◻️  DA SCRIVERE  (priorità 2)
MODULO 4 — Scale e modi             [L26-L40]  ◻️  DA SCRIVERE  (priorità 3)
MODULO 5 — Armonia funzionale       [L41-L50]  ◻️  DA SCRIVERE  (priorità 4)
MODULO 6 — Applicazione             [L51-L60]  ◻️  DA SCRIVERE  (priorità 5)
```

Dettaglio titoli e concetti per ogni lezione → `LEARN_CURRICULUM.md`

---

## ⭐ PROMPT TEMPLATE (copia questo)

```
Sei un insegnante di teoria musicale per chitarristi. Devi scrivere una lezione
per un'app web in formato JavaScript object literal seguendo schema rigoroso.

CONTESTO APP: Note Trainer, app di studio del fretboard con sezione "Apprendi"
(lezioni teoriche con audio synth integrato). Target: chitarristi di livello
intermedio in italiano. Tono: chiaro, pragmatico, niente fronzoli accademici.

DEVI SCRIVERE LA LEZIONE:
- ID: {{NUMERO_LEZIONE}}
- Modulo: {{NUMERO_MODULO}}
- Titolo: {{TITOLO}}
- Concetto chiave: {{CONCETTO_BREVE}}

FORMATO OUTPUT (SOLO l'oggetto JS, niente altro testo):

{
  id: {{NUMERO_LEZIONE}},
  module: {{NUMERO_MODULO}},
  title: '{{TITOLO}}',
  duration: '4 min',     // 3-5 min realistici
  xp: 20,                // 15-30 in base a difficoltà
  intro: 'Frase apertura (1-2 righe).',
  sections: [
    // 4-7 sezioni alternando i tipi sotto
  ],
}

TIPI DI SEZIONE DISPONIBILI:

1) Spiegazione testuale (HTML rich)
{ type: 'text', title: 'Titolo sezione', content: 'HTML con <strong>grassetto</strong>, <code>monospace</code>, liste <ul><li>item</li></ul>' }

2) Esempio audio (synth incorporato suona le note MIDI)
{ type: 'audio', title: 'Ascolta X', text: 'Cosa stai per sentire', notes: [60, 64, 67], mode: 'sequence' }

   MODE DISPONIBILI:
   - 'sequence'           : note in sequenza melodica (usa -1 per pausa)
   - 'sequence_chords'    : gruppi di note come accordi, separati da -1
   - 'arpeggio_then_chord': prima arpeggio asc, poi tutto in blocco

3) Box giallo (insight importante)
{ type: 'callout', content: 'Frase che merita risalto.' }

4) Mini-quiz inline (verifica veloce dentro la lezione)
{ type: 'quickcheck', q: 'Domanda?', options: ['A','B','C','D'], correct: 'B' }

REGOLE STILE:
- Italiano (notazione anglosassone C/D/E preferita, italiana solo se utile)
- Frasi brevi, niente prolissità
- HTML inline, niente \n nel content
- Codice musicale: degree con apostrofo (b3, #4), accordi senza spazi (Cmaj7)
- 1-2 callout per lezione max
- 1 quickcheck finale (sempre) per consolidamento

NOTE MIDI DI RIFERIMENTO:
C4=60  D4=62  E4=64  F4=65  G4=67  A4=69  B4=71  C5=72
C3=48  C5=72  C6=84  (cambia ottava aggiungendo/togliendo 12)

ESEMPI AUDIO IDEALI PER OGNI TIPO DI CONCETTO:
- Intervallo melodico:    notes: [60, 60+sem], mode: 'sequence'
- Intervallo armonico:    notes: [60, 60+sem], mode: 'sequence_chords' (senza -1)
- Triade ascolta:         notes: [60, 64, 67], mode: 'arpeggio_then_chord'
- Confronto due elementi: notes: [60,64,67, -1, 60,63,67], mode: 'sequence_chords'
- Scala completa:         notes: [60,62,64,65,67,69,71,72], mode: 'sequence'

Restituisci SOLO l'oggetto JS, formattato leggibile, senza spiegazioni prima/dopo.
Pronto?
```

---

## Esempi di parametri da passare

### Esempio 1: Modulo 2, Lezione 6 — Tonica e Ottava
```
ID: 6
Modulo: 2
Titolo: Tonica e ottava
Concetto chiave: La R/Root è la nota di riferimento, l'ottava raddoppia la frequenza
```

### Esempio 2: Modulo 3, Lezione 15 — Triade maggiore in profondità
```
ID: 15
Modulo: 3
Titolo: La triade maggiore in profondità
Concetto chiave: Forma 1-3-5, esempi in 5 tonalità, 3 forme CAGED, ascolto
```

### Esempio 3: Modulo 4, Lezione 26 — Scala maggiore
```
ID: 26
Modulo: 4
Titolo: La scala maggiore — costruzione e suono
Concetto chiave: Pattern T-T-S-T-T-T-S, 7 modi nascosti dentro, audio
```

---

## Formato output ideale (cosa l'LLM ti deve dare)

Quando me lo passi a me (Claude Code), il formato MIGLIORE è:

````
Lezione L6:
```js
{
  id: 6, module: 2, title: 'Tonica e ottava',
  duration: '3 min', xp: 15,
  intro: '...',
  sections: [
    { type: 'text', title: '...', content: '...' },
    { type: 'audio', title: '...', text: '...', notes: [...], mode: '...' },
    ...
  ],
},
```
````

Se hai più lezioni in batch, fammi:

````
Lezioni Modulo 2:
```js
{ id: 6, module: 2, title: '...', ... },
{ id: 7, module: 2, title: '...', ... },
{ id: 8, module: 2, title: '...', ... },
```
````

**Importante**: il file ha già LESSONS L1-L5, quindi dimmi solo "aggiungi queste"
e io le incollo dopo L5 nell'array senza dover rileggere il resto.

---

## Workflow consigliato

1. **Genera in batch un intero modulo** (5-10 lezioni) con l'LLM esterno
2. Rileggi/aggiusta a mano se serve (gli LLM sbagliano qualche nota MIDI a volte)
3. Mandami il blocco JS con messaggio breve tipo "aggiungi modulo 2"
4. Io incollo in `LESSONS`, bump SW version, deploy

**Tempo totale per un modulo da 8 lezioni**: ~30 min (LLM batch genera, tu revisioni, io paste).

---

## Validation rapida (cosa controllare nell'output LLM)

- [ ] `id` univoco, progressivo, non duplicato
- [ ] `module` 1-6
- [ ] `intro` 1-2 frasi
- [ ] `sections` array di 4-7 oggetti
- [ ] Almeno 1 `audio` con `notes` array di MIDI 21-108
- [ ] Almeno 1 `quickcheck` con `correct` che è UNA delle `options`
- [ ] Niente `\n` o backtick non escapati dentro `content`
- [ ] HTML chiuso correttamente (`<ul></ul>`, `<strong></strong>`)

Se l'LLM esterno produce errori di sintassi JS, mandameli e correggo io.
