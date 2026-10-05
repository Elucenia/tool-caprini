<!-- ELUCENIA technical documentation · caprini · pt-BR · no clinical/professional/rights approval -->

# Escore de Caprini

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/caprini)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

- `0` — ≤ 40 anos
- `1` — 41 a 60
- `2` — 61 a 74
- `3` — ≥ 75

### Cirurgia menor planejada (1)

`cir_menor`

### Cirurgia maior há menos de 1 mês (1)

`cir_maior_prev`

### Varizes de membros inferiores (1)

`varizes`

### Doença inflamatória intestinal (1)

`dii`

### Edema atual de membros inferiores (1)

`edema`

### IMC \> 25 kg/m² (1)

`obesidade`

### Infarto agudo do miocárdio (1)

`iam`

### Insuficiência cardíaca há menos de 1 mês (1)

`icc`

### Sepse há menos de 1 mês (1)

`sepse`

### Doença pulmonar grave, incluindo pneumonia, há menos de 1 mês (1)

`pulmonar`

### Função pulmonar alterada (DPOC) (1)

`dpoc`

### Paciente clínico em repouso no leito (1)

`repouso`

### Anticoncepcional oral ou reposição hormonal (1)

`hormonio`

### Gestação ou pós-parto (1)

`gestacao`

### Natimorto inexplicado, ≥ 3 abortos espontâneos ou parto prematuro com toxemia ou restrição de crescimento (1)

`obst`

### Cirurgia artroscópica (2)

`artroscopia`

### Neoplasia maligna atual ou prévia (2)

`cancer`

### Cirurgia aberta de grande porte (\> 45 min) (2)

`cir_maior`

### Cirurgia laparoscópica (\> 45 min) (2)

`laparoscopia`

### Restrito ao leito (\> 72 h) (2)

`acamado`

### Imobilização gessada há menos de 1 mês (2)

`gesso`

### Acesso venoso central (2)

`cvc`

### TVP ou TEP prévio (3)

`tev_prev`

### História familiar de trombose (3)

`hf_trombose`

### Fator V de Leiden (3)

`fvl`

### Mutação da protrombina 20210A (3)

`protrombina`

### Anticoagulante lúpico (3)

`lupico`

### Anticorpos anticardiolipina elevados (3)

`anticardiolipina`

### Homocisteína sérica elevada (3)

`homocisteina`

### Trombocitopenia induzida por heparina (3)

`hit`

### Outra trombofilia congênita ou adquirida (3)

`trombofilia`

### Artroplastia eletiva de quadril ou joelho (5)

`artroplastia`

### Fratura de quadril, pelve ou perna há menos de 1 mês (5)

`fratura`

### AVC há menos de 1 mês (5)

`avc`

### Politrauma há menos de 1 mês (5)

`politrauma`

### Lesão medular aguda com paralisia há menos de 1 mês (5)

`medular`

## Edição do método

Caprini 2005:RAM 1/2/3/5 pontos; versão clássica cirúrgica; contexto ACCP 2012

## Fórmula documentada

Soma dos pontos de cada fator: 1 ponto (idade 41–60, cirurgia menor, obesidade, varizes, condições clínicas recentes, hormônios, gestação), 2 pontos (idade 61–74, câncer, cirurgia maior ou laparoscópica \> 45 min, acamado \> 72 h, gesso, acesso central), 3 pontos (idade ≥ 75, TEV prévio, história familiar, trombofilias) e 5 pontos (artroplastia, fratura de quadril/pelve/perna, AVC, politrauma, lesão medular).

## Limites e população

Esta implementação usa os pesos do Caprini 2005, não uma edição posterior. A diretriz ACCP 2012 o aplica à avaliação de tromboembolismo em cirurgia geral e abdominopélvica não ortopédica; as coortes cirúrgicas citadas não demonstram validade universal em crianças ou em pacientes clínicos. No estudo de Bahl 2010, o desfecho foi tromboembolismo até 30 dias após cirurgia, não risco vitalício. A escolha de profilaxia exige também avaliar sangramento e o contexto da operação; o escore não determina, sozinho, medicamento ou duração.

## Referências

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
