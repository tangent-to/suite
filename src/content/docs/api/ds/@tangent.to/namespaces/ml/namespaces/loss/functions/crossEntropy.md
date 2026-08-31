---
title: "crossEntropy"
---

> **crossEntropy**(`yTrue`, `yPred`, `epsilon?`): `any`

Defined in: [ml/loss.js:96](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/loss.js#L96)

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
