---
title: "PCA"
---

Defined in: [ds/src/mva/estimators/PCA.js:30](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L30)

## Extends

- `Transformer`

## Constructors

### Constructor

> **new PCA**(`params?`): `PCA`

Defined in: [ds/src/mva/estimators/PCA.js:31](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L31)

#### Parameters

##### params?

#### Returns

`PCA`

#### Overrides

`Transformer.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [ds/src/core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L27)

#### Inherited from

`Transformer._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [ds/src/core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L29)

#### Inherited from

`Transformer._warnings`

***

### fitted

> **fitted**: `boolean`

Defined in: [ds/src/core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L25)

#### Inherited from

`Transformer.fitted`

***

### model

> **model**: `any`

Defined in: [ds/src/mva/estimators/PCA.js:35](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L35)

***

### params

> **params**: `object`

Defined in: [ds/src/mva/estimators/PCA.js:34](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L34)

#### center

> **center**: `boolean` = `true`

#### columns

> **columns**: `any` = `null`

#### omit\_missing

> **omit\_missing**: `boolean` = `true`

#### scale

> **scale**: `boolean` = `false`

#### scaling

> **scaling**: `number` = `2`

#### Inherited from

`Transformer.params`

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

`Transformer._prepareArgsForFit`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Transformer._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Transformer.clearWarnings`

***

### cumulativeVariance()

> **cumulativeVariance**(): `number`[]

Defined in: [ds/src/mva/estimators/PCA.js:118](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L118)

Helper to expose functional cumulative variance.

#### Returns

`number`[]

***

### fit()

> **fit**(`X`, `opts?`): `PCA`

Defined in: [ds/src/mva/estimators/PCA.js:47](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L47)

Fit PCA on the provided data.

Accepts either:
 - fit(X[, opts]) where X is an array-of-arrays numeric matrix
 - fit({ data, columns, center, scale, omit_missing })

Returns `this` for chaining.

#### Parameters

##### X

`any`

##### opts?

#### Returns

`PCA`

#### Overrides

`Transformer.fit`

***

### fitTransform()

> **fitTransform**(...`args`): `void`

Defined in: [ds/src/core/estimators/estimator.js:683](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L683)

Convenience: fit then transform
Returns transformed data.

#### Parameters

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

`Transformer.fitTransform`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Transformer.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [ds/src/core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Transformer.getParams`

***

### getScores()

> **getScores**(`type?`, `scaled?`): `any`

Defined in: [ds/src/mva/estimators/PCA.js:149](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L149)

Retrieve site or variable scores with optional scaling.

#### Parameters

##### type?

`"samples"` \| `"sites"` \| `"variables"` \| `"loadings"`

##### scaled?

`boolean` = `true`

return scaled or raw coordinates

#### Returns

`any`

***

### getState()

> **getState**(): `any`

Defined in: [ds/src/core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Transformer.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [ds/src/core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Transformer.getWarnings`

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

`Transformer.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [ds/src/core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Transformer.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [ds/src/core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Transformer.isFitted`

***

### predict()

> **predict**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:424](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L424)

Predict should be implemented by supervised estimators.

#### Returns

`void`

#### Inherited from

`Transformer.predict`

***

### save()

> **save**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Transformer.save`

***

### setParams()

> **setParams**(`params?`): `PCA`

Defined in: [ds/src/core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`PCA`

#### Inherited from

`Transformer.setParams`

***

### summary()

> **summary**(): `object`

Defined in: [ds/src/mva/estimators/PCA.js:126](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L126)

Provide lightweight summary of the fitted model.

#### Returns

`object`

##### centered

> **centered**: `boolean`

##### cumulativeVariance

> **cumulativeVariance**: `number`[]

##### eigenvalues

> **eigenvalues**: `any`

##### means

> **means**: `any`

##### nComponents

> **nComponents**: `any`

##### scaled

> **scaled**: `boolean`

##### scaling

> **scaling**: `number`

##### sds

> **sds**: `any`

##### varianceExplained

> **varianceExplained**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ds/src/mva/estimators/PCA.js:169](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L169)

Serialization helper for saving estimator state.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'PCA'`

##### fitted

> **fitted**: `boolean`

##### model

> **model**: `any`

##### params

> **params**: `any`

#### Overrides

`Transformer.toJSON`

***

### transform()

> **transform**(`X`): `any`[]

Defined in: [ds/src/mva/estimators/PCA.js:92](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L92)

Transform new data using fitted PCA model.

Accepts numeric arrays or declarative table objects { data, columns }.

#### Parameters

##### X

`any`

#### Returns

`any`[]

#### Overrides

`Transformer.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `PCA`

Defined in: [ds/src/mva/estimators/PCA.js:181](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/PCA.js#L181)

Restore PCA instance from JSON produced by toJSON().

#### Parameters

##### obj?

#### Returns

`PCA`

#### Overrides

`Transformer.fromJSON`

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

`Transformer.load`
