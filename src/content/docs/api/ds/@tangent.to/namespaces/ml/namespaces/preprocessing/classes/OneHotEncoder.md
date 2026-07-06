---
title: "OneHotEncoder"
---

Defined in: [ml/preprocessing.js:449](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L449)

Encode categorical features as one-hot numeric array

## Constructors

### Constructor

> **new OneHotEncoder**(): `OneHotEncoder`

Defined in: [ml/preprocessing.js:450](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L450)

#### Returns

`OneHotEncoder`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/preprocessing.js:453](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L453)

***

### categories

> **categories**: `any`[]

Defined in: [ml/preprocessing.js:451](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L451)

***

### nFeatures

> **nFeatures**: `any`

Defined in: [ml/preprocessing.js:452](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L452)

## Methods

### \_prepareInput()

> **\_prepareInput**(`X`, `__namedParameters?`): \{ `columns`: `any`; `matrix`: `any`[]; `rows`: `any`; \} \| \{ `columns`: `any`[]; `matrix`: `any`[][]; `rows`: `any`[]; \}

Defined in: [ml/preprocessing.js:456](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L456)

#### Parameters

##### X

`any`

##### \_\_namedParameters?

###### fallbackColumns?

`any` = `null`

###### requireColumnsMessage?

`string` = `'OneHotEncoder: columns are required when using table data'`

#### Returns

\{ `columns`: `any`; `matrix`: `any`[]; `rows`: `any`; \} \| \{ `columns`: `any`[]; `matrix`: `any`[][]; `rows`: `any`[]; \}

***

### fit()

> **fit**(`X`): `OneHotEncoder`

Defined in: [ml/preprocessing.js:490](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L490)

Fit encoder by discovering categories

#### Parameters

##### X

`any`

Categorical features matrix or {data, columns}

#### Returns

`OneHotEncoder`

this

***

### fitTransform()

> **fitTransform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:587](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L587)

Fit and transform in one step

#### Parameters

##### X

`any`[][]

Categorical features

#### Returns

`number`[][]

One-hot encoded features

***

### getFeatureNames()

> **getFeatureNames**(): `string`[]

Defined in: [ml/preprocessing.js:595](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L595)

Get feature names after one-hot encoding

#### Returns

`string`[]

Feature names

***

### transform()

> **transform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:514](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L514)

Transform to one-hot encoding

#### Parameters

##### X

`any`[][]

Categorical features

#### Returns

`number`[][]

One-hot encoded features
