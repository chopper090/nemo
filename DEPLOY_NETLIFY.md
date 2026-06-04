# Deploy su Netlify — guida pratica

## ❓ FAQ veloci

**Q: Quale file devo aprire? Quale è l'entry point?**
→ `index.html`. È il Note Trainer principale. Da lì c'è un bottone in alto a destra (icona manico con freccia) che apre `fretboard-lab.html`.

**Q: Cosa carico su Netlify? Tutta la cartella o solo un file?**
→ Devi caricare **5 file** insieme (devono stare nella stessa cartella):
```
index.html         ← entry point principale
fretboard-lab.html ← sub-feature linkata dal bottone
manifest.json      ← PWA manifest
sw.js              ← service worker (cache + installabilità)
icon.svg           ← icona app
```
Trascini la cartella `SOLO trainer/` su Netlify, lui prende tutti i file dentro.
Gli altri file (`.md`, `Prompt.txt`, ecc.) sono solo documentazione locale, non servono in produzione ma non danno fastidio se restano.

**Q: Ho ricaricato la cartella ma vedo ancora la vecchia versione, perché?**
→ È il **Service Worker** che fa cache aggressiva (è quello che rende l'app installabile e offline). Soluzioni:
1. **Hard reload**: `Ctrl+Shift+R` (Windows/Linux) o `Cmd+Shift+R` (Mac) → bypassa cache
2. **DevTools**: F12 → tab "Application" → "Service Workers" → click "Unregister", poi reload
3. **Dopo il deploy aggiornato**, il SW vecchio rileva il nuovo e si aggiorna automaticamente al **primo refresh successivo** (ora con auto-reload integrato — vedi nota sotto)
4. Per gli utenti su PWA installata: chiudere e riaprire l'app forza l'update

**Q: Ho aggiornato il sito ma sul mio telefono PWA installata non vedo la nuova versione?**
→ Stessa storia: il SW aggiornato si attiva al prossimo avvio. **L'app si auto-ricarica** quando rileva una nuova versione (logica integrata in `index.html`). Se proprio non vedi la novità, disinstalla e reinstalla la PWA.

---

## 🚀 Auto-deploy (consigliato per modifiche frequenti)

**Setup una sola volta, poi modifiche istantanee online.** Tre opzioni in ordine di praticità:

### A — GitHub + Netlify auto-deploy ⭐ (la più potente)
1. Crea un repo GitHub e carica i file della cartella `SOLO trainer/`
2. Netlify → **Add new site → Import existing project → GitHub** → seleziona il repo
3. D'ora in poi: **ogni `git push` aggiorna il sito in 30 secondi**, automaticamente
4. Storico completo, possibilità di rollback con un click, preview per ogni branch
5. Puoi modificare i file direttamente su GitHub web (matita ✏️) e il sito si aggiorna da solo

### B — Netlify CLI (modifica locale, deploy da terminale)
```bash
npm install -g netlify-cli
netlify login              # una volta sola
cd "SOLO trainer"
netlify link               # collega cartella al tuo sito esistente (una volta)
netlify deploy --prod      # ogni volta che vuoi pubblicare
```
Una riga di comando = sito aggiornato in 10s.

### C — Drag & drop (manuale, OK per modifiche rare)
Vedi sezione sotto. Trascini la cartella sul dashboard Netlify ogni volta.

---

## File da pubblicare

## File da pubblicare
Solo questi 5 file nella cartella `SOLO trainer/`:

```
index.html          ← Note Trainer (entry point)
fretboard-lab.html  ← Fretboard Lab (linkato dal bottone in alto)
manifest.json       ← PWA manifest
sw.js               ← Service worker (offline + installabilità)
icon.svg            ← Icona PWA
```

Tutto il resto (`.md`, `.txt`, `Prompt.txt`) non serve in produzione — Netlify lo ignora se ce lo lasci, ma puoi escluderlo se vuoi tenere pulito.

---

## Strada A — Sostituire il sito Netlify esistente (più veloce)

Hai già un sito Netlify obsoleto. Lo riusi cambiando solo i file.

### Via interfaccia web (drag & drop)
1. Login su [app.netlify.com](https://app.netlify.com)
2. Apri il tuo sito esistente
3. Vai in **Deploys**
4. Trascina la cartella `SOLO trainer/` direttamente sul riquadro **"Drag and drop your site output folder here"**
5. Netlify processa in ~10 secondi → l'URL esistente serve ora il Note Trainer
6. Apri l'URL → vedi subito la nuova app

✅ Vantaggio: l'URL pubblico resta lo stesso (utile se l'hai già condiviso o salvato sul telefono).

### Via Netlify CLI (alternativa)
Se preferisci da terminale:
```bash
npm install -g netlify-cli
cd "SOLO trainer"
netlify deploy --prod
```
Ti chiede il sito da aggiornare → seleziona quello esistente.

---

## Strada B — Nuovo sito Netlify

Se preferisci tenere separato e creare un nuovo URL:

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Deploy manually**
2. Trascina la cartella `SOLO trainer/`
3. Netlify genera un URL tipo `https://random-name-12345.netlify.app`
4. **Site settings → Change site name** → scegli es. `note-trainer-marco` → URL diventa `https://note-trainer-marco.netlify.app`

---

## Custom domain (opzionale)
Se hai un dominio:
1. **Domain management → Add custom domain**
2. Segui le istruzioni DNS (Netlify configura HTTPS automatico via Let's Encrypt)

---

## Verifica post-deploy

Apri l'URL su desktop Chrome:
1. **DevTools (F12) → Application → Manifest** → tutto verde, icona caricata
2. **Application → Service Workers** → registrato, status "activated"
3. Nella barra URL appare l'icona "+" per **installare la PWA**

Apri lo stesso URL su Chrome Android:
1. Menu (⋮) → **"Installa app"** o **"Aggiungi a schermata Home"**
2. L'icona Note Trainer compare nel launcher
3. Apri → si comporta come app nativa, fullscreen, mic funziona ✅

---

## Genera APK dal sito (opzionale, ⚡ 2 minuti)

Una volta che il sito è online su Netlify (HTTPS):
1. Vai su [pwabuilder.com](https://www.pwabuilder.com/)
2. Incolla il tuo URL Netlify
3. **Package for Stores → Android** → scarica `.apk`
4. Trasferiscilo sul telefono e installalo (abilita "origini sconosciute" se richiesto)

L'APK è pesato pochi MB e include i permessi mic preconfigurati.

---

## Aggiornamenti futuri

Quando modifichi i file:
- **Drag & drop**: ritrascini la cartella → nuovo deploy in 10s
- **CLI**: `netlify deploy --prod`
- **Git**: se colleghi a un repo GitHub, push = auto-deploy

⚠️ Importante per il service worker: dopo un aggiornamento, sull'app installata il SW vecchio resta in cache. La nuova versione si carica al **secondo refresh** (è normale per PWA). Per forzare l'update, in `sw.js` cambia `const CACHE = 'note-trainer-v2'` → `'v3'` etc.

---

## Struttura URL pubblica

Dopo il deploy:
```
https://tuo-sito.netlify.app/              → Note Trainer (index.html)
https://tuo-sito.netlify.app/fretboard-lab.html → Fretboard Lab (bottone in header)
https://tuo-sito.netlify.app/manifest.json
https://tuo-sito.netlify.app/sw.js
https://tuo-sito.netlify.app/icon.svg
```

Il bottone "Fretboard Lab" nell'header del Note Trainer apre il Lab in una nuova scheda — torni indietro con il tab del browser, lo stato del Note Trainer è preservato.
