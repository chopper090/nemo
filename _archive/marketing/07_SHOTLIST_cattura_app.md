# Shot-list — catturare le schermate reali dell'app

Gli screenshot reali dell'app sono la parte più convincente del video. Qui trovi **cosa** catturare e **come**. Due strade:

- **A. Automatico (sul tuo PC):** copia `scripts/capture.mjs` in una cartella, poi
  `npm init -y && npm i playwright && npx playwright install chromium` e `node capture.mjs`.
  Genera tutti i PNG qui sotto in `assets/`, in **desktop (16:9)** e **mobile (9:16)**, in tema scuro.
  *(Non ha potuto girare nell'ambiente dell'assistente — l'avvio del browser è bloccato lì — ma sul tuo PC normale funziona.)*
- **B. Manuale (anche da telefono):** apri **https://chopper090.github.io/note-trainer/**, metti il **tema scuro** (tasto Tema o icona luna), e fai gli screenshot della lista. Su telefono ottieni già il 9:16; su PC col browser a finestra larga ottieni il 16:9. Per le clip in movimento, usa la **registrazione schermo** del dispositivo.

> Consiglio: prima di catturare Stats, usa l'app qualche minuto (rispondi a un po' di quiz) così il **mastery polygon** e gli XP appaiono "pieni" e più belli.

---

## Schermate da catturare (in ordine di importanza)

| Nome file | Come arrivarci | Cosa inquadrare / perché vende |
|-----------|----------------|-------------------------------|
| **SS-practice** | Vista **Pratica** (default). Avvia una sessione (Spazio o "Start"). | La nota grande + il **manico colorato**. È la prova del "ti ascolta e ti corregge". *Screenshot + meglio una clip di 3-4s mentre suoni e diventa "verde/corretto".* |
| **SS-lick** | Tasto **Lick** in alto → scegli un lick (es. "Blues — BB box"). | **Tablatura + manico** affiancati, con i gradi colorati. Se registri: premi **play** e riprendi le note che si illuminano in sequenza. Il fiore all'occhiello. |
| **SS-stats** | Scheda **Stats**. | Il **mastery polygon** a 8 punte + XP/streak/lega. Comunica "progressi visibili". |
| **SS-theory** | Scheda **Teoria** → avvia un quiz. | Una domanda con le risposte; cattura anche il momento "risposta corretta". Stile gioco. |
| **SS-tune** | Tasto **Tune** in alto. | L'accordatore con le corde e l'ago dei cent. Concreto e utile. |
| **SS-home** | Vista Pratica, in cima. | **Header con logo Nemo** + chip XP/streak. Per l'inquadratura "brand". |
| **SS-intro** | Apri l'app in una **finestra anonima/incognito** (così riappare l'onboarding). | La schermata **"scegli da dove partire"** con le modalità. Ottima per spiegare l'app. |
| **SS-solo** | Tasto **Solo** in alto. | La modalità focus minimale. Mostra "allenamento essenziale". |
| **SS-learn** | Scheda **Apprendi**. | L'elenco delle lezioni guidate. |

### Naming dei file (per combaciare con lo script video)
Salva come: `SS-practice-mobile.png`, `SS-practice-desktop.png`, `SS-lick-mobile.png`, … (lo script automatico li nomina già così: `practice-mobile.png` ecc. — rinominali con prefisso `SS-` se vuoi farli combaciare con `04_SCRIPT_video.md`, o adatta lo script).

---

## Clip in movimento (screen-recording) — le più efficaci
Se puoi, registra lo schermo (10-15s ciascuna): valgono più di uno screenshot fermo.
1. **Pratica live:** suoni una nota → l'app la riconosce e segna "corretto". (il momento "wow")
2. **Lick in play:** premi play su un lick → le note scorrono illuminandosi su tab e manico.
3. **Quiz Teoria:** rispondi a 2-3 domande di fila, con la serie che sale.
4. **Mastery polygon:** apri Stats e fai un piccolo zoom/scroll sul grafico.

## Suggerimenti di qualità
- **Tema scuro** sempre (più "neon/premium" e coerente col brand).
- Telefono in **non disturbare** (niente notifiche nello screenshot).
- Per il 9:16 usa il telefono in verticale; per il 16:9 il browser desktop a tutto schermo (F11).
- Nascondi le barre del browser quando puoi (modalità installata/PWA = niente barra URL).
- Mantieni il **microfono attivo** nelle clip di Pratica/Tune così si vede che reagisce.

> Se mi mandi 2-3 screenshot/clip che hai fatto, posso dirti quali usare e come inquadrarli meglio per lo script.
