---
title: "entropy"
---

> **entropy**(`labels`): `number`

Defined in: [ml/criteria.js:41](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/criteria.js#L41)

Entropy (information gain) for classification
Measures uncertainty/disorder in the data
Lower is better (0 = pure node)

## Parameters

### labels

`any`[]

Array of labels

## Returns

`number`

Entropy [0, log2(n_classes)]
