---
title: "informationGain"
---

> **informationGain**(`parentLabels`, `leftLabels`, `rightLabels`, `impurityFn?`): `number`

Defined in: [ml/criteria.js:165](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/criteria.js#L165)

Compute information gain (reduction in impurity)

## Parameters

### parentLabels

`any`[]

Labels before split

### leftLabels

`any`[]

Labels in left child

### rightLabels

`any`[]

Labels in right child

### impurityFn?

`Function` = `gini`

Impurity function (gini, entropy, etc.)

## Returns

`number`

Information gain
