---
title: "GLM"
---

Defined in: [stats/estimators/GLM.js:19](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L19)

## Extends

- `Estimator`

## Constructors

### Constructor

> **new GLM**(`params?`): `GLM`

Defined in: [stats/estimators/GLM.js:38](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L38)

#### Parameters

##### params?

Model parameters

###### alpha

`number`

Significance level for confidence intervals (default: 0.05 for 95% CIs)

###### compress

`boolean`

Compress model to save memory (default: false)

###### dispersion

`string` \| `number`

Dispersion estimation: 'estimate', 'fixed', or numeric

###### family

`string`

GLM family (gaussian, binomial, poisson, gamma, inverse_gaussian, negative_binomial)

###### intercept

`boolean`

Include intercept term (default: true)

###### keepFittedValues

`boolean`

Keep fitted values and residuals (default: true)

###### link

`string`

Link function (default: canonical link for family)

###### maxIter

`number`

Maximum iterations (default: 100)

###### multiclass

`string`

Multiclass strategy: 'ovr' (one-vs-rest), 'multinomial' (softmax), or null (binary/regression)

###### randomEffects

`any`

Random effects specification {intercept: [...], slopes: {...}}

###### regularization

`any`

Regularization {alpha, l1_ratio}

###### theta

`number`

Theta parameter for negative binomial (default: 1)

###### tol

`number`

Convergence tolerance (default: 1e-8 for GLM, 1e-6 for GLMM)

###### warnLargeDataset

`boolean`

Warn about large datasets in browser (default: true)

###### warnOnNoConvergence

`boolean`

Warn if model doesn't converge (default: true)

#### Returns

`GLM`

#### Overrides

`Estimator.constructor`

## Properties

### \_classes

> **\_classes**: `any`[]

Defined in: [stats/estimators/GLM.js:73](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L73)

***

### \_columnsX

> **\_columnsX**: `any`

Defined in: [stats/estimators/GLM.js:78](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L78)

***

### \_columnY

> **\_columnY**: `any`

Defined in: [stats/estimators/GLM.js:79](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L79)

***

### \_formula

> **\_formula**: `any`

Defined in: [stats/estimators/GLM.js:208](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L208)

***

### \_indicatorColumns

> **\_indicatorColumns**: `string`[]

Defined in: [stats/estimators/GLM.js:382](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L382)

***

### \_isMixed

> **\_isMixed**: `boolean`

Defined in: [stats/estimators/GLM.js:77](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L77)

***

### \_isMulticlass

> **\_isMulticlass**: `boolean`

Defined in: [stats/estimators/GLM.js:75](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L75)

***

### \_isMultinomial

> **\_isMultinomial**: `boolean`

Defined in: [stats/estimators/GLM.js:448](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L448)

***

### \_isMultiOutput

> **\_isMultiOutput**: `boolean`

Defined in: [stats/estimators/GLM.js:76](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L76)

***

### \_model

> **\_model**: `any`

Defined in: [stats/estimators/GLM.js:71](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L71)

***

### \_models

> **\_models**: `object`

Defined in: [stats/estimators/GLM.js:72](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L72)

***

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L27)

#### Inherited from

`Estimator._state`

***

### \_targetNames

> **\_targetNames**: `any`

Defined in: [stats/estimators/GLM.js:74](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L74)

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L29)

#### Inherited from

[`OneSampleTTest`](OneSampleTTest.md).[`_warnings`](OneSampleTTest.md#_warnings)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L25)

#### Inherited from

[`OneSampleTTest`](OneSampleTTest.md).[`fitted`](OneSampleTTest.md#fitted)

***

### params

> **params**: `object`

Defined in: [stats/estimators/GLM.js:42](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L42)

#### alpha

> **alpha**: `number`

#### compress

> **compress**: `boolean`

#### dispersion

> **dispersion**: `string` \| `number`

#### family

> **family**: `string`

#### intercept

> **intercept**: `boolean`

#### keepFittedValues

> **keepFittedValues**: `boolean`

#### link

> **link**: `string`

#### maxIter

> **maxIter**: `number`

#### multiclass

> **multiclass**: `string`

#### randomEffects

> **randomEffects**: `any`

#### regularization

> **regularization**: `any`

#### theta

> **theta**: `number`

#### tol

> **tol**: `number`

#### warnLargeDataset

> **warnLargeDataset**: `boolean`

#### warnOnNoConvergence

> **warnOnNoConvergence**: `boolean`

#### Inherited from

[`OneSampleTTest`](OneSampleTTest.md).[`params`](OneSampleTTest.md#params)

## Accessors

### coefficients

#### Get Signature

> **get** **coefficients**(): `any`

Defined in: [stats/estimators/GLM.js:85](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L85)

Get coefficients (for backward compatibility with lm interface)

##### Returns

`any`

***

### intercept

#### Get Signature

> **get** **intercept**(): `boolean`

Defined in: [stats/estimators/GLM.js:93](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L93)

Get intercept flag (for backward compatibility)

##### Returns

`boolean`

## Methods

### \_extractColumn()

> **\_extractColumn**(`columnName`, `_data`, `rows`): `any`

Defined in: [stats/estimators/GLM.js:713](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L713)

Extract a column from table data

#### Parameters

##### columnName

`any`

##### \_data

`any`

##### rows

`any`

#### Returns

`any`

***

### \_getCoefLabels()

> **\_getCoefLabels**(): `any`[]

Defined in: [stats/estimators/GLM.js:1632](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1632)

Get coefficient labels

#### Returns

`any`[]

***

### \_parseRandomEffects()

> **\_parseRandomEffects**(`opts`, `rows`): `object`

Defined in: [stats/estimators/GLM.js:686](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L686)

Parse random effects specification from table-style input

#### Parameters

##### opts

`any`

##### rows

`any`

#### Returns

`object`

##### intercept

> **intercept**: `any`

##### slopes

> **slopes**: `object`

***

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L367)

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

Defined in: [stats/estimators/GLM.js:1138](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1138)

Jupyter notebook display support
Returns HTML representation for better notebook rendering

#### Returns

`string`

#### Overrides

`Estimator._repr_html_`

***

### \_summaryGLM()

> **\_summaryGLM**(`alpha?`): `string`

Defined in: [stats/estimators/GLM.js:1161](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1161)

Format GLM summary

#### Parameters

##### alpha?

`number` = `0.05`

#### Returns

`string`

***

### \_summaryGLMHTML()

> **\_summaryGLMHTML**(): `string`

Defined in: [stats/estimators/GLM.js:1373](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1373)

Format GLM summary as HTML for Jupyter

#### Returns

`string`

***

### \_summaryGLMM()

> **\_summaryGLMM**(`alpha?`): `string`

Defined in: [stats/estimators/GLM.js:1448](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1448)

Format GLMM summary (lme4-style, no p-values)

#### Parameters

##### alpha?

`number` = `0.05`

#### Returns

`string`

***

### \_summaryGLMMHTML()

> **\_summaryGLMMHTML**(): `string`

Defined in: [stats/estimators/GLM.js:1528](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1528)

Format GLMM summary as HTML for Jupyter

#### Returns

`string`

***

### \_summaryMulticlass()

> **\_summaryMulticlass**(`alpha?`): `string`

Defined in: [stats/estimators/GLM.js:1225](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1225)

Format multiclass GLM summary

#### Parameters

##### alpha?

`number` = `0.05`

#### Returns

`string`

***

### \_summaryMultiOutput()

> **\_summaryMultiOutput**(`alpha?`): `string`

Defined in: [stats/estimators/GLM.js:1248](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1248)

Format multi-output GLM summary

#### Parameters

##### alpha?

`number` = `0.05`

#### Returns

`string`

***

### \_summaryTrueMultinomial()

> **\_summaryTrueMultinomial**(`alpha?`): `string`

Defined in: [stats/estimators/GLM.js:1289](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1289)

Format true multinomial logistic regression summary

#### Parameters

##### alpha?

`number` = `0.05`

#### Returns

`string`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Estimator.clearWarnings`

***

### confint()

> **confint**(`alpha?`): `any`[]

Defined in: [stats/estimators/GLM.js:1036](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1036)

Compute confidence intervals for coefficients

#### Parameters

##### alpha?

`number` = `null`

Significance level (default: 0.05 for 95% CIs)

#### Returns

`any`[]

Array of {lower, upper} for each coefficient

***

### fit()

> **fit**(...`args`): `GLM`

Defined in: [stats/estimators/GLM.js:108](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L108)

Fit the GLM or GLMM

Supports multiple calling conventions:
- fit(X, y)
- fit(X, y, weights, offset)
- fit({ X, y, data })
- fit({ X, y, groups, data }) for mixed models
- fit('y ~ x1 + x2', data) - R-style formula
- fit({ formula: 'y ~ x1 + x2', data }) - formula in object

#### Parameters

##### args

...`any`[]

#### Returns

`GLM`

#### Overrides

`Estimator.fit`

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Estimator.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Estimator.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Estimator.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Estimator.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L148)

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

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Estimator.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Estimator.isFitted`

***

### predict()

> **predict**(`X`, `options?`): `any`[]

Defined in: [stats/estimators/GLM.js:941](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L941)

Predict from the fitted model

#### Parameters

##### X

`any`

Predictors or table-style object

##### options?

Prediction options

###### allowNewGroups

`boolean`

For GLMM: allow new groups (default: true)

###### interval

`boolean`

Compute confidence intervals (default: false)

###### level

`number`

Confidence level (default: 0.95)

###### type

`string`

Prediction type: 'link', 'response', 'class' (multiclass), 'proba' (multiclass)

#### Returns

`any`[]

Predictions

#### Overrides

`Estimator.predict`

***

### pvalues()

> **pvalues**(): `number`[]

Defined in: [stats/estimators/GLM.js:1059](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1059)

Compute p-values for coefficients (Wald test)

Note: For mixed models, p-values are controversial and should be
interpreted with caution. Prefer confidence intervals.

#### Returns

`number`[]

P-values for each coefficient

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Estimator.save`

***

### score()

> **score**(`yTrue`, `yPred`, ...`args`): `number`

Defined in: [stats/estimators/GLM.js:1660](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1660)

Score the model (R² for regression families, accuracy for binomial/multiclass)

#### Parameters

##### yTrue

`any`

##### yPred

`any`

##### args

...`any`[]

#### Returns

`number`

***

### setParams()

> **setParams**(`params?`): `GLM`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`GLM`

#### Inherited from

`Estimator.setParams`

***

### summary()

> **summary**(`options?`): `string`

Defined in: [stats/estimators/GLM.js:1015](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1015)

Get model summary (lme4-style for mixed models)

#### Parameters

##### options?

Summary options

###### alpha

`number`

Significance level for CIs (default: from constructor)

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [stats/estimators/GLM.js:1709](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1709)

Serialize to JSON

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'GLM'`

##### classes

> **classes**: `any`[]

##### columnsX

> **columnsX**: `any`

##### columnY

> **columnY**: `any`

##### fitted

> **fitted**: `boolean`

##### isMixed

> **isMixed**: `boolean`

##### isMulticlass

> **isMulticlass**: `boolean`

##### isMultinomial

> **isMultinomial**: `boolean`

##### isMultiOutput

> **isMultiOutput**: `boolean`

##### model

> **model**: `any`

##### models

> **models**: `object`

###### Index Signature

\[`k`: `string`\]: `any`

##### params

> **params**: `object`

###### params.alpha

> **alpha**: `number`

###### params.compress

> **compress**: `boolean`

###### params.dispersion

> **dispersion**: `string` \| `number`

###### params.family

> **family**: `string`

###### params.intercept

> **intercept**: `boolean`

###### params.keepFittedValues

> **keepFittedValues**: `boolean`

###### params.link

> **link**: `string`

###### params.maxIter

> **maxIter**: `number`

###### params.multiclass

> **multiclass**: `string`

###### params.randomEffects

> **randomEffects**: `any`

###### params.regularization

> **regularization**: `any`

###### params.theta

> **theta**: `number`

###### params.tol

> **tol**: `number`

###### params.warnLargeDataset

> **warnLargeDataset**: `boolean`

###### params.warnOnNoConvergence

> **warnOnNoConvergence**: `boolean`

##### targetNames

> **targetNames**: `any`

#### Overrides

`Estimator.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Estimator.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj`): `GLM`

Defined in: [stats/estimators/GLM.js:1734](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/stats/estimators/GLM.js#L1734)

Deserialize from JSON

#### Parameters

##### obj

`any`

#### Returns

`GLM`

#### Overrides

`Estimator.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/core/estimators/estimator.js#L346)

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
