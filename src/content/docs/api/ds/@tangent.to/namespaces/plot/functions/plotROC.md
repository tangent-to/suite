---
title: "plotROC"
---

> **plotROC**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:15](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/plot/classification.js#L15)

Generate ROC curve plot configuration

## Parameters

### yTrue

`number`[]

True binary labels (0 or 1)

### yProb

`number`[]

Predicted probabilities for positive class

### options?

`any` = `{}`

{width, height, showDiagonal}

## Returns

`any`

Plot configuration with ROC curve data and AUC
