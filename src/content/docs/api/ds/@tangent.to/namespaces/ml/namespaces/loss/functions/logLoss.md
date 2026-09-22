---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `epsilon?`): `number`

Defined in: [ml/loss.js:53](https://github.com/tangent-to/ds/blob/9dbc626cfabd94d37405b8d2e2c24fdf3fdfe65f/src/ml/loss.js#L53)

Binary Cross-Entropy Loss (Log Loss)

## Parameters

### yTrue

`number`[]

True labels (0 or 1)

### yPred

`number`[]

Predicted probabilities

### epsilon?

`number` = `1e-15`

Small value to avoid log(0)

## Returns

`number`
