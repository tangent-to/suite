---
title: "informationGain"
---

> **informationGain**(`parentLabels`, `leftLabels`, `rightLabels`, `impurityFn?`): `number`

Defined in: [ml/criteria.js:169](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/criteria.js#L169)

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
