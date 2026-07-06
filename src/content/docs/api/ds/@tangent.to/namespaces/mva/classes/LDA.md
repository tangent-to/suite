---
title: "LDA"
---

Defined in: [mva/estimators/LDA.js:29](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L29)

## Extends

- `Classifier`

## Constructors

### Constructor

> **new LDA**(`params?`): `LDA`

Defined in: [mva/estimators/LDA.js:33](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L33)

#### Parameters

##### params?

`any` = `{}`

optional hyperparameters (none required for basic LDA)

#### Returns

`LDA`

#### Overrides

`Classifier.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L27)

#### Inherited from

`Classifier._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L29)

#### Inherited from

`Classifier._warnings`

***

### classes\_

> **classes\_**: `any`

Defined in: [core/estimators/estimator.js:515](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L515)

#### Inherited from

`Classifier.classes_`

***

### fitted

> **fitted**: `boolean`

Defined in: [mva/estimators/LDA.js:38](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L38)

#### Inherited from

`Classifier.fitted`

***

### labelEncoder\_

> **labelEncoder\_**: `any`

Defined in: [core/estimators/estimator.js:514](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L514)

#### Inherited from

`Classifier.labelEncoder_`

***

### model

> **model**: `any`

Defined in: [mva/estimators/LDA.js:37](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L37)

***

### params

> **params**: `any`

Defined in: [mva/estimators/LDA.js:36](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L36)

#### Inherited from

`Classifier.params`

## Methods

### \_accuracy()

> **\_accuracy**(`yTrue`, `yPred`): `number`

Defined in: [core/estimators/estimator.js:644](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L644)

#### Parameters

##### yTrue

`any`

##### yPred

`any`

#### Returns

`number`

#### Inherited from

`Classifier._accuracy`

***

### \_decodeLabels()

> **\_decodeLabels**(`predictions`): `any`[]

Defined in: [core/estimators/estimator.js:606](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L606)

Decode numeric predictions to original labels

#### Parameters

##### predictions

`any`[]

Numeric predictions or label strings

#### Returns

`any`[]

Decoded labels (or original if no encoder)

#### Inherited from

`Classifier._decodeLabels`

***

### \_extractLabelEncoder()

> **\_extractLabelEncoder**(`prepared`): `boolean`

Defined in: [core/estimators/estimator.js:541](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L541)

Extract and store label encoder from prepared data

#### Parameters

##### prepared

`any`

Result from prepareXY/prepareDataset

#### Returns

`boolean`

True if encoder was found and stored

#### Inherited from

`Classifier._extractLabelEncoder`

***

### \_getClasses()

> **\_getClasses**(`preparedY`, `onlyPresentClasses?`): `any`

Defined in: [core/estimators/estimator.js:563](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L563)

Get unique classes from labels (encoded or raw)
If labelEncoder exists, preparedY is assumed to be numeric indices [0, 1, 2, ...]
Otherwise, creates classes from unique values in preparedY

#### Parameters

##### preparedY

`any`[]

Label array (numeric if encoded, or raw labels)

##### onlyPresentClasses?

`boolean` = `true`

If true, only return classes present in preparedY

#### Returns

`any`

{ numericY, classes }

#### Inherited from

`Classifier._getClasses`

***

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L367)

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

`Classifier._prepareArgsForFit`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Classifier._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Classifier.clearWarnings`

***

### fit()

> **fit**(`X`, `y?`, `opts?`): `LDA`

Defined in: [mva/estimators/LDA.js:53](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L53)

Fit the LDA model.

Supports a positional numeric call (`fit(Xarray, yarray)`) or a declarative
`{ X, y, data }` object (`fit({ X: 'col'|'[cols]', y: 'label', data: tableLike, omit_missing, encoders })`).

#### Parameters

##### X

`any`

Data matrix (n samples × p features), or a declarative `{ data, X, y }` object

##### y?

`number`[] \| `string`[]

Class labels, one per sample (positional call form)

##### opts?

Fitting options (used for the positional call form)

###### scale?

`boolean`

Whether to scale columns to unit variance

###### scaling?

`number`

Ordination scaling convention

#### Returns

`LDA`

The fitted estimator (for chaining)

#### Overrides

`Classifier.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Classifier.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Classifier.getParams`

***

### getScores()

> **getScores**(`type?`, `scaled?`): `any`

Defined in: [mva/estimators/LDA.js:149](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L149)

Retrieve site or variable scores (scaled or raw).

#### Parameters

##### type?

`"sites"` \| `"samples"` \| `"variables"` \| `"loadings"`

##### scaled?

`boolean` = `true`

#### Returns

`any`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Classifier.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Classifier.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L148)

Get warnings of a specific type

#### Parameters

##### type

`string`

Warning type

#### Returns

`any`[]

Filtered warnings

#### Inherited from

`Classifier.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Classifier.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Classifier.isFitted`

***

### predict()

> **predict**(`X`): `number`[] \| `string`[]

Defined in: [mva/estimators/LDA.js:116](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L116)

Predict class labels for X.

Accepts a numeric array or a declarative object `{ X: cols, data: tableLike }`.
Returns decoded labels if a label encoder is present, otherwise numeric predictions.

#### Parameters

##### X

`any`

Data matrix (n samples × p features), or a declarative `{ data, X }` object

#### Returns

`number`[] \| `string`[]

Predicted class label for each row

#### Overrides

`Classifier.predict`

***

### predictProba()

> **predictProba**(`_X`): `void`

Defined in: [core/estimators/estimator.js:531](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L531)

Predict probabilities - subclasses should override
Ensures model is fitted before prediction

#### Parameters

##### \_X

`any`

#### Returns

`void`

#### Inherited from

`Classifier.predictProba`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Classifier.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:622](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L622)

Default accuracy scoring:
 - score(yTrue, yPred)
 - or score({ X, y, data }) which predicts internally

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

`Classifier.score`

***

### setParams()

> **setParams**(`params?`): `LDA`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`LDA`

#### Inherited from

`Classifier.setParams`

***

### summary()

> **summary**(): `object`

Defined in: [mva/estimators/LDA.js:130](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L130)

Return a small summary of the fitted model.

#### Returns

`object`

##### classes

> **classes**: `any`

##### eigenvalues

> **eigenvalues**: `any`

##### nComponents

> **nComponents**: `any`

##### scaling

> **scaling**: `any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [mva/estimators/LDA.js:175](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L175)

JSON serialization helper.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'LDA'`

##### fitted

> **fitted**: `boolean`

##### model

> **model**: `any`

##### params

> **params**: `any`

#### Overrides

`Classifier.toJSON`

***

### transform()

> **transform**(`X`): `any`[]

Defined in: [mva/estimators/LDA.js:100](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L100)

Transform input X to discriminant scores (delegates to functional transform).

Accepts a numeric array or a declarative object `{ X: cols, data: tableLike }`.

#### Parameters

##### X

`any`

Data matrix (n samples × p features), or a declarative `{ data, X }` object

#### Returns

`any`[]

Discriminant score objects, one per row, keyed by axis (e.g. `ld1`, `ld2`, ...)

#### Overrides

`Classifier.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `LDA`

Defined in: [mva/estimators/LDA.js:187](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/estimators/LDA.js#L187)

Restore an instance from JSON produced by toJSON().

#### Parameters

##### obj?

#### Returns

`LDA`

#### Overrides

`Classifier.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L346)

Load model from JSON string

#### Parameters

##### jsonString

`string`

JSON representation

#### Returns

`Estimator`

Reconstructed estimator instance

#### Inherited from

`Classifier.load`
