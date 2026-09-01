---
title: "StandardScaler"
---

Defined in: [ml/preprocessing.js:43](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L43)

Standardize features by removing mean and scaling to unit variance

## Constructors

### Constructor

> **new StandardScaler**(): `StandardScaler`

Defined in: [ml/preprocessing.js:44](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L44)

#### Returns

`StandardScaler`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`[]

Defined in: [ml/preprocessing.js:48](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L48)

***

### \_tableNaOmit

> **\_tableNaOmit**: `boolean`

Defined in: [ml/preprocessing.js:49](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L49)

***

### means

> **means**: `any`[]

Defined in: [ml/preprocessing.js:45](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L45)

***

### nFeatures

> **nFeatures**: `any`

Defined in: [ml/preprocessing.js:47](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L47)

***

### stds

> **stds**: `any`[]

Defined in: [ml/preprocessing.js:46](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L46)

## Methods

### fit()

> **fit**(`X`): `StandardScaler`

Defined in: [ml/preprocessing.js:57](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L57)

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

Defined in: [ml/preprocessing.js:147](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L147)

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

Defined in: [ml/preprocessing.js:156](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L156)

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

Defined in: [ml/preprocessing.js:88](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L88)

Standardize features

#### Parameters

##### X

`any`

Feature matrix or {data, columns}

#### Returns

`any`

Scaled features or {data, columns, X}
