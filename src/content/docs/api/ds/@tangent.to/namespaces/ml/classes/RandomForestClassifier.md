---
title: "RandomForestClassifier"
---

Defined in: [ml/estimators/RandomForest.js:501](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L501)

## Extends

- `Classifier`

## Constructors

### Constructor

> **new RandomForestClassifier**(`opts?`): `RandomForestClassifier`

Defined in: [ml/estimators/RandomForest.js:502](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L502)

#### Parameters

##### opts?

#### Returns

`RandomForestClassifier`

#### Overrides

`Classifier.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L27)

#### Inherited from

`Classifier._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L29)

#### Inherited from

`Classifier._warnings`

***

### classes\_

> **classes\_**: `any`

Defined in: [core/estimators/estimator.js:515](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L515)

#### Inherited from

`Classifier.classes_`

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L25)

#### Inherited from

`Classifier.fitted`

***

### forest

> **forest**: `RandomForestBase`

Defined in: [ml/estimators/RandomForest.js:504](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L504)

***

### labelEncoder\_

> **labelEncoder\_**: `any`

Defined in: [core/estimators/estimator.js:514](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L514)

#### Inherited from

`Classifier.labelEncoder_`

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L24)

#### Inherited from

`Classifier.params`

## Accessors

### featureImportances

#### Get Signature

> **get** **featureImportances**(): `any`[] \| `number`[]

Defined in: [ml/estimators/RandomForest.js:578](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L578)

Get feature importances (MDI - Mean Decrease in Impurity)

##### Returns

`any`[] \| `number`[]

***

### oobScore

#### Get Signature

> **get** **oobScore**(): `number`

Defined in: [ml/estimators/RandomForest.js:585](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L585)

Get out-of-bag score (accuracy for classification)

##### Returns

`number`

## Methods

### \_accuracy()

> **\_accuracy**(`yTrue`, `yPred`): `number`

Defined in: [core/estimators/estimator.js:644](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L644)

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

Defined in: [core/estimators/estimator.js:606](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L606)

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

Defined in: [core/estimators/estimator.js:541](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L541)

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

Defined in: [core/estimators/estimator.js:563](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L563)

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

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L367)

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

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Classifier._repr_html_`

***

### apply()

> **apply**(`X`): `any`[][]

Defined in: [ml/estimators/RandomForest.js:592](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L592)

Apply trees in forest to X, return leaf indices

#### Parameters

##### X

`any`

#### Returns

`any`[][]

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Classifier.clearWarnings`

***

### decisionPath()

> **decisionPath**(`X`): `any`[][][]

Defined in: [ml/estimators/RandomForest.js:599](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L599)

Return decision path through the forest

#### Parameters

##### X

`any`

#### Returns

`any`[][][]

***

### fit()

> **fit**(`X`, `y?`, `sampleWeight?`): `RandomForestClassifier`

Defined in: [ml/estimators/RandomForest.js:514](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L514)

Fit the classifier on training data.

#### Parameters

##### X

`number`[][]

Feature matrix (n samples × p features)

##### y?

`number`[] \| `string`[]

Class labels

##### sampleWeight?

`number`[] = `null`

Optional per-sample weights

#### Returns

`RandomForestClassifier`

The fitted estimator (for chaining)

#### Overrides

`Classifier.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Classifier.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Classifier.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Classifier.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Classifier.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L148)

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

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Classifier.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Classifier.isFitted`

***

### predict()

> **predict**(`X`): `number`[] \| `string`[]

Defined in: [ml/estimators/RandomForest.js:545](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L545)

Predict class labels for samples in X.

#### Parameters

##### X

`number`[][]

Feature matrix (n samples × p features)

#### Returns

`number`[] \| `string`[]

Predicted class labels

#### Overrides

`Classifier.predict`

***

### predictProba()

> **predictProba**(`X`): `object`[]

Defined in: [ml/estimators/RandomForest.js:551](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/RandomForest.js#L551)

Predict probabilities - subclasses should override
Ensures model is fitted before prediction

#### Parameters

##### X

`any`

#### Returns

`object`[]

#### Overrides

`Classifier.predictProba`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Classifier.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:622](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L622)

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

> **setParams**(`params?`): `RandomForestClassifier`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`RandomForestClassifier`

#### Inherited from

`Classifier.setParams`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [core/estimators/estimator.js:302](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L302)

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

`Classifier.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Classifier.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `Estimator`

Defined in: [core/estimators/estimator.js:317](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L317)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

`any` = `{}`

#### Returns

`Estimator`

#### Inherited from

`Classifier.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L346)

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
