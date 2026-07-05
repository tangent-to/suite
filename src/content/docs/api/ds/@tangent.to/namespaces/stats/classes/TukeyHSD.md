---
title: "TukeyHSD"
---

Defined in: [ds/src/stats/estimators/tests.js:273](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L273)

## Extends

- `StatisticalTest`

## Constructors

### Constructor

> **new TukeyHSD**(`params?`): `TukeyHSD`

Defined in: [ds/src/stats/estimators/tests.js:32](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L32)

#### Parameters

##### params?

#### Returns

`TukeyHSD`

#### Inherited from

`StatisticalTest.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [ds/src/core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L27)

#### Inherited from

`StatisticalTest._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [ds/src/core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L29)

#### Inherited from

`StatisticalTest._warnings`

***

### fitted

> **fitted**: `boolean`

Defined in: [ds/src/core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L25)

#### Inherited from

`StatisticalTest.fitted`

***

### params

> **params**: `any`

Defined in: [ds/src/core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L24)

#### Inherited from

`StatisticalTest.params`

***

### result

> **result**: `any`

Defined in: [ds/src/stats/estimators/tests.js:34](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L34)

#### Inherited from

`StatisticalTest.result`

## Methods

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [ds/src/core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L367)

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

`StatisticalTest._prepareArgsForFit`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`StatisticalTest._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`StatisticalTest.clearWarnings`

***

### fit()

> **fit**(`groups`, `opts?`): `TukeyHSD`

Defined in: [ds/src/stats/estimators/tests.js:274](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L274)

Fit should be implemented by subclasses.
Return `this` for chaining.

#### Parameters

##### groups

`any`

##### opts?

#### Returns

`TukeyHSD`

#### Overrides

`StatisticalTest.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`StatisticalTest.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [ds/src/core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`StatisticalTest.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [ds/src/core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`StatisticalTest.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [ds/src/core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`StatisticalTest.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [ds/src/core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L148)

Get warnings of a specific type

#### Parameters

##### type

`string`

Warning type

#### Returns

`any`[]

Filtered warnings

#### Inherited from

`StatisticalTest.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [ds/src/core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`StatisticalTest.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [ds/src/core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`StatisticalTest.isFitted`

***

### predict()

> **predict**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:424](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L424)

Predict should be implemented by supervised estimators.

#### Returns

`void`

#### Inherited from

`StatisticalTest.predict`

***

### save()

> **save**(): `string`

Defined in: [ds/src/core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`StatisticalTest.save`

***

### setParams()

> **setParams**(`params?`): `TukeyHSD`

Defined in: [ds/src/core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`TukeyHSD`

#### Inherited from

`StatisticalTest.setParams`

***

### summary()

> **summary**(): `any`

Defined in: [ds/src/stats/estimators/tests.js:37](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L37)

#### Returns

`any`

#### Inherited from

`StatisticalTest.summary`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ds/src/stats/estimators/tests.js:44](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L44)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string`

##### fitted

> **fitted**: `boolean`

##### params

> **params**: `any`

##### result

> **result**: `any`

#### Inherited from

`StatisticalTest.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [ds/src/core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`StatisticalTest.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `StatisticalTest`

Defined in: [ds/src/stats/estimators/tests.js:53](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/estimators/tests.js#L53)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

#### Returns

`StatisticalTest`

#### Inherited from

`StatisticalTest.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [ds/src/core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/estimators/estimator.js#L346)

Load model from JSON string

#### Parameters

##### jsonString

`string`

JSON representation

#### Returns

`Estimator`

Reconstructed estimator instance

#### Inherited from

`StatisticalTest.load`
