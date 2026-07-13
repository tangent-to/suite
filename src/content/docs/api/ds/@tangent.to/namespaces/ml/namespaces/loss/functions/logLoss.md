---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `epsilon?`): `any`

Defined in: [ml/loss.js:65](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/loss.js#L65)

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
