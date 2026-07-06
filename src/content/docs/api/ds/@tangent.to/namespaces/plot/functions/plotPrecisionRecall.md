---
title: "plotPrecisionRecall"
---

> **plotPrecisionRecall**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:125](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/plot/classification.js#L125)

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
