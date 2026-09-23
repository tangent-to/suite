---
title: "crossEntropy"
---

> **crossEntropy**(`yTrue`, `yPred`, `epsilon?`): `number`

Defined in: [ml/loss.js:77](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/loss.js#L77)

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

`number`
