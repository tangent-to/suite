---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `epsilon?`): `any`

Defined in: [ml/loss.js:65](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/loss.js#L65)

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

`any`

{loss, gradient}
