---
title: "plotCalibration"
---

> **plotCalibration**(`yTrue`, `yProb`, `options?`): `any`

Defined in: [plot/classification.js:337](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/plot/classification.js#L337)

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
