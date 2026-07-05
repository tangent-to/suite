---
title: "crossEntropy"
---

> **crossEntropy**(`yTrue`, `yPred`, `epsilon?`): `any`

Defined in: [ds/src/ml/loss.js:96](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/loss.js#L96)

Categorical Cross-Entropy Loss

## Parameters

### yTrue

`number`[][]

One-hot encoded true labels

### yPred

`number`[][]

Predicted probabilities

### epsilon?

`number` = `1e-15`

Small value to avoid log(0)

## Returns

`any`

{loss, gradient}
