---
title: "huberLoss"
---

> **huberLoss**(`yTrue`, `yPred`, `delta?`): `any`

Defined in: [ds/src/ml/loss.js:160](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/loss.js#L160)

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
