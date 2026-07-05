---
title: "CCA"
---

Defined in: [ds/src/mva/estimators/CCA.js:10](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L10)

## Extends

- `Transformer`

## Constructors

### Constructor

> **new CCA**(`params?`): `CCA`

Defined in: [ds/src/mva/estimators/CCA.js:11](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L11)

#### Parameters

##### params?

#### Returns

`CCA`

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

> **model**: `object`

Defined in: [ds/src/mva/estimators/CCA.js:13](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L13)

#### center

> **center**: `boolean`

#### columnsX

> **columnsX**: `any` = `columnNamesX`

#### columnsY

> **columnsY**: `any` = `columnNamesY`

#### correlations

> **correlations**: `any`

#### nComponents

> **nComponents**: `number` = `components`

#### nFeaturesX

> **nFeaturesX**: `any` = `p`

#### nFeaturesY

> **nFeaturesY**: `any` = `q`

#### nSamples

> **nSamples**: `any` = `n`

#### scale

> **scale**: `boolean`

#### type

> **type**: `string` = `'cca'`

#### xMeans

> **xMeans**: `any`[] = `processedX.means`

#### xScores

> **xScores**: `object`[]

#### xSds

> **xSds**: `any`[] = `processedX.sds`

#### xWeights

> **xWeights**: `object`[]

#### yMeans

> **yMeans**: `any`[] = `processedY.means`

#### yScores

> **yScores**: `object`[]

#### ySds

> **ySds**: `any`[] = `processedY.sds`

#### yWeights

> **yWeights**: `object`[]

***

### params

> **params**: `any`

Defined in: [ds/src/core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L24)

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

### fit()

> **fit**(`X`, `Y?`, `opts?`): `CCA`

Defined in: [ds/src/mva/estimators/CCA.js:16](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L16)

Fit should be implemented by subclasses.
Return `this` for chaining.

#### Parameters

##### X

`any`

##### Y?

`any` = `null`

##### opts?

#### Returns

`CCA`

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

> **setParams**(`params?`): `CCA`

Defined in: [ds/src/core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`CCA`

#### Inherited from

`Transformer.setParams`

***

### summary()

> **summary**(): `object`

Defined in: [ds/src/mva/estimators/CCA.js:58](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L58)

#### Returns

`object`

##### correlations

> **correlations**: `any`

##### nComponents

> **nComponents**: `number`

##### nSamples

> **nSamples**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ds/src/mva/estimators/CCA.js:69](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L69)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'CCA'`

##### fitted

> **fitted**: `boolean`

##### model

> **model**: `object`

###### model.center

> **center**: `boolean`

###### model.columnsX

> **columnsX**: `any` = `columnNamesX`

###### model.columnsY

> **columnsY**: `any` = `columnNamesY`

###### model.correlations

> **correlations**: `any`

###### model.nComponents

> **nComponents**: `number` = `components`

###### model.nFeaturesX

> **nFeaturesX**: `any` = `p`

###### model.nFeaturesY

> **nFeaturesY**: `any` = `q`

###### model.nSamples

> **nSamples**: `any` = `n`

###### model.scale

> **scale**: `boolean`

###### model.type

> **type**: `string` = `'cca'`

###### model.xMeans

> **xMeans**: `any`[] = `processedX.means`

###### model.xScores

> **xScores**: `object`[]

###### model.xSds

> **xSds**: `any`[] = `processedX.sds`

###### model.xWeights

> **xWeights**: `object`[]

###### model.yMeans

> **yMeans**: `any`[] = `processedY.means`

###### model.yScores

> **yScores**: `object`[]

###### model.ySds

> **ySds**: `any`[] = `processedY.sds`

###### model.yWeights

> **yWeights**: `object`[]

##### params

> **params**: `any`

#### Overrides

`Transformer.toJSON`

***

### transform()

> **transform**(`X`, `Y`, `opts?`): `object`

Defined in: [ds/src/mva/estimators/CCA.js:51](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L51)

Transform - subclasses must override
Ensures model is fitted before transformation

#### Parameters

##### X

`any`

##### Y

`any`

##### opts?

#### Returns

`object`

##### xScores

> **xScores**: `object`[]

##### yScores

> **yScores**: `object`[]

#### Overrides

`Transformer.transform`

***

### transformX()

> **transformX**(`X`, `opts?`): `object`[]

Defined in: [ds/src/mva/estimators/CCA.js:37](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L37)

#### Parameters

##### X

`any`

##### opts?

#### Returns

`object`[]

***

### transformY()

> **transformY**(`Y`, `opts?`): `object`[]

Defined in: [ds/src/mva/estimators/CCA.js:44](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L44)

#### Parameters

##### Y

`any`

##### opts?

#### Returns

`object`[]

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `CCA`

Defined in: [ds/src/mva/estimators/CCA.js:78](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/estimators/CCA.js#L78)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

#### Returns

`CCA`

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
