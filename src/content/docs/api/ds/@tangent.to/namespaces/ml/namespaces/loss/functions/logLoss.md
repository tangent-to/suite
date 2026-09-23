---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `epsilon?`): `number`

Defined in: [ml/loss.js:53](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/loss.js#L53)

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
