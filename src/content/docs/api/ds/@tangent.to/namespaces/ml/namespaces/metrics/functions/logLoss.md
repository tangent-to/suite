---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `eps?`): `number`

Defined in: [ml/metrics.js:242](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/metrics.js#L242)

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
