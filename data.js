// ============================================================
// data.js — tabelle dati didattiche estratte da index.html (LESSONS).
// Caricato come classic script PRIMA dello script principale: definisce
// la const globale LESSONS, visibile al resto dell'app (stesso scope lessicale).
// ============================================================

const LESSONS = [
  // ── MODULO 1: FONDAMENTA ───────────────────────────────
  {
    id: 1, module: 1, title: 'L\'alfabeto musicale',
    duration: '3 min', xp: 15,
    intro: 'Tutta la musica occidentale parte da soli 7 nomi di nota. Impariamoli.',
    sections: [
      { type: 'text', title: 'Le 7 note naturali',
        content: `In musica usiamo <strong>7 nomi</strong> per le note naturali. Esistono due notazioni equivalenti:
        <ul>
          <li><strong>Italiana</strong>: Do, Re, Mi, Fa, Sol, La, Si</li>
          <li><strong>Anglosassone</strong>: C, D, E, F, G, A, B</li>
        </ul>
        Una nota Do italiana è esattamente la stessa di un C anglosassone — solo i nomi cambiano.` },
      { type: 'audio', title: 'Ascolta la scala di Do',
        text: 'Ecco la scala maggiore di Do — le 7 note naturali in fila.',
        notes: [60,62,64,65,67,69,71,72], mode: 'sequence' },
      { type: 'text', title: 'L\'ottava',
        content: `Dopo Si (B) le note ricominciano da Do (C), ma più <strong>acute</strong>. La distanza tra due note con lo stesso nome è chiamata <strong>ottava</strong>.
        <p>Fisicamente la frequenza raddoppia: se il La centrale è 440 Hz, il La un'ottava sopra è 880 Hz.</p>` },
      { type: 'audio', title: 'Ascolta un\'ottava',
        text: 'Due Do a un\'ottava di distanza. Stesso "nome", suono diverso.',
        notes: [60, 72], mode: 'sequence' },
      { type: 'callout', content: 'Nelle prossime lezioni vedremo le 5 note alterate (diesis ♯ e bemolli ♭) e come si trovano tra le naturali.' },
      { type: 'quickcheck', q: 'Quante sono le note naturali?', options: ['5','7','8','12'], correct: '7' },
    ],
  },
  {
    id: 2, module: 1, title: 'Toni e semitoni',
    duration: '4 min', xp: 20,
    intro: 'La distanza tra le note non è uniforme. Conoscere toni e semitoni è la chiave per capire tutto.',
    sections: [
      { type: 'text', title: 'Il semitono',
        content: `Il <strong>semitono</strong> è la distanza più piccola in musica occidentale.
        Sulla chitarra, un semitono = <strong>1 tasto</strong>.` },
      { type: 'audio', title: 'Ascolta un semitono',
        text: 'Do → Do♯ (un tasto di distanza).',
        notes: [60, 61], mode: 'sequence' },
      { type: 'text', title: 'Il tono',
        content: `Un <strong>tono</strong> è due semitoni = <strong>2 tasti</strong>.` },
      { type: 'audio', title: 'Ascolta un tono',
        text: 'Do → Re (due tasti di distanza).',
        notes: [60, 62], mode: 'sequence' },
      { type: 'text', title: 'Il pattern delle note naturali',
        content: `Le 7 note naturali NON sono equidistanti. La distanza tra loro segue questo pattern:
        <p><code>Do—T—Re—T—Mi—S—Fa—T—Sol—T—La—T—Si—S—Do</code></p>
        Dove <strong>T = tono</strong> e <strong>S = semitono</strong>. I due semitoni sono Mi-Fa e Si-Do.` },
      { type: 'callout', content: 'Tra Mi-Fa e Si-Do NON esistono note alterate: sono già adiacenti! Negli altri intervalli c\'è una nota alterata in mezzo (diesis/bemolle).' },
      { type: 'text', title: 'Le 5 note alterate',
        content: `Tra le coppie di note distanti 1 tono c'è una nota intermedia. Si scrive col <strong>♯</strong> (diesis) salendo, col <strong>♭</strong> (bemolle) scendendo.
        <ul>
          <li>Do♯ = Re♭</li>
          <li>Re♯ = Mi♭</li>
          <li>Fa♯ = Sol♭</li>
          <li>Sol♯ = La♭</li>
          <li>La♯ = Si♭</li>
        </ul>
        Lo stesso suono ha due nomi (<strong>enarmonia</strong>): il nome dipende dal contesto musicale.` },
      { type: 'quickcheck', q: 'Quanti semitoni ci sono in un\'ottava?', options: ['7','10','12','13'], correct: '12' },
    ],
  },
  {
    id: 3, module: 1, title: 'Le note sul manico',
    duration: '4 min', xp: 20,
    intro: 'Sulla chitarra ogni tasto = 1 semitono. Sapere come si distribuiscono le note è la mappa che ti serve.',
    sections: [
      { type: 'text', title: 'Le corde a vuoto (accordatura standard)',
        content: `Partendo dalla corda più <strong>grave</strong> alla più <strong>acuta</strong>:
        <ul>
          <li>6ª corda: <strong>E (Mi)</strong></li>
          <li>5ª corda: <strong>A (La)</strong></li>
          <li>4ª corda: <strong>D (Re)</strong></li>
          <li>3ª corda: <strong>G (Sol)</strong></li>
          <li>2ª corda: <strong>B (Si)</strong></li>
          <li>1ª corda: <strong>E (Mi)</strong> — la stessa della 6ª, due ottave sopra</li>
        </ul>
        Mnemonica italiana: <em>Mi La Re Sol Si Mi</em>. Anglosassone: <em>Eddie Ate Dynamite Good Bye Eddie</em>.` },
      { type: 'audio', title: 'Ascolta le corde a vuoto',
        text: 'Le 6 corde dalla più grave alla più acuta.',
        notes: [40,45,50,55,59,64], mode: 'sequence' },
      { type: 'text', title: 'Salire di tasto = salire di semitono',
        content: `Ogni tasto sulla chitarra alza di 1 semitono. Quindi sulla 6ª corda (Mi):
        <ul>
          <li>Tasto 0 (vuoto): Mi</li>
          <li>Tasto 1: Fa (Mi e Fa sono già a 1 semitono!)</li>
          <li>Tasto 3: Sol</li>
          <li>Tasto 5: La</li>
          <li>Tasto 7: Si</li>
          <li>Tasto 8: Do</li>
          <li>Tasto 12: Mi un'ottava sopra</li>
        </ul>` },
      { type: 'callout', content: 'Al 12° tasto si ripete l\'ottava di ogni corda. Memorizzare le note al 5° e al 7° tasto (riferimenti comodi) è un buon esercizio.' },
      { type: 'text', title: 'Ottave tra corde adiacenti',
        content: `Tra due corde adiacenti (es. 6ª e 5ª) ci sono <strong>5 semitoni di distanza</strong> (un'eccezione: tra 3ª e 2ª sono 4 semitoni).
        Significa che la stessa nota può essere trovata in più posizioni: il La del 5° tasto della 6ª corda è uguale alla 5ª corda a vuoto.` },
      { type: 'quickcheck', q: 'Quale nota suona al 5° tasto della 6ª corda (Mi)?', options: ['Sol', 'La', 'Si', 'Re'], correct: 'La' },
    ],
  },
  {
    id: 4, module: 1, title: 'Cosa è un intervallo',
    duration: '4 min', xp: 25,
    intro: 'Un intervallo è la distanza tra due note. È il mattone fondamentale dell\'armonia.',
    sections: [
      { type: 'text', title: 'Definizione',
        content: `Un <strong>intervallo</strong> è la <strong>distanza</strong> tra due note. Si misura in due modi:
        <ul>
          <li><strong>Quantità</strong> (numero): seconda, terza, quarta, quinta, sesta, settima, ottava</li>
          <li><strong>Qualità</strong>: maggiore, minore, giusta, aumentata, diminuita</li>
        </ul>` },
      { type: 'text', title: 'I 12 intervalli base (entro un\'ottava)',
        content: `Contando in semitoni:
        <ul>
          <li><code>0</code> semitoni = unisono / tonica (1)</li>
          <li><code>1</code> = seconda minore (b2)</li>
          <li><code>2</code> = seconda maggiore (2)</li>
          <li><code>3</code> = terza minore (b3)</li>
          <li><code>4</code> = terza maggiore (3)</li>
          <li><code>5</code> = quarta giusta (4)</li>
          <li><code>6</code> = tritono (b5 / ♯4)</li>
          <li><code>7</code> = quinta giusta (5)</li>
          <li><code>8</code> = sesta minore (b6)</li>
          <li><code>9</code> = sesta maggiore (6)</li>
          <li><code>10</code> = settima minore (b7)</li>
          <li><code>11</code> = settima maggiore (7)</li>
          <li><code>12</code> = ottava (1)</li>
        </ul>` },
      { type: 'audio', title: 'Confronta: terza maggiore vs minore',
        text: 'Prima Do-Mi (3 maggiore: 4 semitoni). Poi Do-Mi♭ (3 minore: 3 semitoni). Senti la differenza "felice" vs "triste"?',
        notes: [60, 64, -1, 60, 63], mode: 'sequence' },
      { type: 'callout', content: 'L\'intervallo determina il COLORE emotivo della musica. La maggior parte della teoria armonica ruota attorno alla scelta degli intervalli giusti.' },
      { type: 'text', title: 'Funzione vs altezza assoluta',
        content: `Lo stesso intervallo suona <strong>uguale</strong> da qualunque nota parta:
        <ul>
          <li>Do→Mi (4 semitoni) = 3 maggiore</li>
          <li>Fa→La (4 semitoni) = 3 maggiore</li>
          <li>Sol→Si (4 semitoni) = 3 maggiore</li>
        </ul>
        Per questo in pratica musicale pensiamo in <strong>intervalli relativi alla tonica</strong>, non in note assolute.` },
      { type: 'quickcheck', q: 'Quanti semitoni ha una quinta giusta?', options: ['5','7','8','10'], correct: '7' },
    ],
  },
  {
    id: 5, module: 1, title: 'La triade: 1-3-5',
    duration: '5 min', xp: 30,
    intro: 'La triade è l\'accordo più basilare: tre note. Capirla apre la porta a tutta l\'armonia.',
    sections: [
      { type: 'text', title: 'Cosa è una triade',
        content: `Una <strong>triade</strong> è un accordo di <strong>3 note</strong> costruito sovrapponendo due terze.
        Le tre note prendono il nome di:
        <ul>
          <li><strong>1</strong> (Tonica / Root) — la nota fondamentale</li>
          <li><strong>3</strong> (Terza) — definisce maggiore o minore</li>
          <li><strong>5</strong> (Quinta) — rinforza e stabilizza</li>
        </ul>` },
      { type: 'text', title: 'Triade maggiore',
        content: `<strong>1 - 3 - 5</strong> (terza maggiore + terza minore sopra).
        Esempio in Do: <code>Do - Mi - Sol</code> (= accordo di Do maggiore, scritto "C").
        Suono: aperto, "felice", risolutivo.` },
      { type: 'audio', title: 'Triade di Do maggiore',
        text: 'Prima arpeggiata, poi in blocco.',
        notes: [60, 64, 67], mode: 'arpeggio_then_chord' },
      { type: 'text', title: 'Triade minore',
        content: `<strong>1 - b3 - 5</strong> (terza minore + terza maggiore sopra).
        Esempio in Do: <code>Do - Mi♭ - Sol</code> (= accordo di Do minore, scritto "Cm").
        Suono: chiuso, "triste", introspettivo.` },
      { type: 'audio', title: 'Triade di Do minore',
        text: 'Stessa tonica, terza abbassata di un semitono.',
        notes: [60, 63, 67], mode: 'arpeggio_then_chord' },
      { type: 'callout', content: 'La SOLA differenza tra maggiore e minore è la terza: un semitono di differenza che cambia completamente il "colore" dell\'accordo.' },
      { type: 'text', title: 'Triade diminuita e aumentata',
        content: `Cambiando anche la quinta otteniamo altre due triadi:
        <ul>
          <li><strong>Diminuita</strong> (dim): 1 - b3 - b5 → suono instabile, di tensione</li>
          <li><strong>Aumentata</strong> (aug): 1 - 3 - #5 → suono "sospeso", di passaggio</li>
        </ul>` },
      { type: 'audio', title: 'Confronto: maj, min, dim, aug',
        text: 'Stesso Do, 4 colori diversi.',
        notes: [60,64,67,-1,60,63,67,-1,60,63,66,-1,60,64,68], mode: 'sequence_chords' },
      { type: 'quickcheck', q: 'Quali gradi formano una triade minore?', options: ['1-3-5','1-b3-5','1-b3-b5','1-3-b5'], correct: '1-b3-5' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 16,
  },

  // ── MODULO 2: INTERVALLI COMPLETI ───────────────────────
  {
    id: 6, module: 2, title: 'Tonica e Ottava',
    duration: '3 min', xp: 15,
    intro: 'La tonica (R) è il punto fermo. L\'ottava è la stessa nota, più acuta. Capirle è la base.',
    sections: [
      { type: 'text', title: 'La tonica (R / Root / 1)',
        content: `La <strong>tonica</strong> è la nota di riferimento dalla quale costruisci tutto: intervalli, accordi, scale.
        Quando dici "scala di Re maggiore", Re è la tonica. È il <strong>grado 1</strong>.` },
      { type: 'text', title: 'L\'ottava',
        content: `L\'<strong>ottava</strong> è il primo intervallo "perfetto": stessa nota, frequenza doppia.
        <ul>
          <li>La 440 Hz → La 880 Hz (un\'ottava sopra)</li>
          <li>Sulla chitarra: stessa corda al <strong>12° tasto</strong></li>
          <li>Tra corde adiacenti: stesso nome a 12 semitoni di distanza</li>
        </ul>` },
      { type: 'audio', title: 'Ascolta una tonica + ottava',
        text: 'La (440 Hz) seguito dal La un\'ottava sopra (880 Hz).',
        notes: [69, 81], mode: 'sequence' },
      { type: 'callout', content: 'Sulla chitarra in accordatura standard, la 1ª e la 6ª corda sono ENTRAMBE Mi — separati da due ottave (24 semitoni).' },
      { type: 'text', title: 'Forme di ottava sul manico',
        content: `Le ottave più comuni:
        <ul>
          <li><strong>Stesso tasto, 2 corde sopra</strong>: es. 5° tasto della 6ª corda (La) → 7° tasto della 4ª corda (La)</li>
          <li><strong>Skip-string</strong>: 6ª corda → 4ª corda salendo di 2 tasti</li>
          <li><strong>Adiacenti</strong>: 6ª → 5ª corda (a 7 semitoni di distanza)</li>
        </ul>` },
      { type: 'quickcheck', q: 'Quanti semitoni separano una nota dalla sua ottava?', options: ['7','10','12','15'], correct: '12' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 6,
  },
  {
    id: 7, module: 2, title: 'Quinta giusta (P5)',
    duration: '4 min', xp: 20,
    intro: 'La 5 è la nota più "potente" dopo la tonica. Power chord, fondamentale armonica.',
    sections: [
      { type: 'text', title: 'La quinta giusta',
        content: `La <strong>5</strong> (quinta giusta, P5) sta a <strong>7 semitoni</strong> dalla tonica.
        Esempio in Do: <code>Do → Sol</code> (C → G).
        Suono: aperto, stabile, "rinforza" la tonica.` },
      { type: 'audio', title: 'Ascolta: Do → Sol',
        text: 'L\'intervallo melodico più riconoscibile dopo l\'ottava.',
        notes: [60, 67], mode: 'sequence' },
      { type: 'audio', title: 'Power chord (Do5)',
        text: 'Tonica + quinta insieme — il "potere".',
        notes: [60, 67], mode: 'sequence_chords' },
      { type: 'text', title: 'Forme sul manico',
        content: `La 5 si trova in modo semplice:
        <ul>
          <li>Stesso tasto, <strong>una corda sopra</strong> (es. 6ª-5ª, 5ª-4ª, 4ª-3ª)</li>
          <li>Stessa corda, <strong>+7 tasti</strong></li>
          <li>Eccezione: tra 3ª-2ª corda servono 2 tasti di shift</li>
        </ul>` },
      { type: 'callout', content: 'Il <strong>power chord</strong> rock (es. A5, E5, G5) è tonica + 5 + ottava. Niente terza → non maggiore né minore: pura potenza.' },
      { type: 'quickcheck', q: 'A quanti semitoni dalla tonica si trova la P5?', options: ['5','6','7','8'], correct: '7' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 7,
  },
  {
    id: 8, module: 2, title: 'Quarta giusta (P4)',
    duration: '4 min', xp: 20,
    intro: 'La 4 è l\'inverso speculare della 5. Suono "sospeso", richiede risoluzione.',
    sections: [
      { type: 'text', title: 'La quarta giusta',
        content: `La <strong>4</strong> (quarta giusta, P4) sta a <strong>5 semitoni</strong> dalla tonica.
        Esempio in Do: <code>Do → Fa</code> (C → F).
        È l\'<strong>inversione</strong> della 5: se sali una P4 e poi un\'ottava, ottieni una P5 sotto.` },
      { type: 'audio', title: 'Ascolta: Do → Fa',
        text: 'La quarta giusta in melodia.',
        notes: [60, 65], mode: 'sequence' },
      { type: 'audio', title: 'Confronto P4 vs P5',
        text: 'Prima Do→Fa (P4), poi Do→Sol (P5). Senti che P4 è "meno aperta"?',
        notes: [60, 65, -1, 60, 67], mode: 'sequence' },
      { type: 'text', title: 'Forme sul manico',
        content: `La 4 è ovunque facile:
        <ul>
          <li>Stesso tasto, <strong>una corda sopra</strong> (la stessa forma usata per accordare!)</li>
          <li>Stessa corda, <strong>+5 tasti</strong></li>
          <li>L\'accordatura standard è quasi tutta a quarte giuste (eccetto la 3ª-2ª che è una M3)</li>
        </ul>` },
      { type: 'callout', content: 'In un accordo Maj o min, la 4 NON c\'è (c\'è la 3). Compare in: <strong>sus4</strong> (1-4-5), accordi 11 (es. C11), pedaling.' },
      { type: 'quickcheck', q: 'Quale intervallo è "complementare" alla P5 dentro l\'ottava?', options: ['P4','m3','M6','b7'], correct: 'P4' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 8,
  },
  {
    id: 9, module: 2, title: 'Terze: maggiore vs minore (3 / b3)',
    duration: '5 min', xp: 30,
    intro: 'Il bivio armonico più importante. Un semitono cambia tutto: gioia ↔ tristezza.',
    sections: [
      { type: 'text', title: 'Terza maggiore (M3)',
        content: `La <strong>3</strong> (M3) sta a <strong>4 semitoni</strong> dalla tonica.
        Esempio in Do: <code>Do → Mi</code> (C → E).
        Suono: aperto, luminoso, "felice".` },
      { type: 'audio', title: 'Do → Mi (M3)',
        text: 'La terza maggiore — la nota che rende un accordo "maggiore".',
        notes: [60, 64], mode: 'sequence' },
      { type: 'text', title: 'Terza minore (m3)',
        content: `La <strong>b3</strong> (m3) sta a <strong>3 semitoni</strong> dalla tonica.
        Esempio in Do: <code>Do → Mib</code> (C → Eb).
        Suono: chiuso, scuro, "triste".` },
      { type: 'audio', title: 'Do → Mib (m3)',
        text: 'Un solo semitono di differenza, mondo emotivo opposto.',
        notes: [60, 63], mode: 'sequence' },
      { type: 'audio', title: 'Confronto diretto: M3 vs m3',
        text: 'Stesso Do, due colori diversi.',
        notes: [60, 64, -1, 60, 63], mode: 'sequence' },
      { type: 'callout', content: '<strong>Tutta</strong> l\'armonia tonale si fonda su questa distinzione. Una triade maggiore (1-3-5) suona "risolta" e luminosa; una minore (1-b3-5) suona "introspettiva" e malinconica.' },
      { type: 'text', title: 'Forme sul manico',
        content: `Le terze sono facili da trovare:
        <ul>
          <li><strong>M3</strong>: stessa corda +4 tasti, oppure corda sopra -1 tasto</li>
          <li><strong>m3</strong>: stessa corda +3 tasti, oppure corda sopra -2 tasti</li>
          <li>Tra 3ª e 2ª corda: M3 esattamente sullo stesso tasto!</li>
        </ul>` },
      { type: 'quickcheck', q: 'Quanti semitoni ha una terza minore (b3)?', options: ['2','3','4','5'], correct: '3' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 9,
  },
  {
    id: 10, module: 2, title: 'Seste: maggiore e minore (6 / b6)',
    duration: '4 min', xp: 25,
    intro: 'Le seste sono le inversioni delle terze. Tenerlo a mente raddoppia la conoscenza.',
    sections: [
      { type: 'text', title: 'Sesta maggiore (6)',
        content: `La <strong>6</strong> sta a <strong>9 semitoni</strong> dalla tonica.
        Esempio in Do: <code>Do → La</code> (C → A).
        È l\'<strong>inversione della b3</strong> dentro l\'ottava (9 + 3 = 12).` },
      { type: 'audio', title: 'Do → La (6)',
        notes: [60, 69], mode: 'sequence', text: 'Sesta maggiore.' },
      { type: 'text', title: 'Sesta minore (b6)',
        content: `La <strong>b6</strong> sta a <strong>8 semitoni</strong>.
        Esempio in Do: <code>Do → Lab</code> (C → Ab).
        È l\'<strong>inversione della 3</strong> (8 + 4 = 12).` },
      { type: 'audio', title: 'Do → Lab (b6)',
        notes: [60, 68], mode: 'sequence', text: 'Sesta minore.' },
      { type: 'callout', content: 'Regola: l\'inverso di una terza è una sesta. Maggiore ↔ minore si scambiano: M3 ↔ m6, m3 ↔ M6.' },
      { type: 'text', title: 'Uso musicale',
        content: `<ul>
          <li><strong>6</strong>: nei modi maggiore, dorico, lidio. Negli accordi di "6" (es. C6 = 1-3-5-6).</li>
          <li><strong>b6</strong>: nei modi eolio (minore naturale), frigio, locrio. Nei minore con b6 → suono "spagnolo".</li>
        </ul>` },
      { type: 'quickcheck', q: 'Quanti semitoni separano la b6 dalla tonica?', options: ['6','7','8','9'], correct: '8' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 10,
  },
  {
    id: 11, module: 2, title: 'Settime: tensione vs risoluzione (7 / b7)',
    duration: '5 min', xp: 30,
    intro: 'Le settime decidono se un accordo "vuole risolvere" o "riposa". Il motore del jazz.',
    sections: [
      { type: 'text', title: 'Settima maggiore (M7)',
        content: `La <strong>7</strong> sta a <strong>11 semitoni</strong> dalla tonica (un semitono sotto l\'ottava).
        Esempio in Do: <code>Do → Si</code> (C → B).
        Suono: tensione fortissima — la "<strong>sensibile</strong>" vuole risolvere all\'ottava.` },
      { type: 'audio', title: 'Do → Si (M7)',
        notes: [60, 71], mode: 'sequence', text: 'La sensibile.' },
      { type: 'audio', title: 'Risoluzione: Si → Do',
        notes: [71, 72], mode: 'sequence', text: 'Senti come la 7 "tira" verso l\'8va.' },
      { type: 'text', title: 'Settima minore (b7)',
        content: `La <strong>b7</strong> sta a <strong>10 semitoni</strong> dalla tonica.
        Esempio in Do: <code>Do → Sib</code> (C → Bb).
        Suono: rilassato — caratteristico del blues, rock, dominanti.` },
      { type: 'audio', title: 'Do → Sib (b7)',
        notes: [60, 70], mode: 'sequence', text: 'La b7 non "tira" come la 7.' },
      { type: 'callout', content: '<strong>Maj7 = 1-3-5-7</strong> (jazzato, dolce). <strong>Dominante 7 = 1-3-5-b7</strong> (blues, "tira" verso la I). <strong>min7 = 1-b3-5-b7</strong> (minore moderno).' },
      { type: 'quickcheck', q: 'Quale settima è caratteristica dell\'accordo di dominante (es. G7)?', options: ['M7 (7)','m7 (b7)','dim7 (bb7)','aumentata'], correct: 'm7 (b7)' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 11,
  },
  {
    id: 12, module: 2, title: 'Seconde: passo intero e semitono (2 / b2)',
    duration: '4 min', xp: 20,
    intro: 'I "passi" della scala. La b2 è dissonante; la 2 è naturale.',
    sections: [
      { type: 'text', title: 'Seconda maggiore (2)',
        content: `La <strong>2</strong> sta a <strong>2 semitoni</strong> = 1 tono dalla tonica.
        Esempio in Do: <code>Do → Re</code> (C → D).
        È il primo passo della scala maggiore.` },
      { type: 'audio', title: 'Do → Re (2)',
        notes: [60, 62], mode: 'sequence', text: 'Il "passo di scala".' },
      { type: 'text', title: 'Seconda minore (b2)',
        content: `La <strong>b2</strong> sta a <strong>1 semitono</strong> dalla tonica.
        Esempio in Do: <code>Do → Reb</code> (C → Db).
        Suono dissonante, di forte attrito. Caratteristico del <strong>modo frigio</strong>.` },
      { type: 'audio', title: 'Do → Reb (b2)',
        notes: [60, 61], mode: 'sequence', text: 'L\'intervallo più piccolo possibile.' },
      { type: 'audio', title: 'Confronto: 2 vs b2',
        notes: [60, 62, -1, 60, 61], mode: 'sequence', text: 'Senti l\'attrito della b2.' },
      { type: 'callout', content: 'In un accordo, queste note diventano <strong>9</strong> (= 2 + 8va) e <strong>b9</strong> (= b2 + 8va). Le tensioni jazz.' },
      { type: 'quickcheck', q: 'Quanti semitoni ha un "tono"?', options: ['1','2','3','12'], correct: '2' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 12,
  },
  {
    id: 13, module: 2, title: 'Tritono (#4 / b5)',
    duration: '4 min', xp: 25,
    intro: 'L\'intervallo "del diavolo": esattamente al centro dell\'ottava. Simmetrico, instabile.',
    sections: [
      { type: 'text', title: 'Il tritono',
        content: `Il <strong>tritono</strong> sta a <strong>6 semitoni</strong> dalla tonica — esattamente metà ottava.
        Lo stesso intervallo si chiama:
        <ul>
          <li><strong>#4</strong> (quarta aumentata) — nel modo <strong>lidio</strong></li>
          <li><strong>b5</strong> (quinta diminuita) — negli accordi <strong>dim</strong> e <strong>m7b5</strong></li>
        </ul>
        Stessa altezza, nome diverso a seconda del contesto.` },
      { type: 'audio', title: 'Do → Fa# (tritono)',
        notes: [60, 66], mode: 'sequence', text: 'L\'intervallo più dissonante dentro l\'ottava.' },
      { type: 'audio', title: 'Tritono armonico',
        notes: [60, 66], mode: 'sequence_chords', text: 'Due note insieme — vera dissonanza.' },
      { type: 'callout', content: 'È <strong>simmetrico</strong>: salendo o scendendo 6 semitoni dalla stessa nota, arrivi alla stessa altezza. Per questo lo usiamo nei diminuiti (cataloga di 4 inversioni equivalenti) e nelle sostituzioni di tritono jazz.' },
      { type: 'text', title: 'Uso musicale',
        content: `<ul>
          <li><strong>Modo lidio</strong>: la #4 caratteristica (Lidio = maggiore con #4)</li>
          <li><strong>Dominante</strong>: tra la 3 e la b7 di un dominante c\'è sempre un tritono — è ciò che "tira" alla risoluzione</li>
          <li><strong>Blues</strong>: la b5 di passaggio nella scala blues</li>
          <li><strong>Diminuito</strong>: tutte le terze sono minori, contiene 2 tritoni</li>
        </ul>` },
      { type: 'quickcheck', q: 'Il tritono divide l\'ottava in...', options: ['2 parti uguali','3 parti uguali','4 parti uguali','non la divide'], correct: '2 parti uguali' },
    ],
    relatedTheoryMode: 'ear_interval_rel',
    relatedLevel: 13,
  },
  {
    id: 14, module: 2, title: 'Tutti i 12 intervalli — riepilogo',
    duration: '5 min', xp: 35,
    intro: 'Mappa completa, esempi sonori, mnemonica per ricordarli.',
    sections: [
      { type: 'text', title: 'Mappa completa',
        content: `Dalla tonica, in semitoni:
        <ul>
          <li><code>0</code> — 1 (Unisono / Tonica)</li>
          <li><code>1</code> — b2 (2 minore)</li>
          <li><code>2</code> — 2 (2 maggiore)</li>
          <li><code>3</code> — b3 (3 minore)</li>
          <li><code>4</code> — 3 (3 maggiore)</li>
          <li><code>5</code> — 4 (4 giusta)</li>
          <li><code>6</code> — #4/b5 (Tritono)</li>
          <li><code>7</code> — 5 (5 giusta)</li>
          <li><code>8</code> — b6 (6 minore)</li>
          <li><code>9</code> — 6 (6 maggiore)</li>
          <li><code>10</code> — b7 (7 minore)</li>
          <li><code>11</code> — 7 (7 maggiore)</li>
          <li><code>12</code> — 1 (Ottava)</li>
        </ul>` },
      { type: 'audio', title: 'Ascolta tutti i 12 intervalli salendo',
        text: 'Dalla tonica fino all\'ottava, semitono per semitono.',
        notes: [60,61,62,63,64,65,66,67,68,69,70,71,72], mode: 'sequence' },
      { type: 'callout', content: '<strong>Mnemonica per orecchio</strong>: associa ogni intervallo a una canzone famosa. P5 = "Star Wars main theme". M3 = "When the Saints". m3 = "Greensleeves". P4 = "Here Comes the Bride". Tritono = "Maria" da West Side Story.' },
      { type: 'text', title: 'Inversioni',
        content: `Ogni intervallo ha un\'inversione che lo completa all\'ottava:
        <ul>
          <li>1 ↔ 8va · b2 ↔ 7 · 2 ↔ b7 · b3 ↔ 6 · 3 ↔ b6</li>
          <li>4 ↔ 5 · Tritono ↔ Tritono (simmetrico)</li>
        </ul>
        Una M3 (4 semitoni) + una m6 (8 semitoni) = 12 semitoni (ottava).` },
      { type: 'quickcheck', q: 'Qual è l\'inversione di una 5 giusta?', options: ['P4','M3','m6','M7'], correct: 'P4' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: 14,
  },

  // ── MODULO 3: COSTRUZIONE ACCORDI (parziale, L15-L18) ─────
  {
    id: 15, module: 3, title: 'La triade Maggiore in profondità',
    duration: '5 min', xp: 30,
    intro: 'Il mattone base di tutta l\'armonia: tonica, terza maggiore, quinta giusta.',
    sections: [
      { type: 'text', title: 'La formula 1-3-5',
        content: `La <strong>triade maggiore</strong> è composta da:
        <ul>
          <li><strong>1</strong> (tonica)</li>
          <li><strong>3</strong> (terza maggiore, 4 semitoni)</li>
          <li><strong>5</strong> (quinta giusta, 7 semitoni)</li>
        </ul>
        Si scrive col solo nome della tonica: <code>C</code>, <code>D</code>, <code>F#</code>, ecc.` },
      { type: 'text', title: 'Esempi nelle 12 tonalità',
        content: `<ul>
          <li>C: Do - Mi - Sol</li>
          <li>D: Re - Fa# - La</li>
          <li>E: Mi - Sol# - Si</li>
          <li>F: Fa - La - Do</li>
          <li>G: Sol - Si - Re</li>
          <li>A: La - Do# - Mi</li>
          <li>B: Si - Re# - Fa#</li>
        </ul>` },
      { type: 'audio', title: 'Sequenza di triadi maggiori',
        text: 'C, D, E, F, G, A, B in arpeggio.',
        notes: [60,64,67, -1, 62,66,69, -1, 64,68,71, -1, 65,69,72, -1, 67,71,74, -1, 69,73,76, -1, 71,75,78],
        mode: 'sequence_chords' },
      { type: 'callout', content: 'In tutte le triadi maggiori la 3 sta a 4 semitoni dalla 1, la 5 a 7 semitoni dalla 1, e la 5 sta a 3 semitoni dalla 3. Sempre la stessa formula.' },
      { type: 'text', title: 'Forme CAGED sul manico (anteprima)',
        content: `Esistono 5 forme principali (sistema CAGED) per suonare una triade maggiore su tutto il manico:
        <strong>C-shape, A-shape, G-shape, E-shape, D-shape</strong>. Ogni forma è un \"contenitore\" mobile che adatti alla tonica.
        Le impareremo in dettaglio nel <strong>Modulo 4</strong>.` },
      { type: 'quickcheck', q: 'In Sol maggiore (G), qual è la terza?', options: ['Sol','La','Si','Re'], correct: 'Si' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 16,
  },
  {
    id: 16, module: 3, title: 'La triade minore',
    duration: '4 min', xp: 25,
    intro: '1-b3-5. Una sola nota di differenza dal maggiore — mondo emotivo opposto.',
    sections: [
      { type: 'text', title: 'La formula 1-b3-5',
        content: `La <strong>triade minore</strong> abbassa la terza di un semitono:
        <ul>
          <li><strong>1</strong> (tonica)</li>
          <li><strong>b3</strong> (terza minore, 3 semitoni)</li>
          <li><strong>5</strong> (quinta giusta, 7 semitoni)</li>
        </ul>
        Si scrive con "m" minuscola dopo la tonica: <code>Cm</code>, <code>Dm</code>, <code>Am</code>, ecc.` },
      { type: 'audio', title: 'Confronto C vs Cm',
        text: 'Stessa tonica, terza diversa.',
        notes: [60,64,67, -1, 60,63,67], mode: 'sequence_chords' },
      { type: 'text', title: 'Esempi nelle 12 tonalità minori',
        content: `<ul>
          <li>Am: La - Do - Mi</li>
          <li>Dm: Re - Fa - La</li>
          <li>Em: Mi - Sol - Si</li>
          <li>Gm: Sol - Sib - Re</li>
          <li>Cm: Do - Mib - Sol</li>
          <li>Fm: Fa - Lab - Do</li>
          <li>Bm: Si - Re - Fa#</li>
        </ul>` },
      { type: 'callout', content: '<strong>Mnemonica</strong>: le triadi minori "naturali" (senza alterazioni nelle note) sono Am, Dm, Em. Sono le triadi minori della scala di Do maggiore — i gradi vi, ii, iii.' },
      { type: 'text', title: 'Quando usare il minore',
        content: `Suoni introspettivi, malinconici, riflessivi. Tonalità minori, ballad, brani romantici, blues minore.
        Ogni tonalità maggiore ha una <strong>relativa minore</strong> 3 semitoni sotto:
        <ul>
          <li>C maggiore ↔ A minore</li>
          <li>G maggiore ↔ E minore</li>
          <li>D maggiore ↔ B minore</li>
        </ul>` },
      { type: 'quickcheck', q: 'In Re minore (Dm), qual è la b3?', options: ['Re','Fa','La','Mi'], correct: 'Fa' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 17,
  },
  {
    id: 17, module: 3, title: 'Triadi dim e aug',
    duration: '4 min', xp: 30,
    intro: 'Le due triadi "simmetriche": diminuita (2 terze minori) e aumentata (2 terze maggiori).',
    sections: [
      { type: 'text', title: 'Triade diminuita (1-b3-b5)',
        content: `<strong>Dim</strong>: due terze minori sovrapposte.
        Esempio in Do: <code>Do - Mib - Solb</code> (C - Eb - Gb).
        Si scrive <code>Cdim</code> o <code>C°</code>.
        Suono: instabile, "tira" verso la risoluzione.` },
      { type: 'audio', title: 'Triade Do dim',
        notes: [60,63,66], mode: 'arpeggio_then_chord', text: 'Sound dissonante.' },
      { type: 'text', title: 'Triade aumentata (1-3-#5)',
        content: `<strong>Aug</strong>: due terze maggiori sovrapposte.
        Esempio in Do: <code>Do - Mi - Sol#</code> (C - E - G#).
        Si scrive <code>Caug</code> o <code>C+</code>.
        Suono: "sospeso", in attesa, di passaggio.` },
      { type: 'audio', title: 'Triade Do aug',
        notes: [60,64,68], mode: 'arpeggio_then_chord', text: 'Sound misterioso.' },
      { type: 'callout', content: 'Entrambe sono <strong>simmetriche</strong>: dim divide l\'ottava in 4 parti uguali (3+3+3+3), aug in 3 parti uguali (4+4+4). Per questo le 3 inversioni di aug e le 4 di dim suonano "uguali".' },
      { type: 'text', title: 'Uso musicale',
        content: `<ul>
          <li><strong>Dim</strong>: vii grado della scala maggiore (es. Bdim in C major). Usato per passaggi cromatici, modulazioni.</li>
          <li><strong>Aug</strong>: III grado della minore armonica. Comune in jazz, pop d\'autore (Beatles!).</li>
        </ul>` },
      { type: 'audio', title: 'Sequenza: Maj → min → dim → aug',
        notes: [60,64,67, -1, 60,63,67, -1, 60,63,66, -1, 60,64,68], mode: 'sequence_chords', text: '4 qualità, stessa tonica.' },
      { type: 'quickcheck', q: 'Quale triade ha la quinta abbassata (b5)?', options: ['Maj','min','dim','aug'], correct: 'dim' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 18,
  },
  {
    id: 18, module: 3, title: 'Sus2 e Sus4',
    duration: '4 min', xp: 25,
    intro: 'Triadi "sospese": niente terza, quindi non maggiore né minore. Pure tensione.',
    sections: [
      { type: 'text', title: 'Sus4 (1-4-5)',
        content: `La <strong>sus4</strong> sostituisce la 3 con la 4.
        Esempio in Do: <code>Do - Fa - Sol</code> (C - F - G).
        Si scrive <code>Csus4</code> o semplicemente <code>Csus</code>.
        Suono: in tensione, vuole risolvere alla maggiore (la 4 → 3).` },
      { type: 'audio', title: 'Csus4 → C (risoluzione)',
        notes: [60,65,67, -1, 60,64,67], mode: 'sequence_chords', text: 'Senti la 4 che "scende" alla 3.' },
      { type: 'text', title: 'Sus2 (1-2-5)',
        content: `La <strong>sus2</strong> sostituisce la 3 con la 2 (= 9).
        Esempio in Do: <code>Do - Re - Sol</code> (C - D - G).
        Si scrive <code>Csus2</code>.
        Suono: aperto, "etereo", molto usato in pop/rock acustico.` },
      { type: 'audio', title: 'Csus2',
        notes: [60,62,67], mode: 'arpeggio_then_chord' },
      { type: 'callout', content: 'Le sus sono "neutrali": non hanno terza, quindi non sono né maggiori né minori. Si usano per creare aspettativa o come sostituzioni "atmosferiche".' },
      { type: 'text', title: 'Famosi esempi',
        content: `<ul>
          <li><em>Pinball Wizard</em> (The Who): la celebre intro è tutta sus4</li>
          <li><em>Behind Blue Eyes</em>: sus2 in apertura</li>
          <li><em>Wonderwall</em> (Oasis): C - Cmaj7 - Csus4 - C — la magia del riff</li>
        </ul>` },
      { type: 'quickcheck', q: 'Cosa manca in una sus4?', options: ['La tonica','La terza','La quinta','La settima'], correct: 'La terza' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 19,
  },
  // ─── L19 · Inversioni di triade ───
  {
    id: 19, module: 3, title: 'Inversioni di triade',
    duration: '4 min', xp: 25,
    intro: 'Lo stesso accordo, suonato con una nota diversa al basso. Cambia il colore e la connessione tra accordi.',
    sections: [
      { type: 'text', title: 'Cosa è un\'inversione',
        content: `Una <strong>triade</strong> ha 3 note: 1-3-5. Se la più bassa è la <code>1</code>, l'accordo è in <strong>posizione fondamentale</strong>. Se in basso metti la <code>3</code> → <strong>prima inversione</strong>. Se metti la <code>5</code> → <strong>seconda inversione</strong>.` },
      { type: 'audio', title: 'C — fondamentale, 1ª inv, 2ª inv',
        notes: [60,64,67, -1, 64,67,72, -1, 67,72,76], mode: 'sequence_chords',
        text: 'Tre voci, stesso accordo C maj. Solo il basso cambia.' },
      { type: 'callout', content: 'Notazione: C/E significa "accordo di C con E al basso" → 1ª inversione. C/G → 2ª inversione.' },
      { type: 'text', title: 'Perché usarle',
        content: `<ul>
          <li><strong>Voice leading</strong>: le linee di basso si muovono dolcemente (es. C → C/E → F: il basso fa C-E-F).</li>
          <li><strong>Colore</strong>: la stessa progressione suona "più moderna" o "più aperta" con inversioni.</li>
          <li><strong>Pedal point</strong>: tenere un basso fisso mentre cambi accordi sopra.</li>
        </ul>` },
      { type: 'quickcheck', q: 'C/E è...', options: ['Una sus','Una 7','C in 1ª inversione','Un accordo diminuito'], correct: 'C in 1ª inversione' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 20,
  },
  // ─── L20 · Maj7 ───
  {
    id: 20, module: 3, title: 'Accordo di settima maggiore (Maj7)',
    duration: '4 min', xp: 30,
    intro: 'Aggiungi la 7ª maggiore a una triade maggiore: si apre un mondo. Suono jazz, bossa, sognante.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>Maj7 = 1 - 3 - 5 - 7</strong>. In Do: C-E-G-B. La 7ª maggiore è a <em>1 semitono dalla tonica successiva</em> (B-C).` },
      { type: 'audio', title: 'Cmaj7 — arpeggio e blocco',
        notes: [60,64,67,71], mode: 'arpeggio_then_chord',
        text: 'Senti la 7 brillare in cima: è la nota "magica".' },
      { type: 'text', title: 'Quando usarlo',
        content: `<ul>
          <li>I grado in <strong>jazz</strong> e <strong>bossa</strong> (Cmaj7 invece di C semplice).</li>
          <li>IV grado: nelle ballad, F → Fmaj7 → ... il IV maj7 è dolcissimo.</li>
          <li>Tonalità maggiore: <strong>I e IV</strong> sono naturalmente maj7.</li>
        </ul>` },
      { type: 'callout', content: 'Attenzione: Maj7 NON è la stessa cosa di 7 dominante. <code>C7</code> = C-E-G-B♭ (7 minore). <code>Cmaj7</code> = C-E-G-B (7 maggiore). Confondersi è il classico errore.' },
      { type: 'quickcheck', q: 'Qual è la 7ª di Cmaj7?', options: ['B♭','B','D','C'], correct: 'B' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 21,
  },
  // ─── L21 · Dom7 ───
  {
    id: 21, module: 3, title: 'Settima dominante (V7) — il motore del jazz e del blues',
    duration: '5 min', xp: 30,
    intro: 'La 7 dominante è l\'accordo che CREA tensione. Vuole risolvere. È il cuore di tutta la musica funzionale.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>7 (dominante) = 1 - 3 - 5 - ♭7</strong>. In Sol: G-B-D-F. La ♭7 è a 1 tono dalla tonica → <em>vuole risolvere</em>.` },
      { type: 'audio', title: 'G7 → C (la cadenza V-I)',
        notes: [55,59,62,65, -1, 60,64,67], mode: 'sequence_chords',
        text: 'Senti la tensione di G7 sciogliersi nel riposo di C.' },
      { type: 'text', title: 'Tritono interno',
        content: `Tra la <strong>3</strong> e la <strong>♭7</strong> di un accordo dominante c'è un <strong>tritono</strong> (6 semitoni). In G7: B-F. Il tritono è massimamente instabile → ecco perché vuole risolvere. La 3 sale alla 1 della tonica, la ♭7 scende alla 3.` },
      { type: 'callout', content: 'V7-I è la <strong>cadenza autentica</strong>: il modo più forte di chiudere una frase. Se chiudi un brano senza risoluzione V-I, suona "incompleto".' },
      { type: 'text', title: 'Nel blues',
        content: `Nel blues TUTTI gli accordi sono di 7 dominante (I7, IV7, V7). Tecnicamente "scorretto" tonalmente, ma è la regola del genere. Da qui nasce il suono blues.` },
      { type: 'quickcheck', q: 'V7 di C maggiore è...', options: ['Cmaj7','G7','Gm7','Dm7'], correct: 'G7' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 22,
  },
  // ─── L22 · min7 ───
  {
    id: 22, module: 3, title: 'Settima minore (m7)',
    duration: '4 min', xp: 25,
    intro: 'La triade minore + 7 minore. Stabile, malinconica, fondamentale come ii grado nel jazz.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>m7 = 1 - ♭3 - 5 - ♭7</strong>. In Re minore: D-F-A-C.` },
      { type: 'audio', title: 'Dm7', notes: [62,65,69,72], mode: 'arpeggio_then_chord' },
      { type: 'text', title: 'Il suo ruolo',
        content: `<ul>
          <li><strong>ii grado</strong> in tonalità maggiore: in C, Dm7 è il classico inizio del giro ii-V-I (Dm7 - G7 - Cmaj7).</li>
          <li><strong>iii e vi</strong>: anche iii e vi sono naturalmente m7.</li>
          <li><strong>Modale</strong>: il dorico ha m7 sulla sua tonica.</li>
        </ul>` },
      { type: 'callout', content: 'm7 è il "pane quotidiano" del jazz. Imparare a riconoscerlo a orecchio è priorità assoluta.' },
      { type: 'quickcheck', q: 'Qual è la ♭7 di Am7?', options: ['G','G♯','A','C'], correct: 'G' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 23,
  },
  // ─── L23 · m7♭5 ───
  {
    id: 23, module: 3, title: 'Semidiminuito (m7♭5)',
    duration: '4 min', xp: 30,
    intro: 'Un m7 ma con la 5 abbassata. È il ii grado del minore jazz.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>m7♭5 = 1 - ♭3 - ♭5 - ♭7</strong>. In Si: B-D-F-A. Si chiama anche <strong>semidiminuito</strong>.` },
      { type: 'audio', title: 'Bm7♭5', notes: [59,62,65,69], mode: 'arpeggio_then_chord' },
      { type: 'text', title: 'Quando appare',
        content: `<ul>
          <li><strong>vii grado</strong> in tonalità maggiore: in C, Bm7♭5 è il "vii naturale".</li>
          <li><strong>ii grado in MINORE</strong>: il classico ii-V-i minore inizia con m7♭5 (es. in Am: Bm7♭5 - E7 - Am).</li>
        </ul>` },
      { type: 'callout', content: 'Differenza tra m7♭5 e dim7: il m7♭5 ha ♭7 (1 tono dalla tonica), il dim7 ha ♭♭7 (1 tono e mezzo = stessa nota della 6). Il dim7 è simmetrico e più instabile.' },
      { type: 'quickcheck', q: 'Quale grado è naturalmente m7♭5 in tonalità maggiore?', options: ['ii','IV','V','vii'], correct: 'vii' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: 24,
  },
  // ─── L24 · Tensioni 9 11 13 ───
  {
    id: 24, module: 3, title: 'Tensioni: 9, 11, 13 (le note "colorate")',
    duration: '5 min', xp: 30,
    intro: 'Sopra ogni accordo di 7 puoi aggiungere note "estese": 9, 11, 13. Sono il colore del jazz moderno.',
    sections: [
      { type: 'text', title: 'Cosa sono',
        content: `La <strong>9</strong> è la <code>2</code> un'ottava sopra. La <strong>11</strong> è la <code>4</code>. La <strong>13</strong> è la <code>6</code>.
        Si chiamano <em>tensioni</em> perché aggiungono colore senza cambiare la natura dell'accordo (resta maj7 / m7 / 7).` },
      { type: 'audio', title: 'Cmaj9 = Cmaj7 + 9',
        notes: [60,64,67,71,74], mode: 'arpeggio_then_chord',
        text: 'Cmaj7 con la nota D in cima. Sa di "Steely Dan".' },
      { type: 'text', title: 'Regole pratiche',
        content: `<ul>
          <li>Sopra <strong>maj7</strong>: 9 e 13 OK, evita la 11 naturale (cozza con la 3) → usa <code>#11</code>.</li>
          <li>Sopra <strong>m7</strong>: 9, 11, 13 tutti OK.</li>
          <li>Sopra <strong>7 dominante</strong>: 9, 13, e anche alterate (vedi prossima lezione).</li>
        </ul>` },
      { type: 'callout', content: 'In notazione di accordo: "C9" = C7 + 9 = C-E-G-B♭-D. "Cadd9" = solo C+9 senza la 7 = C-E-G-D. Confondere le due è errore comune.' },
      { type: 'quickcheck', q: 'La 9 di C è la stessa nota di...', options: ['D','E','F','Quarta'], correct: 'D' },
    ],
    relatedTheoryMode: 'extensions',
    relatedLevel: 25,
  },
  // ─── L25 · Alterazioni della dominante ───
  {
    id: 25, module: 3, title: 'Alterazioni della dominante: ♭9, ♯9, ♯11, ♭13',
    duration: '6 min', xp: 35,
    intro: 'Sull\'accordo di 7 dominante puoi alterare le tensioni. Il risultato: tensione massima → risoluzione massima.',
    sections: [
      { type: 'text', title: 'Perché alterare',
        content: `L'accordo di V7 vuole risolvere. Alterando le sue tensioni (♭9, ♯9, ♯11, ♭13) crei <strong>più tensione</strong> → la risoluzione al I suona più dolce ancora.` },
      { type: 'audio', title: 'G7♭9 → C',
        notes: [55,59,62,65,68, -1, 60,64,67], mode: 'sequence_chords',
        text: 'Il G♯ in cima al G7 crea attrito enorme con il D del basso.' },
      { type: 'text', title: 'Le quattro alterazioni',
        content: `<ul>
          <li><strong>♭9</strong> (in G7: A♭): cupa, drammatica. Latina, gypsy.</li>
          <li><strong>♯9</strong> (in G7: A♯/B♭): "Hendrix chord"! Rock-fusion.</li>
          <li><strong>♯11</strong> (in G7: C♯): lidio-dominante, sound aperto.</li>
          <li><strong>♭13</strong> (in G7: E♭): minore-blues, suoni "scuri".</li>
        </ul>` },
      { type: 'callout', content: 'In notazione jazz, "G7alt" significa "G7 con qualsiasi alterazione" → il solista è libero di scegliere quale. La scala alterata (vedi modi minore melodico) contiene TUTTE queste tensioni.' },
      { type: 'quickcheck', q: 'In G7♯9, la nota ♯9 è...', options: ['A','A♯/B♭','B','C'], correct: 'A♯/B♭' },
    ],
    relatedTheoryMode: 'extensions',
    relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 4 — SCALE E MODI
  // ════════════════════════════════════════════════════════════

  // ─── L26 · Scala maggiore ───
  {
    id: 26, module: 4, title: 'La scala maggiore (Ionica)',
    duration: '5 min', xp: 25,
    intro: 'La madre di tutte le scale occidentali. 7 note, pattern preciso, infinite applicazioni.',
    sections: [
      { type: 'text', title: 'Il pattern T-T-S-T-T-T-S',
        content: `Una scala maggiore si costruisce con questo pattern di toni (T) e semitoni (S) dalla tonica:
        <code>T - T - S - T - T - T - S</code>.
        In Do: <strong>C - D - E - F - G - A - B - C</strong>. Tutte le 7 note naturali.` },
      { type: 'audio', title: 'C maggiore ascendente',
        notes: [60,62,64,65,67,69,71,72], mode: 'sequence' },
      { type: 'text', title: 'Le 7 note → 7 modi',
        content: `Partendo da ognuna delle 7 note della scala maggiore (senza alterare nulla) ottieni un <strong>modo</strong>: Ionico, Dorico, Frigio, Lidio, Misolidio, Eolio (minore naturale), Locrio. Le prossime lezioni li affronteranno uno per uno.` },
      { type: 'callout', content: 'In notazione jazz: tutti i brani in "tonalità di C" hanno come riferimento la scala C maggiore. Conoscere la scala maggiore di ogni tonalità è prerequisito assoluto.' },
      { type: 'quickcheck', q: 'Quanti passi di semitono (S) ci sono nel pattern T-T-S-T-T-T-S?', options: ['2','5','7','12'], correct: '2' },
    ],
    relatedTheoryMode: 'degrees_basic',
    relatedLevel: 26,
  },
  // ─── L27 · Minore naturale ───
  {
    id: 27, module: 4, title: 'Scala minore naturale (Eolia)',
    duration: '4 min', xp: 25,
    intro: 'La "minore". Stesse note della maggiore parallela, ma partita dal vi grado.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - ♭3 - 4 - 5 - ♭6 - ♭7</strong>. In La: A - B - C - D - E - F - G.
        Pattern: <code>T - S - T - T - S - T - T</code>.` },
      { type: 'audio', title: 'A minore', notes: [57,59,60,62,64,65,67,69], mode: 'sequence' },
      { type: 'text', title: 'Relativa maggiore',
        content: `La <strong>scala minore</strong> ha le stesse note della scala maggiore <em>3 semitoni più alta</em>. A minore = C maggiore (stesse 7 note, tonica diversa). Per questo si chiamano <strong>relative</strong>.` },
      { type: 'callout', content: 'Per cantare una melodia in minore, evita di pensare alla "scala", pensa alla relativa maggiore: ti aiuterà a navigare. Poi torna a sentire la tonica vera (la "tristezza" è la tonica del vi).' },
      { type: 'quickcheck', q: 'Quale è la relativa minore di C maggiore?', options: ['A minore','D minore','E minore','G minore'], correct: 'A minore' },
    ],
    relatedTheoryMode: 'degrees_basic',
    relatedLevel: 27,
  },
  // ─── L28 · Cosa sono i modi ───
  {
    id: 28, module: 4, title: 'Cosa sono i modi (e perché esistono)',
    duration: '5 min', xp: 30,
    intro: 'Stesse note, tonica diversa, atmosfera completamente diversa. Questo sono i modi.',
    sections: [
      { type: 'text', title: 'L\'idea base',
        content: `Prendi le 7 note di C maggiore. Suonale partendo da D invece che da C, e finendo a D. Stesse 7 note, ma ora la "casa" (tonica) è D. Il risultato è il <strong>modo Dorico</strong>: una scala con la sua personalità.` },
      { type: 'audio', title: 'D Dorico (stesse note di C maggiore)',
        notes: [62,64,65,67,69,71,72,74], mode: 'sequence' },
      { type: 'text', title: 'I 7 modi del maggiore',
        content: `<ul>
          <li><strong>I → Ionico</strong> (= maggiore): luminoso</li>
          <li><strong>ii → Dorico</strong>: minore con 6 maggiore, jazz/funk</li>
          <li><strong>iii → Frigio</strong>: minore con ♭2, spagnolo/flamenco</li>
          <li><strong>IV → Lidio</strong>: maggiore con ♯4, sognante</li>
          <li><strong>V → Misolidio</strong>: maggiore con ♭7, blues/rock</li>
          <li><strong>vi → Eolio</strong> (= minore naturale): triste</li>
          <li><strong>vii → Locrio</strong>: instabile (♭2 e ♭5)</li>
        </ul>` },
      { type: 'callout', content: 'Ogni modo ha una <strong>nota caratteristica</strong>: quella che lo distingue dal maggiore o dal minore. Esempio: Dorico = ♮6, Frigio = ♭2, Lidio = ♯4, Misolidio = ♭7. Esaltarla nelle melodie fa "sentire" il modo.' },
      { type: 'quickcheck', q: 'Il modo Lidio si caratterizza per...', options: ['♭2','♯4','♭7','♭6'], correct: '♯4' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: 28,
  },
  // ─── L29 · Pentatonica minore ───
  {
    id: 29, module: 4, title: 'Pentatonica minore — la scala rock per eccellenza',
    duration: '4 min', xp: 25,
    intro: '5 note. Mai sbagliate su un blues. Il punto di partenza per tutti i chitarristi.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - ♭3 - 4 - 5 - ♭7</strong>. In La minore: A - C - D - E - G. Solo 5 note, nessun semitono diretto → suona sempre "buona".` },
      { type: 'audio', title: 'A pentatonica minore', notes: [57,60,62,64,67,69], mode: 'sequence' },
      { type: 'text', title: 'Dove usarla',
        content: `<ul>
          <li><strong>Blues</strong>: A pentatonica minore su una blues in A → funziona sempre.</li>
          <li><strong>Rock</strong>: tutti gli assoli classici (Clapton, Page, Hendrix, Slash).</li>
          <li><strong>Pop minore</strong>: gli hit minor key spesso si limitano a pentatonica.</li>
        </ul>` },
      { type: 'callout', content: 'Trucco: la pentatonica minore di una tonalità funziona anche sulla tonalità maggiore relativa. Esempio: A minore pentatonica = C maggiore pentatonica (stesse 5 note, tonica diversa).' },
      { type: 'quickcheck', q: 'Quante note ha una pentatonica?', options: ['3','5','6','7'], correct: '5' },
    ],
    relatedTheoryMode: 'degrees_basic',
    relatedLevel: 29,
  },
  // ─── L30 · Scala blues ───
  {
    id: 30, module: 4, title: 'Scala blues — la blue note',
    duration: '4 min', xp: 30,
    intro: 'Aggiungi UNA nota alla pentatonica minore: la ♭5. Si chiama "blue note" ed è il cuore del suono blues.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - ♭3 - 4 - ♭5 - 5 - ♭7</strong>. In La: A - C - D - E♭ - E - G. Solo una nota in più rispetto alla pentatonica minore.` },
      { type: 'audio', title: 'A blues ascendente', notes: [57,60,62,63,64,67,69], mode: 'sequence' },
      { type: 'text', title: 'La blue note ♭5',
        content: `La <strong>♭5</strong> è dissonante per definizione, ma in blues funziona perché:
        <ul>
          <li>Non ci stai sopra: la "tocchi" e poi vai alla 5 o alla 4.</li>
          <li>Crea quel "blues feel" che nessun'altra nota può dare.</li>
          <li>Aggiunta solo nella scala discendente per dare un effetto pianto.</li>
        </ul>` },
      { type: 'callout', content: 'Sentire la blue note risolvere è una delle esperienze più riconoscibili della musica popolare. Esempio iconico: l\'intro del riff di "Sunshine of Your Love" (Cream).' },
      { type: 'quickcheck', q: 'Qual è la blue note in A blues?', options: ['B','D','E♭','F♯'], correct: 'E♭' },
    ],
    relatedTheoryMode: 'degrees_basic',
    relatedLevel: 30,
  },

  // ─── L31 · Modo Dorico ───
  {
    id: 31, module: 4, title: 'Modo Dorico (ii grado) — minore con 6 maggiore',
    duration: '5 min', xp: 30,
    intro: 'Il dorico è un minore "luminoso": ha la ♭3 ma la 6 naturale. Sound jazz, funk, modale.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - ♭3 - 4 - 5 - 6 - ♭7</strong>. In Re: D - E - F - G - A - B - C. Pattern: <code>T - S - T - T - T - S - T</code>.` },
      { type: 'audio', title: 'D Dorico', notes: [62,64,65,67,69,71,72,74], mode: 'sequence' },
      { type: 'text', title: 'Nota caratteristica: la 6 naturale',
        content: `Rispetto al minore naturale (♭6), il dorico ha la <strong>6 maggiore</strong>. Esaltarla nelle frasi rende "dorico" il sound. Es. in D dorico: la nota <code>B</code> sopra un accordo <code>Dm7</code>.` },
      { type: 'callout', content: 'Brani celebri: <em>So What</em> (Miles Davis), <em>Oye Como Va</em> (Santana), <em>Scarborough Fair</em>, <em>Smoke on the Water</em>.' },
      { type: 'quickcheck', q: 'Differenza chiave tra dorico ed eolio?', options: ['La 3','La 5','La 6','La 7'], correct: 'La 6' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: 31,
  },
  // ─── L32 · Modo Frigio ───
  {
    id: 32, module: 4, title: 'Modo Frigio (iii grado) — il sound spagnolo',
    duration: '5 min', xp: 30,
    intro: 'Minore con ♭2: immediatamente riconoscibile. Flamenco, metal, sapore orientale.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - ♭2 - ♭3 - 4 - 5 - ♭6 - ♭7</strong>. In Mi: E - F - G - A - B - C - D.` },
      { type: 'audio', title: 'E Frigio', notes: [64,65,67,69,71,72,74,76], mode: 'sequence' },
      { type: 'text', title: 'Nota caratteristica: la ♭2',
        content: `La <strong>♭2</strong> a un semitono dalla tonica crea il "pianto" tipico del flamenco. Il movimento ♭2 → 1 è il marchio del frigio.` },
      { type: 'callout', content: 'Brani celebri: <em>Wherever I May Roam</em> (Metallica intro), <em>Symphony of Destruction</em> (Megadeth), gran parte del flamenco. Anche <em>The Sails of Charon</em> (Scorpions).' },
      { type: 'quickcheck', q: 'Nota caratteristica del frigio?', options: ['♭3','♭2','♯4','♭7'], correct: '♭2' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: 32,
  },
  // ─── L33 · Modo Lidio ───
  {
    id: 33, module: 4, title: 'Modo Lidio (IV grado) — il sound sognante',
    duration: '5 min', xp: 30,
    intro: 'Scala maggiore con la 4 alzata di un semitono. Apertura, sospensione, magia.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - 3 - ♯4 - 5 - 6 - 7</strong>. In Fa: F - G - A - B - C - D - E.` },
      { type: 'audio', title: 'F Lidio', notes: [65,67,69,71,72,74,76,77], mode: 'sequence' },
      { type: 'text', title: 'Nota caratteristica: la ♯4 (tritono dalla tonica)',
        content: `La <strong>♯4</strong> crea quel sound "che fluttua". Usata per: musica per film (Williams, Goldsmith), ballad jazz su Imaj7♯11, fusion.` },
      { type: 'callout', content: 'Brani celebri: <em>The Simpsons Theme</em> (intro lidio puro), <em>Maria</em> (West Side Story), <em>E.T. Flying Theme</em>. Joe Satriani usa Lidio ovunque.' },
      { type: 'quickcheck', q: 'Lidio è...', options: ['Maggiore con ♭7','Minore con 6 maj','Maggiore con ♯4','Minore con ♭2'], correct: 'Maggiore con ♯4' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: 33,
  },
  // ─── L34 · Modo Misolidio ───
  {
    id: 34, module: 4, title: 'Modo Misolidio (V grado) — il sound dominante',
    duration: '5 min', xp: 30,
    intro: 'Maggiore con la ♭7 invece della 7. È la scala dell\'accordo di V7. Blues, rock, country.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - 3 - 4 - 5 - 6 - ♭7</strong>. In Sol: G - A - B - C - D - E - F.` },
      { type: 'audio', title: 'G Misolidio', notes: [67,69,71,72,74,76,77,79], mode: 'sequence' },
      { type: 'text', title: 'Nota caratteristica: ♭7',
        content: `La <strong>♭7</strong> rende il misolidio perfetto sopra accordi <code>7 dominanti</code>. Il blues "Mixo" suona dolce: nessuna risoluzione forzata, la dominante è la tonica.` },
      { type: 'callout', content: 'Brani celebri: <em>Sweet Child O\' Mine</em> (riff), <em>Royals</em> (Lorde), buona parte del rock\'n\'roll. Tutti i ritornelli "Like A Rolling Stone".' },
      { type: 'quickcheck', q: 'Misolidio si usa specialmente su...', options: ['Imaj7','iim7','V7 (dominante)','vii°'], correct: 'V7 (dominante)' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: 34,
  },
  // ─── L35 · Modo Locrio ───
  {
    id: 35, module: 4, title: 'Modo Locrio (vii grado) — il modo instabile',
    duration: '4 min', xp: 30,
    intro: 'Il più "scuro": ha sia ♭2 che ♭5. Non ha una vera tonica perché la triade è diminuita. Si usa solo su m7♭5.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - ♭2 - ♭3 - 4 - ♭5 - ♭6 - ♭7</strong>. In Si: B - C - D - E - F - G - A.` },
      { type: 'audio', title: 'B Locrio', notes: [59,60,62,64,65,67,69,71], mode: 'sequence' },
      { type: 'text', title: 'Quando usarlo',
        content: `Il locrio è la scala di elezione per gli accordi <strong>m7♭5</strong> (es. il ii del jazz minore). Raramente usato come "tonalità centrale": sa di non-risolto perpetuo.` },
      { type: 'callout', content: 'Brano celebre: <em>YYZ</em> (Rush) usa locrio. Anche tutto il dark/black metal con sapore "diminuito".' },
      { type: 'quickcheck', q: 'Locrio ha ♭5 e...', options: ['♯4','♭2','3','♮6'], correct: '♭2' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L36 · Pentatonica maggiore ───
  {
    id: 36, module: 4, title: 'Pentatonica maggiore',
    duration: '4 min', xp: 25,
    intro: '5 note senza semitoni. La "scala felice" — country, gospel, pop maj.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - 3 - 5 - 6</strong>. In C: C - D - E - G - A. Pentatonica minore relativa = stesse note, tonica diversa (A min pent).` },
      { type: 'audio', title: 'C maggiore pentatonica', notes: [60,62,64,67,69,72], mode: 'sequence' },
      { type: 'text', title: 'Quando suona meglio',
        content: `<ul>
          <li>Sopra accordi maggiori: non rischi mai una "nota sbagliata".</li>
          <li>Country & western: scala madre del genere.</li>
          <li>Solo "luminosi" su brani pop in tonalità maggiore.</li>
        </ul>` },
      { type: 'callout', content: 'Trucco: sopra un blues in C, alterna la pent maggiore (C-D-E-G-A) sul I e la pent minore (C-E♭-F-G-B♭) sul IV. Il colore cambia drammaticamente.' },
      { type: 'quickcheck', q: 'Quale grado MANCA nella pent maggiore?', options: ['1','3','4','5'], correct: '4' },
    ],
    relatedTheoryMode: 'degrees_basic',
    relatedLevel: null,
  },
  // ─── L37 · Melodic Minor ───
  {
    id: 37, module: 4, title: 'Scala minore melodica (jazz minor)',
    duration: '5 min', xp: 35,
    intro: 'Minore con la 6 e la 7 naturali (versione ascendente). È la madre dei modi jazz più moderni.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - ♭3 - 4 - 5 - 6 - 7</strong>. In Do: C - D - E♭ - F - G - A - B. Praticamente "scala maggiore con ♭3".` },
      { type: 'audio', title: 'C minore melodica', notes: [60,62,63,65,67,69,71,72], mode: 'sequence' },
      { type: 'text', title: 'Versione classica vs jazz',
        content: `<ul>
          <li><strong>Classica</strong>: ascendente come sopra, ma discendente torna a minore naturale.</li>
          <li><strong>Jazz</strong>: stessa forma sia su che giù. Più semplice e potente per improvvisare.</li>
        </ul>` },
      { type: 'callout', content: 'I 7 modi della minore melodica producono scale altamente "usabili" nel jazz moderno: lidio dominante, alterata, locrio ♮2... le vedremo nella L39.' },
      { type: 'quickcheck', q: 'Minore melodica = scala maggiore con...', options: ['♭2','♭3','♭6','♭7'], correct: '♭3' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L38 · Harmonic Minor ───
  {
    id: 38, module: 4, title: 'Scala minore armonica',
    duration: '5 min', xp: 35,
    intro: 'Minore naturale con la 7 alzata. Salto di 1 tono e mezzo tra ♭6 e 7: sound esotico, classico, neoclassical metal.',
    sections: [
      { type: 'text', title: 'Formula',
        content: `<strong>1 - 2 - ♭3 - 4 - 5 - ♭6 - 7</strong>. In La: A - B - C - D - E - F - G♯. Notate il salto F → G♯ (tono e mezzo).` },
      { type: 'audio', title: 'A minore armonica', notes: [57,59,60,62,64,65,68,69], mode: 'sequence' },
      { type: 'text', title: 'Perché è nata',
        content: `Per avere una <strong>cadenza V-i forte</strong> in tonalità minore. La 7 naturale (G♯ in A min) crea l'accordo di E7 → A minore, con risoluzione vera.` },
      { type: 'callout', content: 'Brani celebri: tantissimi pezzi neoclassical (Yngwie Malmsteen, Vinnie Moore), musica balcanica, klezmer. Anche <em>Hava Nagila</em>. Il V grado armonico minore = frigio dominante (vedi L32).' },
      { type: 'quickcheck', q: 'Quale grado è alterato rispetto al minore naturale?', options: ['♭3','5','7','♭6'], correct: '7' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L39 · Modi del minore melodico ───
  {
    id: 39, module: 4, title: 'Modi del minore melodico: Lidio ♭7 e Alterata',
    duration: '6 min', xp: 40,
    intro: 'I 7 modi della minore melodica sono il vocabolario del jazz post-bebop. Due sono usatissimi: Lidio ♭7 e Alterata.',
    sections: [
      { type: 'text', title: 'Lidio ♭7 (IV grado)',
        content: `<strong>1 - 2 - 3 - ♯4 - 5 - 6 - ♭7</strong>. Lidio con la 7 ♭. Si usa sopra accordi di <strong>7♯11</strong>. In Fa: F - G - A - B - C - D - E♭.` },
      { type: 'audio', title: 'F Lidio ♭7', notes: [65,67,69,71,72,74,75,77], mode: 'sequence' },
      { type: 'text', title: 'Scala Alterata (VII grado)',
        content: `<strong>1 - ♭2 - ♯2 - 3 - ♯4 - ♯5 - ♭7</strong>. Tutte le tensioni dominanti possibili: ♭9, ♯9, ♯11, ♭13. In Sol: G - A♭ - B♭ - B - D♭ - E♭ - F. Si usa sopra <strong>V7alt</strong> per la massima tensione prima di risolvere.` },
      { type: 'audio', title: 'G Alterata', notes: [67,68,70,71,73,75,77,79], mode: 'sequence' },
      { type: 'callout', content: 'Trucco mnemonico: la scala Alterata su G è la stessa scala melodica minore di A♭ (un semitono sopra la tonica). Quindi se ti serve "G alt" → suona "A♭ melodic minor". Comodo!' },
      { type: 'quickcheck', q: 'Lidio ♭7 si usa su accordi...', options: ['Maj7','m7','7♯11','m7♭5'], correct: '7♯11' },
    ],
    relatedTheoryMode: 'extensions',
    relatedLevel: null,
  },
  // ─── L40 · Scale simmetriche ───
  {
    id: 40, module: 4, title: 'Scale simmetriche: esatonale e diminuita',
    duration: '5 min', xp: 35,
    intro: 'Scale che ripetono lo stesso intervallo. Suonano "fuori contesto tonale" — sospensione, mistero, sound impressionista.',
    sections: [
      { type: 'text', title: 'Esatonale (whole-tone)',
        content: `<strong>Solo toni interi</strong>: 1 - 2 - 3 - ♯4 - ♯5 - ♭7. 6 note, tutti gli intervalli sono toni. In C: C - D - E - F♯ - G♯ - A♯. Si usa su accordi <strong>7♯5 / 7+</strong>.` },
      { type: 'audio', title: 'C esatonale', notes: [60,62,64,66,68,70,72], mode: 'sequence' },
      { type: 'text', title: 'Diminuita (H-W e W-H)',
        content: `<strong>Alternanza semitono-tono</strong> (H-W per accordi dominanti) o <strong>tono-semitono</strong> (W-H per accordi diminuiti). 8 note. La H-W in C: C - D♭ - E♭ - E - F♯ - G - A - B♭ (usata su <code>C7♭9</code>).` },
      { type: 'audio', title: 'C diminuita H-W', notes: [60,61,63,64,66,67,69,70,72], mode: 'sequence' },
      { type: 'callout', content: 'Brani celebri: <em>Mister Sandman</em> (esatonale nell\'intro), tutta la fase impressionista francese (Debussy, Ravel). Diminuita: Coltrane, Brecker, fusion moderna.' },
      { type: 'quickcheck', q: 'L\'esatonale è composta da...', options: ['Solo semitoni','Solo toni interi','Tono-semitono','Quarte'], correct: 'Solo toni interi' },
    ],
    relatedTheoryMode: 'extensions',
    relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 5 — ARMONIA FUNZIONALE
  // ════════════════════════════════════════════════════════════

  // ─── L41 · I gradi diatonici ───
  {
    id: 41, module: 5, title: 'I 7 gradi della tonalità maggiore',
    duration: '5 min', xp: 30,
    intro: 'Da ogni grado della scala maggiore nasce un accordo. Conoscerli a memoria è prerequisito per leggere/comporre qualsiasi brano tonale.',
    sections: [
      { type: 'text', title: 'I gradi in maggiore',
        content: `Su scala C maggiore, gli accordi diatonici sono:
        <ul>
          <li><strong>I = Cmaj7</strong> (maggiore)</li>
          <li><strong>ii = Dm7</strong> (minore)</li>
          <li><strong>iii = Em7</strong> (minore)</li>
          <li><strong>IV = Fmaj7</strong> (maggiore)</li>
          <li><strong>V = G7</strong> (dominante)</li>
          <li><strong>vi = Am7</strong> (minore)</li>
          <li><strong>vii° = Bm7♭5</strong> (semidiminuito)</li>
        </ul>` },
      { type: 'audio', title: 'I-ii-iii-IV-V-vi-vii in C',
        notes: [60,64,67,71, -1, 62,65,69,72, -1, 64,67,71,74, -1, 65,69,72,76, -1, 67,71,74,77, -1, 69,72,76,79, -1, 71,74,77,81], mode: 'sequence_chords' },
      { type: 'callout', content: 'Pattern delle qualità: <strong>Maj, min, min, Maj, 7, min, m7♭5</strong>. Vale per QUALSIASI tonalità maggiore. Cambia solo la nota tonica.' },
      { type: 'quickcheck', q: 'Il ii grado di una tonalità maggiore è...', options: ['Maggiore','Minore','Dominante','Diminuito'], correct: 'Minore' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: null,
  },
  // ─── L42 · Funzione armonica ───
  {
    id: 42, module: 5, title: 'Funzione armonica: Tonica, Sottodominante, Dominante',
    duration: '5 min', xp: 30,
    intro: 'I 7 gradi si raggruppano in 3 funzioni. Capirle ti permette di "sentire" cosa farà ogni accordo.',
    sections: [
      { type: 'text', title: 'Le 3 funzioni',
        content: `<ul>
          <li><strong>Tonica (T)</strong>: I - iii - vi → riposo, "casa". I gradi del tono.</li>
          <li><strong>Sottodominante (S)</strong>: ii - IV → preparazione, leggera tensione. Conducono alla dominante.</li>
          <li><strong>Dominante (D)</strong>: V - vii° → massima tensione. Vogliono risolvere alla tonica.</li>
        </ul>` },
      { type: 'callout', content: 'Movimento universale: <strong>T → S → D → T</strong>. Il "moto perpetuo" di tutta la musica tonale. Esempio in C: C (T) → F (S) → G7 (D) → C (T).' },
      { type: 'text', title: 'Sostituzioni',
        content: `Puoi sostituire un grado con un altro della stessa funzione:
        <ul>
          <li>Invece di I → suona iii o vi (anch'essi T)</li>
          <li>Invece di IV → suona ii (anch'esso S)</li>
          <li>Invece di V → suona vii° (anch'esso D)</li>
        </ul>
        Risultato: stessa progressione, colore diverso.` },
      { type: 'quickcheck', q: 'Il V grado ha funzione di...', options: ['Tonica','Sottodominante','Dominante','Modulazione'], correct: 'Dominante' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: null,
  },
  // ─── L43 · Cadenza V-I ───
  {
    id: 43, module: 5, title: 'La cadenza V-I (autentica perfetta)',
    duration: '4 min', xp: 25,
    intro: 'È il modo più forte per concludere una frase musicale. La base di tutta la musica funzionale occidentale.',
    sections: [
      { type: 'text', title: 'Cosa la rende "forte"',
        content: `Nel V (G7 in C):
        <ul>
          <li>La <strong>3 (B)</strong> è la sensibile: vuole salire alla 1 della tonica.</li>
          <li>La <strong>♭7 (F)</strong> vuole scendere alla 3 (E) della tonica.</li>
          <li>Tritono B-F si risolve naturalmente in E-C.</li>
        </ul>` },
      { type: 'audio', title: 'G7 → C (cadenza autentica)',
        notes: [55,59,62,65, -1, 60,64,67], mode: 'sequence_chords' },
      { type: 'callout', content: 'La cadenza autentica perfetta richiede: V in posizione fondamentale → I in posizione fondamentale, con la <strong>tonica al soprano</strong>. Massima conclusione.' },
      { type: 'text', title: 'Cadenze derivate',
        content: `<ul>
          <li><strong>V-vi</strong> = cadenza d'inganno (la V "delude" risolvendo nel vi minore).</li>
          <li><strong>IV-I</strong> = cadenza plagale ("amen"), più dolce.</li>
          <li><strong>V/V → V → I</strong> = doppia dominante (V di V), prolunga la tensione.</li>
        </ul>` },
      { type: 'quickcheck', q: 'V-vi è chiamata cadenza...', options: ['Plagale','Autentica','D\'inganno','Sospesa'], correct: 'D\'inganno' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: null,
  },
  // ─── L44 · Cadenze plagale e d'inganno ───
  {
    id: 44, module: 5, title: 'Cadenze plagale e d\'inganno',
    duration: '4 min', xp: 25,
    intro: 'Non tutte le frasi finiscono con V-I. Le cadenze alternative danno colore e sorpresa.',
    sections: [
      { type: 'text', title: 'Plagale: IV-I (la "amen")',
        content: `Dolce, pacifica. F → C. Niente tritono → niente tensione → niente "spinta", solo serenità. Usatissima nei finali di inni religiosi (da cui il nome "amen cadence").` },
      { type: 'audio', title: 'F → C (plagale)',
        notes: [53,57,60, -1, 60,64,67], mode: 'sequence_chords' },
      { type: 'text', title: 'D\'inganno: V-vi',
        content: `G7 → Am invece di C. Il V "prometteva" la tonica ma "delude" andando al vi minore. Crea sospensione → permette di prolungare la frase prima della vera risoluzione.` },
      { type: 'audio', title: 'G7 → Am (d\'inganno)',
        notes: [55,59,62,65, -1, 57,60,64], mode: 'sequence_chords' },
      { type: 'callout', content: 'Esempio iconico: il finale di tante canzoni pop "estende" il giro con V-vi-IV-I prima di chiudere. La V-vi alza l\'aspettativa, IV-I la rilascia.' },
      { type: 'quickcheck', q: 'IV-I è chiamata...', options: ['Cadenza autentica','Cadenza plagale','Cadenza d\'inganno','Modulazione'], correct: 'Cadenza plagale' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: null,
  },
  // ─── L45 · I-IV-V ───
  {
    id: 45, module: 5, title: 'La progressione I-IV-V (blues, rock, country)',
    duration: '5 min', xp: 25,
    intro: 'Il giro più suonato di sempre. Solo 3 accordi, infinite canzoni.',
    sections: [
      { type: 'text', title: 'Perché funziona',
        content: `I-IV-V copre <strong>tutte le 3 funzioni</strong> (Tonica, Sottodominante, Dominante). Bilanciato, completo, semplice. Le 3 note dei 3 accordi insieme = tutte le 7 note della scala maggiore.` },
      { type: 'audio', title: 'C - F - G - C (I-IV-V-I)',
        notes: [60,64,67, -1, 65,69,72, -1, 67,71,74, -1, 60,64,67], mode: 'sequence_chords' },
      { type: 'text', title: 'Varianti famose',
        content: `<ul>
          <li><strong>12-bar blues</strong>: I7-I7-I7-I7 / IV7-IV7-I7-I7 / V7-IV7-I7-V7</li>
          <li><strong>Doo-wop</strong>: I-vi-IV-V (anni '50)</li>
          <li><strong>Country</strong>: spesso I-IV-V con minimo bridge in vi</li>
        </ul>` },
      { type: 'callout', content: 'Esempi: <em>Twist and Shout</em>, <em>La Bamba</em>, <em>Wild Thing</em>, qualsiasi 12-bar blues, <em>Sweet Home Alabama</em> (varia con D-C-G).' },
      { type: 'quickcheck', q: 'I-IV-V in tonalità di G sono...', options: ['G-A-D','G-C-D','G-D-A','G-Am-Dm'], correct: 'G-C-D' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: null,
  },
  // ─── L46 · ii-V-I ───
  {
    id: 46, module: 5, title: 'ii-V-I: il giro armonico del jazz',
    duration: '6 min', xp: 35,
    intro: 'Se il blues ha I-IV-V, il jazz ha ii-V-I. Onnipresente, fondamentale per improvvisare.',
    sections: [
      { type: 'text', title: 'La progressione',
        content: `In C: <strong>Dm7 - G7 - Cmaj7</strong>.
        <ul>
          <li><strong>ii (Dm7)</strong>: prepara la tensione (funzione sottodominante).</li>
          <li><strong>V (G7)</strong>: tensione massima.</li>
          <li><strong>I (Cmaj7)</strong>: risoluzione.</li>
        </ul>
        Il movimento delle radici (D → G → C) è per <strong>quinte discendenti</strong> — il ciclo armonico più forte.` },
      { type: 'audio', title: 'Dm7 - G7 - Cmaj7',
        notes: [62,65,69,72, -1, 55,59,62,65, -1, 60,64,67,71], mode: 'sequence_chords' },
      { type: 'text', title: 'Voice leading nel ii-V-I',
        content: `Le 3 voci si muovono di pochissimo:
        <ul>
          <li>F (♭3 di Dm7) → F (♭7 di G7) → E (3 di Cmaj7): scende 1 semitono</li>
          <li>C (♭7 di Dm7) → B (3 di G7) → B (7 di Cmaj7): scende 1 semitono</li>
        </ul>
        È il segreto del "buon legato" jazz.` },
      { type: 'callout', content: 'Esempio: <em>Autumn Leaves</em> è 80% ii-V-I. <em>Misty</em>, <em>Fly Me to the Moon</em>, <em>All The Things You Are</em>: ovunque. Imparare ii-V-I in tutte le 12 tonalità è il primo grande step nel jazz.' },
      { type: 'quickcheck', q: 'ii-V-I in tonalità di F sono...', options: ['Fm7-Bb7-Eb','Gm7-C7-Fmaj7','F-Bb-C','Dm7-G7-C'], correct: 'Gm7-C7-Fmaj7' },
    ],
    relatedTheoryMode: 'chord_structure',
    relatedLevel: null,
  },
  // ─── L47 · Voice leading ───
  {
    id: 47, module: 5, title: 'Voice leading — il segreto del flusso armonico',
    duration: '6 min', xp: 35,
    intro: 'Quando passi da un accordo al successivo, le singole voci dovrebbero muoversi di pochissimo. È la differenza tra "stridente" e "fluente".',
    sections: [
      { type: 'text', title: 'Il principio',
        content: `Per ogni voce (soprano, contralto, tenore, basso): muovi alla nota più vicina nell'accordo successivo. Salti di tono interi e movimenti chromatici di semitono sono i migliori.` },
      { type: 'text', title: 'Esempio: C → F (I → IV in C)',
        content: `Senza voice leading: C-E-G → F-A-C (la voce E salta a F, G salta a A, C salta a F). Movimenti grandi.
        <br><br>
        Con voice leading: tieni il C (comune), E sale a F (semitono), G sale ad A (tono). Smooth.` },
      { type: 'audio', title: 'C → F con voice leading',
        notes: [60,64,67, -1, 60,65,69], mode: 'sequence_chords' },
      { type: 'callout', content: 'Nel jazz "comping" (accompagnare con accordi): un buon pianista/chitarrista non muove mai 4 voci alla volta. Le voci scorrono indipendentemente, creando contrappunto.' },
      { type: 'text', title: 'Su chitarra',
        content: `Pratica voicing a 4 voci sulle stringhe interne (D-G-B-E). Esempio progressione: Cmaj7 (C-G-B-E) → Dm7 (D-A-C-F) → G7 (G-B-D-F) → Cmaj7. Solo 1-2 dita si muovono per accordo.` },
      { type: 'quickcheck', q: 'Voice leading ottimale richiede...', options: ['Salti grandi','Movimenti di tono/semitono','Note ripetute','Accordi blocco'], correct: 'Movimenti di tono/semitono' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L48 · Sostituzione di tritono ───
  {
    id: 48, module: 5, title: 'Sostituzione di tritono (♭II7 al posto di V7)',
    duration: '5 min', xp: 40,
    intro: 'Un trucco jazz: sostituisci il V7 con l\'accordo di 7 a un tritono di distanza. Stesso "interno" armonico, basso diverso.',
    sections: [
      { type: 'text', title: 'Il meccanismo',
        content: `G7 contiene il tritono B-F. Anche D♭7 contiene B-F (suoi gradi 7 e 3 sono enarmonicamente uguali). Quindi <strong>D♭7</strong> può sostituire <strong>G7</strong>: risolvono entrambi a Cmaj7.` },
      { type: 'audio', title: 'D♭7 → Cmaj7 (sub di tritono)',
        notes: [61,65,68,71, -1, 60,64,67,71], mode: 'sequence_chords' },
      { type: 'text', title: 'Perché usarla',
        content: `<ul>
          <li>Il basso si muove di <strong>semitono</strong> (D♭ → C), invece che di quarta. Linea bassa cromatica → sound elegante.</li>
          <li>L'accordo "♭II7" aggiunge colore senza cambiare la funzione dominante.</li>
          <li>Trasforma un ii-V-I in <strong>ii-♭II7-I</strong> (es. Dm7 - D♭7 - Cmaj7).</li>
        </ul>` },
      { type: 'callout', content: 'Esempio brano: <em>Take The A Train</em> usa la sub di tritono nel bridge. <em>Girl From Ipanema</em> idem.' },
      { type: 'quickcheck', q: 'Il sostituto di tritono di G7 è...', options: ['F♯7','D♭7','C7','E♭7'], correct: 'D♭7' },
    ],
    relatedTheoryMode: 'extensions',
    relatedLevel: null,
  },
  // ─── L49 · Accordi prestati ───
  {
    id: 49, module: 5, title: 'Modal interchange (accordi prestati dal parallelo)',
    duration: '5 min', xp: 40,
    intro: 'Sei in tonalità maggiore? Puoi "prendere in prestito" accordi dalla minore parallela. Risultato: colori inaspettati.',
    sections: [
      { type: 'text', title: 'Cos\'è',
        content: `Tonalità parallela = stessa tonica, modo opposto. C maggiore ↔ C minore. Gli accordi diatonici di C minore (Cm, Dm7♭5, E♭, Fm, Gm, A♭, B♭) possono essere inseriti in un brano in C maggiore per creare contrasto.` },
      { type: 'text', title: 'Prestiti più usati',
        content: `<ul>
          <li><strong>iv minore</strong> (Fm in C) — sostituisce il IV: triste, malinconico</li>
          <li><strong>♭VII</strong> (B♭ in C) — sound mixolidio/rock</li>
          <li><strong>♭VI</strong> (A♭ in C) — sound epico/cinematografico</li>
          <li><strong>♭III</strong> (E♭ in C) — sound bluesy</li>
        </ul>` },
      { type: 'audio', title: 'C - Am - Fm - C (con iv minore prestato)',
        notes: [60,64,67, -1, 57,60,64, -1, 53,56,60, -1, 60,64,67], mode: 'sequence_chords' },
      { type: 'callout', content: 'Esempi: <em>Creep</em> (Radiohead) — Cmaj-E-Fmaj-Fm (l\'Fm finale è il prestito). <em>Yesterday</em> (Beatles). <em>Wish You Were Here</em> (Pink Floyd).' },
      { type: 'quickcheck', q: 'Il prestito "iv minore" in C è...', options: ['Cm','Dm','Fm','Gm'], correct: 'Fm' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L50 · Modulazione ───
  {
    id: 50, module: 5, title: 'Modulazione (cambio di tonalità)',
    duration: '6 min', xp: 40,
    intro: 'Cambiare tonalità durante un brano. Pivot, dominante, o brusco. Trucco antico per dare slancio.',
    sections: [
      { type: 'text', title: 'Tipi di modulazione',
        content: `<ul>
          <li><strong>Per pivot</strong>: un accordo comune alle due tonalità fa da ponte. Es. C maj e G maj condividono C, Em, G, Am.</li>
          <li><strong>Per dominante</strong>: introduci la V della nuova tonalità. Es. da C, suona D7 → G (nuova tonica).</li>
          <li><strong>Diretta (truck driver)</strong>: salto brusco. Tipico del pop: ultimo ritornello su 1 tono più alto.</li>
        </ul>` },
      { type: 'audio', title: 'C → modulazione a D (truck driver)',
        notes: [60,64,67, -1, 65,69,72, -1, 67,71,74, -1, 62,66,69], mode: 'sequence_chords' },
      { type: 'callout', content: 'Esempi: <em>Penny Lane</em> (Beatles, modulazione su ritornello), <em>Living On A Prayer</em> (Bon Jovi, classico truck driver su ultimo ritornello), <em>Love On Top</em> (Beyoncé, multiple modulazioni consecutive).' },
      { type: 'quickcheck', q: 'Il "truck driver" è una modulazione...', options: ['Per pivot','Per dominante','Diretta','Enarmonica'], correct: 'Diretta' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 6 — APPLICAZIONE PRATICA
  // ════════════════════════════════════════════════════════════

  // ─── L51 · Improvvisare su accordo statico ───
  {
    id: 51, module: 6, title: 'Improvvisare su un accordo statico',
    duration: '5 min', xp: 30,
    intro: 'Prima di affrontare i cambi, impara a improvvisare bene su UN solo accordo. È il fondamento.',
    sections: [
      { type: 'text', title: 'Scegli la scala giusta',
        content: `Ogni accordo "preferisce" certe scale:
        <ul>
          <li><strong>Imaj7</strong> → Ionico (maggiore) o Lidio</li>
          <li><strong>iim7 / iiim7 / vim7</strong> → Dorico / Frigio / Eolio (rispettivi modi)</li>
          <li><strong>V7</strong> → Misolidio, oppure Alterata, Lidio ♭7, Diminuita H-W</li>
          <li><strong>vii°m7♭5</strong> → Locrio</li>
        </ul>` },
      { type: 'text', title: 'Target chord tones',
        content: `Sulle <strong>note forti</strong> (downbeat di ogni bar) atterra sui chord tones (1, 3, 5, 7). Tra una nota forte e l'altra puoi usare tutta la scala come "passaggio".` },
      { type: 'callout', content: 'Esercizio: prendi un Cmaj7 in loop (synth o backing track). Suona solo le 4 note dell\'accordo (C-E-G-B) per 1 minuto. Poi aggiungi le altre note della scala come passaggi. Sentirai la differenza tra "note centrali" e "ornamenti".' },
      { type: 'quickcheck', q: 'Sopra un Dm7 (ii grado in C), la scala migliore è...', options: ['Ionico C','Dorico D','Lidio F','Misolidio G'], correct: 'Dorico D' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L52 · Outline armonico ───
  {
    id: 52, module: 6, title: 'Outline armonico — suonare i chord tones in tempo',
    duration: '6 min', xp: 40,
    intro: 'Su cambi armonici veloci (jazz), il segreto è "disegnare" la progressione con le note giuste sui downbeat.',
    sections: [
      { type: 'text', title: 'Il principio',
        content: `Per ogni accordo della progressione, individua un chord tone "target" (di solito 3 o 7). Atterra su quello al downbeat. Tra un target e il successivo: scale, frasi, qualunque cosa scorra.` },
      { type: 'text', title: 'Esempio: ii-V-I in C',
        content: `<strong>Dm7 → G7 → Cmaj7</strong>
        <ul>
          <li>Su Dm7: atterra su F (♭3) — bar 1, beat 1</li>
          <li>Su G7: atterra su F (♭7) — bar 2, beat 1 (è la stessa nota!)</li>
          <li>Su Cmaj7: atterra su E (3) — bar 3, beat 1 (sale di un semitono dal F)</li>
        </ul>
        Hai disegnato un voice leading <strong>F → F → E</strong> = pianoforte ideale.` },
      { type: 'callout', content: 'Trucco: le 3 e le 7 sono le "guide tones" (note guida). Una linea melodica di sole guide tones, suonata in tempo, racconta perfettamente la progressione anche senza accordi sotto.' },
      { type: 'quickcheck', q: 'Le "guide tones" più importanti sono i gradi...', options: ['1 e 5','3 e 7','9 e 11','5 e ♭7'], correct: '3 e 7' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L53 · Frasi e lick ───
  {
    id: 53, module: 6, title: 'Frasi e lick — costruire un vocabolario',
    duration: '5 min', xp: 30,
    intro: 'Improvvisare non è "inventare dal nulla": è ricombinare frasi che hai memorizzato. Il vocabolario è la tua tavolozza.',
    sections: [
      { type: 'text', title: 'Come costruirlo',
        content: `<ul>
          <li><strong>Trascrivi</strong>: prendi 2-4 battute di un assolo che ami. Imparale letteralmente (note + ritmo + dinamica).</li>
          <li><strong>Astrai</strong>: identifica la formula (es. "1-3-5-♭7 ascendente sopra m7"). Diventa un lick riutilizzabile.</li>
          <li><strong>Trasponi</strong>: suona quel lick in tutte le 12 tonalità.</li>
          <li><strong>Varia</strong>: cambia ritmo, direzione, ordine note → diventa "tuo".</li>
        </ul>` },
      { type: 'callout', content: 'Tutti i grandi (Coltrane, Hendrix, BB King, Pat Metheny) sono andati a scuola dai loro predecessori così. <em>Originality is the offspring of imitation</em>.' },
      { type: 'text', title: 'Quanti lick servono?',
        content: `Inizia con 5-10 lick essenziali per ogni situazione (Imaj7, ii-V, V7alt, blues). 10 lick × 12 tonalità = 120 frasi padroneggiate. È già un vocabolario suonabile in qualunque contesto.` },
      { type: 'quickcheck', q: 'Il processo per "interiorizzare" un lick è...', options: ['Suonarlo 1 volta','Trascrivere + astrarre + trasporre + variare','Solo memorizzarlo a mente','Improvvisare libero'], correct: 'Trascrivere + astrarre + trasporre + variare' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L54 · Phrasing e dinamiche ───
  {
    id: 54, module: 6, title: 'Phrasing — respiro, dinamica, articolazione',
    duration: '5 min', xp: 30,
    intro: 'Le stesse note suonate bene o male sono musica diversa. Il phrasing è il 50% del solo.',
    sections: [
      { type: 'text', title: 'Respiro: usa il silenzio',
        content: `<strong>Le pause valgono quanto le note</strong>. Frasi di 4-8 note + pausa di 1 bar → orecchio digerisce. Frasi continue senza respiro → ascoltatore esausto. Pensa come un cantante: ogni frase è un respiro.` },
      { type: 'text', title: 'Dinamica: piano-forte-piano',
        content: `<strong>Crescendo / decrescendo</strong> dentro la frase. Inizia piano, arriva al picco emotivo a metà, scendi al ritorno. Volume variabile = espressione. Suonare tutto allo stesso livello = monotonia.` },
      { type: 'text', title: 'Articolazione',
        content: `<ul>
          <li><strong>Legato</strong>: note legate, hammer-on/pull-off → fluidità</li>
          <li><strong>Staccato</strong>: note staccate, ritmiche → tensione</li>
          <li><strong>Bending</strong>: piega la nota di mezzo tono / tono / più → espressione vocale</li>
          <li><strong>Vibrato</strong>: oscillazione finale → "calore" della nota</li>
          <li><strong>Slide</strong>: cambio posizione scivolando → connessione</li>
        </ul>` },
      { type: 'callout', content: 'BB King usava 6-8 note per intero blues, ma con vibrato e bending devastanti. Yngwie Malmsteen suona 200 note al secondo: stesso strumento, mondi opposti. Scegli il tuo posto su questo spettro.' },
      { type: 'quickcheck', q: 'L\'elemento più trascurato dai principianti nei loro assoli è...', options: ['La velocità','La tecnica','Il silenzio / pause','La distorsione'], correct: 'Il silenzio / pause' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L55 · Improvvisazione modale ───
  {
    id: 55, module: 6, title: 'Improvvisazione modale — esaltare la nota caratteristica',
    duration: '5 min', xp: 35,
    intro: 'Su brani modali (un solo accordo per tante battute), il tuo lavoro è far "sentire" il modo. Esalta la nota che lo distingue.',
    sections: [
      { type: 'text', title: 'Note caratteristiche',
        content: `<ul>
          <li><strong>Dorico</strong> → 6 maggiore (es. B in D dorico)</li>
          <li><strong>Lidio</strong> → ♯4 (es. B in F lidio)</li>
          <li><strong>Misolidio</strong> → ♭7 (es. F in G mixo)</li>
          <li><strong>Frigio</strong> → ♭2 (es. F in E frigio)</li>
        </ul>` },
      { type: 'text', title: 'Strategia',
        content: `Sopra un brano modale (tipo <em>So What</em> in D dorico per 16 battute):
        <ol>
          <li>Inizia esponendo la tonica + 3a (D + F).</li>
          <li>Pian piano integra la <strong>6 maggiore (B)</strong> — la nota magica.</li>
          <li>Crea tensione muovendoti sulla 6, poi risolvi tornando alla 5 (A) o tonica (D).</li>
          <li>Evita di suonare troppo la ♭3 vs la 3: il dorico è "minore con un sorriso".</li>
        </ol>` },
      { type: 'callout', content: 'Brano per esercizio: prendi un Dm7 in loop (4 bar). Per il primo minuto suona solo le 4 note Dm7 (D-F-A-C). Poi pian piano introduci B (la 6 dorica). Senti il "salto"? Quello è il modo che parla.' },
      { type: 'quickcheck', q: 'In Dorico, la nota da esaltare è la...', options: ['♭3','5','6 maggiore','♭7'], correct: '6 maggiore' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L56 · Improvvisazione sui changes ───
  {
    id: 56, module: 6, title: 'Improvvisare sui changes — cambiare scala per accordo',
    duration: '7 min', xp: 45,
    intro: 'Su brani con tanti cambi armonici (jazz standard), devi essere capace di "passare" tra scale al volo, rispettando ogni accordo.',
    sections: [
      { type: 'text', title: 'Il principio "una scala per accordo"',
        content: `Per ogni nuovo accordo, mentalmente cambia la scala di riferimento.
        Esempio: <strong>Cmaj7 - Am7 - Dm7 - G7</strong> (4 accordi diatonici in C).
        <br><br>
        Anche se tutti sono nella stessa tonalità (C maggiore), pensare a ogni accordo con la sua scala modale aiuta a centrare i chord tones giusti.` },
      { type: 'text', title: 'Mappa veloce',
        content: `<ul>
          <li>Imaj7 = Ionico</li>
          <li>iim7 = Dorico (parti dalla 2 dello stesso tono)</li>
          <li>iiim7 = Frigio</li>
          <li>IVmaj7 = Lidio</li>
          <li>V7 = Misolidio</li>
          <li>vim7 = Eolio (minore naturale)</li>
          <li>vii°m7♭5 = Locrio</li>
        </ul>` },
      { type: 'text', title: 'Trucco mentale',
        content: `Se la tonalità centrale è C maggiore, puoi suonare <strong>solo la scala C maggiore</strong> su tutta la progressione diatonica → SEMPRE giusto. Il "cambio di scala" serve quando ci sono accordi non-diatonici (modulazioni, V7 secondari, prestiti).` },
      { type: 'callout', content: 'Esercizio: <em>Autumn Leaves</em> (tonalità Sol maggiore o Mi minore). Suona tutta la scala G maggiore sopra l\'intera progressione. Funziona quasi sempre. Le poche battute "stonate" (es. F♯m7♭5 → B7) sono i punti dove devi cambiare scala (B7 → Frigio dominante o Alterata).' },
      { type: 'quickcheck', q: 'Su un E7 (V/vi in C), una scala adatta è...', options: ['C maggiore','E ionico','E misolidio','Frigio dominante (5° modo di A minore armonica)'], correct: 'Frigio dominante (5° modo di A minore armonica)' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L57 · Struttura di un assolo ───
  {
    id: 57, module: 6, title: 'Anatomia di un assolo — Motivo, Sviluppo, Climax, Risoluzione',
    duration: '6 min', xp: 40,
    intro: 'Un grande assolo non è una sequenza casuale di lick. È una mini-storia con introduzione, sviluppo, picco e finale.',
    sections: [
      { type: 'text', title: '4 fasi di un solo memorabile',
        content: `<ol>
          <li><strong>Motivo</strong>: 2-4 battute. Una frase semplice, memorabile. Definisce l'identità del solo.</li>
          <li><strong>Sviluppo</strong>: variazioni del motivo. Cambi ritmo, direzione, ottava. Resta riconoscibile.</li>
          <li><strong>Climax</strong>: punto più alto di tensione. Nota più acuta, dinamica massima, velocità o tessitura più densa.</li>
          <li><strong>Risoluzione</strong>: torni indietro, cali volume, chiudi con riferimento al motivo iniziale.</li>
        </ol>` },
      { type: 'callout', content: 'Ascolta l\'assolo di <em>Hotel California</em> (Don Felder/Joe Walsh, 2 minuti): è un manuale di struttura. Motivo armonizzato → sviluppo a due chitarre → climax sui bending finali → ricapitolazione armonica.' },
      { type: 'text', title: 'Esercizio',
        content: `Prendi un backing track in loop (32 battute). Pianifica:
        <ul>
          <li>Bar 1-8: motivo (registra)</li>
          <li>Bar 9-16: 2-3 variazioni del motivo</li>
          <li>Bar 17-24: climax (nota più alta, dinamica forte)</li>
          <li>Bar 25-32: ritorno al motivo, decrescendo</li>
        </ul>
        Riascoltati. Senti la "narrazione"?` },
      { type: 'quickcheck', q: 'Il climax di un assolo è...', options: ['L\'inizio','Il punto di massima tensione','Il finale','La pausa più lunga'], correct: 'Il punto di massima tensione' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L58 · Analisi assolo ───
  {
    id: 58, module: 6, title: 'Analizzare un assolo famoso — il metodo',
    duration: '7 min', xp: 40,
    intro: 'Il modo più veloce per migliorare è capire COSA fanno i grandi e PERCHÉ.',
    sections: [
      { type: 'text', title: 'Metodo in 5 step',
        content: `<ol>
          <li><strong>Identifica la tonalità</strong> e gli accordi sottostanti.</li>
          <li><strong>Trascrivi nota per nota</strong> (almeno 8-16 battute).</li>
          <li><strong>Analizza i gradi</strong>: ogni nota è 1? 3? ♭7? Tensione cromatica?</li>
          <li><strong>Identifica la scala</strong> usata su ogni accordo.</li>
          <li><strong>Riconosci pattern ricorrenti</strong>: arpeggi? Approach notes? Bebop scale?</li>
        </ol>` },
      { type: 'text', title: 'Assoli consigliati per iniziare',
        content: `<ul>
          <li><strong>Comfortably Numb</strong> (David Gilmour) — frasi melodiche perfette, voicing tonale.</li>
          <li><strong>Europa</strong> (Carlos Santana) — bending espressivi, scala minore armonica.</li>
          <li><strong>So What</strong> (Miles Davis) — improvvisazione modale pura.</li>
          <li><strong>Crossroads</strong> (Eric Clapton live) — pent minore in azione, dinamica.</li>
          <li><strong>All Blues</strong> (Miles Davis) — blues 6/8 modale.</li>
        </ul>` },
      { type: 'callout', content: 'Quando trascrivi, NON usare tab già scritte. Trascrivi a orecchio: è 10x più formativo. È la pratica che ha plasmato ogni grande chitarrista pre-internet.' },
      { type: 'quickcheck', q: 'Lo step più formativo del processo è...', options: ['Identificare gli accordi','Trascrivere a orecchio','Cercare tab online','Suonare velocissimo'], correct: 'Trascrivere a orecchio' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L59 · Stili ───
  {
    id: 59, module: 6, title: 'Vocabolario per stile: Blues / Rock / Jazz / Fusion',
    duration: '7 min', xp: 40,
    intro: 'Ogni genere ha le sue formule preferite. Conoscerle ti permette di "parlare la lingua" giusta nel contesto giusto.',
    sections: [
      { type: 'text', title: 'BLUES',
        content: `<ul>
          <li><strong>Scale</strong>: pentatonica minore + blue note ♭5</li>
          <li><strong>Tecniche</strong>: bending tono e ½ tono, vibrato pesante, rasgueado tocchi del thumb</li>
          <li><strong>Lick base</strong>: 7-5-♭7-5 (la "BB King box"), pedal note sulla 5</li>
          <li><strong>Eroi</strong>: BB King, Albert King, SRV, Gary Moore</li>
        </ul>` },
      { type: 'text', title: 'ROCK',
        content: `<ul>
          <li><strong>Scale</strong>: pentatonica minore + modi misolidio (5° grado) e dorico (2° grado)</li>
          <li><strong>Tecniche</strong>: power chord, palm muting, tapping, sweep</li>
          <li><strong>Lick base</strong>: 1-♭3-4-♭5-5 (ascending), arpeggi a 4 voci</li>
          <li><strong>Eroi</strong>: Hendrix, Page, Slash, Van Halen</li>
        </ul>` },
      { type: 'text', title: 'JAZZ',
        content: `<ul>
          <li><strong>Scale</strong>: modi diatonici + bebop + melodic minor modi (alterata, lidio ♭7)</li>
          <li><strong>Tecniche</strong>: comping a 4 voci, chord melody, walking bass</li>
          <li><strong>Lick base</strong>: enclosure (note di approccio cromatico), arpeggio + passaggi cromatici</li>
          <li><strong>Eroi</strong>: Wes Montgomery, Pat Martino, Joe Pass, Pat Metheny</li>
        </ul>` },
      { type: 'text', title: 'FUSION',
        content: `<ul>
          <li><strong>Scale</strong>: tutto + simmetriche (diminuita, esatonale) + outside playing</li>
          <li><strong>Tecniche</strong>: legato veloce, sweep economy, hybrid picking</li>
          <li><strong>Lick base</strong>: pattern simmetrici, scale a settime/none</li>
          <li><strong>Eroi</strong>: Allan Holdsworth, Scott Henderson, Frank Gambale, Guthrie Govan</li>
        </ul>` },
      { type: 'quickcheck', q: 'La "BB King box" è tipica di...', options: ['Jazz','Blues','Fusion','Bossa'], correct: 'Blues' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ─── L60 · Final project ───
  {
    id: 60, module: 6, title: 'Progetto finale: componi & suona un mini-brano',
    duration: '10 min', xp: 60,
    intro: 'Tempo di mettere tutto insieme. Crea un brano di 32 battute usando quello che hai imparato.',
    sections: [
      { type: 'text', title: 'Brief',
        content: `Componi un brano strumentale per chitarra di <strong>32 battute</strong>, struttura A-B-A':
        <ul>
          <li><strong>A</strong> (8 bar): tema melodico in tonalità maggiore</li>
          <li><strong>B</strong> (16 bar): bridge con modulazione o prestito modale</li>
          <li><strong>A'</strong> (8 bar): ricapitolazione del tema, con variazione</li>
        </ul>
        Usa il <strong>Composer</strong> (sezione Brani) per costruire la progressione armonica.` },
      { type: 'text', title: 'Checklist',
        content: `<ul>
          <li>☐ Tonalità chiara (es. G maggiore)</li>
          <li>☐ Progressione che usa almeno: I, IV, V, vi</li>
          <li>☐ Almeno 1 cadenza V-I esplicita</li>
          <li>☐ Almeno 1 accordo "fuori tonalità" nel bridge (V/V, prestito modale, sub di tritono)</li>
          <li>☐ Melodia che esalta le note "guide tones" (3 e 7) sui downbeat</li>
          <li>☐ Una sezione climax con la nota più alta del brano</li>
          <li>☐ Risoluzione finale chiara</li>
        </ul>` },
      { type: 'callout', content: 'Salva il brano nel Composer come custom song. Apri Solo Trainer su quel brano e pratica l\'improvvisazione sulla TUA composizione. Hai chiuso il cerchio: dalla teoria all\'opera tua.' },
      { type: 'text', title: 'Bonus: pubblicalo',
        content: `Quando hai finito, registralo (anche con il telefono). Pubblica il file MP3 o un breve video sui tuoi social, taggando #NoteTrainer. È il modo più emotivo per "chiudere" il percorso.` },
      { type: 'quickcheck', q: 'Cos\'è una "guide tone"?', options: ['La nota più alta del brano','Le note 3 e 7 (terze e settime degli accordi)','La tonica e quinta','Il vibrato finale'], correct: 'Le note 3 e 7 (terze e settime degli accordi)' },
    ],
    relatedTheoryMode: 'mixed',
    relatedLevel: null,
  },
  // ════════════════════════════════════════════════════════════
  //  MODULO 7 — MANICO & CAGED (+ accordatura in quarte)
  // ════════════════════════════════════════════════════════════
  {
    id: 61, module: 7, title: "Mappare il manico: il metodo delle ottave",
    duration: "5 min", xp: 30,
    intro: "Memorizzare 6 corde × 12 tasti a forza bruta è inutile. Si impara una manciata di forme di ottava e si trova ogni nota in un attimo.",
    sections: [
      { type: 'text', title: "Perché le ottave",
        content: `La stessa nota si ripete su tutto il manico. Se sai dov'è <strong>un</strong> Do, le sue <strong>forme di ottava</strong> ti danno tutti gli altri Do senza contare i tasti.` },
      { type: 'text', title: "La forma base (accordatura standard)",
        content: `Da una nota su una corda grave, l'ottava è <strong>2 corde più in alto e 2 tasti più avanti</strong>.
        <ul>
          <li>Corda 6 → corda 4, +2 tasti</li>
          <li>Corda 5 → corda 3, +2 tasti</li>
        </ul>
        <strong>Eccezione</strong>: attraversando le corde Sol→Si serve <strong>+3 tasti</strong> (per via della terza maggiore tra quelle corde).` },
      { type: 'audio', title: "Do e la sua ottava", notes: [48,60], mode: 'sequence' },
      { type: 'callout', content: "Esercizio: scegli una nota (es. Fa) e trovala in TUTTE le posizioni possibili saltando di ottava in ottava, dal basso verso l'alto. Cronometrati: l'obiettivo è sotto i 5 secondi." },
      { type: 'quickcheck', q: "Nell'accordatura standard, attraversando le corde Sol→Si la forma di ottava richiede...", options: ["+1 tasto","+2 tasti","+3 tasti","stesso tasto"], correct: "+3 tasti" },
    ],
    relatedTheoryMode: null, relatedLevel: 3,
  },
  {
    id: 62, module: 7, title: "Il sistema CAGED",
    duration: "6 min", xp: 35,
    intro: "Cinque forme di accordo aperto (C-A-G-E-D) che, rese mobili, coprono qualsiasi accordo su tutto il manico. È la mappa che collega accordi e scale.",
    sections: [
      { type: 'text', title: "L'idea",
        content: `Le 5 forme di accordo aperto — <code>C</code>, <code>A</code>, <code>G</code>, <code>E</code>, <code>D</code> — sono i 5 modi di suonare lo <strong>stesso</strong> accordo lungo il manico. Spostandole con il barré diventano mobili in tutte le tonalità.` },
      { type: 'text', title: "Come si incastrano",
        content: `Le forme si susseguono sempre nello stesso ordine ciclico <strong>C-A-G-E-D</strong> salendo. La fine di una forma è l'inizio della successiva: insieme ricoprono l'intero manico senza buchi.` },
      { type: 'audio', title: "Triade di Do (forma C)", notes: [48,52,55,60], mode: 'sequence' },
      { type: 'callout', content: "Non studiare CAGED come 5 diteggiature isolate: studialo come UN sistema continuo. Prendi un Do maggiore e suonalo nelle 5 forme salendo, senza staccare il flusso." },
      { type: 'quickcheck', q: "Quante forme compongono il sistema CAGED?", options: ["3","4","5","7"], correct: "5" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 63, module: 7, title: "Collegare le scale alle forme CAGED",
    duration: "6 min", xp: 35,
    intro: "Ogni forma CAGED ha una 'scatola' di scala attorno. Sovrapporre accordo e scala è ciò che trasforma la teoria in assoli.",
    sections: [
      { type: 'text', title: "Accordo + scala nella stessa posizione",
        content: `Attorno a ogni forma di accordo c'è la scala della tonalità nella stessa zona. Vedere <strong>i toni dell'accordo dentro la scala</strong> ti dice quali note "suonano a casa" mentre improvvisi.` },
      { type: 'text', title: "I gradi che contano",
        content: `Dentro ogni scatola, individua sempre <strong>tonica, 3 e 5</strong> (i toni dell'accordo): sono i bersagli melodici. Le altre note della scala li collegano.` },
      { type: 'audio', title: "Scala di Do maggiore (una posizione)", notes: [48,50,52,53,55,57,59,60], mode: 'sequence' },
      { type: 'callout', content: "Esercizio chiave: suona la scala in una posizione CAGED e fermati SOLO sui toni dell'accordo (1-3-5). Poi riempii con le note di passaggio. È il primo passo verso l'outline armonico (Modulo 6)." },
      { type: 'quickcheck', q: "Quali note conviene 'mirare' dentro la scatola di scala?", options: ["Le note di passaggio","I toni dell'accordo (1-3-5)","Solo la tonica","Le note alterate"], correct: "I toni dell'accordo (1-3-5)" },
    ],
    relatedTheoryMode: 'degrees_basic', relatedLevel: 26,
  },
  {
    id: 64, module: 7, title: "3 note per corda",
    duration: "5 min", xp: 30,
    intro: "Un secondo sistema per le scale: tre note su ogni corda. Diteggiature simmetriche, perfette per velocità e legato.",
    sections: [
      { type: 'text', title: "Cos'è",
        content: `Invece delle scatole CAGED (2-3 note per corda), il sistema <strong>3 note per corda</strong> mette esattamente 3 note su ciascuna delle 6 corde: copri due ottave in una posizione, con pattern regolari.` },
      { type: 'text', title: "Quando usarlo",
        content: `Ideale per <strong>legato</strong> (hammer-on/pull-off) e <strong>pennata alternata</strong> veloce, perché il movimento è ripetitivo. Meno comodo per accordi rispetto a CAGED.` },
      { type: 'audio', title: "Sol maggiore (3 note per corda, frammento)", notes: [55,57,59,60,62,64,66,67], mode: 'sequence' },
      { type: 'callout', content: "CAGED e 3-note-per-corda non sono in concorrenza: il primo collega accordi e scale, il secondo dà velocità. I chitarristi forti li conoscono entrambi e passano dall'uno all'altro." },
      { type: 'quickcheck', q: "Quante note per corda usa questo sistema?", options: ["1","2","3","4"], correct: "3" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 65, module: 7, title: "Le 5 posizioni della pentatonica",
    duration: "5 min", xp: 30,
    intro: "La pentatonica minore vive in 5 'scatole' collegate. Conoscerle tutte significa avere accesso a tutto il manico per gli assoli.",
    sections: [
      { type: 'text', title: "5 scatole, una scala",
        content: `La pentatonica minore (1-♭3-4-5-♭7) ha <strong>5 posizioni</strong> che si incastrano lungo il manico, una per ogni forma CAGED. La <strong>posizione 1</strong> (la più usata nel rock/blues) parte con la tonica sulla 6ª corda.` },
      { type: 'text', title: "Collegarle",
        content: `Non restare nella scatola 1: i grandi assoli <strong>scorrono</strong> tra le posizioni. Impara dove ogni scatola si sovrappone alla successiva e usa gli <strong>slide</strong> per spostarti.` },
      { type: 'audio', title: "La minore pentatonica (posizione 1)", notes: [57,60,62,64,67,69], mode: 'sequence' },
      { type: 'callout', content: "Trucco: la pentatonica minore di una tonalità ha le stesse note della pentatonica MAGGIORE relativa (3 semitoni sopra). A minore pentatonica = Do maggiore pentatonica. Una forma, due usi." },
      { type: 'quickcheck', q: "Quante posizioni collegate ha la scala pentatonica sul manico?", options: ["3","4","5","7"], correct: "5" },
    ],
    relatedTheoryMode: null, relatedLevel: 41,
  },
  {
    id: 66, module: 7, title: "Accordatura in quarte (all-4ths): perché EADGCF",
    duration: "6 min", xp: 40,
    intro: "L'accordatura standard ha una 'anomalia' tra le corde Sol e Si. L'accordatura in quarte la elimina, rendendo il manico perfettamente regolare.",
    sections: [
      { type: 'text', title: "Il problema dello standard",
        content: `Lo standard è <strong>Mi-La-Re-Sol-Si-Mi</strong>: quasi tutte quarte giuste, TRANNE Sol→Si che è una <strong>terza maggiore</strong>. Quella eccezione costringe a 'aggiustare' ogni forma quando attraversa la corda Si.` },
      { type: 'text', title: "La soluzione: tutte quarte",
        content: `L'accordatura in quarte è <strong>Mi-La-Re-Sol-Do-Fa</strong>: ogni corda è una quarta giusta sopra la precedente. Cambiano solo le due corde acute: <strong>Si→Do</strong> e <strong>Mi→Fa</strong> (ognuna sale di un semitono).` },
      { type: 'audio', title: "Corde a vuoto — accordatura in quarte (E A D G C F)", notes: [40,45,50,55,60,65], mode: 'sequence' },
      { type: 'callout', content: "Vantaggio enorme: ogni forma di scala, arpeggio o intervallo diventa IDENTICA su qualunque coppia di corde. Niente più eccezioni. Quello che impari una volta vale ovunque." },
      { type: 'quickcheck', q: "Nell'accordatura in quarte, le corde dalla più grave sono...", options: ["E A D G B E","E A D G C F","D A D G B E","E A D G C E"], correct: "E A D G C F" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 67, module: 7, title: "All-4ths: scale e arpeggi in una sola forma",
    duration: "5 min", xp: 35,
    intro: "Il vero superpotere dell'accordatura in quarte: una forma per ogni cosa, ottave regolari, intervalli sempre nello stesso posto.",
    sections: [
      { type: 'text', title: "Una forma ovunque",
        content: `Poiché tutte le corde distano una quarta, una diteggiatura di scala o arpeggio si <strong>trasla</strong> identica su qualsiasi gruppo di corde: niente correzione sulla corda Si (che non esiste più). Memorizzi meno e copri di più.` },
      { type: 'text', title: "L'ottava regolare",
        content: `In quarte l'ottava è <strong>sempre</strong> 2 corde più in alto e 2 tasti più avanti — senza eccezioni. Anche gli intervalli (terze, quinte, settime) cadono sempre nello stesso punto relativo.` },
      { type: 'audio', title: "Arpeggio di Do maggiore (1-3-5-8)", notes: [48,52,55,60], mode: 'sequence' },
      { type: 'callout', content: "Per chi conosce già la teoria (intervalli, accordi, scale), l'accordatura in quarte la rende visivamente OVVIA sul manico. È per questo che molti chitarristi jazz/fusion la adottano." },
      { type: 'quickcheck', q: "In accordatura in quarte, la forma di ottava è...", options: ["+2 corde, +2 tasti sempre","variabile come nello standard","+3 tasti sulla corda Si","impossibile"], correct: "+2 corde, +2 tasti sempre" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 68, module: 7, title: "Standard vs All-4ths: quando e come passare",
    duration: "6 min", xp: 35,
    intro: "Non esiste un'accordatura 'migliore' in assoluto: esistono compromessi. Ecco come migliorare con entrambe e come fare la transizione.",
    sections: [
      { type: 'text', title: "Pro e contro",
        content: `<ul>
          <li><strong>Standard</strong> — pro: accordi aperti facili, tutto il repertorio è scritto così. Contro: geometria irregolare.</li>
          <li><strong>Quarte</strong> — pro: manico regolare, scale/arpeggi uniformi, teoria 'visibile'. Contro: accordi aperti e alcuni voicing più scomodi, repertorio da riadattare.</li>
        </ul>` },
      { type: 'text', title: "Come fare la transizione",
        content: `Reimpara prima ciò che già conosci nella nuova geometria: <strong>pentatonica → scala maggiore → arpeggi di triade → arpeggi di settima</strong>. Solo le due corde acute cambiano, quindi parti dalle corde gravi (identiche) e riadatta le due acute.` },
      { type: 'callout', content: "Nell'app: apri il <strong>Tuner</strong> e seleziona 'All 4ths' per accordare lo strumento in quarte, poi imposta la stessa accordatura nei drill (selettore Accordatura). Allenerai le forme nella nuova geometria con feedback immediato." },
      { type: 'quickcheck', q: "Passando all'accordatura in quarte, quali corde cambiano rispetto allo standard?", options: ["Tutte e sei","Solo le due più acute (Si→Do, Mi→Fa)","Solo le due più gravi","Solo la quarta corda"], correct: "Solo le due più acute (Si→Do, Mi→Fa)" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 8 — VOICING & ACCORDI SUL MANICO
  // ════════════════════════════════════════════════════════════
  {
    id: 69, module: 8, title: "Accordi aperti: da dove nascono",
    duration: "5 min", xp: 30,
    intro: "Gli accordi 'aperti' (Do, La, Sol, Mi, Re) non sono forme da memorizzare a caso: sono le note 1-3-5 disposte sfruttando le corde a vuoto.",
    sections: [
      { type: 'text', title: "Sono solo triadi",
        content: `Un Do aperto contiene solo <strong>Do-Mi-Sol</strong> (1-3-5), ripetute su più corde. Riconoscere QUALE nota è la 1, la 3 e la 5 dentro la forma è ciò che ti permette di modificarla (es. abbassare la 3 per farlo minore).` },
      { type: 'text', title: "Le 5 forme base",
        content: `<strong>C, A, G, E, D</strong>: sono le stesse 5 forme del sistema CAGED. Da aperte usano le corde a vuoto; rese mobili con il barré diventano tutte le tonalità.` },
      { type: 'audio', title: "Do maggiore aperto (1-3-5)", notes: [48,52,55,60,64], mode: 'sequence' },
      { type: 'callout', content: "Prova: prendi un Mi maggiore aperto e abbassa di un tasto la sua terza (Sol#→Sol). Hai un Mi minore. Capire dov'è la 3 dà il controllo su maggiore/minore." },
      { type: 'quickcheck', q: "Quali gradi contiene un accordo maggiore aperto?", options: ["1-2-5","1-3-5","1-4-5","1-3-7"], correct: "1-3-5" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: 16,
  },
  {
    id: 70, module: 8, title: "Il barré: forme E e A mobili",
    duration: "6 min", xp: 35,
    intro: "Due forme mobili — il barré di Mi e il barré di La — coprono quasi tutti gli accordi maggiori e minori su tutto il manico.",
    sections: [
      { type: 'text', title: "Forma E (radice sulla 6ª corda)",
        content: `Prendi un Mi maggiore aperto, spostalo con l'indice che fa da capotasto: la <strong>radice è sulla 6ª corda</strong>. Al 5° tasto = La maggiore; all'8° = Do maggiore. Il nome lo dà la nota della 6ª corda.` },
      { type: 'text', title: "Forma A (radice sulla 5ª corda)",
        content: `Stessa idea con un La maggiore: la <strong>radice è sulla 5ª corda</strong>. Maggiore/minore si ottiene spostando la 3. Con E-shape e A-shape suoni ogni accordo in (almeno) due posizioni.` },
      { type: 'audio', title: "Fa maggiore (barré, forma E)", notes: [41,45,48,53], mode: 'sequence' },
      { type: 'callout', content: "Per trovare un accordo qualsiasi ti basta sapere le note su 6ª e 5ª corda (Modulo 7) + queste due forme. È il 'kit di sopravvivenza' della chitarra ritmica." },
      { type: 'quickcheck', q: "Nella forma di barré E, su quale corda si trova la radice?", options: ["5ª corda","6ª corda","4ª corda","3ª corda"], correct: "6ª corda" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: 16,
  },
  {
    id: 71, module: 8, title: "Triadi sui set di corde",
    duration: "6 min", xp: 35,
    intro: "Tre note bastano per un accordo. Le triadi su 3 corde adiacenti sono leggere, mobili e perfette per arrangiare e per il chord melody.",
    sections: [
      { type: 'text', title: "Voicing 'chiusi' a 3 note",
        content: `Una triade (1-3-5) suonata su un set di 3 corde adiacenti (es. corde 1-2-3, oppure 2-3-4) è un <strong>voicing chiuso</strong>: occupa poco spazio e si sposta facilmente. Ogni set ha la sua forma.` },
      { type: 'text', title: "Perché impararle",
        content: `Le triadi piccole suonano <strong>moderne e pulite</strong> (funk, pop, R&B), lasciano spazio al basso e sono la base del <strong>chord melody</strong> (melodia in cima all'accordo).` },
      { type: 'audio', title: "Triade di Do maggiore (corde acute)", notes: [60,64,67], mode: 'sequence' },
      { type: 'callout', content: "Esercizio: suona la progressione I-IV-V (Do-Fa-Sol) usando SOLO triadi sulle 3 corde acute, muovendoti il meno possibile. Scoprirai il voice leading (Modulo 5) sotto le dita." },
      { type: 'quickcheck', q: "Quante note ha una triade?", options: ["2","3","4","5"], correct: "3" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: 16,
  },
  {
    id: 72, module: 8, title: "Inversioni di triade sul manico",
    duration: "5 min", xp: 35,
    intro: "La stessa triade cambia colore a seconda di quale nota sta in basso. Sul manico questo significa tre voicing per ogni accordo, su ogni set di corde.",
    sections: [
      { type: 'text', title: "Le tre posizioni",
        content: `<ul>
          <li><strong>Fondamentale</strong>: 1 in basso (Do-Mi-Sol).</li>
          <li><strong>1ª inversione</strong>: 3 in basso (Mi-Sol-Do).</li>
          <li><strong>2ª inversione</strong>: 5 in basso (Sol-Do-Mi).</li>
        </ul>
        Su un set di corde, salendo, le tre inversioni si susseguono ciclicamente.` },
      { type: 'text', title: "A cosa servono",
        content: `Le inversioni permettono di <strong>collegare gli accordi con piccoli movimenti</strong> (voice leading) e di mettere una nota precisa in cima (chord melody) o al basso (linea di basso).` },
      { type: 'audio', title: "Do, Do/Mi, Do/Sol (le 3 posizioni)", notes: [48,52,55,52,55,60,55,60,64], mode: 'sequence' },
      { type: 'callout', content: "Notazione: C/E = Do con Mi al basso (1ª inversione); C/G = Do con Sol al basso (2ª inversione). Lo 'slash chord' indica appunto quale nota mettere sotto." },
      { type: 'quickcheck', q: "In una triade in 1ª inversione, quale nota sta in basso?", options: ["La tonica (1)","La terza (3)","La quinta (5)","La settima (7)"], correct: "La terza (3)" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: 17,
  },
  {
    id: 73, module: 8, title: "Drop-2 e Drop-3 (voicing a 4 voci)",
    duration: "6 min", xp: 40,
    intro: "Gli accordi a 4 voci (settime) 'chiusi' sono ingiocabili sulla chitarra. I voicing drop-2 e drop-3 li 'aprono' rendendoli comodi e ricchi.",
    sections: [
      { type: 'text', title: "Il problema del voicing chiuso",
        content: `Un Cmaj7 chiuso (Do-Mi-Sol-Si tutte vicine) richiede stretching impossibili. Soluzione: <strong>spostare una voce di un'ottava</strong> per distribuire le note su corde più comode.` },
      { type: 'text', title: "Drop-2 e Drop-3",
        content: `Si parte dal voicing chiuso a 4 voci e si abbassa di un'ottava:
        <ul>
          <li><strong>Drop-2</strong>: la <strong>2ª voce dall'alto</strong>. Il voicing più usato dai chitarristi.</li>
          <li><strong>Drop-3</strong>: la <strong>3ª voce dall'alto</strong> (spesso porta la radice al basso).</li>
        </ul>` },
      { type: 'audio', title: "Cmaj7 (1-3-5-7)", notes: [48,52,55,59], mode: 'sequence' },
      { type: 'callout', content: "Quasi tutti i 'bei' accordi di settima che senti nel comping jazz/neo-soul sono drop-2. Imparare i drop-2 su due set di corde (1-2-3-4 e 2-3-4-5) copre la maggior parte delle situazioni." },
      { type: 'quickcheck', q: "Il voicing drop-2 si ottiene abbassando di un'ottava la...", options: ["voce più alta","2ª voce dall'alto","voce più bassa","terza"], correct: "2ª voce dall'alto" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: 20,
  },
  {
    id: 74, module: 8, title: "Shell voicings (1-3-7): il jazz essenziale",
    duration: "5 min", xp: 35,
    intro: "Per accompagnare basta l'osso dell'accordo: radice, terza e settima. Sono i 'shell voicing', il modo più economico e potente di suonare le settime.",
    sections: [
      { type: 'text', title: "Cosa definisce un accordo",
        content: `La <strong>quinta</strong> raramente cambia il colore e spesso si può omettere. Ciò che definisce un accordo di settima sono <strong>3 e 7</strong> (le 'guide tones'). Con <strong>1-3-7</strong> hai già tutto.` },
      { type: 'text', title: "Perché funzionano",
        content: `Gli shell voicing sono leggeri (3 note), facili da collegare e lasciano spazio. Suonando una ii-V-I con soli shell, le guide tones <strong>si muovono di pochissimo</strong>: è il suono del comping pulito.` },
      { type: 'audio', title: "Cmaj7 shell (1-3-7)", notes: [48,52,59], mode: 'sequence' },
      { type: 'callout', content: "Esercizio: suona Dm7 → G7 → Cmaj7 usando solo shell (1-3-7). Tieni la mano ferma e lascia scorrere 3 e 7: noterai che bastano spostamenti di un semitono. Questo è il voice leading reale." },
      { type: 'quickcheck', q: "Quali gradi compongono uno shell voicing?", options: ["1-3-5","1-5-7","1-3-7","3-5-7"], correct: "1-3-7" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: 22,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 9 — MUSICALITÀ & METODO
  // ════════════════════════════════════════════════════════════
  {
    id: 75, module: 9, title: "Come studiare: la pratica deliberata",
    duration: "5 min", xp: 30,
    intro: "Suonare ciò che già sai non è studiare. Il progresso vero arriva dalla 'pratica deliberata': lavorare sul confine tra ciò che sai e ciò che non sai ancora.",
    sections: [
      { type: 'text', title: "I 4 ingredienti",
        content: `<ul>
          <li><strong>Obiettivo preciso</strong>: non 'suono un po'', ma 'collego la pos. 1 e 2 della pentatonica a 80 bpm'.</li>
          <li><strong>Difficoltà giusta</strong>: abbastanza difficile da sbagliare, non da frustrarti.</li>
          <li><strong>Feedback immediato</strong>: orecchio, metronomo, app.</li>
          <li><strong>Ripetizione mirata</strong>: isola il punto debole, non ripetere tutto il brano.</li>
        </ul>` },
      { type: 'text', title: "Isola il problema",
        content: `Se sbagli una transizione di accordo, non ricominciare da capo: ripeti <strong>solo</strong> i due accordi problematici, lentamente, finché diventano automatici. 10 minuti mirati battono un'ora di 'suonicchiare'.` },
      { type: 'callout', content: "Regola pratica: se riesci a suonare qualcosa correttamente 5 volte di fila SENZA esitazione, alza la difficoltà (tempo, tonalità, posizione). Restare nella comfort zone è tempo sprecato." },
      { type: 'quickcheck', q: "Qual è il modo più efficace di correggere un errore in un brano?", options: ["Ripetere tutto il brano dall'inizio","Isolare e ripetere solo il punto difficile","Suonare più veloce","Cambiare brano"], correct: "Isolare e ripetere solo il punto difficile" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 76, module: 9, title: "Il metronomo è tuo amico",
    duration: "5 min", xp: 30,
    intro: "Il tempo è metà della musica. Suonare a tempo non è un dettaglio da batteristi: è ciò che distingue chi 'sa il pezzo' da chi lo fa GROOVARE.",
    sections: [
      { type: 'text', title: "Parti lento, vai sicuro",
        content: `Imposta il metronomo a un tempo dove suoni <strong>tutto pulito</strong>, anche se ti sembra lentissimo. Sali di 4-5 bpm solo quando una velocità è perfetta. La velocità è una <strong>conseguenza</strong> della precisione, non un obiettivo diretto.` },
      { type: 'text', title: "Suona DENTRO il click",
        content: `Obiettivo avanzato: far 'sparire' il click, suonando esattamente sopra di esso. Poi sposta il metronomo su 2 e 4 (i tempi 'deboli') per allenare il groove.` },
      { type: 'callout', content: "Nell'app, il modulo Phrase ti fa suonare a tempo con un metronomo e misura quanto sei preciso. Usalo come palestra ritmica: 60 secondi al giorno cambiano il tuo timing." },
      { type: 'quickcheck', q: "Come si aumenta la velocità in modo efficace?", options: ["Forzando subito il tempo massimo","Salendo di pochi bpm solo quando tutto è pulito","Senza metronomo, a sensazione","Suonando sempre veloce"], correct: "Salendo di pochi bpm solo quando tutto è pulito" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 77, module: 9, title: "Pratica lenta e ripetizione spaziata",
    duration: "5 min", xp: 30,
    intro: "Due leve scientificamente provate per imparare di più in meno tempo: rallentare per fissare il movimento, e rivedere al momento giusto per non dimenticare.",
    sections: [
      { type: 'text', title: "Lento = veloce",
        content: `Suonare lentamente e <strong>correttamente</strong> costruisce le connessioni neurali giuste. Suonare veloce e sbagliato le rinforza... sbagliate. Il cervello non distingue 'di fretta': impara quello che ripeti.` },
      { type: 'text', title: "Ripeti al momento giusto",
        content: `La <strong>ripetizione spaziata</strong> rivede un concetto poco prima di dimenticarlo: l'intervallo cresce ogni volta che lo ricordi. È il modo più efficiente di trasferire la teoria in memoria a lungo termine.` },
      { type: 'callout', content: "Quest'app usa proprio la ripetizione spaziata: la card 'Ripasso' nelle Statistiche ti mostra i concetti 'in scadenza'. Rivederli quando l'app te lo chiede vale più di mille ripassi a caso." },
      { type: 'quickcheck', q: "Perché la pratica lenta funziona?", options: ["Fa risparmiare corde","Costruisce il movimento corretto che poi si automatizza","È più rilassante","Non serve il metronomo"], correct: "Costruisce il movimento corretto che poi si automatizza" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 78, module: 9, title: "Trascrivere a orecchio",
    duration: "6 min", xp: 40,
    intro: "Tirare giù musica a orecchio è l'esercizio più formativo in assoluto: allena orecchio, teoria, tecnica e vocabolario tutti insieme.",
    sections: [
      { type: 'text', title: "Il metodo",
        content: `<ul>
          <li><strong>Canta</strong> la frase prima di cercarla: se la canti, la senti.</li>
          <li><strong>Trova la prima nota</strong> sul manico, poi procedi per intervalli.</li>
          <li><strong>Rallenta</strong> l'audio se serve, ma non saltare al 'guardare la tab'.</li>
          <li><strong>Analizza</strong>: che gradi sono? su quale accordo? — così diventa vocabolario riutilizzabile.</li>
        </ul>` },
      { type: 'text', title: "Inizia in piccolo",
        content: `Non partire da un assolo di Coltrane. Trascrivi <strong>2 battute</strong> di una melodia semplice (una sigla, un riff). Il muscolo della trascrizione si allena come ogni altro.` },
      { type: 'callout', content: "Ogni intervallo che impari a riconoscere in EAR (modulo dell'app) rende la trascrizione più veloce. Trascrizione e ear training si potenziano a vicenda." },
      { type: 'quickcheck', q: "Qual è il primo passo consigliato per trascrivere una frase?", options: ["Cercare la tab online","Cantarla per interiorizzarla","Suonarla veloce","Scriverla sul pentagramma"], correct: "Cantarla per interiorizzarla" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 79, module: 9, title: "Obiettivi, plateau e costanza",
    duration: "5 min", xp: 30,
    intro: "La differenza tra chi migliora e chi molla non è il talento: è il metodo per restare costante e superare i momenti di stallo.",
    sections: [
      { type: 'text', title: "Obiettivi SMART, non sogni",
        content: `'Diventare bravo' non è un obiettivo. 'Suonare la pentatonica La minore nelle 5 posizioni a 90 bpm entro 2 settimane' lo è: <strong>specifico, misurabile, con scadenza</strong>. Spezza i grandi traguardi in micro-obiettivi settimanali.` },
      { type: 'text', title: "Il plateau è normale",
        content: `Il progresso non è lineare: ci sono <strong>altopiani</strong> in cui sembri fermo. Spesso il cervello sta consolidando. Cambia stimolo (nuova tonalità, nuovo brano, nuova tecnica) e continua: il salto arriva dopo.` },
      { type: 'callout', content: "La costanza batte l'intensità: 20 minuti al giorno per 6 giorni valgono più di 3 ore una volta a settimana. La streak giornaliera dell'app esiste apposta per premiare questo." },
      { type: 'quickcheck', q: "Cosa rende un obiettivo davvero utile?", options: ["Essere ambizioso e vago","Essere specifico, misurabile e con scadenza","Essere segreto","Essere facile"], correct: "Essere specifico, misurabile e con scadenza" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  AGGIUNTE ai moduli esistenti (1 Fondamenta · 5 Armonia · 6 Applicazione)
  // ════════════════════════════════════════════════════════════
  {
    id: 80, module: 1, title: "Il circolo delle quinte e le armature",
    duration: "6 min", xp: 35,
    intro: "Una sola mappa organizza tutte le 12 tonalità, ti dice quanti diesis o bemolli hanno e quali accordi 'stanno bene insieme'. È il circolo delle quinte.",
    sections: [
      { type: 'text', title: "Come è costruito",
        content: `Partendo da Do (nessuna alterazione) e salendo di <strong>quinta giusta</strong> ogni volta — Do, Sol, Re, La, Mi... — aggiungi <strong>un diesis</strong> a ogni passo. Scendendo di quinta (Do, Fa, Si♭, Mi♭...) aggiungi <strong>un bemolle</strong>.` },
      { type: 'text', title: "A cosa serve",
        content: `<ul>
          <li><strong>Armature</strong>: ti dice quante alterazioni ha ogni tonalità.</li>
          <li><strong>Accordi vicini</strong>: tonalità adiacenti nel circolo condividono quasi tutte le note → modulazioni dolci.</li>
          <li><strong>Progressioni</strong>: il movimento per quinte (ii-V-I) è il motore dell'armonia tonale.</li>
        </ul>` },
      { type: 'audio', title: "Quinte impilate: Do-Sol-Re-La", notes: [48,55,62,69], mode: 'sequence' },
      { type: 'callout', content: "Trucco mnemonico per i diesis (ordine in cui compaiono): Fa-Do-Sol-Re-La-Mi-Si. Per i bemolli, l'ordine è esattamente inverso: Si-Mi-La-Re-Sol-Do-Fa." },
      { type: 'quickcheck', q: "Salendo di quinta nel circolo (Do→Sol→Re...), cosa si aggiunge a ogni passo?", options: ["Un bemolle","Un diesis","Una nota","Niente"], correct: "Un diesis" },
    ],
    relatedTheoryMode: 'degrees_basic', relatedLevel: null,
  },
  {
    id: 81, module: 1, title: "Enarmonia: stesso suono, nomi diversi",
    duration: "4 min", xp: 25,
    intro: "Fa# e Sol♭ sono lo stesso tasto ma due nomi. Scegliere il nome giusto non è pedanteria: rende la musica leggibile e coerente.",
    sections: [
      { type: 'text', title: "La regola pratica",
        content: `La stessa altezza ha due 'spelling'. Quale usare dipende dal <strong>contesto</strong>: in una tonalità con diesis usi i diesis (Fa#), in una con bemolli usi i bemolli (Sol♭). Dentro un accordo o una scala, ogni grado dovrebbe avere il suo nome di lettera.` },
      { type: 'text', title: "Perché conta",
        content: `Scrivere 'Mi#' invece di 'Fa' può sembrare assurdo, ma in Do# maggiore è corretto: ogni grado usa una lettera diversa. La coerenza enarmonica rende intervalli e accordi <strong>riconoscibili a colpo d'occhio</strong>.` },
      { type: 'callout', content: "Regola d'oro: i gradi 'bemolle' (♭3, ♭6, ♭7) si scrivono con bemolli; i gradi 'diesis/aumentati' (#4, #5, #9) con diesis. L'app applica questa logica automaticamente nei drill." },
      { type: 'quickcheck', q: "Cosa decide se chiamare una nota Fa# oppure Sol♭?", options: ["Il caso","Il contesto (tonalità/accordo)","La corda","Sempre il diesis"], correct: "Il contesto (tonalità/accordo)" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 82, module: 5, title: "Dominanti secondarie (V/V, V/vi…)",
    duration: "6 min", xp: 40,
    intro: "Un accordo di dominante può puntare non solo alla tonica, ma a QUALSIASI grado della tonalità. Sono le dominanti secondarie: colore e tensione 'in prestito'.",
    sections: [
      { type: 'text', title: "L'idea",
        content: `Ogni accordo può avere la 'sua' dominante (la settima un quarta sotto). In Do, la dominante di Sol (il V) è <strong>Re7</strong> = <strong>V/V</strong> ('cinque di cinque'). Inserito prima del Sol, lo fa suonare come una mini-tonica.` },
      { type: 'text', title: "Le più comuni",
        content: `<ul>
          <li><strong>V/V</strong> → risolve al V (in C: D7→G).</li>
          <li><strong>V/vi</strong> → risolve al vi (in C: E7→Am).</li>
          <li><strong>V/ii</strong>, <strong>V/IV</strong>... ognuna aggiunge una spinta verso il suo bersaglio.</li>
        </ul>` },
      { type: 'audio', title: "V/V → V in Do (D7 → G)", notes: [50,54,57,60,55,59,62], mode: 'sequence' },
      { type: 'callout', content: "Riconoscerle a orecchio: senti un accordo 'di passaggio' che tira fortemente verso il successivo, con una nota fuori tonalità (in D7 c'è il Fa#). Quel Fa# è la 3 della dominante che 'chiede' di risolvere." },
      { type: 'quickcheck', q: "In Do maggiore, qual è la V/V (la dominante del V grado)?", options: ["G7","D7","A7","C7"], correct: "D7" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: null,
  },
  {
    id: 83, module: 5, title: "Accordi diminuiti di passaggio",
    duration: "5 min", xp: 35,
    intro: "Il diminuito di settima è il 'collante' cromatico dell'armonia: collega due accordi diatonici con un basso che sale di semitono.",
    sections: [
      { type: 'text', title: "Il passaggio cromatico",
        content: `Tra due accordi a distanza di un tono (es. C e Dm in Do) si inserisce un <strong>diminuito</strong> sul tasto in mezzo: <strong>C → C#dim7 → Dm</strong>. Il basso sale Do→Do#→Re, creando una linea cromatica elegante.` },
      { type: 'text', title: "Perché funziona",
        content: `Il dim7 è simmetrico (tutte terze minori) e <strong>instabile</strong>: 'vuole' risolvere. Usato di passaggio, spinge dolcemente verso l'accordo successivo. Lo senti in tantissimo jazz, blues e pop d'autore.` },
      { type: 'audio', title: "Do#dim7 (di passaggio)", notes: [49,52,55,58], mode: 'sequence' },
      { type: 'callout', content: "Un dim7 'di passaggio' molto comune è il #Idim tra I e ii (C → C#dim7 → Dm7). Provalo: aggiunge sapore senza cambiare la tonalità." },
      { type: 'quickcheck', q: "Come si muove tipicamente il basso con un diminuito di passaggio?", options: ["Di quarta","Di semitono (cromatico)","Di ottava","Resta fermo"], correct: "Di semitono (cromatico)" },
    ],
    relatedTheoryMode: 'chord_structure', relatedLevel: null,
  },
  {
    id: 84, module: 6, title: "Target notes e approach notes",
    duration: "6 min", xp: 40,
    intro: "Un assolo che 'racconta gli accordi' non suona note a caso: mira i toni dell'accordo (target) e li raggiunge con note di avvicinamento (approach).",
    sections: [
      { type: 'text', title: "Mira i chord tones sul battere",
        content: `Le note 'forti' (sul battere) dovrebbero cadere sui <strong>toni dell'accordo</strong> (1-3-5-7), soprattutto su <strong>3 e 7</strong> (le guide tones). Sono i bersagli che fanno sentire l'armonia anche senza accompagnamento.` },
      { type: 'text', title: "Avvicinati con grazia",
        content: `Per arrivare a un target usi le <strong>approach notes</strong>: <strong>diatoniche</strong> (un grado sopra/sotto nella scala) o <strong>cromatiche</strong> (un semitono sotto). La nota di avvicinamento crea tensione, il target la risolve.` },
      { type: 'audio', title: "Approach cromatico → target (Re#→Mi)", notes: [51,52], mode: 'sequence' },
      { type: 'callout', content: "Esercizio: su una progressione, suona SOLO le 3 e le 7 di ogni accordo sul primo movimento. Poi collegale con approach notes. Hai costruito un assolo 'che racconta i changes'." },
      { type: 'quickcheck', q: "Su quali note conviene cadere sul battere per 'far sentire' l'accordo?", options: ["Note di passaggio","Toni dell'accordo, specie 3 e 7","Solo la tonica","Note cromatiche"], correct: "Toni dell'accordo, specie 3 e 7" },
    ],
    relatedTheoryMode: 'ear_interval_rel', relatedLevel: null,
  },
  {
    id: 85, module: 6, title: "Enclosures: circondare la nota target",
    duration: "5 min", xp: 35,
    intro: "Una delle 'mosse' più riconoscibili del vocabolario jazz e bebop: avvicinare una nota target da sopra e da sotto prima di colpirla.",
    sections: [
      { type: 'text', title: "Cos'è un'enclosure",
        content: `Invece di andare dritto al target, lo <strong>circondi</strong>: suoni una nota sopra e una sotto, poi risolvi sul bersaglio. Es. per arrivare a Mi: <strong>Fa (sopra) → Re# (sotto) → Mi (target)</strong>.` },
      { type: 'text', title: "Varianti",
        content: `Le note che circondano possono essere <strong>diatoniche</strong> o <strong>cromatiche</strong>, e l'ordine può variare (prima sopra o prima sotto). L'effetto è una piccola tensione che rende l'arrivo sul target molto più 'parlante'.` },
      { type: 'audio', title: "Enclosure su Mi (Fa → Re# → Mi)", notes: [53,51,52], mode: 'sequence' },
      { type: 'callout', content: "Le enclosure sono ovunque in Charlie Parker, Wes Montgomery, Pat Metheny. Imparane una sulla 3 di ogni accordo: è il modo più rapido per far suonare 'jazz' una linea." },
      { type: 'quickcheck', q: "In cosa consiste un'enclosure?", options: ["Suonare solo la nota target","Circondare il target da sopra e da sotto prima di risolverlo","Saltare il target","Ripetere la tonica"], correct: "Circondare il target da sopra e da sotto prima di risolverlo" },
    ],
    relatedTheoryMode: 'ear_interval_rel', relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 10 — RITMO & TEMPO
  // ════════════════════════════════════════════════════════════
  {
    id: 86, module: 10, title: "I valori delle note",
    duration: "5 min", xp: 30,
    intro: "Le altezze ti dicono CHE nota suonare; i valori ti dicono QUANTO farla durare. Senza durata non c'è musica, solo suoni.",
    sections: [
      { type: 'audio', title: "Ascolta i valori: semibreve → minime → quarti → ottavi", mode: 'rhythm', bpm: 100, beats: [
        { midi: 67, dur: 4, accent: true },
        { midi: 67, dur: 2, accent: true }, { midi: 67, dur: 2 },
        { midi: 67, dur: 1, accent: true }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 },
        { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5 }
      ] },
      { type: 'text', title: "La gerarchia delle durate",
        content: `Ogni valore dura la metà del precedente:
        <ul>
          <li><strong>Semibreve</strong> = 4 movimenti (tutta la battuta in 4/4)</li>
          <li><strong>Minima</strong> = 2 movimenti</li>
          <li><strong>Semiminima</strong> (quarto) = 1 movimento</li>
          <li><strong>Croma</strong> (ottavo) = ½ movimento</li>
          <li><strong>Semicroma</strong> (sedicesimo) = ¼ di movimento</li>
        </ul>` },
      { type: 'text', title: "Le pause valgono come le note",
        content: `A ogni valore corrisponde una <strong>pausa</strong> della stessa durata. Il silenzio è musica: una pausa al posto giusto dà groove e respiro quanto una nota.` },
      { type: 'callout', content: "Il puntino di valore aumenta la durata della metà: una semiminima puntata = 1 movimento + ½ = un movimento e mezzo. È alla base di tantissimi ritmi pop e funk." },
      { type: 'quickcheck', q: "Quanti ottavi (crome) stanno in una semiminima (quarto)?", options: ["1","2","3","4"], correct: "2" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 87, module: 10, title: "Tempo e battuta (le indicazioni di tempo)",
    duration: "5 min", xp: 30,
    intro: "La battuta organizza il tempo in gruppi regolari. L'indicazione di tempo (4/4, 3/4, 6/8) è la 'griglia' su cui poggia tutto il brano.",
    sections: [
      { type: 'audio', title: "Ascolta: 4/4 poi 3/4 (accento sull'1)", mode: 'rhythm', bpm: 100, beats: [
        { midi: 67, dur: 1, accent: true }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 },
        { rest: true, dur: 1 },
        { midi: 67, dur: 1, accent: true }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 },
        { midi: 67, dur: 1, accent: true }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 }
      ] },
      { type: 'text', title: "Leggere la frazione",
        content: `Il numero <strong>sopra</strong> dice quanti movimenti per battuta; quello <strong>sotto</strong> dice quale valore vale un movimento.
        <ul>
          <li><strong>4/4</strong>: 4 movimenti da un quarto. Il più comune (pop, rock).</li>
          <li><strong>3/4</strong>: 3 movimenti — il valzer.</li>
          <li><strong>6/8</strong>: 6 ottavi raggruppati in 2 (feel ondeggiante, ballad).</li>
        </ul>` },
      { type: 'text', title: "L'accento di battuta",
        content: `Il <strong>primo movimento</strong> (il 'downbeat') è naturalmente accentato: è il punto di riferimento. Sentire dov'è "l'uno" è la prima abilità ritmica da sviluppare.` },
      { type: 'callout', content: "Esercizio: ascolta una canzone e batti il piede sull'1 di ogni battuta contando 1-2-3-4. Se ci riesci a tempo, hai trovato la griglia. È il prerequisito per suonare in band." },
      { type: 'quickcheck', q: "In 3/4, quanti movimenti ci sono per battuta?", options: ["2","3","4","6"], correct: "3" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 88, module: 10, title: "Le suddivisioni: contare il tempo",
    duration: "5 min", xp: 30,
    intro: "Tra un movimento e l'altro c'è uno spazio: suddividerlo a voce è ciò che ti tiene a tempo e ti fa entrare con precisione.",
    sections: [
      { type: 'audio', title: "Ascolta: quarti, poi ottavi (1 e 2 e...)", mode: 'rhythm', bpm: 90, beats: [
        { midi: 67, dur: 1, accent: true }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 },
        { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }
      ] },
      { type: 'text', title: "Battere e levare",
        content: `Ogni movimento ha un <strong>battere</strong> (downbeat, il numero) e un <strong>levare</strong> (upbeat, la 'e' in mezzo). Conti: <strong>1 e 2 e 3 e 4 e</strong>. I numeri sono i quarti, le 'e' sono gli ottavi in mezzo.` },
      { type: 'text', title: "Perché contare ad alta voce",
        content: `Dire la suddivisione mentre suoni costringe il cervello a 'incasellare' ogni nota nella griglia. Sembra infantile, ma è ciò che separa chi va a tempo da chi 'insegue'.` },
      { type: 'callout', content: "Per i sedicesimi si conta 1-e-and-a 2-e-and-a... (in italiano spesso: 1-e-ri-fa). Ogni movimento si divide in 4. Padroneggiare questo conteggio sblocca funk e tecnica veloce." },
      { type: 'quickcheck', q: "Nella suddivisione in ottavi, cosa rappresenta la 'e' tra i numeri?", options: ["Il battere","Il levare (upbeat)","Una pausa","Un accento"], correct: "Il levare (upbeat)" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 89, module: 10, title: "Ottavi e sedicesimi nello strumming",
    duration: "5 min", xp: 30,
    intro: "La mano destra è un metronomo che oscilla. Pensare la pennata come movimento costante giù-su è la chiave di una ritmica solida.",
    sections: [
      { type: 'audio', title: "Ascolta: un movimento di ottavi, poi di sedicesimi", mode: 'rhythm', bpm: 84, beats: [
        { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 },
        { midi: 67, dur: 0.25, accent: true }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25, accent: true }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25, accent: true }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25, accent: true }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }, { midi: 67, dur: 0.25 }
      ] },
      { type: 'text', title: "Giù sul battere, su sul levare",
        content: `La regola del <strong>down-up</strong>: la pennata <strong>in giù</strong> cade sui battere (i numeri), quella <strong>in su</strong> sui levare (le 'e'). La mano non si ferma mai: anche quando non suoni, continua a oscillare 'a vuoto'.` },
      { type: 'text', title: "Sedicesimi = mano più veloce",
        content: `Per i sedicesimi la mano oscilla al doppio della velocità (giù-su-giù-su per ogni movimento). Il segreto del funk è tenere la mano in movimento costante e <strong>colpire le corde solo quando serve</strong>.` },
      { type: 'callout', content: "Allenalo nel modulo Phrase dell'app: suona a tempo con il metronomo e guarda quanto sei preciso. Inizia con gli ottavi, poi passa ai sedicesimi quando il down-up è automatico." },
      { type: 'quickcheck', q: "Nella tecnica down-up, la pennata in giù cade tipicamente su...", options: ["I levare","I battere (i numeri)","Le pause","Gli accenti deboli"], correct: "I battere (i numeri)" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 90, module: 10, title: "Le terzine: 3 al posto di 2",
    duration: "5 min", xp: 30,
    intro: "Finora abbiamo diviso in 2 e in 4. La terzina divide il movimento in 3 parti uguali: apre un mondo ritmico nuovo (blues, jazz, ballad).",
    sections: [
      { type: 'audio', title: "Ascolta: quarti dritti, poi terzine (tri-po-le)", mode: 'rhythm', bpm: 80, beats: [
        { midi: 67, dur: 1, accent: true }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 }, { midi: 67, dur: 1 },
        { midi: 67, dur: 0.3333, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3333, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3333, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3333, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.3334 }
      ] },
      { type: 'text', title: "Cos'è una terzina",
        content: `Una <strong>terzina</strong> mette <strong>3 note nello spazio di 2</strong> (di solito 3 note in un movimento). Si conta 'tri-po-le-tri-po-le' o '1-2-3 1-2-3'. La sensazione è 'rotonda', ondeggiante.` },
      { type: 'text', title: "Dove vive",
        content: `Le terzine sono ovunque: il <strong>blues lento</strong>, le ballad ('Nothing Else Matters'), gli assoli di B.B. King. Sentire il '3' al posto del '2' cambia completamente il feel.` },
      { type: 'callout', content: "Esercizio: batti 4 movimenti col piede e dì 'tri-po-le' su ognuno. Poi suona una nota su ogni sillaba. Sentirai subito la differenza con gli ottavi 'dritti'." },
      { type: 'quickcheck', q: "Una terzina mette quante note nello spazio normalmente occupato da 2?", options: ["2","3","4","6"], correct: "3" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 91, module: 10, title: "La sincope: accentare dove non te lo aspetti",
    duration: "5 min", xp: 35,
    intro: "La sincope sposta l'accento sui tempi 'deboli'. È il segreto del groove: ciò che fa muovere la testa in funk, reggae, pop moderno.",
    sections: [
      { type: 'audio', title: "Ascolta: accenti spostati sui levare (sincope)", mode: 'rhythm', bpm: 96, beats: [
        { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }
      ] },
      { type: 'text', title: "Cos'è",
        content: `Normalmente accenti i battere (1, 2, 3, 4). Con la <strong>sincope</strong> accenti i <strong>levare</strong> (le 'e') o leghi una nota oltre il battere, creando una spinta 'in avanti' inaspettata.` },
      { type: 'text', title: "Tensione e rilascio ritmico",
        content: `La sincope crea <strong>tensione</strong> (l'accento 'manca' dove te lo aspetti) e la risolve sul movimento forte successivo. È l'equivalente ritmico delle tensioni armoniche.` },
      { type: 'callout', content: "Il reggae mette l'accordo SOLO sui levare (lo 'skank'). Il funk vive di sedicesimi sincopati. Ascolta e prova a battere le mani 'in controtempo' (sul 2 e 4): è il primo passo verso il groove." },
      { type: 'quickcheck', q: "La sincope sposta l'accento su...", options: ["Il primo movimento","I tempi deboli / i levare","Le pause","La tonica"], correct: "I tempi deboli / i levare" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 92, module: 10, title: "Swing e shuffle: il feel ternario",
    duration: "5 min", xp: 35,
    intro: "Gli stessi ottavi possono suonare 'dritti' (straight) o 'swingati'. Lo swing è ciò che rende il jazz... jazz, e il blues... blues.",
    sections: [
      { type: 'audio', title: "Ascolta: ottavi dritti, poi swing (lungo-corto)", mode: 'rhythm', bpm: 96, beats: [
        { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 }, { midi: 67, dur: 0.5, accent: true }, { midi: 67, dur: 0.5 },
        { rest: true, dur: 0.5 },
        { midi: 67, dur: 0.6667, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.6667, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.6667, accent: true }, { midi: 67, dur: 0.3333 }, { midi: 67, dur: 0.6667, accent: true }, { midi: 67, dur: 0.3333 }
      ] },
      { type: 'text', title: "Straight vs swing",
        content: `Negli ottavi <strong>dritti</strong> le due note del movimento durano uguale (½ + ½). Nello <strong>swing</strong> la prima dura di più della seconda (circa ⅔ + ⅓, come una terzina con le prime due note legate): 'lungo-corto, lungo-corto'.` },
      { type: 'text', title: "Shuffle",
        content: `Lo <strong>shuffle</strong> è lo swing applicato all'accompagnamento (il classico blues 'da-dum da-dum'). Cambia tutto il carattere di un brano pur usando le stesse note.` },
      { type: 'callout', content: "Trucco: lo swing è 'figlio' della terzina. Pensa 'tri-po-le' e suona solo sulla 1ª e 3ª sillaba ('tri___le'): ecco lo swing. È perché jazz e blues respirano in terzine." },
      { type: 'quickcheck', q: "Nello swing, come durano le due crome di un movimento?", options: ["Uguali","La prima più lunga della seconda","La seconda più lunga","Entrambe brevissime"], correct: "La prima più lunga della seconda" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },

  // ════════════════════════════════════════════════════════════
  //  MODULO 11 — TECNICA CHITARRISTICA
  // ════════════════════════════════════════════════════════════
  {
    id: 93, module: 11, title: "Impostazione: mano sinistra e destra",
    duration: "5 min", xp: 30,
    intro: "Prima della velocità viene l'efficienza. Una buona impostazione previene tensioni, infortuni e plateau tecnici.",
    sections: [
      { type: 'text', title: "Mano sinistra (sul manico)",
        content: `<ul>
          <li>Premi <strong>vicino al tasto</strong> (non sopra né lontano): meno forza, suono pulito.</li>
          <li>Pollice dietro il manico, <strong>rilassato</strong>: fa da perno, non da morsa.</li>
          <li>Dita <strong>curve</strong>, sulle punte, una per tasto ('regola un dito per tasto').</li>
        </ul>` },
      { type: 'text', title: "Mano destra (pennata/dita)",
        content: `Tieni il plettro con presa <strong>ferma ma morbida</strong>, poca punta esposta. Il movimento parte dal polso, non dal braccio. Spalle e avambraccio <strong>rilassati</strong>: la tensione è il nemico numero uno della velocità.` },
      { type: 'callout', content: "Test della tensione: ogni tanto, mentre suoni, controlla spalle, pollice e mascella. Se sono contratti, fermati e rilassa. La fluidità nasce dall'assenza di sforzo inutile." },
      { type: 'quickcheck', q: "Dove conviene premere la corda per il minimo sforzo e suono pulito?", options: ["In mezzo tra due tasti","Subito dietro il tasto","Lontano dal tasto","Sopra il tasto"], correct: "Subito dietro il tasto" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 94, module: 11, title: "Pennata alternata",
    duration: "5 min", xp: 30,
    intro: "La tecnica fondamentale della mano destra: alternare pennate in giù e in su. Raddoppia la velocità e regolarizza il suono.",
    sections: [
      { type: 'text', title: "Giù-su, sempre",
        content: `Invece di pennare sempre in giù, <strong>alterni</strong> giù-su-giù-su. Il movimento è piccolo ed economico: il plettro resta vicino alle corde. È la base per scale veloci e riff regolari.` },
      { type: 'text', title: "Sincronizza le due mani",
        content: `Il vero ostacolo non è la mano destra: è <strong>sincronizzare</strong> destra e sinistra. Studia LENTO con il metronomo finché ogni nota suona pulita ed esattamente a tempo. La velocità arriva da sola.` },
      { type: 'audio', title: "Frammento di scala (pennata alternata)", notes: [55,57,59,60,62,64], mode: 'sequence' },
      { type: 'callout', content: "Errore comune: aumentare il tempo prima che le mani siano sincronizzate. Risultato: note 'sporche' e tese. Regola: se sbagli, scendi di 10 bpm. La pulizia prima della velocità." },
      { type: 'quickcheck', q: "Qual è la difficoltà principale della pennata alternata veloce?", options: ["La forza del braccio","La sincronizzazione tra le due mani","Il tipo di plettro","L'accordatura"], correct: "La sincronizzazione tra le due mani" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 95, module: 11, title: "Legato: hammer-on e pull-off",
    duration: "5 min", xp: 35,
    intro: "Suonare le note senza ripennare, usando solo la mano sinistra. Il legato dà fluidità e quel suono 'liquido' tipico di Hendrix, Gilmour, Holdsworth.",
    sections: [
      { type: 'text', title: "Hammer-on (martellato)",
        content: `Pennichi la prima nota, poi <strong>martelli</strong> con un dito della sinistra sul tasto successivo (più acuto) per farlo suonare senza ripennare. Forza dal dito, non dal braccio.` },
      { type: 'text', title: "Pull-off (strappato)",
        content: `Il contrario: da una nota più acuta, <strong>tiri via</strong> il dito (con un leggero 'pizzico' laterale) per far suonare la nota più grave già premuta sotto. Insieme, hammer e pull creano frasi fluide.` },
      { type: 'audio', title: "Hammer-on + pull-off (Mi → Sol → Mi)", notes: [64,67,64], mode: 'sequence' },
      { type: 'callout', content: "Il legato è anche un ottimo riscaldamento: pattern di hammer/pull sulle corde a vuoto scaldano le dita e costruiscono forza e indipendenza, senza nemmeno il plettro." },
      { type: 'quickcheck', q: "L'hammer-on fa suonare una nota...", options: ["Più grave, ripennando","Più acuta, senza ripennare","Identica","Solo in palm mute"], correct: "Più acuta, senza ripennare" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 96, module: 11, title: "Slide e glissando",
    duration: "4 min", xp: 30,
    intro: "Scivolare da una nota all'altra mantenendo la pressione: collega le posizioni, aggiunge espressività e copre il manico con eleganza.",
    sections: [
      { type: 'text', title: "Come si fa",
        content: `Pennichi una nota e, <strong>senza staccare il dito</strong>, scivoli lungo la corda fino al tasto di arrivo. Mantieni una pressione costante: né troppa (frena) né troppo poca (la nota muore).` },
      { type: 'text', title: "A cosa serve",
        content: `Lo slide è il modo principale per <strong>collegare le posizioni</strong> delle scale (es. le scatole della pentatonica) senza interrompere il flusso melodico. È anche puro fraseggio: imita la voce.` },
      { type: 'audio', title: "Slide (Do → Mi)", notes: [60,64], mode: 'sequence' },
      { type: 'callout', content: "Slide 'a vuoto' (senza nota d'arrivo precisa) verso l'alto o il basso = effetto espressivo. Slide 'misurato' (a un tasto preciso) = strumento per cambiare posizione. Conosci entrambi." },
      { type: 'quickcheck', q: "Durante uno slide, il dito sulla corda deve...", options: ["Staccarsi e ripremere","Mantenere la pressione scivolando","Fare vibrato","Pizzicare"], correct: "Mantenere la pressione scivolando" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 97, module: 11, title: "Bending: piegare le corde",
    duration: "6 min", xp: 40,
    intro: "Spingere la corda per alzarne l'intonazione: è la voce della chitarra elettrica. Un bending intonato è espressione pura; uno stonato si sente subito.",
    sections: [
      { type: 'text', title: "Mezzo tono, tono, e oltre",
        content: `Spingendo (o tirando) la corda ne alzi l'altezza. I bending più comuni:
        <ul>
          <li><strong>½ tono</strong> (1 tasto): tensione bluesy.</li>
          <li><strong>tono intero</strong> (2 tasti): il più usato negli assoli.</li>
          <li><strong>tono e mezzo / due toni</strong>: per i virtuosi.</li>
        </ul>
        Usa <strong>più dita insieme</strong> per avere forza e controllo.` },
      { type: 'text', title: "Intonazione: l'orecchio comanda",
        content: `Un bending vale solo se arriva alla nota <strong>giusta</strong>. Allena l'orecchio: suona prima la nota-bersaglio normalmente, poi raggiungila col bending e confronta. Il pre-bend (pieghi PRIMA di pennare) allena ancora di più.` },
      { type: 'audio', title: "Bending di un tono (Re → Mi)", notes: [62,64], mode: 'sequence' },
      { type: 'callout', content: "Collegamento con l'orecchio: il bending è ear training applicato. Sapere che la 3 minore (♭3) 'bendata' di mezzo tono diventa la 3 maggiore (la 'blue note' che risolve) è teoria + tecnica + orecchio insieme." },
      { type: 'quickcheck', q: "Un bending di un tono intero alza la nota di quanti tasti?", options: ["½ (1 tasto)","1 tono (2 tasti)","3 tasti","un'ottava"], correct: "1 tono (2 tasti)" },
    ],
    relatedTheoryMode: 'ear_interval_rel', relatedLevel: null,
  },
  {
    id: 98, module: 11, title: "Vibrato: il tuo marchio sonoro",
    duration: "5 min", xp: 35,
    intro: "Piccole oscillazioni di intonazione che danno 'vita' e calore alla nota. Il vibrato è la firma più personale di un chitarrista: due persone non lo fanno mai uguale.",
    sections: [
      { type: 'text', title: "Cos'è",
        content: `Il vibrato è una <strong>serie di micro-bending</strong> ritmici: alzi e abbassi leggermente l'intonazione in modo regolare. Parametri: <strong>ampiezza</strong> (quanto largo) e <strong>velocità</strong> (quanto rapido).` },
      { type: 'text', title: "Controllo, non nervosismo",
        content: `Il vibrato deve essere <strong>controllato e a tempo</strong>, non un tremolio incerto. Inizia lento e largo, dal polso (come per girare una chiave). Applicalo sulle note lunghe, in fondo alle frasi.` },
      { type: 'audio', title: "Nota lunga (immagina il vibrato)", notes: [64], mode: 'sequence' },
      { type: 'callout', content: "B.B. King è riconoscibile da UNA nota grazie al suo vibrato. Cura il vibrato come curi l'intonazione: una nota sola, suonata benissimo, vale più di mille note veloci e anonime." },
      { type: 'quickcheck', q: "Il vibrato è essenzialmente...", options: ["Uno slide lungo","Una serie di micro-bending ritmici e controllati","Un palm mute","Un hammer-on ripetuto"], correct: "Una serie di micro-bending ritmici e controllati" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 99, module: 11, title: "Palm muting e dinamica della destra",
    duration: "5 min", xp: 30,
    intro: "Smorzare le corde col palmo della mano destra per un suono corto e percussivo. È il cuore della ritmica rock/metal e uno strumento dinamico potentissimo.",
    sections: [
      { type: 'text', title: "Come si fa",
        content: `Appoggia leggermente il <strong>taglio del palmo</strong> della mano destra sulle corde, vicino al ponte, mentre pennichi. Ottieni un suono <strong>corto, 'chug'</strong>, percussivo. Più ti allontani dal ponte, più la nota muore.` },
      { type: 'text', title: "È una leva dinamica",
        content: `Il palm muting non è solo metal: alternare passaggi <strong>mutati</strong> (corti, scuri) e <strong>aperti</strong> (squillanti) crea <strong>dinamica</strong> e contrasto. Controllare l'intensità della mano destra è metà del 'tono'.` },
      { type: 'callout', content: "Esercizio: suona un giro di power chord alternando 4 colpi in palm mute e 4 aperti. Sentirai come la mano destra, da sola, racconta una storia di tensione e rilascio." },
      { type: 'quickcheck', q: "Per il palm muting, dove appoggi il palmo della mano destra?", options: ["Sul manico","Sulle corde vicino al ponte","Sulla paletta","Sotto le corde"], correct: "Sulle corde vicino al ponte" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 100, module: 11, title: "Economy picking e sweep (cenni)",
    duration: "5 min", xp: 35,
    intro: "Tecniche di efficienza per la velocità: minimizzare i movimenti del plettro quando si cambia corda. Avanzate, ma utili da conoscere fin da subito.",
    sections: [
      { type: 'text', title: "Economy picking",
        content: `Variante della pennata alternata: quando cambi corda, usi una pennata <strong>nella stessa direzione</strong> del movimento, invece di tornare indietro. Meno movimento = più efficienza sui cambi di corda.` },
      { type: 'text', title: "Sweep picking",
        content: `Per gli arpeggi: il plettro 'spazza' più corde con un <strong>unico movimento fluido</strong> (come una spazzolata), mentre la sinistra preme una nota per corda smorzando le precedenti. Crea cascate di note pulite.` },
      { type: 'audio', title: "Arpeggio (idea dello sweep, La minore)", notes: [57,60,64,69], mode: 'sequence' },
      { type: 'callout', content: "Lo sweep impressiona ma è inutile se 'fangoso': il segreto è lo SMORZAMENTO (ogni nota deve suonare separata, non come un accordo). Studialo lentissimo, una corda alla volta. Prima la pulizia." },
      { type: 'quickcheck', q: "Lo sweep picking serve soprattutto a suonare...", options: ["Accordi ritmici","Arpeggi veloci e fluidi","Power chord","Palm muting"], correct: "Arpeggi veloci e fluidi" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },
  {
    id: 101, module: 11, title: "Tapping (cenni)",
    duration: "4 min", xp: 30,
    intro: "Usare anche la mano destra per 'martellare' note sul manico: estende la portata e permette intervalli larghi impossibili con la sola sinistra.",
    sections: [
      { type: 'text', title: "Hammer-on a due mani",
        content: `Il tapping è un <strong>hammer-on fatto con un dito della mano destra</strong> su un tasto (di solito acuto), combinato con hammer e pull della sinistra. Permette salti di intervallo ampi e cascate velocissime.` },
      { type: 'text', title: "Da Van Halen a oggi",
        content: `Reso celebre da <strong>Eddie Van Halen</strong> ('Eruption'), il tapping è entrato nel vocabolario di rock, metal e fusion. Anche un singolo pattern di tapping aggiunge subito 'wow' a una frase.` },
      { type: 'audio', title: "Idea di tapping (La - Do - La acuto)", notes: [57,60,69], mode: 'sequence' },
      { type: 'callout', content: "Cura lo smorzamento delle corde che non suoni (con i palmi e le dita libere): il tapping pulito si distingue dal rumore proprio per il controllo del silenzio attorno alle note." },
      { type: 'quickcheck', q: "Il tapping consiste essenzialmente in...", options: ["Un hammer-on eseguito con la mano destra","Un palm mute veloce","Uno slide a due mani","Un bending doppio"], correct: "Un hammer-on eseguito con la mano destra" },
    ],
    relatedTheoryMode: null, relatedLevel: null,
  },

  // __NEW_LESSONS_HERE__
];

// ============================================================
// LEVELS — curriculum del Percorso (array + push per fase + stub avanzati).
// ============================================================

const LEVELS = [
  // ─── FASE 0 — FONDAMENTA TASTIERA ───
  { id: 1, phase: 0, title: 'Corde a vuoto', desc: 'Trova le note E A D G B sul manico.',
    drill: 'note', config: { allowedNotes: [4,9,2,7,11] },
    prompts: 12, passAcc: 0.92, xp: 50 },
  { id: 2, phase: 0, title: 'Naturali su MI grave', desc: 'Trova le note naturali sulla 6ª corda.',
    drill: 'note', config: { allowedNotes: [0,2,4,5,7,9,11], stringHint: 'corda di MI grave' },
    prompts: 15, passAcc: 0.88, xp: 70 },
  { id: 3, phase: 0, title: 'Naturali tutte le corde', desc: 'Trova le note naturali su qualsiasi corda.',
    drill: 'note', config: { allowedNotes: [0,2,4,5,7,9,11] },
    prompts: 20, passAcc: 0.88, xp: 80 },
  { id: 4, phase: 0, title: 'Diesis e bemolli', desc: 'Trova le note alterate (5 note).',
    drill: 'note', config: { allowedNotes: [1,3,6,8,10] },
    prompts: 18, passAcc: 0.85, xp: 90 },
  { id: 5, phase: 0, title: 'Test diagnostico tastiera', desc: 'Tutte e 12 le note in random.',
    drill: 'note', config: {},
    prompts: 25, passAcc: 0.9, xp: 120 },

  // ─── FASE 1 — INTERVALLI BASE ───
  { id: 6, phase: 1, title: 'Tonica e Ottava', desc: 'Suona la R (la stessa nota dell\'accordo).',
    drill: 'interval', config: { allowedIntervals: [0] },
    prompts: 10, passAcc: 0.95, xp: 60 },
  { id: 7, phase: 1, title: 'Quinta giusta', desc: 'Trova la 5 da qualunque tonica.',
    drill: 'interval', config: { allowedIntervals: [7] },
    prompts: 15, passAcc: 0.9, xp: 70 },
  { id: 8, phase: 1, title: 'Quarta giusta', desc: 'Trova la 4. Distinguila dalla 5.',
    drill: 'interval', config: { allowedIntervals: [5,7] },
    prompts: 18, passAcc: 0.88, xp: 80 },
  { id: 9, phase: 1, title: 'Terze (3 e b3)', desc: 'Maggiore vs minore — il bivio armonico.',
    drill: 'interval', config: { allowedIntervals: [3,4] },
    prompts: 20, passAcc: 0.92, xp: 100 },
  { id: 10, phase: 1, title: 'Seste (6 e b6)', desc: 'Le inversioni delle terze.',
    drill: 'interval', config: { allowedIntervals: [8,9] },
    prompts: 18, passAcc: 0.88, xp: 80 },
  { id: 11, phase: 1, title: 'Settime (7 e b7)', desc: 'Tensione (7) vs rilassamento (b7).',
    drill: 'interval', config: { allowedIntervals: [10,11] },
    prompts: 18, passAcc: 0.88, xp: 80 },
  { id: 12, phase: 1, title: 'Seconde (2 e b2)', desc: 'Passo intero e semitono.',
    drill: 'interval', config: { allowedIntervals: [1,2] },
    prompts: 18, passAcc: 0.88, xp: 80 },
  { id: 13, phase: 1, title: 'Tritono', desc: 'L\'intervallo simmetrico, baricentro armonico.',
    drill: 'interval', config: { allowedIntervals: [6] },
    prompts: 12, passAcc: 0.9, xp: 70 },
  { id: 14, phase: 1, title: 'Tutti — root fissa C', desc: '12 intervalli random con tonica C.',
    drill: 'interval', config: { fixedTonic: 0 },
    prompts: 25, passAcc: 0.85, xp: 150 },
  { id: 15, phase: 1, title: 'Tutti — root randomizzata', desc: 'Generalizzazione completa.',
    drill: 'interval', config: { rootRandom: true },
    prompts: 25, passAcc: 0.85, xp: 200 },
];

// ─── FASE 2 — TRIADI (livelli reali) ───
LEVELS.push(
  { id: 16, phase: 2, title: 'Triade Maggiore (1-3-5)', desc: 'Suona R, 3 e 5 in ordine su toniche random.',
    drill: 'arpeggio', config: { arpKey: 'maj', rootRandom: true },
    prompts: 12, passAcc: 0.85, xp: 120 },
  { id: 17, phase: 2, title: 'Triade minore (1-b3-5)', desc: 'La terza minore al posto della maggiore.',
    drill: 'arpeggio', config: { arpKey: 'min', rootRandom: true },
    prompts: 12, passAcc: 0.85, xp: 120 },
  { id: 18, phase: 2, title: 'Triade Diminuita (1-b3-b5)', desc: 'Due terze minori sovrapposte.',
    drill: 'arpeggio', config: { arpKey: 'dim', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 130 },
  { id: 19, phase: 2, title: 'Triade Aumentata (1-3-#5)', desc: 'Due terze maggiori sovrapposte.',
    drill: 'arpeggio', config: { arpKey: 'aug', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 130 },
  { id: 20, phase: 2, title: 'Progressione I-IV-V', desc: 'Triadi della progressione più diffusa del rock/blues.',
    drill: 'chord', config: { progressionIdx: 0, chordType: 'triad', playOrder: 'ascending' },
    prompts: 8, passAcc: 0.85, xp: 150 },
  { id: 21, phase: 2, title: 'Progressione ii-V-I', desc: 'Il movimento jazz per eccellenza, in triadi.',
    drill: 'chord', config: { progressionIdx: 1, chordType: 'triad', playOrder: 'ascending' },
    prompts: 8, passAcc: 0.85, xp: 150 },
  { id: 22, phase: 2, title: 'I-vi-IV-V (pop classico)', desc: 'La progressione "doo-wop" americana.',
    drill: 'chord', config: { progressionIdx: 2, chordType: 'triad', playOrder: 'ascending' },
    prompts: 8, passAcc: 0.85, xp: 150 },
  { id: 23, phase: 2, title: 'I-V-vi-IV (pop moderno)', desc: 'La progressione più usata negli ultimi 30 anni.',
    drill: 'chord', config: { progressionIdx: 3, chordType: 'triad', playOrder: 'ascending' },
    prompts: 8, passAcc: 0.85, xp: 150 },
  { id: 24, phase: 2, title: 'Triadi in ordine libero', desc: 'Suona i toni delle triadi in qualunque ordine.',
    drill: 'chord', config: { progressionIdx: 0, chordType: 'triad', playOrder: 'any' },
    prompts: 10, passAcc: 0.8, xp: 180 },
  { id: 25, phase: 2, title: 'Test triadi diatoniche', desc: 'Tutti i gradi armonizzati: I-ii-iii-IV-V-vi-vii°.',
    drill: 'chord', config: { progressionIdx: 7, chordType: 'triad', playOrder: 'ascending' },
    prompts: 12, passAcc: 0.8, xp: 220 },
);

// ─── FASE 3 — SCALE E MODI (livelli reali) ───
LEVELS.push(
  { id: 26, phase: 3, title: 'Scala Maggiore (Ionico)', desc: 'I 7 gradi della scala maggiore in ascesa.',
    drill: 'scale', config: { scaleKey: 'major', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.88, xp: 130 },
  { id: 27, phase: 3, title: 'Scala Maggiore discendente', desc: 'Stessa scala, dall\'8va alla tonica.',
    drill: 'scale', config: { scaleKey: 'major', direction: 'desc', rootRandom: true },
    prompts: 10, passAcc: 0.88, xp: 130 },
  { id: 28, phase: 3, title: 'Modo Lidio (4 alterata #4)', desc: 'Maggiore con la quarta aumentata — sound "lidio".',
    drill: 'scale', config: { scaleKey: 'lydian', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 150 },
  { id: 29, phase: 3, title: 'Modo Misolidio (b7)', desc: 'Maggiore con la settima minore — sound rock/blues.',
    drill: 'scale', config: { scaleKey: 'mixolydian', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 150 },
  { id: 30, phase: 3, title: 'Modo Dorico (minore con 6)', desc: 'Minore con la sesta maggiore — Santana, jazz.',
    drill: 'scale', config: { scaleKey: 'dorian', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 150 },
  { id: 31, phase: 3, title: 'Modo Frigio (b2)', desc: 'Minore con la seconda minore — sound spagnolo/metal.',
    drill: 'scale', config: { scaleKey: 'phrygian', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 150 },
  { id: 32, phase: 3, title: 'Minore naturale (Eolio)', desc: 'Il minore "puro": 1-2-b3-4-5-b6-b7.',
    drill: 'scale', config: { scaleKey: 'minor', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 130 },
  { id: 33, phase: 3, title: 'Modo Locrio (b2 b5)', desc: 'L\'unico modo con la 5 diminuita — instabile.',
    drill: 'scale', config: { scaleKey: 'locrian', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.82, xp: 160 },
  { id: 34, phase: 3, title: 'Tutti i modi in ordine random', desc: 'Le note della scala in ordine sparso.',
    drill: 'scale', config: { scaleKey: 'major', direction: 'random', rootRandom: true },
    prompts: 10, passAcc: 0.8, xp: 180 },
  { id: 35, phase: 3, title: 'Test scale e modi', desc: 'Mix con tonica casuale per consolidare.',
    drill: 'scale', config: { scaleKey: 'major', direction: 'random', rootRandom: true },
    prompts: 15, passAcc: 0.8, xp: 250 },
);
// Stub avanzati F3 (CAGED, lick) restano per espansione futura
for (let i = 36; i <= 40; i++) {
  LEVELS.push({ id: i, phase: 3, title: ['CAGED', 'Improv modale', 'Lick library', 'Connessioni posizioni', 'Test avanzato modi'][i-36],
    desc: 'In sviluppo.', drill: null, config: {}, prompts: 0, passAcc: 0, xp: 0, stub: true });
}

// ─── FASE 4 — PENTATONICA E BLUES (livelli reali) ───
LEVELS.push(
  { id: 41, phase: 4, title: 'Pentatonica minore', desc: '1-b3-4-5-b7 — la scala "rock" per eccellenza.',
    drill: 'scale', config: { scaleKey: 'pent_minor', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.88, xp: 130 },
  { id: 42, phase: 4, title: 'Pent minore discendente', desc: 'Dall\'8va alla tonica.',
    drill: 'scale', config: { scaleKey: 'pent_minor', direction: 'desc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 130 },
  { id: 43, phase: 4, title: 'Pentatonica maggiore', desc: '1-2-3-5-6 — sound country/pop.',
    drill: 'scale', config: { scaleKey: 'pent_major', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 130 },
  { id: 44, phase: 4, title: 'Pent minore in ordine random', desc: 'Forza l\'orecchio a riconoscere i gradi.',
    drill: 'scale', config: { scaleKey: 'pent_minor', direction: 'random', rootRandom: true },
    prompts: 10, passAcc: 0.82, xp: 160 },
  { id: 45, phase: 4, title: 'Scala Blues (con b5)', desc: 'Pent minore + blue note (b5) — il sound del blues.',
    drill: 'scale', config: { scaleKey: 'blues', direction: 'asc', rootRandom: true },
    prompts: 10, passAcc: 0.85, xp: 150 },
  { id: 46, phase: 4, title: 'Blues discendente', desc: 'La blue note in discesa.',
    drill: 'scale', config: { scaleKey: 'blues', direction: 'desc', rootRandom: true },
    prompts: 10, passAcc: 0.82, xp: 150 },
  { id: 47, phase: 4, title: 'Blues random', desc: 'Note in ordine sparso, tonica random.',
    drill: 'scale', config: { scaleKey: 'blues', direction: 'random', rootRandom: true },
    prompts: 12, passAcc: 0.8, xp: 180 },
  { id: 48, phase: 4, title: 'Pent maggiore + blues fusion', desc: 'Pent maggiore alternata con blues.',
    drill: 'scale', config: { scaleKey: 'pent_major', direction: 'random', rootRandom: true },
    prompts: 10, passAcc: 0.8, xp: 180 },
  { id: 49, phase: 4, title: 'Test pentatoniche', desc: 'Sfida finale: tutto random.',
    drill: 'scale', config: { scaleKey: 'pent_minor', direction: 'random', rootRandom: true },
    prompts: 15, passAcc: 0.78, xp: 250 },
  { id: 50, phase: 4, title: 'Master blues 12-bar', desc: 'Pratica completa scala blues.',
    drill: 'scale', config: { scaleKey: 'blues', direction: 'random', rootRandom: true },
    prompts: 15, passAcc: 0.78, xp: 280 },
);

// ─── FASI 5-7 (stub avanzati per espansione futura) ───
(function fillAdvancedStubs() {
  const stubTitles = {
    5: ['Maj7', 'Dom7', 'min7', 'm7b5', 'dim7', 'Drop-2', 'Drop-3', 'Tensione 9', 'Tensione 11',
        'Tensione 13', 'Alterazioni dom', 'Sweep arpeggi', 'II-V-I magg', 'II-V-I min', 'Test 4 voci'],
    6: ['Melodic Minor', 'Lidio b7', 'Alterata', 'Modi melodici', 'Harmonic Minor', 'Frigio dominante',
        'Modi armonici', 'Harmonic Major', 'Diminuita', 'Esatonale', 'Bebop', 'Recogn. avanzate',
        'Improv statici', 'Sostituzioni', 'Test scale avanzate'],
    7: ['Autumn Leaves 1', 'Autumn Leaves 2', 'Autumn Leaves 3', 'Blue Bossa 1', 'Blue Bossa 2', 'Blue Bossa 3',
        'Blues jazz 1', 'Blues jazz 2', 'Blues jazz 3', 'Rhythm changes', 'Solo construction',
        'Voice leading', 'Pattern cellule', 'Improv vincolata', 'Final Project'],
  };
  let nextId = 51;
  for (let p = 5; p <= 7; p++) {
    const titles = stubTitles[p] || [];
    titles.forEach(t => {
      LEVELS.push({ id: nextId++, phase: p, title: t,
        desc: 'In sviluppo — disponibile presto.',
        drill: null, config: {}, prompts: 0, passAcc: 0, xp: 0, stub: true });
    });
  }
})();
