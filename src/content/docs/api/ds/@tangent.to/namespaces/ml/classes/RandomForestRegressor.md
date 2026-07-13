---
title: "RandomForestRegressor"
---

Defined in: [ml/estimators/RandomForest.js:604](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L604)

## Extends

- `Regressor`

## Constructors

### Constructor

> **new RandomForestRegressor**(`opts?`): `RandomForestRegressor`

Defined in: [ml/estimators/RandomForest.js:605](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L605)

#### Parameters

##### opts?

#### Returns

`RandomForestRegressor`

#### Overrides

`Regressor.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L27)

#### Inherited from

`Regressor._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L29)

#### Inherited from

`Regressor._warnings`

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L25)

#### Inherited from

`Regressor.fitted`

***

### forest

> **forest**: `RandomForestBase`

Defined in: [ml/estimators/RandomForest.js:607](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L607)

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L24)

#### Inherited from

`Regressor.params`

## Accessors

### featureImportances

#### Get Signature

> **get** **featureImportances**(): `any`[] \| `number`[]

Defined in: [ml/estimators/RandomForest.js:635](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L635)

Get feature importances (MDI - Mean Decrease in Impurity)

##### Returns

`any`[] \| `number`[]

***

### oobScore

#### Get Signature

> **get** **oobScore**(): `number`

Defined in: [ml/estimators/RandomForest.js:642](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L642)

Get out-of-bag score (R^2 score for regression)

##### Returns

`number`

## Methods

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L367)

Convenience helper: parse arguments passed to fit/predict/transform.

Supports declarative table-style inputs:
 - fit({ X, y, data, omit_missing })
 - fit({ data, columns, ... })

Returns an object { X, y, prepared, rows } where X/y are numeric arrays
if preparation was required, otherwise returns the original values.

Note: this helper only prepares numeric matrices/vectors using core table utilities;
it does not perform encoding of categorical predictors.

#### Parameters

##### args?

`any`[] = `[]`

#### Returns

\{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

#### Inherited from

`Regressor._prepareArgsForFit`

***

### \_r2()

> **\_r2**(`yTrue`, `yPred`): `number`

Defined in: [core/estimators/estimator.js:489](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L489)

#### Parameters

##### yTrue

`any`

##### yPred

`any`

#### Returns

`number`

#### Inherited from

`Regressor._r2`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Regressor._repr_html_`

***

### apply()

> **apply**(`X`): `any`[][]

Defined in: [ml/estimators/RandomForest.js:649](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L649)

Apply trees in forest to X, return leaf indices

#### Parameters

##### X

`any`

#### Returns

`any`[][]

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Regressor.clearWarnings`

***

### decisionPath()

> **decisionPath**(`X`): `any`[][][]

Defined in: [ml/estimators/RandomForest.js:656](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L656)

Return decision path through the forest

#### Parameters

##### X

`any`

#### Returns

`any`[][][]

***

### fit()

> **fit**(`X`, `y?`, `sampleWeight?`): `RandomForestRegressor`

Defined in: [ml/estimators/RandomForest.js:617](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L617)

Fit the regressor on training data.

#### Parameters

##### X

`number`[][]

Feature matrix (n samples × p features)

##### y?

`number`[] = `null`

Target values

##### sampleWeight?

`number`[] = `null`

Optional per-sample weights

#### Returns

`RandomForestRegressor`

The fitted estimator (for chaining)

#### Overrides

`Regressor.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Regressor.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Regressor.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Regressor.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Regressor.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L148)

Get warnings of a specific type

#### Parameters

##### type

`string`

Warning type

#### Returns

`any`[]

Filtered warnings

#### Inherited from

`Regressor.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Regressor.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Regressor.isFitted`

***

### predict()

> **predict**(`X`): `number`[]

Defined in: [ml/estimators/RandomForest.js:628](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/estimators/RandomForest.js#L628)

Predict target values for samples in X.

#### Parameters

##### X

`number`[][]

Feature matrix (n samples × p features)

#### Returns

`number`[]

Predicted target values

#### Overrides

`Regressor.predict`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Regressor.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:461](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L461)

Default R^2 scoring implementation:
  1 - SS_res / SS_tot

Accepts either:
 - arrays: score(yTrue, yPred)
 - table-style: score({ X, y, data }) where predict will be called internally

#### Parameters

##### yTrueOrOpts

`any`

##### yPred

`any`

##### \_opts?

##### args?

...`any`[] = `{}`

#### Returns

`number`

#### Inherited from

`Regressor.score`

***

### setParams()

> **setParams**(`params?`): `RandomForestRegressor`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`RandomForestRegressor`

#### Inherited from

`Regressor.setParams`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [core/estimators/estimator.js:302](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L302)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### fitted

> **fitted**: `boolean`

##### params

> **params**: `any`

##### state

> **state**: `object`

##### warnings

> **warnings**: `any`[]

#### Inherited from

`Regressor.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Regressor.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `Estimator`

Defined in: [core/estimators/estimator.js:317](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L317)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

`any` = `{}`

#### Returns

`Estimator`

#### Inherited from

`Regressor.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L346)

Load model from JSON string

#### Parameters

##### jsonString

`string`

JSON representation

#### Returns

`Estimator`

Reconstructed estimator instance

#### Inherited from

`Regressor.load`
