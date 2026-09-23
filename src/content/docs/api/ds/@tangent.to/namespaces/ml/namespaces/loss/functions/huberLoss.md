---
title: "huberLoss"
---

> **huberLoss**(`yTrue`, `yPred`, `delta?`): `number`

Defined in: [ml/loss.js:120](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/loss.js#L120)

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
