---
title: "plotROC"
---

> **plotROC**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:15](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/plot/classification.js#L15)

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
