---
title: "plotPrecisionRecall"
---

> **plotPrecisionRecall**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [ds/src/plot/classification.js:125](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/plot/classification.js#L125)

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
