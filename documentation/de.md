<!-- ELUCENIA technical documentation · caprini · de · no clinical/professional/rights approval -->

# Caprini-Score

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/caprini)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

- `0` — ≤ 40 Jahre
- `1` — 41 bis 60
- `2` — 61 bis 74
- `3` — ≥ 75

### Geplante kleine Operation (1)

`cir_menor`

### Größere Operation vor weniger als 1 Monat (1)

`cir_maior_prev`

### Varizen der unteren Extremitäten (1)

`varizes`

### Chronisch-entzündliche Darmerkrankung (1)

`dii`

### Aktuelle Schwellung der unteren Extremitäten (1)

`edema`

### BMI \> 25 kg/m² (1)

`obesidade`

### Akuter Myokardinfarkt (1)

`iam`

### Herzinsuffizienz vor weniger als 1 Monat (1)

`icc`

### Sepsis vor weniger als 1 Monat (1)

`sepse`

### Schwere Lungenerkrankung einschließlich Pneumonie vor weniger als 1 Monat (1)

`pulmonar`

### Gestörte Lungenfunktion (COPD) (1)

`dpoc`

### Internistischer Patient mit Bettruhe (1)

`repouso`

### Orale Kontrazeption oder Hormonersatztherapie (1)

`hormonio`

### Schwangerschaft oder Wochenbett (1)

`gestacao`

### Ungeklärte Totgeburt, ≥ 3 Fehlgeburten oder Frühgeburt mit Toxämie oder Wachstumsrestriktion (1)

`obst`

### Arthroskopische Operation (2)

`artroscopia`

### Aktuelle oder frühere maligne Erkrankung (2)

`cancer`

### Größere offene Operation (\> 45 min) (2)

`cir_maior`

### Laparoskopische Operation (\> 45 min) (2)

`laparoscopia`

### Bettlägerig (\> 72 h) (2)

`acamado`

### Gipsimmobilisierung vor weniger als 1 Monat (2)

`gesso`

### Zentralvenöser Zugang (2)

`cvc`

### Frühere TVT oder Lungenembolie (3)

`tev_prev`

### Familiäre Thromboseanamnese (3)

`hf_trombose`

### Faktor-V-Leiden (3)

`fvl`

### Prothrombinmutation 20210A (3)

`protrombina`

### Lupus-Antikoagulans (3)

`lupico`

### Erhöhte Antikardiolipin-Antikörper (3)

`anticardiolipina`

### Erhöhtes Serumhomocystein (3)

`homocisteina`

### Heparininduzierte Thrombozytopenie (3)

`hit`

### Andere angeborene oder erworbene Thrombophilie (3)

`trombofilia`

### Elektive Hüft- oder Kniearthroplastik (5)

`artroplastia`

### Hüft-, Becken- oder Beinfraktur vor weniger als 1 Monat (5)

`fratura`

### Schlaganfall vor weniger als 1 Monat (5)

`avc`

### Polytrauma vor weniger als 1 Monat (5)

`politrauma`

### Akute Rückenmarkverletzung mit Lähmung vor weniger als 1 Monat (5)

`medular`

## Fassung der Methode

Caprini 2005: RAM 1/2/3/5 Punkte; klassische chirurgische Fassung; ACCP 2012-Kontext

## Dokumentierte Formel

Summe: 1 (Alter 41–60, kleiner Eingriff, Adipositas, Varizen, kürzliche Erkrankungen, Hormone, Schwangerschaft); 2 (61–74, Krebs, großer/laparoskopischer Eingriff \>45 min, bettlägerig \>72 h, Gips, zentraler Zugang); 3 (≥75, frühere VTE, Familienanamnese, Thrombophilien); 5 (Arthroplastik, Hüft/Becken/Beinfraktur, Schlaganfall, Polytrauma, Rückenmarkverletzung).

## Grenzen und Population

Diese Implementierung verwendet die Gewichtungen des Caprini 2005, keine spätere Ausgabe. Die ACCP-Leitlinie 2012 wendet ihn zur Beurteilung von Thromboembolien in der nichtorthopädischen Allgemein- und Abdominopelvinchirurgie an; die genannten chirurgischen Kohorten belegen keine universelle Gültigkeit bei Kindern oder internistischen Patienten. Bei Bahl 2010 war der Endpunkt eine Thromboembolie innerhalb von 30 Tagen nach der Operation, kein Lebenszeitrisiko. Zur Wahl einer Prophylaxe müssen auch Blutungsrisiko und Operationskontext beurteilt werden; der Score allein bestimmt weder Medikament noch Dauer.

## Referenzen

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Sehr niedriges VTE-Risiko (< 0,5%)

Frühmobilisation; keine spezifische pharmakologische oder mechanische Prophylaxe.


### 2

Niedriges VTE-Risiko (~1,5%)

Mechanische Prophylaxe, vorzugsweise intermittierende pneumatische Kompression.


### 3

Mäßiges VTE-Risiko (~3,0 %)

NMH oder unfraktioniertes Heparin in niedriger Dosis; mechanische Prophylaxe bei hohem Blutungsrisiko.


### 4

Hohes VTE-Risiko (~6,0 %)

NMH oder unfraktioniertes Heparin in niedriger Dosis in Kombination mit mechanischer Prophylaxe (Strümpfe oder pneumatische Kompression).

