---
title: "CCA"
---

Defined in: [mva/estimators/CCA.js:10](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L10)

## Extends

- `Transformer`

## Constructors

### Constructor

> **new CCA**(`params?`): `CCA`

Defined in: [mva/estimators/CCA.js:11](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L11)

#### Parameters

##### params?

#### Returns

`CCA`

#### Overrides

`Transformer.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L27)

#### Inherited from

`Transformer._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L29)

#### Inherited from

`Transformer._warnings`

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L25)

#### Inherited from

`Transformer.fitted`

***

### model

> **model**: `any`

Defined in: [mva/estimators/CCA.js:13](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L13)

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L24)

#### Inherited from

`Transformer.params`

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

`Transformer._prepareArgsForFit`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Transformer._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Transformer.clearWarnings`

***

### fit()

> **fit**(`X`, `Y?`, `opts?`): `CCA`

Defined in: [mva/estimators/CCA.js:26](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L26)

Fit the CCA model on paired data sets X and Y.

Accepts a positional numeric call (`fit(X, Y[, opts])`) or a declarative
`{ data, X, Y }` object (`fit({ data, X, Y, columnsX, columnsY })`).

#### Parameters

##### X

`any`

First data matrix (n samples × p features), or a declarative `{ data, X, Y }` object

##### Y?

`number`[][] = `null`

Second data matrix (n samples × q features), for the positional call form

##### opts?

`any` = `{}`

Fitting options (used for the positional call form)

#### Returns

`CCA`

The fitted estimator (for chaining)

#### Overrides

`Transformer.fit`

***

### fitTransform()

> **fitTransform**(...`args`): `void`

Defined in: [core/estimators/estimator.js:683](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L683)

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

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Transformer.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Transformer.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Transformer.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Transformer.getWarnings`

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

`Transformer.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Transformer.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Transformer.isFitted`

***

### predict()

> **predict**(): `void`

Defined in: [core/estimators/estimator.js:424](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L424)

Predict should be implemented by supervised estimators.

#### Returns

`void`

#### Inherited from

`Transformer.predict`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Transformer.save`

***

### setParams()

> **setParams**(`params?`): `CCA`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/estimators/estimator.js#L285)

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

Defined in: [mva/estimators/CCA.js:87](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L87)

#### Returns

`object`

##### correlations

> **correlations**: `any`

##### nComponents

> **nComponents**: `any`

##### nSamples

> **nSamples**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [mva/estimators/CCA.js:98](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L98)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'CCA'`

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

> **transform**(`X`, `Y`, `opts?`): `any`

Defined in: [mva/estimators/CCA.js:80](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L80)

Project new X and Y data onto their fitted canonical variates.

#### Parameters

##### X

`any`

X data matrix (n samples × p features), or a declarative `{ data, columns }` object

##### Y

`any`

Y data matrix (n samples × q features), or a declarative `{ data, columns }` object

##### opts?

`any` = `{}`

Transform options

#### Returns

`any`

Object with `xScores` and `yScores` arrays of canonical score objects

#### Overrides

`Transformer.transform`

***

### transformX()

> **transformX**(`X`, `opts?`): `any`[]

Defined in: [mva/estimators/CCA.js:53](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L53)

Project new X data onto the fitted X canonical variates.

#### Parameters

##### X

`any`

X data matrix (n samples × p features), or a declarative `{ data, columns }` object

##### opts?

`any` = `{}`

Transform options

#### Returns

`any`[]

Canonical score objects, one per row (keyed `cca1`, `cca2`, ...)

***

### transformY()

> **transformY**(`Y`, `opts?`): `any`[]

Defined in: [mva/estimators/CCA.js:66](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L66)

Project new Y data onto the fitted Y canonical variates.

#### Parameters

##### Y

`any`

Y data matrix (n samples × q features), or a declarative `{ data, columns }` object

##### opts?

`any` = `{}`

Transform options

#### Returns

`any`[]

Canonical score objects, one per row (keyed `cca1`, `cca2`, ...)

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `CCA`

Defined in: [mva/estimators/CCA.js:107](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/estimators/CCA.js#L107)

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

`Transformer.load`
