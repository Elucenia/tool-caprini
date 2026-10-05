<!-- ELUCENIA technical documentation · caprini · en · no clinical/professional/rights approval -->

# Caprini score

[conditions, sources and permissions](https://elucenia.org/en/tools/caprini)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

- `0` — ≤ 40 years
- `1` — 41 to 60
- `2` — 61 to 74
- `3` — ≥ 75

### Planned minor surgery (1)

`cir_menor`

### Major surgery less than 1 month ago (1)

`cir_maior_prev`

### Lower-limb varicose veins (1)

`varizes`

### Inflammatory bowel disease (1)

`dii`

### Current lower-limb swelling (1)

`edema`

### BMI \> 25 kg/m² (1)

`obesidade`

### Acute myocardial infarction (1)

`iam`

### Heart failure less than 1 month ago (1)

`icc`

### Sepsis less than 1 month ago (1)

`sepse`

### Serious pulmonary disease, including pneumonia, less than 1 month ago (1)

`pulmonar`

### Impaired pulmonary function (COPD) (1)

`dpoc`

### Medical patient on bed rest (1)

`repouso`

### Oral contraceptive or hormone replacement (1)

`hormonio`

### Pregnancy or postpartum (1)

`gestacao`

### Unexplained stillbirth, ≥ 3 miscarriages or preterm birth with toxemia or growth restriction (1)

`obst`

### Arthroscopic surgery (2)

`artroscopia`

### Current or previous malignancy (2)

`cancer`

### Major open surgery (\> 45 min) (2)

`cir_maior`

### Laparoscopic surgery (\> 45 min) (2)

`laparoscopia`

### Confined to bed (\> 72 h) (2)

`acamado`

### Plaster immobilization less than 1 month ago (2)

`gesso`

### Central venous access (2)

`cvc`

### Previous DVT or PE (3)

`tev_prev`

### Family history of thrombosis (3)

`hf_trombose`

### Factor V Leiden (3)

`fvl`

### Prothrombin 20210A mutation (3)

`protrombina`

### Lupus anticoagulant (3)

`lupico`

### Elevated anticardiolipin antibodies (3)

`anticardiolipina`

### Elevated serum homocysteine (3)

`homocisteina`

### Heparin-induced thrombocytopenia (3)

`hit`

### Other congenital or acquired thrombophilia (3)

`trombofilia`

### Elective hip or knee arthroplasty (5)

`artroplastia`

### Hip, pelvis or leg fracture less than 1 month ago (5)

`fratura`

### Stroke less than 1 month ago (5)

`avc`

### Multiple trauma less than 1 month ago (5)

`politrauma`

### Acute spinal cord injury with paralysis less than 1 month ago (5)

`medular`

## Method edition

Caprini 2005: RAM 1/2/3/5 points; classic surgical version; ACCP 2012 context

## Documented formula

Add factor points: 1 (age 41–60, minor surgery, obesity, varicose veins, recent medical conditions, hormones, pregnancy); 2 (age 61–74, cancer, major/laparoscopic surgery \>45 min, bedbound \>72 h, cast, central access); 3 (age ≥75, prior VTE, family history, thrombophilias); 5 (arthroplasty, hip/pelvis/leg fracture, stroke, major trauma, spinal cord injury).

## Limits and population

This implementation uses the Caprini 2005 weights, not a later edition. The 2012 ACCP guideline applies it to thromboembolism assessment in general and abdominopelvic nonorthopedic surgery; the cited surgical cohorts do not establish universal validity in children or medical patients. In Bahl 2010, the outcome was thromboembolism within 30 days after surgery, not lifetime risk. Choosing prophylaxis also requires assessment of bleeding and the operative context; the score alone does not determine a drug or duration.

## References

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
