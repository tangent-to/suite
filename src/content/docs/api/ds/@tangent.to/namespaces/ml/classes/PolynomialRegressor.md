---
title: "PolynomialRegressor"
---

Defined in: [ml/estimators/PolynomialRegressor.js:15](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L15)

## Extends

- `Regressor`

## Constructors

### Constructor

> **new PolynomialRegressor**(`params?`): `PolynomialRegressor`

Defined in: [ml/estimators/PolynomialRegressor.js:16](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L16)

#### Parameters

##### params?

#### Returns

`PolynomialRegressor`

#### Overrides

`Regressor.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L27)

#### Inherited from

`Regressor._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L29)

#### Inherited from

`Regressor._warnings`

***

### coef

> **coef**: `any`

Defined in: [ml/estimators/PolynomialRegressor.js:21](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L21)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L25)

#### Inherited from

`Regressor.fitted`

***

### model

> **model**: `any`

Defined in: [ml/estimators/PolynomialRegressor.js:20](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L20)

***

### params

> **params**: `object`

Defined in: [ml/estimators/PolynomialRegressor.js:19](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L19)

#### degree

> **degree**: `number` = `2`

#### intercept

> **intercept**: `boolean` = `true`

#### omit\_missing

> **omit\_missing**: `boolean` = `true`

#### Inherited from

`Regressor.params`

## Methods

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L367)

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

`Regressor._prepareArgsForFit`

***

### \_r2()

> **\_r2**(`yTrue`, `yPred`): `number`

Defined in: [core/estimators/estimator.js:489](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L489)

#### Parameters

##### yTrue

`any`

##### yPred

`any`

#### Returns

`number`

#### Inherited from

`Regressor._r2`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Regressor._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Regressor.clearWarnings`

***

### fit()

> **fit**(`X`, `y?`, `opts?`): `PolynomialRegressor`

Defined in: [ml/estimators/PolynomialRegressor.js:34](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L34)

Fit the polynomial regression model on training data.

#### Parameters

##### X

`any`

Feature matrix (n samples × p features), or a declarative options object ({ data, X/columns, y, ... }).

##### y?

`number`[] = `null`

Continuous target values; omitted when using the declarative form.

##### opts?

Optional fitting overrides.

###### degree?

`number`

Polynomial degree.

###### intercept?

`boolean`

Whether to include an intercept term.

###### omit_missing?

`boolean`

Whether to drop rows with missing values (declarative form).

#### Returns

`PolynomialRegressor`

The fitted estimator (for chaining).

#### Overrides

`Regressor.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Regressor.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Regressor.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Regressor.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Regressor.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L148)

Get warnings of a specific type

#### Parameters

##### type

`string`

Warning type

#### Returns

`any`[]

Filtered warnings

#### Inherited from

`Regressor.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Regressor.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Regressor.isFitted`

***

### predict()

> **predict**(`X`, `options?`): `number`[]

Defined in: [ml/estimators/PolynomialRegressor.js:86](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L86)

Predict continuous target values for each sample.

#### Parameters

##### X

`any`

Feature matrix, or a declarative options object ({ data, X/columns, ... }).

##### options?

Optional prediction overrides.

###### intercept?

`boolean` = `undefined`

Whether to include the intercept term; defaults to the value used at fit time.

#### Returns

`number`[]

Predicted values (one per sample).

#### Overrides

`Regressor.predict`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Regressor.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:461](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L461)

Default R^2 scoring implementation:
  1 - SS_res / SS_tot

Accepts either:
 - arrays: score(yTrue, yPred)
 - table-style: score({ X, y, data }) where predict will be called internally

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

`Regressor.score`

***

### setParams()

> **setParams**(`params?`): `PolynomialRegressor`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`PolynomialRegressor`

#### Inherited from

`Regressor.setParams`

***

### summary()

> **summary**(): `any`

Defined in: [ml/estimators/PolynomialRegressor.js:115](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L115)

#### Returns

`any`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ml/estimators/PolynomialRegressor.js:120](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L120)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'PolynomialRegressor'`

##### coefficients

> **coefficients**: `any`

##### fitted

> **fitted**: `boolean`

##### model

> **model**: `any`

##### params

> **params**: `any`

#### Overrides

`Regressor.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Regressor.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj?`): `PolynomialRegressor`

Defined in: [ml/estimators/PolynomialRegressor.js:130](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/estimators/PolynomialRegressor.js#L130)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj?

#### Returns

`PolynomialRegressor`

#### Overrides

`Regressor.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L346)

Load model from JSON string

#### Parameters

##### jsonString

`string`

JSON representation

#### Returns

`Estimator`

Reconstructed estimator instance

#### Inherited from

`Regressor.load`
