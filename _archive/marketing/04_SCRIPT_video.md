# Nemo — Script video + storyboard

Tre durate pronte all'uso. Narrazione in **italiano**, tono incoraggiante e moderno. Ogni battuta è abbinata al **visual** (screenshot reale, clip Veo o immagine) e al **testo a schermo**.

**Legenda visual:**
- `SS-xxx` = screenshot reale dell'app (vedi `07_SHOTLIST` / cartella `assets/`): `SS-intro, SS-home, SS-practice, SS-lick, SS-tune, SS-theory, SS-stats, SS-solo, SS-learn`
- `VEO-xxx` = clip generata con Veo (vedi `06_GEMINI_VEO_prompt.md`): `VEO-intro, VEO-hands, VEO-wave, VEO-outro`
- `IMG-xxx` = immagine Imagen: `IMG-thumb, IMG-social`

> **9:16 vs 16:9:** lo stesso copione vale per entrambi. Per il **9:16** (Reel/TikTok/Shorts) tieni il ritmo serrato, gancio entro 2 secondi, testo grande in alto-centro. Per il **16:9** (YouTube/sito) puoi respirare di più sugli screenshot e usare la versione 60-90s.

---

## 🎯 Versione 15 secondi — "Hook" (ideale 9:16)
Obiettivo: fermare lo scroll e incuriosire. Una sola idea forte.

| Tempo | Voce | Visual | Testo a schermo |
|------|------|--------|-----------------|
| 0-2s | "E se la tua chitarra potesse correggerti… **mentre suoni**?" | `VEO-intro` (onda sonora che diventa una tastiera al neon) | **La chitarra che ti ascolta** |
| 2-6s | "Nemo ti ascolta dal microfono e ti dice subito se hai trovato la nota giusta." | `SS-practice` (nota grande + manico) → zoom | 🎤 riconosce le note dal vivo |
| 6-10s | "Orecchio, manico, teoria — tutto in un gioco da 5 minuti al giorno." | montaggio rapido `SS-lick` → `SS-theory` → `SS-stats` | impari • ti alleni • migliori |
| 10-13s | "Gratis. Sul telefono. Anche offline." | `SS-home` (logo + interfaccia) | 100% gratis · nessun account |
| 13-15s | "Provala adesso: Nemo." | `VEO-outro` (logo N + URL) | **chopper090.github.io/note-trainer** |

---

## 🎯 Versione 30 secondi (9:16 o 16:9)
Obiettivo: gancio + 3 funzioni chiave + invito.

| Tempo | Voce | Visual | Testo a schermo |
|------|------|--------|-----------------|
| 0-3s | "Imparare la chitarra da soli è difficile: suoni, ma non sai se è giusto." | `VEO-hands` (mani su chitarra in penombra) | Da autodidatta? |
| 3-7s | "Nemo cambia le regole: ti **ascolta dal microfono** e ti corregge in tempo reale, come un maestro tascabile." | `SS-practice` con evidenziazione "corretto" | 🎤 ti ascolta e ti corregge |
| 7-12s | "Alleni l'orecchio riconoscendo note e accordi…" | `SS-theory` (quiz) + breve `SS-tune` | allena l'orecchio |
| 12-17s | "…e impari il manico con una libreria di frasi vere, tablatura e suono." | `SS-lick` (tab + manico, premi play) | 31 lick con tab + audio |
| 17-22s | "Ogni giorno vedi i progressi crescere." | `SS-stats` (mastery polygon che si riempie) | progressi misurabili |
| 22-26s | "Cinque minuti al giorno. Gratis, sul telefono, anche offline." | `SS-home` / `SS-intro` | gratis · offline · no login |
| 26-30s | "Nemo. La chitarra che ti ascolta. Provala ora." | `VEO-outro` (logo + URL) | **chopper090.github.io/note-trainer** |

---

## 🎯 Versione 60-90 secondi — "Explainer" (ideale 16:9 / NotebookLM)
Obiettivo: spiegare bene cos'è e perché è utile. È anche il copione di riferimento per il Video Overview di NotebookLM.

| # | Voce | Visual | Testo a schermo |
|---|------|--------|-----------------|
| 1 | "Hai iniziato a suonare la chitarra da solo. Conosci due accordi… ma ti manca qualcosa: l'**orecchio** e il **manico**." | `VEO-hands` + `VEO-wave` | — |
| 2 | "Sono proprio le cose che un maestro ti correggerebbe subito. E da soli, sono le più difficili da allenare." | `SS-intro` (scelta dei percorsi) | Nemo |
| 3 | "Nemo è un'app gratuita che fa esattamente questo. La cosa speciale? **Ti ascolta davvero**: imbracci la chitarra, lei ti chiede una nota, tu la suoni e capisce al volo se è giusta." | `SS-practice` (nota + manico, feedback) | 🎤 riconosce le note dal microfono |
| 4 | "Vuoi allenare l'orecchio? In 'Sølve' l'app suona un accordo e tu lo ritrovi sul manico. In 'Ear' impari a distinguere gli intervalli, anche quelli che si confondono." | `SS-solo` / breve clip `SS-theory` | allena l'orecchio |
| 5 | "Vuoi imparare frasi vere? In 'Lick' trovi 31 assoli e pattern — pentatonica, blues, legato — con tablatura e manico animati. Premi play e li ascolti alla tua velocità, anche trasposti nella tua tonalità." | `SS-lick` (play + scorrimento note) | 31 lick · tab + manico + audio |
| 6 | "C'è anche un accordatore col microfono, lezioni guidate e un quiz di teoria in stile gioco." | `SS-tune` → `SS-learn` → `SS-theory` | accorda · impara · gioca |
| 7 | "E ogni risposta giusta fa crescere i tuoi progressi: punti, serie giornaliere e il 'mastery polygon' che mostra quanto sei forte in ogni abilità." | `SS-stats` (polygon + XP) | i tuoi progressi, visibili |
| 8 | "Bastano cinque minuti al giorno. È gratis, non serve registrarsi, si installa sul telefono e funziona anche offline." | `SS-home` | gratis · offline · nessun account |
| 9 | "Nemo: la chitarra che ti ascolta. Aprila adesso dal browser e prova la prima sfida." | `VEO-outro` (logo N + URL) | **chopper090.github.io/note-trainer** |

---

## ✍️ Note di stile per la narrazione
- Frasi brevi, ritmo deciso. Enfasi su **"ti ascolta"** e **"gratis"**.
- Pronuncia: "Sølo/Sølve" → di' semplicemente "Solo" e "Solve". "Lick" → "lik".
- CTA sempre identica e leggibile: **chopper090.github.io/note-trainer**.
- Se usi la voce di NotebookLM, lascia che sia lei a narrare i punti 1-8 e aggiungi solo l'outro col logo (punto 9) in montaggio.
- Musica: beat moderno e pulito a basso volume; alza leggermente sul gancio e sull'outro.
