---
title: "StandardScaler"
---

Defined in: [ds/src/ml/preprocessing.js:43](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L43)

Standardize features by removing mean and scaling to unit variance

## Constructors

### Constructor

> **new StandardScaler**(): `StandardScaler`

Defined in: [ds/src/ml/preprocessing.js:44](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L44)

#### Returns

`StandardScaler`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`[]

Defined in: [ds/src/ml/preprocessing.js:48](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L48)

***

### \_tableNaOmit

> **\_tableNaOmit**: `boolean`

Defined in: [ds/src/ml/preprocessing.js:49](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L49)

***

### means

> **means**: `any`[]

Defined in: [ds/src/ml/preprocessing.js:45](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L45)

***

### nFeatures

> **nFeatures**: `any`

Defined in: [ds/src/ml/preprocessing.js:47](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L47)

***

### stds

> **stds**: `any`[]

Defined in: [ds/src/ml/preprocessing.js:46](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L46)

## Methods

### fit()

> **fit**(`X`): `StandardScaler`

Defined in: [ds/src/ml/preprocessing.js:57](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L57)

Compute mean and standard deviation

#### Parameters

##### X

`any`

Feature matrix or {data, columns}

#### Returns

`StandardScaler`

this

***

### fitTransform()

> **fitTransform**(`X`): `number`[][]

Defined in: [ds/src/ml/preprocessing.js:164](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L164)

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

Defined in: [ds/src/ml/preprocessing.js:173](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L173)

Inverse transform (unscale)

#### Parameters

##### X

`number`[][]

Scaled features

#### Returns

`number`[][]

Original scale features

***

### transform()

> **transform**(`X`): `any`

Defined in: [ds/src/ml/preprocessing.js:103](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L103)

Standardize features

#### Parameters

##### X

`any`

Feature matrix or {data, columns}

#### Returns

`any`

Scaled features or {data, columns, X}
