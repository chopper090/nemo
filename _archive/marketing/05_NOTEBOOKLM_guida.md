# Guida NotebookLM — generare il video (e il podcast) di Nemo

NotebookLM (notebooklm.google.com, gratuito con account Google) crea da fonti tue:
- **Video Overview** → un video narrato con slide/visual (la nostra spina dorsale).
- **Audio Overview** → un "podcast" parlato (bonus riutilizzabile come voce/teaser).

---

## Passo 1 — Crea il notebook e carica le fonti
1. Apri NotebookLM → **Create new** / Nuovo notebook.
2. **Add sources** e carica questi file di questa cartella:
   - `01_FONTE_panoramica.md`
   - `02_FONTE_funzionalita.md`
   - `03_FONTE_faq_benefici.md`
   - `04_SCRIPT_video.md` *(dà a NotebookLM il taglio e l'ordine del racconto)*
   > Se l'upload `.md` desse problemi, incolla il testo con "Copied text", o convertili in Google Doc/PDF.
3. **Aggiungi gli screenshot** come fonti immagine (o inseriscili in un Google Doc con didascalia e carica quello): `SS-practice, SS-lick, SS-tune, SS-theory, SS-stats, SS-home`. Servono a NotebookLM per mostrare l'interfaccia vera nel video.
4. *(Opzionale)* aggiungi l'URL come fonte web: `https://chopper090.github.io/note-trainer/`.

## Passo 2 — Genera il Video Overview
1. Nel pannello **Studio** scegli **Video Overview** → **Customize** (importante!).
2. Incolla questo **prompt** (italiano):

> Crea un video overview **in italiano**, tono **moderno, energico e motivante**, durata **circa 90 secondi**, pensato per **principianti e autodidatti** che vogliono imparare la chitarra. Spiega in modo semplice e concreto cos'è **Nemo** e perché è utile, seguendo l'ordine dello script: 1) il problema (orecchio e manico sono i muri di chi impara da solo); 2) la soluzione: Nemo **ti ascolta dal microfono e ti corregge mentre suoni**; 3) le funzioni chiave — ear training (Sølve/Ear), libreria di lick con tablatura e suono, accordatore, quiz di teoria; 4) i progressi visibili (XP, serie, mastery polygon); 5) chiusura: è **gratis, installabile sul telefono, funziona offline, senza account**. **Usa gli screenshot forniti** per mostrare l'interfaccia reale (pratica, lick, stats). Evita gergo non spiegato. Chiudi invitando a provarla subito dal browser: **chopper090.github.io/note-trainer**. Non promettere funzioni assenti (niente "corso con centinaia di lezioni", niente metronomo/backing track).

3. Imposta la lingua di output su **Italiano** (se l'opzione è separata) e genera. La prima generazione richiede qualche minuto.

## Passo 3 — Rivedi e rigenera se serve
- Se è troppo lungo/lento: rigenera aggiungendo al prompt "**massimo 60 secondi, ritmo serrato**".
- Se non usa gli screenshot: assicurati che siano tra le fonti e aggiungi "**mostra gli screenshot dell'app a ogni funzione citata**".
- Se sbaglia un nome: correggi la fonte e rigenera.

## Passo 4 — Bonus: Audio Overview (podcast/voce)
Nello Studio scegli **Audio Overview → Customize** e incolla:
> Conversazione **in italiano**, **~60 secondi**, due voci entusiaste ma chiare, che presentano Nemo a un chitarrista autodidatta: l'app che **ti ascolta dal microfono e ti corregge mentre suoni**, allena orecchio e manico, con lick, quiz e progressi misurabili; gratis e installabile. Chiudi con l'invito a provarla.

Usa l'audio come **voce narrante** del video montato, o come teaser separato.

## Passo 5 — Esporta e usa
- Scarica il Video Overview. Diventa la **base** del montaggio.
- In CapCut: anteponi 2-3s di `VEO-intro`, e chiudi con `VEO-outro` (logo + URL). Aggiungi musica soft.
- Per il **9:16**: ritaglia/riformatta in CapCut (canvas 1080×1920), tieni i testi grandi e centrati in alto.

## Limiti onesti di NotebookLM
- I visual auto-generati sono "da explainer", non da spot cinematografico: per il "wow" servono le clip Veo (doc 06) come intro/outro.
- Cura tu la **CTA finale** col logo in montaggio (NotebookLM non mette il tuo branding).
- Verifica sempre che non inventi numeri/funzioni: le fonti qui sono già "anti-overclaim".
