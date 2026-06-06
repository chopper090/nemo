# 🎬 Kit marketing video — Nemo

Guida operativa per creare un video promozionale **moderno e accattivante** dell'app **Nemo** usando **NotebookLM** (video/audio narrati) e **Gemini/Veo** (clip cinematografiche e immagini), più gli **screenshot reali** dell'app.

> **App:** Nemo — Fretboard & Ear Training · PWA gratuita · live su **https://chopper090.github.io/note-trainer/**
> **Target di questo materiale:** principianti / autodidatti · **Lingua:** italiano · **Formati:** 9:16 (Reel/TikTok/Shorts) + 16:9 (YouTube/sito)

---

## 📂 Cosa c'è in questa cartella

| File | A cosa serve | Dove si usa |
|------|--------------|-------------|
| `00_README_GUIDA.md` | Questo file: il flusso completo | — |
| `01_FONTE_panoramica.md` | Cos'è Nemo, a chi serve, perché è utile | **NotebookLM** (fonte) |
| `02_FONTE_funzionalita.md` | Tutte le funzioni spiegate (moduli + viste) | **NotebookLM** (fonte) |
| `03_FONTE_faq_benefici.md` | Domande frequenti, benefici, obiezioni | **NotebookLM** (fonte) |
| `04_SCRIPT_video.md` | Script pronti 15s / 30s / 60-90s + storyboard 9:16 e 16:9 | Narrazione / montaggio |
| `05_NOTEBOOKLM_guida.md` | Passo-passo NotebookLM + **prompt pronto** | NotebookLM |
| `06_GEMINI_VEO_prompt.md` | **Prompt copia-incolla** per clip Veo + immagini Imagen | Gemini / Veo |
| `07_SHOTLIST_cattura_app.md` | Quali schermate catturare e come | Screen-recording / screenshot |
| `assets/` | Logo Nemo (file reali) + (gli screenshot che catturerai) | Montaggio + NotebookLM |
| `scripts/capture.mjs` | Script che genera gli screenshot in automatico sul tuo PC | (vedi sotto) |

---

## 🧭 Il flusso consigliato (in 4 passi)

### 1) Cattura gli screenshot reali dell'app
NotebookLM e Veo **non sanno disegnare la tua interfaccia vera**: gli screenshot reali sono la parte più convincente del video. Due modi:
- **Automatico (sul tuo PC):** apri un terminale in una cartella vuota e lancia
  ```
  npm init -y && npm i playwright && npx playwright install chromium
  node capture.mjs        (copia prima qui scripts/capture.mjs)
  ```
  Genera ~16 PNG (desktop 16:9 + mobile 9:16) in `marketing/assets/`. *(Nota: questo NON ha potuto girare nell'ambiente dell'assistente perché lì l'avvio del browser è bloccato — ma sul tuo PC normale funziona.)*
- **Manuale (anche da telefono):** segui `07_SHOTLIST_cattura_app.md` — apri l'app live e fai gli screenshot indicati. Gli screenshot del telefono vero spesso rendono pure meglio.

### 2) Genera il video "explainer" con NotebookLM
È la spina dorsale narrata. Carichi come **fonti** i file `01`, `02`, `03`, `04` + gli screenshot, incolli il **prompt** di `05_NOTEBOOKLM_guida.md` e generi il **Video Overview** (narrato, in italiano). Bonus: genera anche l'**Audio Overview** (podcast) da riusare.

### 3) Genera l'intro/outro e le b-roll con Gemini/Veo
Per rendere il video "moderno e accattivante" servono 2-3 clip cinematografiche (gancio iniziale, stacchi, chiusura col logo). Usi i **prompt** di `06_GEMINI_VEO_prompt.md` in Gemini (Veo). Da lì anche le **immagini** (thumbnail, social card) con Imagen.

### 4) Monta il video finale
Schema consigliato (vale per 9:16 e 16:9):
```
[0-3s]  Gancio (clip Veo intro)  +  testo a schermo
[3-...] Screenshot/screen-rec dell'app  +  voce (script 04 o narrazione NotebookLM)
[...-fine] Outro: logo Nemo + URL + "Provala gratis" (clip Veo outro)
```
Montaggio gratis: **CapCut** (telefono/desktop). Musica: libreria royalty-free di CapCut o YouTube Audio Library. Voce: la narrazione di NotebookLM, oppure leggi tu lo script `04`, oppure una TTS.

**Scorciatoia massima:** usa direttamente il Video Overview di NotebookLM come video quasi-finito, e incolla solo 2-3 secondi di intro Veo all'inizio. Pronto in mezz'ora.

---

## 🎨 Identità visiva (da rispettare ovunque)
- **Colori:** violetto `#5840D7`, gradiente cyan `#00D4FF` → viola → magenta `#E94CC8`, accento oro `#FFB800`, sfondo scuro `#15171C`.
- **Logo:** la "N" di Nemo con la cordina che vibra in oro (in `assets/`).
- **Mood:** moderno, tech, neon soffuso, pulito. Niente legno/chitarra rétro.
- **Tono di voce:** incoraggiante, diretto, "puoi farcela da solo". Frasi brevi.

## ✅ Claim che puoi fare con sicurezza (verificati nell'app)
Ti ascolta dal microfono e riconosce le note che suoni · 6 modalità (Sølo, Sølve, Ear, Tune, Lick, Lab) · libreria di 31 lick con tablatura e manico · accordatore integrato · quiz di teoria · percorso a livelli con XP, streak e badge · "mastery polygon" che mostra i tuoi progressi · gratis, installabile sul telefono, funziona offline, nessun login.

## ⚠️ Da NON promettere (non ancora completo)
Non dire "corso completo con centinaia di lezioni": il percorso lezioni è in crescita. Parla di "lezioni guidate + quiz + pratica", non di numeri gonfiati. Niente "backing track" o "metronomo" finché non ci sono.
