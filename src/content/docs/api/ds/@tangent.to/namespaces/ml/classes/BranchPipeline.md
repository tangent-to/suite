---
title: "BranchPipeline"
---

Defined in: [pipeline/BranchPipeline.js:18](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L18)

## Extends

- `Estimator`

## Constructors

### Constructor

> **new BranchPipeline**(`options?`): `BranchPipeline`

Defined in: [pipeline/BranchPipeline.js:25](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L25)

#### Parameters

##### options?

###### branches

\{ \} = `{}`

Named branches (estimators or pipelines)

###### combiner

`string` \| `Function` = `'vote'`

How to combine results: 'vote', 'average', 'max', or custom function

###### weights

`number`[] = `null`

Optional weights for each branch (for weighted voting)

#### Returns

`BranchPipeline`

#### Overrides

`Estimator.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L27)

#### Inherited from

`Estimator._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L29)

#### Inherited from

`Estimator._warnings`

***

### branches

> **branches**: `object`

Defined in: [pipeline/BranchPipeline.js:27](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L27)

***

### branchNames

> **branchNames**: `string`[]

Defined in: [pipeline/BranchPipeline.js:30](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L30)

***

### combiner

> **combiner**: `string` \| `Function`

Defined in: [pipeline/BranchPipeline.js:28](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L28)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L25)

#### Inherited from

`Estimator.fitted`

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L24)

#### Inherited from

`Estimator.params`

***

### weights

> **weights**: `number`[]

Defined in: [pipeline/BranchPipeline.js:29](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L29)

## Methods

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L367)

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

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Estimator._repr_html_`

***

### agreementScore()

> **agreementScore**(`X`): `number`

Defined in: [pipeline/BranchPipeline.js:255](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L255)

Get agreement score (how often branches agree)

#### Parameters

##### X

`any`[]

Data

#### Returns

`number`

Agreement score between 0 and 1

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Estimator.clearWarnings`

***

### confidence()

> **confidence**(`X`): `number`[]

Defined in: [pipeline/BranchPipeline.js:275](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L275)

Get per-sample confidence (based on branch agreement)

#### Parameters

##### X

`any`[]

Data

#### Returns

`number`[]

Confidence scores between 0 and 1

***

### fit()

> **fit**(`X`, `y?`): `BranchPipeline`

Defined in: [pipeline/BranchPipeline.js:44](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L44)

Fit all branches

#### Parameters

##### X

`any`[]

Training data

##### y?

`any`[] = `null`

Target labels (optional)

#### Returns

`BranchPipeline`

#### Overrides

`Estimator.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Estimator.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Estimator.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Estimator.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Estimator.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L148)

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

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Estimator.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Estimator.isFitted`

***

### predict()

> **predict**(`X`): `any`[]

Defined in: [pipeline/BranchPipeline.js:62](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L62)

Predict using all branches and combine results

#### Parameters

##### X

`any`[]

Data to predict

#### Returns

`any`[]

Combined predictions

#### Overrides

`Estimator.predict`

***

### predictAll()

> **predictAll**(`X`): `object`

Defined in: [pipeline/BranchPipeline.js:88](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L88)

Get predictions from all branches without combining

#### Parameters

##### X

`any`[]

Data to predict

#### Returns

`object`

Predictions keyed by branch name

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Estimator.save`

***

### setParams()

> **setParams**(`params?`): `BranchPipeline`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`BranchPipeline`

#### Inherited from

`Estimator.setParams`

***

### summary()

> **summary**(): `any`

Defined in: [pipeline/BranchPipeline.js:300](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L300)

Summary statistics

#### Returns

`any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [pipeline/BranchPipeline.js:313](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/pipeline/BranchPipeline.js#L313)

Serialization

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'BranchPipeline'`

##### branches

> **branches**: `string`[]

##### combiner

> **combiner**: `string`

##### fitted

> **fitted**: `boolean`

##### weights

> **weights**: `number`[]

#### Overrides

`Estimator.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Estimator.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `Estimator`

Defined in: [core/estimators/estimator.js:317](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L317)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

`any` = `{}`

#### Returns

`Estimator`

#### Inherited from

`Estimator.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/estimators/estimator.js#L346)

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
