---
title: "informationGain"
---

> **informationGain**(`parentLabels`, `leftLabels`, `rightLabels`, `impurityFn?`): `number`

Defined in: [ml/criteria.js:165](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/ml/criteria.js#L165)

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
