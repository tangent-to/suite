---
title: "MinMaxScaler"
---

Defined in: [ml/preprocessing.js:192](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L192)

Scale features to a given range [min, max]

## Constructors

### Constructor

> **new MinMaxScaler**(`__namedParameters?`): `MinMaxScaler`

Defined in: [ml/preprocessing.js:193](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L193)

#### Parameters

##### \_\_namedParameters?

###### featureRange?

`number`[] = `...`

#### Returns

`MinMaxScaler`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`[]

Defined in: [ml/preprocessing.js:198](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L198)

***

### \_tableNaOmit

> **\_tableNaOmit**: `boolean`

Defined in: [ml/preprocessing.js:199](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L199)

***

### dataMax

> **dataMax**: `any`[]

Defined in: [ml/preprocessing.js:196](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L196)

***

### dataMin

> **dataMin**: `any`[]

Defined in: [ml/preprocessing.js:195](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L195)

***

### featureRange

> **featureRange**: `number`[]

Defined in: [ml/preprocessing.js:194](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L194)

***

### nFeatures

> **nFeatures**: `number`

Defined in: [ml/preprocessing.js:197](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L197)

## Methods

### fit()

> **fit**(`X`): `MinMaxScaler`

Defined in: [ml/preprocessing.js:207](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L207)

Compute min and max for scaling

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`MinMaxScaler`

this

***

### fitTransform()

> **fitTransform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:299](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L299)

Fit and transform in one step

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`number`[][]

Scaled features

***

### inverseTransform()

> **inverseTransform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:308](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L308)

Inverse transform

#### Parameters

##### X

`number`[][]

Scaled features

#### Returns

`number`[][]

Original scale features

***

### transform()

> **transform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:239](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L239)

Scale features to range

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`number`[][]

Scaled features
