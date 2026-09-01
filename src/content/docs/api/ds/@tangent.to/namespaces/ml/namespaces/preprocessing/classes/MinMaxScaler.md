---
title: "MinMaxScaler"
---

Defined in: [ml/preprocessing.js:175](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L175)

Scale features to a given range [min, max]

## Constructors

### Constructor

> **new MinMaxScaler**(`__namedParameters?`): `MinMaxScaler`

Defined in: [ml/preprocessing.js:176](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L176)

#### Parameters

##### \_\_namedParameters?

###### featureRange?

`number`[] = `...`

#### Returns

`MinMaxScaler`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`[]

Defined in: [ml/preprocessing.js:181](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L181)

***

### \_tableNaOmit

> **\_tableNaOmit**: `boolean`

Defined in: [ml/preprocessing.js:182](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L182)

***

### dataMax

> **dataMax**: `any`[]

Defined in: [ml/preprocessing.js:179](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L179)

***

### dataMin

> **dataMin**: `any`[]

Defined in: [ml/preprocessing.js:178](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L178)

***

### featureRange

> **featureRange**: `number`[]

Defined in: [ml/preprocessing.js:177](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L177)

***

### nFeatures

> **nFeatures**: `number`

Defined in: [ml/preprocessing.js:180](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L180)

## Methods

### fit()

> **fit**(`X`): `MinMaxScaler`

Defined in: [ml/preprocessing.js:190](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L190)

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

Defined in: [ml/preprocessing.js:282](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L282)

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

Defined in: [ml/preprocessing.js:291](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L291)

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

Defined in: [ml/preprocessing.js:222](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L222)

Scale features to range

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`number`[][]

Scaled features
