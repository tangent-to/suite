---
title: "huberLoss"
---

> **huberLoss**(`yTrue`, `yPred`, `delta?`): `any`

Defined in: [ml/loss.js:160](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/loss.js#L160)

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
