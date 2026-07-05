---
title: "DBSCAN"
---

Defined in: [ds/src/ml/estimators/DBSCAN.js:17](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L17)

## Extends

- `Estimator`

## Constructors

### Constructor

> **new DBSCAN**(`params?`): `DBSCAN`

Defined in: [ds/src/ml/estimators/DBSCAN.js:23](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L23)

#### Parameters

##### params?

{ eps, minSamples }

###### eps

`number` = `0.5`

Maximum distance between two points for neighborhood (default: 0.5)

###### minSamples

`number` = `5`

Minimum number of points to form a dense region (default: 5)

#### Returns

`DBSCAN`

#### Overrides

`Estimator.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [ds/src/core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L27)

#### Inherited from

`Estimator._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [ds/src/core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L29)

#### Inherited from

`Estimator._warnings`

***

### coreSampleIndices

> **coreSampleIndices**: `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:88](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L88)

***

### eps

> **eps**: `number`

Defined in: [ds/src/ml/estimators/DBSCAN.js:25](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L25)

***

### fitted

> **fitted**: `boolean`

Defined in: [ds/src/ml/estimators/DBSCAN.js:30](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L30)

#### Inherited from

`Estimator.fitted`

***

### labels

> **labels**: `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:85](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L85)

***

### minSamples

> **minSamples**: `number`

Defined in: [ds/src/ml/estimators/DBSCAN.js:26](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L26)

***

### model

> **model**: `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:29](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L29)

***

### nClusters

> **nClusters**: `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:86](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L86)

***

### nNoise

> **nNoise**: `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:87](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L87)

***

### params

> **params**: `any`

Defined in: [ds/src/core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L24)

#### Inherited from

`Estimator.params`

***

### X\_train

> **X\_train**: `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:31](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L31)

## Accessors

### components

#### Get Signature

> **get** **components**(): `any`

Defined in: [ds/src/ml/estimators/DBSCAN.js:140](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L140)

Get components (core samples) - returns array of core sample data points

##### Returns

`any`

***

### coreSampleMask

#### Get Signature

> **get** **coreSampleMask**(): `any`[]

Defined in: [ds/src/ml/estimators/DBSCAN.js:128](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L128)

Get core sample mask (boolean array indicating which samples are core points)

##### Returns

`any`[]

## Methods

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [ds/src/core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L367)

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

`Estimator._prepareArgsForFit`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Estimator._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Estimator.clearWarnings`

***

### fit()

> **fit**(`X`, `opts?`): `DBSCAN`

Defined in: [ds/src/ml/estimators/DBSCAN.js:43](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L43)

Fit the DBSCAN model.

Accepts:
 - numeric input: fit(Xarray, { eps, minSamples })
 - declarative input: fit({ data: tableLike, columns: ['c1','c2'], eps, ... })

Returns this.

#### Parameters

##### X

`any`

##### opts?

#### Returns

`DBSCAN`

#### Overrides

`Estimator.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Estimator.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [ds/src/core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Estimator.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [ds/src/core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Estimator.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [ds/src/core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Estimator.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [ds/src/core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L148)

Get warnings of a specific type

#### Parameters

##### type

`string`

Warning type

#### Returns

`any`[]

Filtered warnings

#### Inherited from

`Estimator.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [ds/src/core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Estimator.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [ds/src/core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Estimator.isFitted`

***

### predict()

> **predict**(`X`): `number`[]

Defined in: [ds/src/ml/estimators/DBSCAN.js:106](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L106)

Predict cluster labels for new data.

Note: DBSCAN doesn't naturally support prediction on new points.
This assigns new points to the cluster of their nearest core point
if within eps distance, otherwise marks as noise (-1).

Accepts:
 - numeric array: predict([[x1,x2], [x1,x2], ...])
 - declarative: predict({ data: tableLike, columns: ['c1','c2'], omit_missing: true })

#### Parameters

##### X

`any`

#### Returns

`number`[]

#### Overrides

`Estimator.predict`

***

### save()

> **save**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Estimator.save`

***

### setParams()

> **setParams**(`params?`): `DBSCAN`

Defined in: [ds/src/core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`DBSCAN`

#### Inherited from

`Estimator.setParams`

***

### summary()

> **summary**(): `object`

Defined in: [ds/src/ml/estimators/DBSCAN.js:148](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L148)

Convenience: return summary stats for fitted model

#### Returns

`object`

##### coreRatio

> **coreRatio**: `number`

##### eps

> **eps**: `number`

##### minSamples

> **minSamples**: `number`

##### nClusters

> **nClusters**: `any`

##### nCore

> **nCore**: `any`

##### nNoise

> **nNoise**: `any`

##### noiseRatio

> **noiseRatio**: `number`

##### nSamples

> **nSamples**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ds/src/ml/estimators/DBSCAN.js:171](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L171)

Serialization helper

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'DBSCAN'`

##### fitted

> **fitted**: `boolean`

##### model

> **model**: `any`

##### params

> **params**: `any`

##### X\_train

> **X\_train**: `any`

#### Overrides

`Estimator.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Estimator.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `DBSCAN`

Defined in: [ds/src/ml/estimators/DBSCAN.js:181](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/DBSCAN.js#L181)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

#### Returns

`DBSCAN`

#### Overrides

`Estimator.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [ds/src/core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L346)

Load model from JSON string

#### Parameters

##### jsonString

`string`

JSON representation

#### Returns

`Estimator`

Reconstructed estimator instance

#### Inherited from

`Estimator.load`
