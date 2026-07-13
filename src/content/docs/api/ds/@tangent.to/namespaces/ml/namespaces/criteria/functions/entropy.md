---
title: "entropy"
---

> **entropy**(`labels`): `number`

Defined in: [ml/criteria.js:39](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/criteria.js#L39)

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
