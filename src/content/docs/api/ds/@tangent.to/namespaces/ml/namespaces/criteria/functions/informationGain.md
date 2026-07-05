---
title: "informationGain"
---

> **informationGain**(`parentLabels`, `leftLabels`, `rightLabels`, `impurityFn?`): `number`

Defined in: [ds/src/ml/criteria.js:169](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/criteria.js#L169)

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
