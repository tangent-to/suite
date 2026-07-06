---
title: "GaussianProcessRegressor"
---

Defined in: [ml/estimators/GaussianProcessRegressor.js:204](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L204)

## Extends

- `Regressor`

## Constructors

### Constructor

> **new GaussianProcessRegressor**(`opts?`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:217](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L217)

#### Parameters

##### opts?

Options

###### alpha

`number`

Noise level / regularization (default: 1e-10)

###### kernel

`string` \| [`Kernel`](Kernel.md)

Kernel instance or type ('rbf', 'periodic', 'rational_quadratic')

###### lengthScale

`number`

Length scale for kernel (default: 1.0)

###### noiseLevel

`number`

Alias for alpha

###### normalizeY

`boolean`

Standardize the target (center + scale to
  unit variance) before fitting; predictions, std, covariance and posterior
  samples are back-transformed. Alias: `normalize_y` (default: false)

###### period

`number`

Period for periodic kernel

###### variance

`number`

Signal variance (default: 1.0)

#### Returns

`GaussianProcessRegressor`

#### Overrides

`Regressor.constructor`

## Properties

### \_alphaVector

> **\_alphaVector**: `any`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:277](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L277)

***

### \_L

> **\_L**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:276](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L276)

***

### \_seed

> **\_seed**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:271](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L271)

***

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L27)

#### Inherited from

`Regressor._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L29)

#### Inherited from

`Regressor._warnings`

***

### \_XTrain

> **\_XTrain**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:274](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L274)

***

### \_yMean

> **\_yMean**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:260](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L260)

***

### \_yStd

> **\_yStd**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:261](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L261)

***

### \_yTrain

> **\_yTrain**: `any`[] \| `number`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:275](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L275)

***

### alpha

> **alpha**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:252](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L252)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L25)

#### Inherited from

`Regressor.fitted`

***

### kernel

> **kernel**: [`RBF`](RBF.md) \| [`Kernel`](Kernel.md) \| [`Periodic`](Periodic.md) \| [`RationalQuadratic`](RationalQuadratic.md) \| [`Matern`](Matern.md) \| [`ConstantKernel`](ConstantKernel.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:222](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L222)

***

### logMarginalLikelihood\_

> **logMarginalLikelihood\_**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:278](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L278)

***

### normalizeY

> **normalizeY**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:259](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L259)

***

### nRestarts

> **nRestarts**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:270](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L270)

***

### optimize

> **optimize**: `boolean`

Defined in: [ml/estimators/GaussianProcessRegressor.js:267](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L267)

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L24)

#### Inherited from

`Regressor.params`

## Methods

### \_backSubstitution()

> **\_backSubstitution**(`L`, `b`): `any`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:606](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L606)

#### Parameters

##### L

`any`

##### b

`any`

#### Returns

`any`[]

***

### \_computePosteriorCovariance()

> **\_computePosteriorCovariance**(`XTest`, `KStar`): `object`

Defined in: [ml/estimators/GaussianProcessRegressor.js:543](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L543)

#### Parameters

##### XTest

`any`

##### KStar

`any`

#### Returns

`object`

##### covarianceMatrix

> **covarianceMatrix**: `any`

##### diag

> **diag**: `any`[]

***

### \_forwardSubstitution()

> **\_forwardSubstitution**(`L`, `b`): `any`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:591](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L591)

#### Parameters

##### L

`any`

##### b

`any`

#### Returns

`any`[]

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

`Regressor._prepareArgsForFit`

***

### \_r2()

> **\_r2**(`yTrue`, `yPred`): `number`

Defined in: [core/estimators/estimator.js:489](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L489)

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

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Regressor._repr_html_`

***

### \_solveCholesky()

> **\_solveCholesky**(`L`, `y`): `any`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:586](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L586)

#### Parameters

##### L

`any`

##### y

`any`

#### Returns

`any`[]

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Regressor.clearWarnings`

***

### fit()

> **fit**(`X`, `y?`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:288](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L288)

Fit the GP to training data

#### Parameters

##### X

`any`

Training inputs (n samples × d
  features), or a declarative spec `{ X, columns, y, data, omit_missing }`

##### y?

`number`[] = `null`

Training targets (n)

#### Returns

`GaussianProcessRegressor`

The fitted estimator (for chaining)

#### Overrides

`Regressor.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Regressor.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Regressor.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Regressor.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Regressor.getWarnings`

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

`Regressor.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Regressor.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Regressor.isFitted`

***

### logMarginalLikelihood()

> **logMarginalLikelihood**(): `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:360](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L360)

Log marginal likelihood of the training data under the current
hyperparameters: log p(y|X) = -½ yᵀK⁻¹y - ½ log|K| - n/2 log(2π).
Requires the model to have seen training data (via fit).

#### Returns

`number`

***

### predict()

> **predict**(`X`, `opts?`): `number`[] \| \{ `covariance?`: `number`[][]; `mean`: `number`[]; `std?`: `number`[]; \}

Defined in: [ml/estimators/GaussianProcessRegressor.js:439](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L439)

Predict at test points

#### Parameters

##### X

`number`[][]

Test inputs (m samples × d features)

##### opts?

Options

###### returnCov?

`boolean`

Return the full posterior covariance

###### returnStd?

`boolean`

Return per-point standard deviations

#### Returns

`number`[] \| \{ `covariance?`: `number`[][]; `mean`: `number`[]; `std?`: `number`[]; \}

Predicted means, or an object with mean and std/covariance when requested

#### Overrides

`Regressor.predict`

***

### sample()

> **sample**(`X`, `nSamples?`, `seed?`): `any`[][]

Defined in: [ml/estimators/GaussianProcessRegressor.js:483](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L483)

Sample from the posterior distribution

#### Parameters

##### X

`any`[]

Test inputs

##### nSamples?

`number` = `1`

Number of samples

##### seed?

`number` = `null`

Random seed for reproducibility

#### Returns

`any`[][]

Array of samples

***

### samplePrior()

> **samplePrior**(`X`, `nSamples?`, `seed?`): `any`[][]

Defined in: [ml/estimators/GaussianProcessRegressor.js:520](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L520)

Sample from the prior (unfitted GP)

#### Parameters

##### X

`any`[]

Input points

##### nSamples?

`number` = `1`

Number of samples

##### seed?

`number` = `null`

Random seed for reproducibility

#### Returns

`any`[][]

Array of samples

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Regressor.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:461](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L461)

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

> **setParams**(`params?`): `GaussianProcessRegressor`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`GaussianProcessRegressor`

#### Inherited from

`Regressor.setParams`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [ml/estimators/GaussianProcessRegressor.js:621](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L621)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### alpha

> **alpha**: `number`

##### alphaVector

> **alphaVector**: `any`[]

##### fitted

> **fitted**: `boolean`

##### kernel

> **kernel**: `object`

###### kernel.params

> **params**: `any`

###### kernel.type

> **type**: `string`

##### L

> **L**: `any`

##### normalizeY

> **normalizeY**: `any`

##### type

> **type**: `string` = `'GaussianProcessRegressor'`

##### XTrain

> **XTrain**: `any`

##### yMean

> **yMean**: `number`

##### yStd

> **yStd**: `number`

##### yTrain

> **yTrain**: `any`[] \| `number`[]

#### Overrides

`Regressor.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Regressor.transform`

***

### fromJSON()

> `static` **fromJSON**(`json`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:640](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/estimators/GaussianProcessRegressor.js#L640)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### json

`any`

#### Returns

`GaussianProcessRegressor`

#### Overrides

`Regressor.fromJSON`

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

`Regressor.load`
