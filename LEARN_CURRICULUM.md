# Curriculum Apprendi — piano didattico progressivo

> Roadmap completa della sezione **📖 Apprendi**. Solo le prime lezioni del Modulo 1 sono implementate in `index.html` (oggetto `LESSONS`). Tutto il resto è qui come piano di lavoro futuro — aggiungere una lezione = aggiungere un oggetto a `LESSONS`.

## Architettura interconnessa delle 4 sezioni

```
   📖 APPRENDI  ────────►  spiega un concetto (testo + audio + visivo)
        │                       │
        │                       ▼
        │                  "Verifica con Teoria"
        ▼                       │
   🧠 TEORIA  ◄─────────────────┘
        │                       
        │  test a multipla scelta sul concetto appena letto
        ▼
   🎸 PRATICA  ────────►  applica il concetto sullo strumento
        │                       (riconoscimento audio reale)
        ▼
   🗺️ PERCORSO  ────►  sfida finale: livello con prompts limitati e XP
```

**Flusso ideale**:
1. **Apprendi L1** → leggi cos'è una nota
2. **Teoria** → 5 quiz veloci sull'alfabeto musicale (verifica)
3. **Pratica · Nota** → trova le note random sul manico (audio)
4. **Percorso L1** → sfida ufficiale con 12 prompt e XP

---

## Modulo 1 — Fondamenta ✅ (implementato L1-L5)

> **Stato attuale al 26/05/2026**:
> - Modulo 1 ✅ complete (5/5)
> - Modulo 2 ✅ complete (9/9 — L6-L14)
> - Modulo 3 🟡 parziale (4/11 — L15-L18)
> - Modulo 4-6 ◻️ stub
> - Percorso F2-F4 ✅ livelli reali (28 livelli)
> - Cross-link Apprendi→Teoria/Percorso ✅ attivi

| L | Titolo | Status | Concetti chiave |
|---|---|---|---|
| 1 | L'alfabeto musicale | ✅ | 7 note naturali, ottava, notazione IT/EN |
| 2 | Toni e semitoni | ✅ | Distanza minima, pattern T-T-S-T-T-T-S, alterazioni |
| 3 | Le note sul manico | ✅ | Accordatura standard, 1 tasto = 1 semitono, ottave tra corde |
| 4 | Cosa è un intervallo | ✅ | Distanza, quantità + qualità, 12 intervalli base |
| 5 | La triade 1-3-5 | ✅ | Maj/min/dim/aug, ruolo della terza |

---

## Modulo 2 — Intervalli completi (da scrivere)

| L | Titolo | Concetti |
|---|---|---|
| 6 | Tonica e ottava | R = identità, ottave su strumento |
| 7 | Quinta giusta | P5, suono "potente", power chord |
| 8 | Quarta giusta | P4 vs P5, inversioni |
| 9 | Terze: la chiave armonica | 3 vs b3, riconoscere maj/min a orecchio |
| 10 | Sesta minore e maggiore | b6/6, inversioni delle terze |
| 11 | Settime: tensione vs rilassamento | 7 (sensibile) vs b7 (dominante) |
| 12 | Seconde e tritono | b2/2/b5, intervalli "dissonanti" |
| 13 | Intervalli composti (9, 11, 13) | Stessi intervalli oltre l'ottava, uso come tensioni |
| 14 | Riconoscere ad orecchio | Trucchi mnemonici (canzoni famose) per ogni intervallo |

**Pattern audio per ogni lezione**: melodic ascending, melodic descending, harmonic.

---

## Modulo 3 — Costruzione accordi (da scrivere)

| L | Titolo | Concetti |
|---|---|---|
| 15 | La triade maggiore | 1-3-5, formula universale |
| 16 | La triade minore | 1-b3-5, confronto col maggiore |
| 17 | Triadi diminuite e aumentate | Simmetria, instabilità |
| 18 | Sus2 e Sus4 | Accordi senza terza, sospensione |
| 19 | Inversioni di triade | Stesso accordo, nota più bassa diversa |
| 20 | Accordo di settima maggiore | Maj7 = triade + 7 |
| 21 | Accordo di settima dominante | 7 = triade + b7, ruolo della V |
| 22 | Accordo di settima minore | min7 = triade min + b7 |
| 23 | Semidiminuito (m7b5) | ii di tonalità minore |
| 24 | Tensioni 9, 11, 13 | Note "colorate" sopra le 7 |
| 25 | Alterazioni dominante | b9, #9, b13, #11 |

---

## Modulo 4 — Scale e modi (da scrivere)

| L | Titolo | Concetti |
|---|---|---|
| 26 | La scala maggiore | T-T-S-T-T-T-S, costruzione |
| 27 | La scala minore naturale | Eolio, b3-b6-b7 |
| 28 | Cosa sono i modi | Stesse note, tonica diversa |
| 29 | Ionico e Lidio | I e IV grado, differenza #4 |
| 30 | Misolidio | V grado, b7, sound blues/rock |
| 31 | Dorico | ii grado, minore con 6 maggiore |
| 32 | Frigio | iii grado, minore con b2, sound spagnolo |
| 33 | Eolio e Locrio | vi (minore puro) e vii (instabile) |
| 34 | Pentatonica minore | 1-b3-4-5-b7, scala "rock per eccellenza" |
| 35 | Pentatonica maggiore | 1-2-3-5-6, relativa della minore |
| 36 | Scala blues | Pentatonica + b5, blue note |
| 37 | Melodic minor | 1-2-b3-4-5-6-7 (jazz minore) |
| 38 | Harmonic minor | 1-2-b3-4-5-b6-7 (sensibile minore) |
| 39 | Modi di melodic minor | Lidio b7, Alterata, Locrio #2 |
| 40 | Scale simmetriche | Diminuita, esatonale |

---

## Modulo 5 — Armonia funzionale (da scrivere)

| L | Titolo | Concetti |
|---|---|---|
| 41 | I gradi diatonici | I-ii-iii-IV-V-vi-vii° in maggiore |
| 42 | Funzione armonica | Tonica (I/vi/iii), Sottodominante (ii/IV), Dominante (V/vii°) |
| 43 | La cadenza V-I | Risoluzione tensione → riposo |
| 44 | Cadenze plagale e di inganno | IV-I, V-vi |
| 45 | Progressione I-IV-V | Il "blues/rock" archetipo |
| 46 | Progressione ii-V-I | Il "jazz" archetipo |
| 47 | Voice leading | Movimento minimo tra accordi |
| 48 | Sostituzione di tritono | bII7 al posto di V7 |
| 49 | Accordi prestati | Borrowing dal modo parallelo |
| 50 | Modulazione | Cambio di tonalità |

---

## Modulo 6 — Applicazione (da scrivere)

| L | Titolo | Concetti |
|---|---|---|
| 51 | Improvvisare su accordo statico | Scelta della scala, target tones |
| 52 | Outline armonico | Suonare i chord tones in tempo |
| 53 | Frasi e licks | Vocabolario classico per ogni stile |
| 54 | Phrasing e dinamiche | Respiro, sustain, vibrato |
| 55 | Improvvisazione modale | Esaltare note caratteristiche |
| 56 | Improvvisazione su changes | Cambi rapidi tra scale |
| 57 | Costruzione di un assolo | Motivo, sviluppo, climax, risoluzione |
| 58 | Analisi di assoli famosi | Reverse-engineering didattico |
| 59 | Stili: Blues / Rock / Jazz / Fusion | Vocabolario per stile |
| 60 | Final project | Compone e suoni un mini-brano |

---

## Schema dati di una lezione

Ogni lezione è un oggetto JS che vive nell'array `LESSONS` in `index.html`. Struttura:

```js
{
  id: 6,                            // ID univoco progressivo
  module: 2,                        // ID del modulo (1-6)
  title: 'Tonica e ottava',
  duration: '3 min',
  xp: 15,
  intro: 'Frase di apertura che riassume il concetto.',
  sections: [
    { type: 'text', title: '...', content: 'HTML con <strong>tag</strong> e <code>monospace</code>' },
    { type: 'audio', title: '...', text: 'descrizione', notes: [60, 67], mode: 'sequence' },
    { type: 'callout', content: 'Box giallo per insight importante' },
    { type: 'quickcheck', q: 'Domanda?', options: ['A','B','C','D'], correct: 'B' },
  ],
}
```

### Tipi di sezione disponibili

| Type | Uso | Campi |
|---|---|---|
| `text` | Spiegazione concetto (HTML rich) | `title`, `content` |
| `audio` | Esempio sonoro col synth | `title`, `text`, `notes` (MIDI), `mode` |
| `callout` | Box giallo (tip / nota) | `content` |
| `quickcheck` | Mini-quiz dentro la lezione | `q`, `options[]`, `correct` |

### Modalità audio (`mode`)

| Mode | Comportamento |
|---|---|
| `sequence` | Note in sequenza melodica, una dopo l'altra (usa `-1` per pausa) |
| `sequence_chords` | Gruppi di note suonate come accordi, separate da `-1` |
| `arpeggio_then_chord` | Prima arpeggio ascendente, poi tutto in blocco |

### Note MIDI di riferimento
```
C4 = 60 (Do centrale)
D4 = 62  E4 = 64  F4 = 65  G4 = 67  A4 = 69  B4 = 71
C5 = 72 (Do un'ottava sopra)
```

---

## Come aggiungere una lezione (workflow)

1. Apri `index.html`, cerca `const LESSONS = [`
2. Aggiungi un nuovo oggetto seguendo lo schema sopra
3. Imposta `id` progressivo, `module` corretto
4. Scrivi `intro` (1-2 frasi)
5. Scrivi 4-7 `sections` alternando text/audio/callout/quickcheck
6. Salva → reload → la lezione appare automaticamente nella griglia del modulo

**Tempo medio per scrivere una lezione di qualità**: 15-30 min, dipende dalla complessità.

---

## Priorità di completamento suggerita

Da scrivere in quest'ordine per massimo valore didattico:
1. **Modulo 2** (intervalli completi) — fondamenta orecchio
2. **Modulo 3** (accordi base L15-L18) — pratica subito
3. **Modulo 4 L26-L30** (scala maggiore + modi base) — improvvisazione
4. **Modulo 5 L41-L46** (gradi + I-IV-V + ii-V-I) — armonia
5. Resto a piacere in base al focus dell'utente

---

## Idee future per la sezione Apprendi

- **Bookmark/Preferiti**: marcare lezioni da rivedere
- **Note personali**: campo testo libero per ogni lezione
- **Diagramma fretboard integrato**: alcune lezioni con SVG interattivo (es. shape pentatoniche)
- **Riferimenti incrociati**: link "Vedi anche L9" dentro una lezione
- **Sezione "Video"** (futuro): integrazione embed YouTube per concetti complessi
- **Modalità "Ripasso flash"**: rivedi le callout di tutte le lezioni completate
- **Path-specific learning**: la sezione Percorso suggerisce quale lezione leggere prima del test

---

## Connessione XP / progressione

- Lezione completata = `+xp` (15-30 punti tipici)
- QuickCheck corretto dentro una lezione = `+3 XP`
- Modulo intero completato = bonus +50 XP (da implementare)
- Streak di apprendimento separata da streak pratica (futuro)
