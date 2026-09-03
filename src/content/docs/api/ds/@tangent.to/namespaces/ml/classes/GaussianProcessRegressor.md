---
title: "GaussianProcessRegressor"
---

Defined in: [ml/estimators/GaussianProcessRegressor.js:246](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L246)

## Extends

- `Regressor`

## Constructors

### Constructor

> **new GaussianProcessRegressor**(`opts?`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:264](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L264)

#### Parameters

##### opts?

Options

###### alpha

`number` \| `number`[]

KNOWN observation noise added to
  the diagonal of K (default: 1e-10). A scalar applies the same noise to
  every point (homoscedastic); an array of length n gives a per-observation
  noise variance (heteroscedastic). Never tuned by `optimize` — to LEARN a
  noise level, add a `WhiteKernel` to the kernel instead. Same split as
  scikit-learn. Can also be supplied per-fit via `fit(X, y, { alpha })`.

###### kernel

`string` \| [`Kernel`](Kernel.md)

Kernel instance or type ('rbf', 'periodic', 'rational_quadratic')

###### lengthScale

`number`

Length scale for kernel (default: 1.0)

###### noiseLevel

`number` \| `number`[]

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

### \_alphaDiag

> **\_alphaDiag**: `number`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:336](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L336)

***

### \_alphaVector

> **\_alphaVector**: `number`[] \| `number`[][]

Defined in: [ml/estimators/GaussianProcessRegressor.js:333](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L333)

***

### \_L

> **\_L**: [`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:332](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L332)

***

### \_predictAD

> **\_predictAD**: `object`

Defined in: [ml/estimators/GaussianProcessRegressor.js:440](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L440)

#### meanFn

> **meanFn**: `any`

#### stdFn

> **stdFn**: `any`

***

### \_seed

> **\_seed**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:327](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L327)

***

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L27)

#### Inherited from

`Regressor._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L29)

#### Inherited from

`Regressor._warnings`

***

### \_XTrain

> **\_XTrain**: [`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:330](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L330)

***

### \_yMean

> **\_yMean**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:315](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L315)

***

### \_yStd

> **\_yStd**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:316](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L316)

***

### \_yTrain

> **\_yTrain**: `any`[] \| `number`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:331](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L331)

***

### alpha

> **alpha**: `number` \| `number`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:307](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L307)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L25)

#### Inherited from

`Regressor.fitted`

***

### kernel

> **kernel**: [`RBF`](RBF.md) \| [`Kernel`](Kernel.md) \| [`Periodic`](Periodic.md) \| [`RationalQuadratic`](RationalQuadratic.md) \| [`Matern`](Matern.md) \| [`ConstantKernel`](ConstantKernel.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:269](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L269)

***

### logMarginalLikelihood\_

> **logMarginalLikelihood\_**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:337](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L337)

***

### normalizeY

> **normalizeY**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:314](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L314)

***

### nRestarts

> **nRestarts**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:326](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L326)

***

### optimize

> **optimize**: `boolean`

Defined in: [ml/estimators/GaussianProcessRegressor.js:323](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L323)

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L24)

#### Inherited from

`Regressor.params`

## Methods

### \_computePosteriorCovariance()

> **\_computePosteriorCovariance**(`XTest`, `KStar`): `object`

Defined in: [ml/estimators/GaussianProcessRegressor.js:974](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L974)

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

`Regressor._prepareArgsForFit`

***

### \_r2()

> **\_r2**(`yTrue`, `yPred`): `number`

Defined in: [core/estimators/estimator.js:489](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L489)

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

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Regressor._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Regressor.clearWarnings`

***

### fit()

> **fit**(`X`, `y?`, `opts?`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:356](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L356)

Fit the GP to training data

#### Parameters

##### X

`any`

Training inputs (n samples × d
  features), or a declarative spec `{ X, columns, y, data, omit_missing, alpha }`

##### y?

`number`[] = `null`

Training targets (n)

##### opts?

Options

###### alpha?

`number` \| `number`[]

Known observation noise,
  overriding the constructor's. A scalar is added uniformly to the diagonal
  of K; an array of length n gives each observation its own noise variance
  (heteroscedastic regression), matching sklearn's array-valued `alpha`.
  Use it for measurements of unequal reliability — a poll's sampling
  variance, a sensor's per-reading error — instead of pretending they all
  carry the same noise. It is never tuned by `optimize`; for a noise level
  to be *learned*, put a `WhiteKernel` in the kernel instead.

#### Returns

`GaussianProcessRegressor`

The fitted estimator (for chaining)

#### Overrides

`Regressor.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Regressor.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Regressor.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Regressor.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Regressor.getWarnings`

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

`Regressor.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Regressor.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Regressor.isFitted`

***

### logMarginalLikelihood()

> **logMarginalLikelihood**(): `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:457](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L457)

Log marginal likelihood of the training data under the current
hyperparameters: log p(y|X) = -½ yᵀK⁻¹y - ½ log|K| - n/2 log(2π).
Requires the model to have seen training data (via fit).

#### Returns

`number`

***

### predict()

> **predict**(`X`, `opts?`): `number`[] \| \{ `covariance?`: `number`[][]; `mean`: `number`[]; `std?`: `number`[]; \}

Defined in: [ml/estimators/GaussianProcessRegressor.js:787](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L787)

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

### predictGradient()

> **predictGradient**(`x`): `object`

Defined in: [ml/estimators/GaussianProcessRegressor.js:849](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L849)

The predictive mean and standard deviation at ONE input, with their
gradients with respect to that input.

What a gradient-based search over the input space needs, where `predict`
gives the value only. Maximizing a lower confidence bound over an ionome,
say, is a smooth problem in a dozen dimensions; a quasi-Newton method
with this gradient converges in tens of evaluations where a
derivative-free simplex needs thousands and grows unreliable past ten
dimensions.

The mean is k(x, X)·α and the variance k(x, x) − ‖L⁻¹k(x, X)‖²; both are
written in @tangent.to/grad ops with x as the variable and everything the
fit produced as constants, compiled once per fit and replayed per call.
Stationary kernels only (RBF, Matérn, White, Constant and sums), so that
k(x, x) is a constant. `normalizeY` is undone as in `predict`.

#### Parameters

##### x

`number`[]

one input, length d

#### Returns

`object`

##### mean

> **mean**: `number`

##### meanGradient

> **meanGradient**: `number`[]

##### std

> **std**: `number`

##### stdGradient

> **stdGradient**: `number`[]

***

### sample()

> **sample**(`X`, `nSamples?`, `seed?`): `any`[][]

Defined in: [ml/estimators/GaussianProcessRegressor.js:886](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L886)

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

Defined in: [ml/estimators/GaussianProcessRegressor.js:923](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L923)

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

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Regressor.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:461](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L461)

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

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L285)

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

Defined in: [ml/estimators/GaussianProcessRegressor.js:1037](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L1037)

Serialize minimal model metadata.
Subclasses may override to include learned parameters.

#### Returns

`object`

##### alpha

> **alpha**: `number` \| `number`[]

##### alphaVector

> **alphaVector**: `number`[] \| `number`[][]

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

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Regressor.transform`

***

### fromJSON()

> `static` **fromJSON**(`json`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:1058](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/estimators/GaussianProcessRegressor.js#L1058)

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

`Regressor.load`
