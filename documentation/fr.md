<!-- ELUCENIA technical documentation · caprini · fr · no clinical/professional/rights approval -->

# Score de Caprini

[conditions, sources et autorisations](https://elucenia.org/fr/outils/caprini)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

- `0` — ≤ 40 ans
- `1` — 41 à 60
- `2` — 61 à 74
- `3` — ≥ 75

### Chirurgie mineure programmée (1)

`cir_menor`

### Chirurgie majeure datant de moins de 1 mois (1)

`cir_maior_prev`

### Varices des membres inférieurs (1)

`varizes`

### Maladie inflammatoire chronique de l’intestin (1)

`dii`

### Œdème actuel des membres inférieurs (1)

`edema`

### IMC \> 25 kg/m² (1)

`obesidade`

### Infarctus aigu du myocarde (1)

`iam`

### Insuffisance cardiaque datant de moins de 1 mois (1)

`icc`

### Sepsis datant de moins de 1 mois (1)

`sepse`

### Maladie pulmonaire grave, y compris pneumonie, datant de moins de 1 mois (1)

`pulmonar`

### Fonction pulmonaire altérée (BPCO) (1)

`dpoc`

### Patient médical alité (1)

`repouso`

### Contraceptif oral ou traitement hormonal substitutif (1)

`hormonio`

### Grossesse ou post-partum (1)

`gestacao`

### Mortinaissance inexpliquée, ≥ 3 fausses couches ou accouchement prématuré avec toxémie ou retard de croissance (1)

`obst`

### Chirurgie arthroscopique (2)

`artroscopia`

### Cancer actuel ou antérieur (2)

`cancer`

### Chirurgie ouverte majeure (\> 45 min) (2)

`cir_maior`

### Chirurgie laparoscopique (\> 45 min) (2)

`laparoscopia`

### Alité (\> 72 h) (2)

`acamado`

### Immobilisation plâtrée datant de moins de 1 mois (2)

`gesso`

### Accès veineux central (2)

`cvc`

### Antécédent de TVP ou d’EP (3)

`tev_prev`

### Antécédents familiaux de thrombose (3)

`hf_trombose`

### Facteur V Leiden (3)

`fvl`

### Mutation de la prothrombine 20210A (3)

`protrombina`

### Anticoagulant lupique (3)

`lupico`

### Anticorps anticardiolipine élevés (3)

`anticardiolipina`

### Homocystéine sérique élevée (3)

`homocisteina`

### Thrombopénie induite par l’héparine (3)

`hit`

### Autre thrombophilie congénitale ou acquise (3)

`trombofilia`

### Arthroplastie programmée de hanche ou de genou (5)

`artroplastia`

### Fracture de la hanche, du bassin ou de la jambe datant de moins de 1 mois (5)

`fratura`

### AVC datant de moins de 1 mois (5)

`avc`

### Polytraumatisme datant de moins de 1 mois (5)

`politrauma`

### Lésion médullaire aiguë avec paralysie datant de moins de 1 mois (5)

`medular`

## Édition de la méthode

Caprini 2005 : RAM 1/2/3/5 points ; version chirurgicale classique ; contexte ACCP 2012

## Formule documentée

Somme : 1 (âge 41–60, chirurgie mineure, obésité, varices, affections récentes, hormones, grossesse) ; 2 (61–74, cancer, chirurgie majeure/laparoscopique \>45 min, alitement \>72 h, plâtre, voie centrale) ; 3 (≥75, antécédent thromboembolique, familial, thrombophilies) ; 5 (arthroplastie, fracture hanche/bassin/jambe, AVC, polytraumatisme, lésion médullaire).

## Limites et population

Cette implémentation utilise les pondérations du Caprini 2005, et non celles d’une édition ultérieure. La recommandation ACCP 2012 l’applique à l’évaluation du risque thromboembolique en chirurgie générale et abdominopelvienne non orthopédique ; les cohortes chirurgicales citées ne démontrent pas une validité universelle chez les enfants ou les patients non chirurgicaux. Dans Bahl 2010, le critère était la survenue d’un événement thromboembolique dans les 30 jours suivant la chirurgie, et non un risque à vie. Le choix de la prophylaxie exige aussi une évaluation du saignement et du contexte opératoire ; le score seul ne détermine ni le médicament ni la durée.

## Références

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Risque très faible de TEV (< 0,5%)

Mobilisation précoce ; pas de prophylaxie pharmacologique ou mécanique spécifique.


### 2

Risque faible de TEV (~1,5%)

Prophylaxie mécanique, de préférence compression pneumatique intermittente.


### 3

Risque modéré de TEV (~3,0 %)

HBPM ou héparine non fractionnée à faible dose ; prophylaxie mécanique si le risque de saignement est élevé.


### 4

Risque élevé de TEV (~6,0 %)

HBPM ou héparine non fractionnée à faible dose associée à une prophylaxie mécanique (bas ou compression pneumatique).

