---
title: "crossEntropy"
---

> **crossEntropy**(`yTrue`, `yPred`, `epsilon?`): `any`

Defined in: [ml/loss.js:96](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/loss.js#L96)

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
