---
title: "plotPrecisionRecall"
---

> **plotPrecisionRecall**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:125](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/plot/classification.js#L125)

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
