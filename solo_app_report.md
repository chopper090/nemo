# Report di riferimento: Solo - Fretboard Visualization

## Panoramica
Solo è un'app di pratica per chitarra e basso orientata alla visualizzazione della tastiera, progettata da Tom Quayle e David Beebee e distribuita su iPhone, iPad, Mac con Apple Silicon e Android.[cite:2][cite:5]  
Il cuore del prodotto non è la semplice visualizzazione di scale o shape, ma un sistema di allenamento che presenta una nota, una funzione intervallare, un accordo o una scala e ascolta l'esecuzione dell'utente, avanzando solo quando il target è stato suonato correttamente.[cite:2][cite:5]

## Filosofia didattica
La filosofia dell'app ruota attorno alla "fretboard visualization": sviluppare la capacità di sapere dove si trovano note, intervalli, chord tones e strutture scalari in qualunque punto del manico, invece di dipendere da box fissi o geometrie memorizzate in modo passivo.[cite:2][cite:5][cite:8]  
Il lessico teorico usato dall'app mette al centro le "intervallic functions", cioè i gradi relativi rispetto a una tonica, a un accordo o a una scala; questo sposta l'attenzione dall'etichetta assoluta della diteggiatura alla funzione musicale della nota nel contesto armonico.[cite:2][cite:8]  
Una review indipendente sottolinea che il valore di Solo sta proprio nel rendere praticabile il lavoro duro del "play the changes": il sistema riduce l'attrito organizzativo e costringe il musicista a ragionare in tempo reale su target notes e funzioni armoniche.[cite:8]

## Principi pedagogici impliciti
Dalle descrizioni ufficiali e dalle recensioni emerge un'impostazione fondata su alcuni principi abbastanza netti.[cite:2][cite:5][cite:8]

- Apprendimento attivo: l'app non mostra soltanto informazioni, ma obbliga a produrre una risposta sonora corretta prima di procedere.[cite:2][cite:5]
- Contestualizzazione armonica: note e intervalli vengono sempre riferiti a una tonica, a un simbolo di accordo o a una scala specifica.[cite:2][cite:10]
- Progressione graduata: i trainer permettono di partire da compiti elementari, come trovare la tonica, fino a compiti avanzati legati a chord tones, scale complesse e strutture melodiche.[cite:5][cite:8]
- Generazione di varianti: molte modalità includono inversione, randomizzazione, trasposizione e sequencing, in modo da impedire la dipendenza da pattern fissi.[cite:2][cite:5]
- Pratica deliberata: sessioni a tempo, livelli e limitazioni opzionali servono a creare esercizi brevi, focalizzati e ripetibili.[cite:2][cite:5]

## Modello funzionale
Solo usa quattro trainer principali: Note Trainer, Interval Trainer, Changes Trainer e Scale Trainer.[cite:2][cite:5]  
In tutti i casi il loop di base è molto coerente: l'app mostra un target, ascolta ciò che l'utente suona, confronta l'input con il target richiesto e passa allo step successivo solo dopo la risposta corretta.[cite:2][cite:5][cite:8]  
Questo modello produce una UX fortemente guidata, più vicina a un sistema di drills interattivi che a un semplice dizionario teorico o visualizzatore statico di fretboard.[cite:2][cite:8]

## Trainer principali

### Note Trainer
Il Note Trainer è presentato come base della conoscenza del manico e chiede di trovare root notes casuali, ascoltando finché la risposta non è corretta.[cite:2][cite:5]  
Include fretboard interattivi scorrevoli per mostrare opzioni alternative, suggerimenti di pratica opzionali e sessioni basate sulla durata, oltre al supporto per chitarra a 6 corde in standard o a quarte, 7 corde, basso a 4 corde e basso a 5 corde.[cite:2][cite:5]

### Interval Trainer
L'Interval Trainer sviluppa il riconoscimento e la localizzazione delle funzioni intervallari rispetto a una tonica.[cite:2][cite:5]  
Le fonti ufficiali indicano che è possibile scegliere combinazioni arbitrarie di intervallic functions, usare root fisse o random e, nella scheda App Store, anche creare gruppi personalizzati o selezionare gli intervalli per qualsiasi accordo o scala.[cite:2][cite:5]  
Il trainer randomizza gli intervalli scelti e usa il fretboard interattivo per mostrare le possibili soluzioni sul manico.[cite:5]

### Changes Trainer
Il Changes Trainer è una delle parti più distintive del prodotto perché applica il concetto di intervallic function al movimento armonico, chiedendo all'utente di outline accordi o progressioni con note singole.[cite:2][cite:5][cite:10]  
Le fonti ufficiali parlano di oltre 100 progressioni comuni e di 50 livelli di intervallic function, dai chord tones più semplici fino a strutture melodiche complesse e scale.[cite:2][cite:5]  
Sono previste trasposizione della tonalità, random transposition a ogni ripetizione, randomizzazione o inversione dell'ordine degli intervalli e lavoro sul voice leading di linee monofoniche attraverso i cambi di accordo.[cite:2][cite:5]

### Scale Trainer
Lo Scale Trainer punta a far uscire l'utente dalle "scale boxes" tramite la comprensione intervallare delle scale sul manico.[cite:2][cite:5]  
Le fonti ufficiali indicano più di 50 scale e modi, root fisse o casuali, opzioni di workout per invertire o randomizzare l'ordine e opzioni di melodic sequence che permettono di iniziare da qualunque chord tone della scala.[cite:2][cite:5]  
L'enfasi non è su pattern preconfezionati, ma su costruzione e navigazione delle scale come insiemi funzionali.[cite:2][cite:5]

## Elementi teorici centrali
La teoria sottostante a Solo può essere sintetizzata in cinque blocchi concettuali.[cite:2][cite:5][cite:8]

| Asse teorico | Descrizione | Evidenza |
|---|---|---|
| Note names | Conoscenza esplicita del nome di ogni nota sul manico, non solo dei shape. | [cite:2] |
| Intervallic functions | Comprensione dei gradi rispetto a tonica, accordo o scala. | [cite:2][cite:10] |
| Chord tones | Uso di 1, 3, 5, 7 e tensioni come target melodici per improvvisare. | [cite:2][cite:8] |
| Voice leading | Collegamento di note forti attraverso i cambi armonici in linee singole. | [cite:2][cite:5] |
| Scale construction | Comprensione delle scale come insiemi intervallari navigabili da diversi punti di partenza. | [cite:2][cite:5] |

Questa impostazione teorica è coerente con una pedagogia moderna dell'improvvisazione: invece di affidarsi alla memoria cinetica di poche diteggiature, l'utente allena la relazione tra nota, funzione e contesto armonico.[cite:8]

## Filosofia di interazione
L'interazione centrale è basata su verifica audio in tempo reale: Solo "listens to the notes you play" e non avanza finché non è stato trovato correttamente ciascun target nell'ordine richiesto.[cite:2][cite:5]  
Questo dettaglio è fondamentale perché trasforma la teoria in comportamento motorio verificato, e suggerisce un'architettura di prodotto in cui il motore audio e il motore dell'esercizio sono strettamente integrati.[cite:2][cite:8]  
Una discussione su Reddit riporta che il riconoscimento della nota funzionava "90%+ of the time" per un utente, segnale utile ma aneddotico sul fatto che l'audio detection sia percepita come abbastanza affidabile per brevi sessioni giornaliere.[cite:4]

## Caratteristiche funzionali chiave
Le caratteristiche più importanti, ricorrenti in più fonti, sono le seguenti.[cite:2][cite:5][cite:10]

- Riconoscimento della nota suonata e avanzamento condizionato alla correttezza.[cite:2][cite:5]
- Trainer separati per note, intervalli, cambi armonici e scale.[cite:2][cite:5]
- Ampia parametrizzazione della difficoltà e del tipo di materiale da allenare.[cite:5][cite:8]
- Sessioni basate su durata per mantenere pratica breve e focalizzata.[cite:2][cite:5]
- Randomizzazione, inversione e sequencing come strumenti per evitare automatismi.[cite:2][cite:5]
- Trasposizione e random transposition, almeno nel Changes Trainer.[cite:2][cite:5]
- Fretboard interattivo con opzioni alternative e supporto visivo allo studio.[cite:2][cite:5]
- Supporto multi-strumento e multi-accordatura per chitarra e basso.[cite:2][cite:5]

## Grafica e UX osservabili
Le fonti testuali non forniscono una specifica visuale completa, ma alcuni elementi grafici e di interfaccia sono chiaramente desumibili.[cite:2][cite:5]  
L'app sembra costruita attorno a schermate molto focalizzate, ciascuna centrata su un solo task cognitivo: vedere un target, suonarlo, ricevere conferma, passare oltre.[cite:2][cite:5]  
L'esistenza di "interactive fretboards" scorrevoli suggerisce una UI che alterna una vista principale di esercizio a una vista secondaria di esplorazione/manipolazione visiva del manico.[cite:2][cite:5]

### Pattern grafici probabili
Dalle descrizioni ufficiali e dagli screenshot presenti nello store si possono inferire alcuni pattern di design ricorrenti, utili come riferimento concettuale ma non sufficienti per una replica fedele pixel-perfect.[cite:2][cite:5]

- Interfaccia task-first: pochi elementi alla volta, target molto leggibile, riduzione delle distrazioni.[cite:2][cite:5]
- Fretboard come oggetto interattivo primario o secondario, probabilmente con highlight delle posizioni corrette.[cite:2][cite:5]
- Forte enfasi su stato e progressione, perché il loop dell'app richiede un feedback immediato su corretto/errato/completato.[cite:2][cite:5]
- Parametri di esercizio esposti in modo accessibile, dato il numero elevato di varianti disponibili nei trainer.[cite:5]

## Posizionamento rispetto ad altre app
Solo non è presentata come un semplice tuner, visualizzatore di scale o archivio di diagrammi, ma come un practice tool altamente focalizzato per sviluppare note finding e fretboard visualization.[cite:2][cite:10]  
Una recensione indipendente afferma che non c'era praticamente nulla di equivalente sul mercato capace di affrontare questo bisogno in modo così mirato, soprattutto sul confine tra teoria, ear-hand coordination e applicazione armonica reale.[cite:8]  
Questo posizionamento è importante se il documento viene usato come riferimento per progettare un prodotto simile: il benchmark corretto non è un'enciclopedia della chitarra, ma un sistema di training cognitivo-musicale con validazione audio.[cite:2][cite:8]

## Scalabilità della difficoltà
Una delle qualità più citate è la scalabilità: una recensione la descrive come adatta a livelli molto diversi, dal semplice "trova la root" fino a richieste complesse come trovare note di modi o scale in ordini prescritti e randomizzati.[cite:8]  
Le schede ufficiali confermano questo quadro tramite livelli, selezione libera di intervalli, workout options, trasposizioni e sequencing.[cite:2][cite:5]  
Per la progettazione di un prodotto ispirato a Solo, questa scalabilità è un requisito architetturale e non un'aggiunta cosmetica.[cite:5][cite:8]

## Materiale musicale e contenuti
Il Changes Trainer include oltre 100 progressioni comuni e singoli esercizi su accordi.[cite:2][cite:5]  
Una review del 2021 specifica che molte progressioni iniziali erano tratte da brani reali, soprattutto standard jazz, con una selezione molto jazz-oriented nelle prime versioni.[cite:8]  
Un commento sul forum theFretBoard segnala come limite percepito l'assenza della possibilità di inserire le proprie progressioni, elemento utile da considerare come opportunità funzionale in un prodotto concorrente o ispirato.[cite:11]

## Ecosistema didattico collegato
L'azienda collega l'app a un corso separato, Ultimate Fretboard Visualisation Course, descritto come un piano di pratica organizzato per lavorare con Solo e basato su un "two-point system" per visualizzare qualsiasi cosa sul fretboard.[cite:2]  
Questo suggerisce che Solo non è soltanto un software, ma il centro operativo di un ecosistema didattico più ampio che comprende metodo, curriculum, contenuti video e progressione guidata.[cite:2][cite:16]  
Una recensione esterna aggiunge che esiste una libreria di video built-in che mostra come usare l'app, dettaglio coerente con un approccio di onboarding formativo e non puramente strumentale.[cite:8]

## Piattaforme, distribuzione e dati prodotto
Il sito ufficiale dichiara disponibilità per iPhone, iPad, MacOS e Android.[cite:2]  
L'App Store indica compatibilità con iOS 16 o successivo, iPadOS 16 o successivo e macOS 13 o successivo su Mac con chip Apple M1 o superiori; riporta inoltre un prezzo di 17,99 dollari negli Stati Uniti, acquisti in-app, dimensione di 241,3 MB e valutazione media di 4,8 su 5 basata su 599 rating al momento della consultazione.[cite:5]  
La scheda Google Play identifica lo sviluppatore come Trio Software Ltd e conferma la disponibilità Android e il posizionamento del prodotto come app per la visualizzazione della tastiera.[cite:3][cite:10]

## Punti di forza ricorrenti
Sommando fonti ufficiali, recensioni e feedback utenti, emergono alcuni punti di forza ricorrenti.[cite:2][cite:5][cite:8]

- Trasforma concetti teorici astratti in compiti pratici verificati dal suono reale.[cite:2][cite:5]
- Costringe a una visualizzazione attiva e locale del manico, non solo globale per shape.[cite:5][cite:8]
- Copre bene il passaggio da teoria a improvvisazione attraverso il Changes Trainer e il voice leading.[cite:2][cite:5]
- Offre una difficoltà molto modulabile, utile sia per principianti sia per utenti avanzati.[cite:5][cite:8]
- Riduce la frizione pratica organizzando sessioni, target, progressioni e feedback in un unico workflow.[cite:2][cite:8]

## Limiti e aree da esplorare
Le fonti disponibili non descrivono nel dettaglio il motore audio, gli algoritmi di pitch detection o le scelte implementative interne, quindi queste aree restano da investigare separatamente se servono per una replica tecnica.[cite:2][cite:5]  
Tra i limiti funzionali riportati da utenti esterni ci sono almeno due elementi: nelle prime fasi il repertorio risultava molto jazz-centrico e alcuni utenti avrebbero voluto poter inserire le proprie progressioni personalizzate.[cite:8][cite:11]  
Le informazioni pubbliche accessibili descrivono molto bene il "cosa" pedagogico e funzionale dell'app, ma molto meno il "come" ingegneristico con cui viene implementato il riconoscimento del pitch e la gestione della stabilità dell'input.[cite:2][cite:5]

## Implicazioni per un progetto ispirato a Solo
Un prodotto ispirato a Solo dovrebbe preservare soprattutto questi elementi strutturali.[cite:2][cite:5][cite:8]

1. Il motore centrale deve essere esercizio-guidato e non encyclopedic-first: prima il task, poi il supporto visivo.[cite:2][cite:5]
2. La rappresentazione musicale dovrebbe essere interval-first, cioè basata su funzioni rispetto al contesto, non solo su note assolute o pattern geometrici.[cite:2][cite:10]
3. La validazione audio deve essere parte del core loop, perché è ciò che rende l'app un trainer e non un semplice visualizzatore.[cite:2][cite:5]
4. La difficoltà deve scalare in modo granulare, da compiti elementari a sequenze avanzate e cambi armonici.[cite:5][cite:8]
5. La UI deve essere estremamente focalizzata, con feedback immediato e possibilità di studiare alternative sul fretboard senza interrompere la chiarezza del compito principale.[cite:2][cite:5]

## Direzioni di ricerca successive
Per usare questo report come riferimento operativo in una cartella di Claude Code, ha senso affiancarlo a una seconda ricerca più tecnica su tre aree non coperte a sufficienza dalle fonti pubbliche consultate.[cite:2][cite:5]

- Reverse engineering funzionale degli screenshot e dei video ufficiali, per documentare layout, flow e pattern visuali.[cite:5][cite:12]
- Ricerca tecnica su pitch detection monofonica per chitarra in ambiente mobile e desktop, utile a replicare il comportamento "listens and advances".[cite:2][cite:8]
- Analisi dei limiti/opportunità rispetto al benchmark, per esempio custom progressions, statistiche di performance, modalità practice personalizzate e integrazione con percorsi di studio del fretboard.[cite:11][cite:5]
