---
title: "logLoss"
---

> **logLoss**(`yTrue`, `yPred`, `epsilon?`): `any`

Defined in: [ds/src/ml/loss.js:65](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/loss.js#L65)

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
