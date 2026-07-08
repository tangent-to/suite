---
title: "huberLoss"
---

> **huberLoss**(`yTrue`, `yPred`, `delta?`): `any`

Defined in: [ml/loss.js:160](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/loss.js#L160)

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
