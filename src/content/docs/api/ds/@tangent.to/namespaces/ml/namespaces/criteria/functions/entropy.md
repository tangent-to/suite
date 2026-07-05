---
title: "entropy"
---

> **entropy**(`labels`): `number`

Defined in: [ds/src/ml/criteria.js:39](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/criteria.js#L39)

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
