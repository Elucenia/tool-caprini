<!-- ELUCENIA technical documentation · caprini · it · no clinical/professional/rights approval -->

# Punteggio di Caprini

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/caprini)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

- `0` — ≤ 40 anni
- `1` — 41 a 60
- `2` — 61 a 74
- `3` — ≥ 75

### Chirurgia minore programmata (1)

`cir_menor`

### Chirurgia maggiore da meno di 1 mese (1)

`cir_maior_prev`

### Varici degli arti inferiori (1)

`varizes`

### Malattia infiammatoria intestinale (1)

`dii`

### Edema attuale degli arti inferiori (1)

`edema`

### IMC \> 25 kg/m² (1)

`obesidade`

### Infarto miocardico acuto (1)

`iam`

### Insufficienza cardiaca da meno di 1 mese (1)

`icc`

### Sepsi da meno di 1 mese (1)

`sepse`

### Malattia polmonare grave, inclusa polmonite, da meno di 1 mese (1)

`pulmonar`

### Funzione polmonare alterata (BPCO) (1)

`dpoc`

### Paziente medico allettato (1)

`repouso`

### Contraccettivo orale o terapia ormonale sostitutiva (1)

`hormonio`

### Gravidanza o postparto (1)

`gestacao`

### Morte fetale inspiegata, ≥ 3 aborti spontanei o parto prematuro con tossiemia o restrizione della crescita (1)

`obst`

### Chirurgia artroscopica (2)

`artroscopia`

### Neoplasia maligna attuale o pregressa (2)

`cancer`

### Chirurgia maggiore a cielo aperto (\> 45 min) (2)

`cir_maior`

### Chirurgia laparoscopica (\> 45 min) (2)

`laparoscopia`

### Allettato (\> 72 h) (2)

`acamado`

### Immobilizzazione gessata da meno di 1 mese (2)

`gesso`

### Accesso venoso centrale (2)

`cvc`

### TVP o EP pregressa (3)

`tev_prev`

### Anamnesi familiare di trombosi (3)

`hf_trombose`

### Fattore V Leiden (3)

`fvl`

### Mutazione della protrombina 20210A (3)

`protrombina`

### Anticoagulante lupico (3)

`lupico`

### Anticorpi anticardiolipina elevati (3)

`anticardiolipina`

### Omocisteina sierica elevata (3)

`homocisteina`

### Trombocitopenia indotta da eparina (3)

`hit`

### Altra trombofilia congenita o acquisita (3)

`trombofilia`

### Artroplastica elettiva di anca o ginocchio (5)

`artroplastia`

### Frattura dell’anca, del bacino o della gamba da meno di 1 mese (5)

`fratura`

### Ictus da meno di 1 mese (5)

`avc`

### Politrauma da meno di 1 mese (5)

`politrauma`

### Lesione midollare acuta con paralisi da meno di 1 mese (5)

`medular`

## Edizione del metodo

Caprini 2005: RAM 1/2/3/5 punti; versione chirurgica classica; contesto ACCP 2012

## Formula documentata

Somma: 1 (età 41–60, chirurgia minore, obesità, varici, condizioni recenti, ormoni, gravidanza); 2 (61–74, cancro, chirurgia maggiore/laparoscopica \>45 min, allettato \>72 h, gesso, accesso centrale); 3 (≥75, TEV pregresso, familiarità, trombofilie); 5 (artroplastica, frattura anca/pelvi/gamba, ictus, politrauma, lesione midollare).

## Limiti e popolazione

Questa implementazione usa i pesi del Caprini 2005, non quelli di un’edizione successiva. La linea guida ACCP 2012 lo applica alla valutazione del tromboembolismo nella chirurgia generale e addominopelvica non ortopedica; le coorti chirurgiche citate non dimostrano validità universale nei bambini o nei pazienti non chirurgici. In Bahl 2010, l’esito era il tromboembolismo entro 30 giorni dalla chirurgia, non il rischio nell’arco della vita. La scelta della profilassi richiede anche di valutare il sanguinamento e il contesto dell’operazione; il punteggio da solo non determina il farmaco né la durata.

## Riferimenti

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Rischio molto basso di TEV (< 0,5%)

Deambulazione precoce; nessuna profilassi farmacologica o meccanica specifica.


### 2

Rischio basso di TEV (~1,5%)

Profilassi meccanica, preferibilmente compressione pneumatica intermittente.


### 3

Rischio moderato di TEV (~3,0%)

EBPM o eparina non frazionata a basse dosi; profilassi meccanica se il rischio di sanguinamento è alto.


### 4

Rischio alto di TEV (~6,0%)

EBPM o eparina non frazionata a basse dosi associata a profilassi meccanica (calze o compressione pneumatica).

