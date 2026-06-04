# Note Trainer — Analisi & Piano evolutivo

> Audit del 26/05/2026 su `index.html` (4543 righe). Sintesi onesta di punti di forza, debolezze e priorità.

---

## 🟢 Punti di forza

### Architettura
- **Modularità drill engine**: 5 moduli (Note/Interval/Chord/Scale/Arpeggio) con interface uniforme (`init`/`reset`/`onNoteDetected`/`render`/`preview`). Aggiungere un drill = aggiungere un oggetto.
- **3 layout responsivi** (Compact/Stage/Wide) + override manuale Auto/Mobile/Desktop.
- **State management coerente**: tutto in localStorage con default sensati, nessuna dipendenza esterna.
- **Single-file HTML deploy-ready**: 5 file (HTML, manifest, SW, icon, fretboard-lab) → drag-and-drop Netlify.

### Tecnica audio
- **YIN pitch detection** pulita, ottimizzata per chitarra monofonica.
- **Sintetizzatore Web Audio** integrato (envelope ADSR triangolare) per ear training.
- **Auto-skip-waiting SW** + network-first per HTML → update istantanei in produzione.

### Didattica
- **4 sezioni interconnesse**: Pratica (audio) ↔ Apprendi (concetti) ↔ Teoria (verifica) ↔ Percorso (gamification).
- **11 modalità focus** nel Teoria con tonica fissa selezionabile → drilling chirurgico.
- **Colori per grado** sul fretboard coerenti con Fretboard Lab.
- **Bonus velocità XP** per allenare l'istinto.

---

## 🔴 Bug e debolezze identificati

### Bug critici (rompono funzionalità)

| # | Bug | Effetto | Fix |
|---|---|---|---|
| 1 | `recordPracticeDay()` chiamato SOLO in `endLesson()` | La streak non avanza in Pratica/Teoria, anche se superi il daily goal | Chiamare in `awardXp()` o in periodic check |
| 2 | **Enarmonia mancante**: app usa solo diesis, mai bemolli | "b3 di C" risponde `D#` invece di `Eb` (musicalmente errato) | Costanti `FLAT_NOTES_EN/IT` e usare in base al contesto (es. b3, b6, b7 → bemolle) |
| 3 | `IntervalDrill.init({fixedTonic:0})` modifica `state.tonic` persistente | Dopo L14 (tonica fissa C), la tonica resta C nella pratica libera | Salvare/ripristinare la tonica originaria, o usare un override locale al drill |
| 4 | `stopSession` non richiama `preview()` | Dopo Stop il display rimane in stato "running" stale | Aggiungere `state.currentDrill.preview()` in `stopSession()` |
| 5 | Skip durante lock-period dopo corretto può fare doppio-conteggio | Stat sballate di 1 in casi rari | Check `if (state.locked) return` in `onSkip()` |

### Bug minori / inconsistenze

| # | Issue | Note |
|---|---|---|
| 6 | `_origAwardCorrect` dichiarata mai usata (linea 4385) | Codice morto |
| 7 | `currentSection` in Learn mai usata | Codice morto |
| 8 | `allNotes`, `tonicLabel` calcolati ma non usati | Codice morto |
| 9 | `intervalSemitones` mostra ancora `b3 · m3` mentre gli altri ear-training solo `b3` | Inconsistenza notazione |
| 10 | Pulsante "Manico" attivo anche in Theory/Learn/Path (no effetto) | Disabilita o nascondi |
| 11 | "Skip" counter non in stats inline (solo Wide sidebar) | Aggiungi al compact |
| 12 | `setTimeout(playAudio, 250)` auto-play forse invadente | Considerare toggle "auto-play first hear" |
| 13 | `progress.completedLessons` non in default → undefined al primo run | Aggiungi `completedLessons: {}` in default |
| 14 | Nessun fallback se `state.mode` salvato non esiste più in `Drills` | Validate in `init()` |
| 15 | `setAudioDevice` chiama close → audio fugge se loop attivo | Stop loop prima di close |
| 16 | Auto-reload SW potrebbe loopare su update molto rapidi | Aggiungi check timestamp ultimo reload |

### Debolezze didattiche

| # | Mancanza | Impatto |
|---|---|---|
| D1 | **Nessuna spaced repetition** | Concetti sbagliati non rientrano in coda → memoria a breve termine |
| D2 | **Statistiche per concetto inesistenti** | Non sai quali intervalli/note sbagli più spesso |
| D3 | **No heatmap fretboard** | Non vedi quali zone del manico usi/non usi |
| D4 | **No daily warmup auto-generato** | Manca routine "esercizio del giorno" basato su debolezze |
| D5 | **Hint solo per Pratica, non per Teoria** | Quando blocchi su un quiz teorico, niente aiuto |
| D6 | **Riconoscimento ottava ignorato** | Suoni "Mi3" o "Mi5", l'app accetta entrambi. Manca opt-in "octave-exact" |
| D7 | **45/100 livelli Percorso sono stub** (Modulo 2-7) | Solo F0+F1 realmente giocabili |
| D8 | **55/60 lezioni Apprendi mancanti** | Solo Modulo 1 (5 lezioni) implementato |
| D9 | **No metronomo** | Pratica senza tempo = pratica senza groove |
| D10 | **No backing tracks** | Non puoi praticare chord changes su tempo reale |
| D11 | **No lick library** | Promesso nel piano didattico, mai partito |
| D12 | **Nessun export/import progress** | Se cambi browser/device perdi tutto |

### Debolezze tecniche

| # | Issue | Impatto |
|---|---|---|
| T1 | `renderFretboard()` rebuilds intero SVG ogni frame potenziale | Lag su mobile entry-level se chiamato spesso |
| T2 | File monolitico 195KB | Cresce; sopra 300KB diventa pesante mobile |
| T3 | Niente `aria-label` sui bottoni icona | Screen reader inutilizzabile |
| T4 | Nessun focus-visible chiaro per nav tastiera | Accessibility poor |
| T5 | Palette gradi rosso/verde — protanopia conflict | 8% maschi italiani con qualche forma di daltonismo |
| T6 | `innerHTML` ovunque — fragile se aggiungi input utente | Sicurezza futura |
| T7 | `state.completedLessons` salvato in `progress`, ma `state` in localStorage separato | Due fonti di verità per cose simili |

---

## 🗺️ Piano evolutivo a 6 fasi

> Ordinato per **valore/effort**. Ogni fase è autonoma — puoi fermarti dopo qualsiasi fase e l'app resta migliore di adesso.

### Fase 1 — Bug fix critici 🩹
**Effort**: 1 sessione · **Valore**: 🔥🔥🔥

- [ ] Fix recordPracticeDay (chiamarlo da awardXp quando todayXp ≥ goal)
- [ ] Implementare enarmonia: b3 di C = Eb, non D#
- [ ] Fix IntervalDrill che modifica state.tonic globale
- [ ] Fix stopSession senza preview refresh
- [ ] Rimuovere codice morto (_origAwardCorrect, currentSection, allNotes)
- [ ] Lock-guard in onSkip
- [ ] Disabilita pulsante Manico fuori da Pratica
- [ ] Aggiungi `completedLessons` al default progress
- [ ] Validate state.mode all'init

**Output**: app più solida, niente effetti collaterali.

---

### Fase 2 — Statistiche & adaptive learning 📊
**Effort**: 2-3 sessioni · **Valore**: 🔥🔥🔥🔥

Trasforma l'app da "sandbox di drill" in **sistema di apprendimento mirato**.

- [ ] **Tracking granulare**: per generator type (intervalByEar, noteInScale...), per intervallo/grado/nota target, salva `{seen, correct, lastSeen, avgTime}`
- [ ] **Heatmap visiva**: dashboard "Statistiche" che mostra:
  - Quali intervalli sbagli più spesso (bar chart)
  - Quali tonalità sono più deboli
  - Tempo medio di risposta per concetto
  - Heatmap fretboard (quante volte suoni ogni nota in Pratica)
- [ ] **Spaced repetition adattata SM-2-lite**: i concetti sbagliati ricompaiono dopo 1-2 domande; quelli giusti dopo 5-10
- [ ] **Daily warmup auto**: bottone "Allenamento del giorno" → 10 minuti generati sui tuoi 3 punti più deboli
- [ ] **Export/Import progress** come JSON: backup, sync tra device

**Output**: l'app sa cosa devi praticare di più e te lo propone.

---

### Fase 3 — Espansione contenuti didattici 📚
**Effort**: 4-6 sessioni (di cui 80% testo scritto, non codice) · **Valore**: 🔥🔥🔥🔥

Sbloccare il vero potenziale di "studio a 360°".

- [ ] **Modulo 2 Apprendi** (L6-L14): intervalli completi con audio comparativo
- [ ] **Modulo 3 Apprendi** (L15-L25): costruzione accordi base
- [ ] **Modulo 4 Apprendi parziale** (L26-L33): scala maggiore + modi essenziali
- [ ] **Percorso F2** (Triadi): 10 livelli giocabili (chord drill con config mirate)
- [ ] **Percorso F3** (Modi): 10 livelli (scale drill)
- [ ] **Percorso F4** (Pentatonica/Blues): 6-8 livelli
- [ ] **Lick library minimal**: 20 lick base (10 pent minore + 10 blues) con tab visiva + audio + trasponibili
- [ ] **Cross-link**: dalla fine di una lezione, link diretto al test Teoria e al livello Percorso correlato

**Output**: percorso completo da 0 a improvvisazione blues base.

---

### Fase 4 — Pratica musicale avanzata 🎼
**Effort**: 3-5 sessioni · **Valore**: 🔥🔥🔥

Aggiungere tempo, ritmo, contesto musicale.

- [ ] **Metronomo integrato**: bpm regolabile, sottodivisioni (4/8/16/triplets), accenti, sound configurabile
- [ ] **Backing track synth-based**: progressione armonica suonata come pad/comping in loop, configurabile (tempo, voicing, stile)
- [ ] **Chord-tone target on backing**: durante backing, l'app evidenzia su quale grado atterrare al downbeat di ogni accordo. Riconosce se hai centrato la target note nel timing.
- [ ] **Rhythm trainer**: l'app riproduce un pattern ritmico → tu lo riproduci battendo (microfono detection di onset)
- [ ] **Tempo recording per livelli Percorso**: salva miglior tempo, mostra "personal best"
- [ ] **Modalità "Outline"**: backing + chord changes che scorrono come karaoke, devi suonare almeno una chord-tone per accordo

**Output**: pratica con groove, contesto reale.

---

### Fase 5 — Polish UX & accessibilità ✨
**Effort**: 2 sessioni · **Valore**: 🔥🔥

- [ ] **Onboarding al primo avvio**: 3 schermate intro che spiegano Pratica/Apprendi/Teoria/Percorso
- [ ] **Aria labels** su tutti i bottoni icona, focus-visible style chiaro
- [ ] **Palette daltonic-friendly**: opzione "high contrast" che usa pattern + colori safe (no rosso/verde adiacenti)
- [ ] **Performance fretboard**: throttle a 30fps, virtual DOM diff invece di full innerHTML
- [ ] **Drawer settings** su mobile: invece di topbar lunga, hamburger menu
- [ ] **Tooltip espandibili**: hover su qualsiasi termine tecnico (`b9`, `m7b5`, `dominante`) → mini-spiegazione
- [ ] **Modalità "kid-friendly"**: font più grandi, meno opzioni visibili, percorso lineare

**Output**: app utilizzabile da tutti, gradevole anche su lungo periodo.

---

### Fase 6 — Motivazione & social locale 🏆
**Effort**: 2-3 sessioni · **Valore**: 🔥🔥

Non perdere l'utente dopo le prime sessioni.

- [ ] **Achievement badges**: "100 corrette di fila", "30 giorni di streak", "Tutti i modi completati"
- [ ] **Weekly challenge**: sfida settimanale generata (es. "fai 200 quiz su intervalli a orecchio entro domenica")
- [ ] **Leaderboard locale**: classifica personal-best per livello, tempi miglioramento nel tempo
- [ ] **Profilo musicista**: bio breve, strumento, livello dichiarato → personalizzazione contenuti
- [ ] **Note personali**: campo testo libero per ogni lezione/livello (insight, dubbi, link)
- [ ] **Share progress**: bottone "condividi i miei progressi" → genera immagine PNG con stats per social

**Output**: senso di progressione visibile e gratificante a lungo termine.

---

## 🎯 Quale fase per prima?

**La mia raccomandazione assoluta**: Fase 1 → Fase 2.

**Perché**:
- Fase 1 è igiene basilare, va fatta. Pulisce.
- Fase 2 è il **vero salto di qualità**: trasforma l'app da "drill randomico" a "tutor che capisce dove sei debole e ti spinge lì". È quello che ti separa dalle 100 app simili.

Fase 3 (contenuti) può andare in parallelo se tu generi le lezioni con l'LLM esterno (vedi `LESSON_AUTHORING.md`) — io le incollo. Tu mandi 5 lezioni alla volta.

Fase 4 (metronomo + backing) richiede sessioni dedicate ma è autocontenuta.

Fase 5+6 lasciate per ultimi: polish e gamification rifiniscono ma non spostano didattica.

---

## 💡 Idee fuori scope ma da tenere a mente

- **Integrazione MIDI**: input via controller MIDI invece di microfono (più affidabile per pianisti/chitarristi MIDI)
- **Export tab/MusicXML** dei lick e degli esercizi completati
- **AI lesson generator**: prompt che genera lezioni custom in tempo reale
- **Co-op mode**: due utenti su due dispositivi che fanno duetti
- **Modalità "performance"**: registri un assolo, l'app fa analisi (note usate, target hits, ritmo, dinamica)
- **Integrazione Spotify/YouTube**: pratichi outline su brani reali
- **Mode di studio "Pomodoro"**: 25min focus + 5min pausa, con goal XP
- **Mascotte / personaggio**: una "guida" che ti accompagna (alla Duolingo)

---

## Statistiche codice attuale

```
index.html         4543 righe   195 KB
fretboard-lab.html              369 KB  (separato, già esistente)
manifest.json      24 righe       0.5 KB
sw.js              52 righe       1.9 KB
icon.svg           21 righe       1.3 KB

DEPLOY_NETLIFY.md  179 righe      7 KB
LEARN_CURRICULUM   229 righe      9 KB
LESSON_AUTHORING   163 righe      6 KB
MOBILE_SETUP        82 righe      3 KB
```

Densità: ~1 funzione ogni 35 righe, ~5 drill modules, 11 focus modes Theory, 14 generators quiz, 5 lezioni complete, 60 livelli previsti.

L'app è già non banale. Va capitalizzata con contenuti e adaptive learning prima di nuove feature.
