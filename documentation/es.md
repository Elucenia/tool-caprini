<!-- ELUCENIA technical documentation · caprini · es · no clinical/professional/rights approval -->

# Puntuación de Caprini

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/caprini)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

- `0` — ≤ 40 años
- `1` — 41 a 60
- `2` — 61 a 74
- `3` — ≥ 75

### Cirugía menor programada (1)

`cir_menor`

### Cirugía mayor hace menos de 1 mes (1)

`cir_maior_prev`

### Varices de miembros inferiores (1)

`varizes`

### Enfermedad inflamatoria intestinal (1)

`dii`

### Edema actual de miembros inferiores (1)

`edema`

### IMC \> 25 kg/m² (1)

`obesidade`

### Infarto agudo de miocardio (1)

`iam`

### Insuficiencia cardíaca hace menos de 1 mes (1)

`icc`

### Sepsis hace menos de 1 mes (1)

`sepse`

### Enfermedad pulmonar grave, incluida neumonía, hace menos de 1 mes (1)

`pulmonar`

### Función pulmonar alterada (EPOC) (1)

`dpoc`

### Paciente médico en reposo en cama (1)

`repouso`

### Anticonceptivo oral o terapia hormonal sustitutiva (1)

`hormonio`

### Embarazo o posparto (1)

`gestacao`

### Muerte fetal inexplicada, ≥ 3 abortos espontáneos o parto prematuro con toxemia o restricción del crecimiento (1)

`obst`

### Cirugía artroscópica (2)

`artroscopia`

### Neoplasia maligna actual o previa (2)

`cancer`

### Cirugía abierta mayor (\> 45 min) (2)

`cir_maior`

### Cirugía laparoscópica (\> 45 min) (2)

`laparoscopia`

### Confinado a cama (\> 72 h) (2)

`acamado`

### Inmovilización con yeso hace menos de 1 mes (2)

`gesso`

### Acceso venoso central (2)

`cvc`

### TVP o EP previa (3)

`tev_prev`

### Antecedentes familiares de trombosis (3)

`hf_trombose`

### Factor V Leiden (3)

`fvl`

### Mutación de protrombina 20210A (3)

`protrombina`

### Anticoagulante lúpico (3)

`lupico`

### Anticuerpos anticardiolipina elevados (3)

`anticardiolipina`

### Homocisteína sérica elevada (3)

`homocisteina`

### Trombocitopenia inducida por heparina (3)

`hit`

### Otra trombofilia congénita o adquirida (3)

`trombofilia`

### Artroplastia electiva de cadera o rodilla (5)

`artroplastia`

### Fractura de cadera, pelvis o pierna hace menos de 1 mes (5)

`fratura`

### Ictus hace menos de 1 mes (5)

`avc`

### Politraumatismo hace menos de 1 mes (5)

`politrauma`

### Lesión medular aguda con parálisis hace menos de 1 mes (5)

`medular`

## Edición del método

Caprini 2005: RAM 1/2/3/5 puntos; versión quirúrgica clásica; contexto ACCP 2012

## Fórmula documentada

Sume factores: 1 (edad 41–60, cirugía menor, obesidad, varices, condiciones médicas recientes, hormonas, embarazo); 2 (61–74, cáncer, cirugía mayor/laparoscópica \>45 min, encamado \>72 h, yeso, acceso central); 3 (≥75, TEV previo, antecedentes familiares, trombofilias); 5 (artroplastia, fractura cadera/pelvis/pierna, ictus, politrauma, lesión medular).

## Límites y población

Esta implementación usa los pesos del Caprini 2005, no una edición posterior. La guía ACCP 2012 lo aplica a la evaluación de tromboembolismo en cirugía general y abdominopélvica no ortopédica; las cohortes quirúrgicas citadas no demuestran validez universal en niños ni en pacientes no quirúrgicos. En Bahl 2010, el desenlace fue tromboembolismo hasta 30 días después de la cirugía, no riesgo de por vida. La elección de profilaxis también exige evaluar el sangrado y el contexto de la operación; la puntuación por sí sola no determina el medicamento ni la duración.

## Referencias

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
