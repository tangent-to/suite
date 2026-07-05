---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `eps?`): `number`

Defined in: [ds/src/ml/metrics.js:242](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/metrics.js#L242)

Log loss (cross-entropy loss)

## Parameters

### yTrue

`any`[]

True labels (0 or 1)

### yPred

`number`[]

Predicted probabilities

### eps?

`number` = `1e-15`

Small constant to avoid log(0)

## Returns

`number`

Log loss
