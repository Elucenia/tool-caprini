<!-- ELUCENIA technical documentation · caprini · zh · no clinical/professional/rights approval -->

# Caprini 评分

[条件、来源与许可](https://elucenia.org/zh/tools/caprini)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`idade`

- `0` — ≤ 40 岁
- `1` — 41 至 60
- `2` — 61 至 74
- `3` — ≥ 75

### 计划小手术（1）

`cir_menor`

### 1 个月内大手术（1）

`cir_maior_prev`

### 下肢静脉曲张（1）

`varizes`

### 炎症性肠病（1）

`dii`

### 目前下肢水肿（1）

`edema`

### 体重指数（BMI） \> 25 kg/m² (1)

`obesidade`

### 急性心肌梗死（1）

`iam`

### 1 个月内心力衰竭（1）

`icc`

### 1 个月内脓毒症（1）

`sepse`

### 1 个月内严重肺病，包括肺炎（1）

`pulmonar`

### 肺功能异常（COPD）（1）

`dpoc`

### 非手术患者卧床（1）

`repouso`

### 口服避孕药或激素替代（1）

`hormonio`

### 妊娠或产后（1）

`gestacao`

### 不明原因死胎、≥ 3 次自然流产，或伴妊娠毒血症或生长受限的早产（1）

`obst`

### 关节镜手术（2）

`artroscopia`

### 目前或既往恶性肿瘤（2）

`cancer`

### 大手术（开放性，\> 45 min）（2）

`cir_maior`

### 腹腔镜手术（\> 45 min）（2）

`laparoscopia`

### 卧床（\> 72 h）（2）

`acamado`

### 1 个月内石膏固定（2）

`gesso`

### 中心静脉通路（2）

`cvc`

### 既往深静脉血栓或肺栓塞（3）

`tev_prev`

### 血栓家族史（3）

`hf_trombose`

### 凝血因子 V Leiden（3）

`fvl`

### 凝血酶原 20210A 突变（3）

`protrombina`

### 狼疮抗凝物（3）

`lupico`

### 抗心磷脂抗体升高（3）

`anticardiolipina`

### 血清同型半胱氨酸升高（3）

`homocisteina`

### 肝素诱导的血小板减少症（3）

`hit`

### 其他先天性或获得性易栓症（3）

`trombofilia`

### 择期髋或膝关节置换（5）

`artroplastia`

### 1 个月内髋部、骨盆或下肢骨折（5）

`fratura`

### 1 个月内卒中（5）

`avc`

### 1 个月内多发伤（5）

`politrauma`

### 1 个月内伴瘫痪的急性脊髓损伤（5）

`medular`

## 方法版本

Caprini 2005：RAM 1/2/3/5分；经典手术版；ACCP 2012背景

## 已记录的公式

因素加分：1（41–60岁、小手术、肥胖、静脉曲张、近期内科疾病、激素、妊娠）；2（61–74岁、癌症、大/腹腔镜手术\>45 min、卧床\>72 h、石膏、中心静脉通路）；3（≥75岁、既往VTE、家族史、易栓症）；5（关节置换、髋/骨盆/腿骨折、卒中、多发伤、脊髓损伤）。

## 限制与适用人群

本实现使用Caprini2005的权重，而非后续版本。ACCP2012指南将其用于非骨科的一般外科和腹盆腔手术血栓栓塞评估；所引外科队列不能证明它对儿童或非手术患者普遍有效。Bahl2010的结局是术后30天内的血栓栓塞，而非终生风险。选择预防措施还必须评估出血和手术背景；评分本身不能决定药物或疗程。

## 参考文献

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

VTE风险极低（< 0,5%）

早期下床活动；无特异性药物或机械预防。


### 2

VTE风险低（~1,5%）

机械预防，最好采用间歇性气动加压。


### 3

TEV 中度风险（~3.0%）

低分子肝素或低剂量普通肝素；若出血风险高，则采用机械预防。


### 4

TEV 高度风险（~6.0%）

低分子肝素或低剂量普通肝素联合机械预防（弹力袜或气动加压）。

