---
title: "plotPrecisionRecall"
---

> **plotPrecisionRecall**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:125](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/plot/classification.js#L125)

Generate precision-recall curve plot configuration

## Parameters

### yTrue

`number`[]

True binary labels (0 or 1)

### yProb

`number`[]

Predicted probabilities for positive class

### options?

`any` = `{}`

{width, height, showBaseline}

## Returns

`any`

Plot configuration with precision-recall curve and average precision
