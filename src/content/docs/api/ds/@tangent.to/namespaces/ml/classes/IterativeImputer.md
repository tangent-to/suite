---
title: "IterativeImputer"
---

Defined in: [ml/impute.js:750](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L750)

Multivariate imputation using chained equations (MICE algorithm)
Compatible with sklearn.impute.IterativeImputer

Models each feature with missing values as a function of other features,
and uses that estimate for imputation. It does so in an iterated round-robin
fashion: at each step, a feature column is designated as output y and the other
feature columns are treated as inputs X. A regressor is fit on (X, y) for known
values and used to predict missing values of y.

## Example

```ts
const imputer = new IterativeImputer({ max_iter: 10 });
imputer.fit(X_train);
const X_filled = imputer.transform(X_test);
```

## Constructors

### Constructor

> **new IterativeImputer**(`options?`): `IterativeImputer`

Defined in: [ml/impute.js:761](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L761)

#### Parameters

##### options?

###### copy

`boolean` = `true`

If true, create copy of X (default: true)

###### initial_strategy

`string` = `"mean"`

Initial imputation strategy (default: 'mean')

###### max_iter

`number` = `10`

Maximum number of imputation rounds (default: 10)

###### max_value

`number` = `Infinity`

Maximum possible imputed value (default: Infinity)

###### min_value

`number` = `-Infinity`

Minimum possible imputed value (default: -Infinity)

###### tol

`number` = `1e-3`

Tolerance for convergence (default: 1e-3)

###### verbose

`boolean` = `false`

Print progress (default: false)

#### Returns

`IterativeImputer`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/impute.js:779](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L779)

***

### copy

> **copy**: `boolean`

Defined in: [ml/impute.js:776](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L776)

***

### initial\_imputer\_

> **initial\_imputer\_**: [`SimpleImputer`](SimpleImputer.md)

Defined in: [ml/impute.js:778](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L778)

***

### initial\_strategy

> **initial\_strategy**: `string`

Defined in: [ml/impute.js:770](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L770)

***

### max\_iter

> **max\_iter**: `number`

Defined in: [ml/impute.js:771](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L771)

***

### max\_value

> **max\_value**: `number`

Defined in: [ml/impute.js:774](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L774)

***

### min\_value

> **min\_value**: `number`

Defined in: [ml/impute.js:773](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L773)

***

### n\_iter\_

> **n\_iter\_**: `number`

Defined in: [ml/impute.js:780](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L780)

***

### nFeatures\_

> **nFeatures\_**: `number`

Defined in: [ml/impute.js:777](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L777)

***

### tol

> **tol**: `number`

Defined in: [ml/impute.js:772](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L772)

***

### verbose

> **verbose**: `boolean`

Defined in: [ml/impute.js:775](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L775)

## Methods

### \_fitLinearRegression()

> **\_fitLinearRegression**(`X`, `y`): `any`

Defined in: [ml/impute.js:789](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L789)

Fit a simple linear regression using pseudoinverse

#### Parameters

##### X

`number`[][]

Features

##### y

`number`[]

Target

#### Returns

`any`

Model with coefficients and predict function

***

### \_imputeFeature()

> **\_imputeFeature**(`X`, `featureIdx`, `missing_mask`): `number`[]

Defined in: [ml/impute.js:827](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L827)

Impute a single feature using other features

#### Parameters

##### X

`number`[][]

Data matrix (current working copy, all values filled)

##### featureIdx

`number`

Index of feature to impute

##### missing\_mask

`boolean`[][]

Original missingness mask

#### Returns

`number`[]

Imputed values for this feature

***

### fit()

> **fit**(`X`): `IterativeImputer`

Defined in: [ml/impute.js:907](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L907)

Fit the imputer on training data

#### Parameters

##### X

`any`

Training data, table object, or {data, columns} format

#### Returns

`IterativeImputer`

this

***

### fit\_transform()

> **fit\_transform**(`X`): `number`[][]

Defined in: [ml/impute.js:1061](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L1061)

Fit and transform in one step

#### Parameters

##### X

`any`

Data to fit and transform

#### Returns

`number`[][]

Transformed data

***

### transform()

> **transform**(`X`): `any`[] \| `number`[][]

Defined in: [ml/impute.js:941](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/impute.js#L941)

Transform data by filling missing values using MICE

#### Parameters

##### X

`any`

Data to transform, table object, or {data, columns} format

#### Returns

`any`[] \| `number`[][]

Transformed data (array if input was table)
