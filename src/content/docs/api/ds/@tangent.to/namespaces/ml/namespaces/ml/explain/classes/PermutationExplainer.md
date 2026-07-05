---
title: "PermutationExplainer"
---

Defined in: [ds/src/ml/explain.js:623](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L623)

Model-agnostic SHAP by sampling random feature orderings and accumulating
each feature's marginal contribution as it is "turned on" (its value swapped
from a background row to the instance's value). Uses antithetic pairs
(a permutation and its reverse) to reduce variance. Cheaper than KernelSHAP
for many features; converges to exact Shapley values as nPermutations grows.

## Example

```ts
const ex = new PermutationExplainer({ model: gp, background: Xref });
const { values, baseValue } = ex.shapValues(Xtest, { nPermutations: 64 });
```

## Constructors

### Constructor

> **new PermutationExplainer**(`opts?`): `PermutationExplainer`

Defined in: [ds/src/ml/explain.js:627](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L627)

#### Parameters

##### opts?

`any` = `{}`

`{ model | predict, background, featureNames }`

#### Returns

`PermutationExplainer`

## Properties

### \_predict

> **\_predict**: (`rows`) => `number`[]

Defined in: [ds/src/ml/explain.js:631](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L631)

#### Parameters

##### rows

`number`[][]

#### Returns

`number`[]

***

### background

> **background**: `any`[]

Defined in: [ds/src/ml/explain.js:632](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L632)

***

### expectedValue

> **expectedValue**: `number`

Defined in: [ds/src/ml/explain.js:636](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L636)

***

### featureNames

> **featureNames**: `any`

Defined in: [ds/src/ml/explain.js:634](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L634)

***

### nFeatures

> **nFeatures**: `any`

Defined in: [ds/src/ml/explain.js:633](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L633)

## Methods

### shapValues()

> **shapValues**(`X`, `opts?`): `object`

Defined in: [ds/src/ml/explain.js:647](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L647)

#### Parameters

##### X

`number`[] \| `number`[][]

##### opts?

###### nPermutations?

`number` = `64`

Antithetic permutation pairs.

###### seed?

`number` = `0`

#### Returns

`object`

##### baseValue

> **baseValue**: `number`

##### expectedValue

> **expectedValue**: `number`

##### featureNames

> **featureNames**: `string`[]

##### values

> **values**: `number`[][]
