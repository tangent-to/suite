---
title: "huberLoss"
---

> **huberLoss**(`yTrue`, `yPred`, `delta?`): `number`

Defined in: [ml/loss.js:120](https://github.com/tangent-to/ds/blob/9dbc626cfabd94d37405b8d2e2c24fdf3fdfe65f/src/ml/loss.js#L120)

Huber Loss (robust to outliers)

## Parameters

### yTrue

`number`[]

True values

### yPred

`number`[]

Predicted values

### delta?

`number` = `1.0`

Threshold for switching from quadratic to linear

## Returns

`number`
