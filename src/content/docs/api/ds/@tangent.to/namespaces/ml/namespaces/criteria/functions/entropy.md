---
title: "entropy"
---

> **entropy**(`labels`): `number`

Defined in: [ml/criteria.js:41](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/criteria.js#L41)

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
