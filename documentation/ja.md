<!-- ELUCENIA technical documentation · caprini · ja · no clinical/professional/rights approval -->

# Capriniスコア

[条件・出典・許諾](https://elucenia.org/ja/tools/caprini)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢

`idade`

- `0` — ≤ 40 歳
- `1` — 41 ～ 60
- `2` — 61 ～ 74
- `3` — ≥ 75

### 予定された小手術（1）

`cir_menor`

### 1か月未満前の大手術（1）

`cir_maior_prev`

### 下肢静脈瘤（1）

`varizes`

### 炎症性腸疾患（1）

`dii`

### 現在の下肢浮腫（1）

`edema`

### 体格指数（BMI） \> 25 kg/m² (1)

`obesidade`

### 急性心筋梗塞（1）

`iam`

### 1か月未満前の心不全（1）

`icc`

### 1か月未満前の敗血症（1）

`sepse`

### 1か月未満前の重度肺疾患（肺炎を含む）（1）

`pulmonar`

### 肺機能異常（COPD）（1）

`dpoc`

### 非手術患者の床上安静（1）

`repouso`

### 経口避妊薬またはホルモン補充（1）

`hormonio`

### 妊娠または産褥期（1）

`gestacao`

### 原因不明の死産、≥ 3回の自然流産、または妊娠中毒症・発育制限を伴う早産（1）

`obst`

### 関節鏡手術（2）

`artroscopia`

### 現在または既往の悪性腫瘍（2）

`cancer`

### 大きな開放手術（\> 45 min）（2）

`cir_maior`

### 腹腔鏡手術（\> 45 min）（2）

`laparoscopia`

### 臥床（\> 72 h）（2）

`acamado`

### 1か月未満前のギプス固定（2）

`gesso`

### 中心静脈アクセス（2）

`cvc`

### 深部静脈血栓症または肺塞栓症の既往（3）

`tev_prev`

### 血栓症の家族歴（3）

`hf_trombose`

### 第V因子Leiden（3）

`fvl`

### プロトロンビン20210A変異（3）

`protrombina`

### ループスアンチコアグラント（3）

`lupico`

### 抗カルジオリピン抗体上昇（3）

`anticardiolipina`

### 血清ホモシステイン上昇（3）

`homocisteina`

### ヘパリン起因性血小板減少症（3）

`hit`

### その他の先天性・後天性血栓性素因（3）

`trombofilia`

### 待機的股関節・膝関節置換術（5）

`artroplastia`

### 1か月未満前の股関節・骨盤・下肢骨折（5）

`fratura`

### 1か月未満前の脳卒中（5）

`avc`

### 1か月未満前の多発外傷（5）

`politrauma`

### 1か月未満前の麻痺を伴う急性脊髄損傷（5）

`medular`

## 方法の版

Caprini 2005：RAM1/2/3/5点、古典手術版、ACCP 2012

## 記載された計算式

加算：1（41–60歳、小手術、肥満、静脈瘤、最近の疾患、ホルモン、妊娠）、2（61–74歳、癌、大/腹腔鏡手術\>45 min、臥床\>72 h、ギプス、中心静脈）、3（≥75歳、VTE既往、家族歴、血栓性素因）、5（関節置換、股関節/骨盤/下肢骨折、脳卒中、多発外傷、脊髄損傷）。

## 限界・対象集団

この実装はCaprini2005の重みを使用し、後の版ではありません。ACCP2012ガイドラインでは、非整形外科の一般外科・腹部骨盤手術における血栓塞栓症の評価に使用しています。引用された外科コホートは、小児や非手術患者における普遍的な妥当性を示すものではありません。Bahl2010の評価対象は術後30日以内の血栓塞栓症であり、生涯リスクではありません。予防法の選択には出血と手術状況の評価も必要で、スコアだけで薬剤や期間は決まりません。

## 参考文献

- [Caprini JA. Thrombosis risk assessment as a guide to quality patient care. Dis Mon, 2005.](https://doi.org/10.1016/j.disamonth.2005.02.003)

- [Gould MK et al. Prevention of VTE in nonorthopedic surgical patients: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest, 2012.](https://doi.org/10.1378/chest.11-2297)

- [Bahl V et al. A validation study of a retrospective venous thromboembolism risk scoring method. Ann Surg, 2010.](https://doi.org/10.1097/SLA.0b013e3181b7fca6)

- [ACCP2012,nonorthopedic surgical patients](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278061/)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
