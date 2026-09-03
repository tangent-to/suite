---
title: "plotCalibration"
---

> **plotCalibration**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:337](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/plot/classification.js#L337)

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
