---
title: "plotROC"
---

> **plotROC**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:15](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/plot/classification.js#L15)

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
