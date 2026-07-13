---
title: "TreeExplainer"
---

Defined in: [ml/explain.js:388](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L388)

Exact SHAP for tree models using the path-dependent algorithm of
Lundberg et al. (2018). Runs in O(T·L·D²) and uses each node's training
coverage (`nSamples`) as the conditional distribution.

Supports regression trees: `DecisionTreeRegressor`, `RandomForestRegressor`,
a bare `DecisionTreeBase`, or any object exposing a compatible root node.

## Example

```ts
const ex = new TreeExplainer({ model: forest });
const { values, baseValue } = ex.shapValues(Xtest);
```

## Constructors

### Constructor

> **new TreeExplainer**(`opts?`): `TreeExplainer`

Defined in: [ml/explain.js:394](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L394)

#### Parameters

##### opts?

###### featureNames?

`string`[]

###### model

`any`

Fitted tree or forest regressor.

#### Returns

`TreeExplainer`

## Properties

### \_treeBase

> **\_treeBase**: `any`

Defined in: [ml/explain.js:406](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L406)

***

### expectedValue

> **expectedValue**: `number`

Defined in: [ml/explain.js:407](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L407)

***

### featureNames

> **featureNames**: `string`[]

Defined in: [ml/explain.js:403](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L403)

***

### nFeatures

> **nFeatures**: `number`

Defined in: [ml/explain.js:402](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L402)

***

### roots

> **roots**: `any`

Defined in: [ml/explain.js:395](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L395)

## Methods

### shapValues()

> **shapValues**(`X`): `object`

Defined in: [ml/explain.js:415](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L415)

#### Parameters

##### X

`number`[] \| `number`[][]

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
