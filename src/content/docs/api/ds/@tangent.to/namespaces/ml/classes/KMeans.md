---
title: "KMeans"
---

Defined in: [ds/src/ml/estimators/KMeans.js:17](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L17)

## Extends

- `Estimator`

## Constructors

### Constructor

> **new KMeans**(`params?`): `KMeans`

Defined in: [ds/src/ml/estimators/KMeans.js:21](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L21)

#### Parameters

##### params?

`any` = `{}`

{ k, maxIter, tol, seed }

#### Returns

`KMeans`

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

### centroids

> **centroids**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:78](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L78)

***

### converged

> **converged**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:81](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L81)

***

### fitted

> **fitted**: `boolean`

Defined in: [ds/src/ml/estimators/KMeans.js:30](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L30)

#### Inherited from

`Estimator.fitted`

***

### inertia

> **inertia**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:79](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L79)

***

### iterations

> **iterations**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:80](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L80)

***

### k

> **k**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:23](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L23)

***

### labels

> **labels**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:77](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L77)

***

### maxIter

> **maxIter**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:24](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L24)

***

### model

> **model**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:29](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L29)

***

### params

> **params**: `any`

Defined in: [ds/src/core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L24)

#### Inherited from

`Estimator.params`

***

### seed

> **seed**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:26](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L26)

***

### tol

> **tol**: `any`

Defined in: [ds/src/ml/estimators/KMeans.js:25](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L25)

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

> **fit**(`X`, `opts?`): `KMeans`

Defined in: [ds/src/ml/estimators/KMeans.js:42](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L42)

Fit the KMeans model.

Accepts:
 - numeric input: fit(Xarray, { k, maxIter, tol, seed })
 - declarative input: fit({ data: tableLike, columns: ['c1','c2'], k, ... })

Returns this.

#### Parameters

##### X

`any`

##### opts?

#### Returns

`KMeans`

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

Defined in: [ds/src/ml/estimators/KMeans.js:94](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L94)

Predict cluster labels for new data.

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

> **setParams**(`params?`): `KMeans`

Defined in: [ds/src/core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`KMeans`

#### Inherited from

`Estimator.setParams`

***

### silhouetteScore()

> **silhouetteScore**(`X`, `labels?`): `number`

Defined in: [ds/src/ml/estimators/KMeans.js:118](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L118)

Compute silhouette score for given X and labels (or use fitted labels if omitted).

Accepts:
 - numeric X array, and optional labels array
 - declarative object { data, columns } will be prepared

#### Parameters

##### X

`any`

##### labels?

`any` = `null`

#### Returns

`number`

***

### summary()

> **summary**(): `object`

Defined in: [ds/src/ml/estimators/KMeans.js:140](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L140)

Convenience: return summary stats for fitted model

#### Returns

`object`

##### centroids

> **centroids**: `any`

##### converged

> **converged**: `any`

##### inertia

> **inertia**: `any`

##### iterations

> **iterations**: `any`

##### k

> **k**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ds/src/ml/estimators/KMeans.js:154](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L154)

Serialization helper

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'KMeans'`

##### fitted

> **fitted**: `boolean`

##### model

> **model**: `any`

##### params

> **params**: `any`

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

> `static` **fromJSON**(`obj?`): `KMeans`

Defined in: [ds/src/ml/estimators/KMeans.js:163](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/estimators/KMeans.js#L163)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

#### Returns

`KMeans`

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
