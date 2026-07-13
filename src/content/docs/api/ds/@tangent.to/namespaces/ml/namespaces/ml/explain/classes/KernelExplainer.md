---
title: "KernelExplainer"
---

Defined in: [ml/explain.js:164](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L164)

Model-agnostic SHAP via the KernelSHAP weighted-linear-regression estimator.

The "absent" features in a coalition are marginalised by substituting values
from a background dataset and averaging the model output (the interventional
expectation). Keep the background small (a sample or summary, ~20–100 rows)
for performance: cost ≈ nCoalitions × nBackground model evaluations.

## Example

```ts
const ex = new KernelExplainer({ model: gp, background: Xref });
const { values, baseValue } = ex.shapValues(Xtest);
// values[i][j] is feature j's contribution for instance i
```

## Constructors

### Constructor

> **new KernelExplainer**(`opts?`): `KernelExplainer`

Defined in: [ml/explain.js:173](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L173)

#### Parameters

##### opts?

###### background

`number`[][]

Reference rows used to marginalise
  absent features. Its mean prediction is the explanation `baseValue`.

###### featureNames?

`string`[]

Optional feature labels.

###### model?

`any`

Fitted model with a numeric `predict(rows)`.

###### predict?

`Function`

Alternatively, a predict function.

#### Returns

`KernelExplainer`

## Properties

### \_predict

> **\_predict**: (`rows`) => `number`[]

Defined in: [ml/explain.js:177](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L177)

#### Parameters

##### rows

`number`[][]

#### Returns

`number`[]

***

### background

> **background**: `any`[]

Defined in: [ml/explain.js:178](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L178)

***

### expectedValue

> **expectedValue**: `number`

Defined in: [ml/explain.js:183](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L183)

***

### featureNames

> **featureNames**: `string`[]

Defined in: [ml/explain.js:180](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L180)

***

### nFeatures

> **nFeatures**: `any`

Defined in: [ml/explain.js:179](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L179)

## Methods

### shapValues()

> **shapValues**(`X`, `opts?`): `object`

Defined in: [ml/explain.js:200](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L200)

Compute SHAP values.

#### Parameters

##### X

`number`[] \| `number`[][]

Instance(s) to explain.

##### opts?

###### maxExact?

`number`

Exhaustively enumerate coalitions when
  `nFeatures <= maxExact`.

###### nSamples?

`number` \| `"auto"`

Coalitions to evaluate when
  the feature count is large enough to require sampling. "auto" picks
  `2*M + 2048`. When `2^M` is below `maxExact`, all coalitions are used.

###### seed?

`number`

PRNG seed for the sampling path.

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
