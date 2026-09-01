---
title: "GaussianProcessRegressor"
---

Defined in: [ml/estimators/GaussianProcessRegressor.js:232](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L232)

## Extends

- `Regressor`

## Constructors

### Constructor

> **new GaussianProcessRegressor**(`opts?`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:250](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L250)

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

Defined in: [ml/estimators/GaussianProcessRegressor.js:322](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L322)

***

### \_alphaVector

> **\_alphaVector**: `number`[] \| `number`[][]

Defined in: [ml/estimators/GaussianProcessRegressor.js:319](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L319)

***

### \_L

> **\_L**: [`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:318](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L318)

***

### \_seed

> **\_seed**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:313](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L313)

***

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L27)

#### Inherited from

`Regressor._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L29)

#### Inherited from

`Regressor._warnings`

***

### \_XTrain

> **\_XTrain**: [`Matrix`](../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:316](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L316)

***

### \_yMean

> **\_yMean**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:301](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L301)

***

### \_yStd

> **\_yStd**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:302](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L302)

***

### \_yTrain

> **\_yTrain**: `any`[] \| `number`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:317](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L317)

***

### alpha

> **alpha**: `number` \| `number`[]

Defined in: [ml/estimators/GaussianProcessRegressor.js:293](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L293)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L25)

#### Inherited from

`Regressor.fitted`

***

### kernel

> **kernel**: [`RBF`](RBF.md) \| [`Kernel`](Kernel.md) \| [`Periodic`](Periodic.md) \| [`RationalQuadratic`](RationalQuadratic.md) \| [`Matern`](Matern.md) \| [`ConstantKernel`](ConstantKernel.md)

Defined in: [ml/estimators/GaussianProcessRegressor.js:255](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L255)

***

### logMarginalLikelihood\_

> **logMarginalLikelihood\_**: `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:323](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L323)

***

### normalizeY

> **normalizeY**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:300](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L300)

***

### nRestarts

> **nRestarts**: `any`

Defined in: [ml/estimators/GaussianProcessRegressor.js:312](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L312)

***

### optimize

> **optimize**: `boolean`

Defined in: [ml/estimators/GaussianProcessRegressor.js:309](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L309)

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L24)

#### Inherited from

`Regressor.params`

## Methods

### \_computePosteriorCovariance()

> **\_computePosteriorCovariance**(`XTest`, `KStar`): `object`

Defined in: [ml/estimators/GaussianProcessRegressor.js:904](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L904)

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

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L367)

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

Defined in: [core/estimators/estimator.js:489](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L489)

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

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Regressor._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Regressor.clearWarnings`

***

### fit()

> **fit**(`X`, `y?`, `opts?`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:342](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L342)

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

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Regressor.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Regressor.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Regressor.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Regressor.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L148)

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

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Regressor.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Regressor.isFitted`

***

### logMarginalLikelihood()

> **logMarginalLikelihood**(): `number`

Defined in: [ml/estimators/GaussianProcessRegressor.js:442](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L442)

Log marginal likelihood of the training data under the current
hyperparameters: log p(y|X) = -½ yᵀK⁻¹y - ½ log|K| - n/2 log(2π).
Requires the model to have seen training data (via fit).

#### Returns

`number`

***

### predict()

> **predict**(`X`, `opts?`): `number`[] \| \{ `covariance?`: `number`[][]; `mean`: `number`[]; `std?`: `number`[]; \}

Defined in: [ml/estimators/GaussianProcessRegressor.js:767](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L767)

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

Defined in: [ml/estimators/GaussianProcessRegressor.js:816](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L816)

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

Defined in: [ml/estimators/GaussianProcessRegressor.js:853](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L853)

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

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Regressor.save`

***

### score()

> **score**(`yTrueOrOpts`, `yPred`, `_opts?`, ...`args?`): `number`

Defined in: [core/estimators/estimator.js:461](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L461)

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

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L285)

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

Defined in: [ml/estimators/GaussianProcessRegressor.js:967](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L967)

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

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Regressor.transform`

***

### fromJSON()

> `static` **fromJSON**(`json`): `GaussianProcessRegressor`

Defined in: [ml/estimators/GaussianProcessRegressor.js:988](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/estimators/GaussianProcessRegressor.js#L988)

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

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/estimators/estimator.js#L346)

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
