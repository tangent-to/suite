---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `eps?`): `number`

Defined in: [ml/metrics.js:242](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/metrics.js#L242)

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
