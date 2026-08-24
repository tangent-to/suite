---
title: "huberLoss"
---

> **huberLoss**(`yTrue`, `yPred`, `delta?`): `any`

Defined in: [ml/loss.js:160](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/loss.js#L160)

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

`any`

{loss, gradient}
