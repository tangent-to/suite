---
title: "RDA"
---

Defined in: [mva/estimators/RDA.js:57](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L57)

## Extends

- `Transformer`

## Constructors

### Constructor

> **new RDA**(`params?`): `RDA`

Defined in: [mva/estimators/RDA.js:58](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L58)

#### Parameters

##### params?

#### Returns

`RDA`

#### Overrides

`Transformer.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L27)

#### Inherited from

`Transformer._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L29)

#### Inherited from

`Transformer._warnings`

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L25)

#### Inherited from

`Transformer.fitted`

***

### model

> **model**: `any`

Defined in: [mva/estimators/RDA.js:62](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L62)

***

### params

> **params**: `object`

Defined in: [mva/estimators/RDA.js:61](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L61)

#### constrained

> **constrained**: `boolean` = `true`

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

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L367)

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

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Transformer._repr_html_`

***

### anova()

> **anova**(`options?`): `any`

Defined in: [mva/estimators/RDA.js:219](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L219)

Alias for [RDA#permutationTest](#permutationtest) mirroring R's `anova(rda_model)`.

#### Parameters

##### options?

#### Returns

`any`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Transformer.clearWarnings`

***

### fit()

> **fit**(`Y`, `X?`, `opts?`): `RDA`

Defined in: [mva/estimators/RDA.js:79](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L79)

Fit the RDA model, constraining the response table Y by the predictor table X.

Accepts a positional numeric call (`fit(Y, X[, opts])`) or a declarative
`{ data, response, predictors }` object.

#### Parameters

##### Y

`any`

Response matrix (n samples × q responses), or a declarative `{ data, response, predictors }` object

##### X?

`number`[][] = `null`

Predictor/explanatory matrix (n samples × p predictors), for the positional call form

##### opts?

Fitting options

###### constrained?

`boolean`

Whether to fit the constrained (RDA) rather than unconstrained ordination

###### omit_missing?

`boolean`

Whether to drop rows with missing values (declarative inputs)

###### scale?

`boolean`

Whether to scale columns to unit variance

###### scaling?

`number`

Ordination scaling convention

#### Returns

`RDA`

The fitted estimator (for chaining)

#### Overrides

`Transformer.fit`

***

### fitTransform()

> **fitTransform**(...`args`): `void`

Defined in: [core/estimators/estimator.js:683](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L683)

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

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Transformer.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Transformer.getParams`

***

### getScores()

> **getScores**(`type?`, `scaled?`): `any`

Defined in: [mva/estimators/RDA.js:228](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L228)

Retrieve site (scores), response loadings, or predictor constraint scores.

#### Parameters

##### type?

`"sites"` \| `"samples"` \| `"variables"` \| `"loadings"` \| `"responses"` \| `"constraints"` \| `"predictors"`

##### scaled?

`boolean` = `true`

#### Returns

`any`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Transformer.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Transformer.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L148)

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

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Transformer.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Transformer.isFitted`

***

### permutationTest()

> **permutationTest**(`options?`): `any`

Defined in: [mva/estimators/RDA.js:211](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L211)

Global permutation test of the constrained ordination (vegan `anova.cca`).

#### Parameters

##### options?

###### permutations?

`number`

###### seed?

`number`

#### Returns

`any`

pseudo-F, permutation p-value, df and inertia decomposition.

***

### predict()

> **predict**(): `void`

Defined in: [core/estimators/estimator.js:424](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L424)

Predict should be implemented by supervised estimators.

#### Returns

`void`

#### Inherited from

`Transformer.predict`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Transformer.save`

***

### setParams()

> **setParams**(`params?`): `RDA`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`RDA`

#### Inherited from

`Transformer.setParams`

***

### summary()

> **summary**(): `object`

Defined in: [mva/estimators/RDA.js:178](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L178)

#### Returns

`object`

##### constrained

> **constrained**: `any`

##### constrainedVariance

> **constrainedVariance**: `any`

##### eigenvalues

> **eigenvalues**: `any`

##### predictors

> **predictors**: `any` = `p`

##### responses

> **responses**: `any` = `q`

##### samples

> **samples**: `any` = `n`

##### scaling

> **scaling**: `any`

##### varianceExplained

> **varianceExplained**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [mva/estimators/RDA.js:263](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L263)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'RDA'`

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

> **transform**(`Y`, `X?`, `opts?`): `any`[]

Defined in: [mva/estimators/RDA.js:152](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L152)

Transform new data into RDA canonical (site) scores using the fitted model.

Accepts positional numeric matrices (`transform(Y, X)`) or a declarative
`{ data, response, predictors }` object.

#### Parameters

##### Y

`any`

Response matrix (n samples × q responses), or a declarative `{ data, response, predictors }` object

##### X?

`number`[][]

Predictor/explanatory matrix (n samples × p predictors), for the positional call form

##### opts?

Transform options

###### omit_missing?

`boolean`

Whether to drop rows with missing values (declarative inputs)

#### Returns

`any`[]

Canonical score objects, one per row (keyed `rda1`, `rda2`, ...)

#### Overrides

`Transformer.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `RDA`

Defined in: [mva/estimators/RDA.js:272](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/estimators/RDA.js#L272)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

#### Returns

`RDA`

#### Overrides

`Transformer.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/estimators/estimator.js#L346)

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
