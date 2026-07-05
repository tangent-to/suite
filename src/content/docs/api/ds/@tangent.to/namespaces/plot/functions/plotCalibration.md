---
title: "plotCalibration"
---

> **plotCalibration**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [ds/src/plot/classification.js:337](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/plot/classification.js#L337)

Generate calibration curve plot configuration
Shows how well predicted probabilities match actual frequencies

## Parameters

### yTrue

`number`[]

True binary labels (0 or 1)

### yProb

`number`[]

Predicted probabilities

### options?

`any` = `{}`

{width, height, nBins}

## Returns

`any`

Plot configuration with calibration curve
