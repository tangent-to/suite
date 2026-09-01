---
title: "OneHotEncoder"
---

Defined in: [ml/preprocessing.js:432](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L432)

Encode categorical features as one-hot numeric array

## Constructors

### Constructor

> **new OneHotEncoder**(): `OneHotEncoder`

Defined in: [ml/preprocessing.js:433](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L433)

#### Returns

`OneHotEncoder`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/preprocessing.js:436](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L436)

***

### categories

> **categories**: `any`[]

Defined in: [ml/preprocessing.js:434](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L434)

***

### nFeatures

> **nFeatures**: `any`

Defined in: [ml/preprocessing.js:435](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L435)

## Methods

### \_prepareInput()

> **\_prepareInput**(`X`, `__namedParameters?`): \{ `columns`: `any`; `matrix`: `any`[]; `rows`: `any`; \} \| \{ `columns`: `any`[]; `matrix`: `any`[][]; `rows`: `any`[]; \}

Defined in: [ml/preprocessing.js:439](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L439)

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

Defined in: [ml/preprocessing.js:473](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L473)

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

Defined in: [ml/preprocessing.js:570](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L570)

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

Defined in: [ml/preprocessing.js:578](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L578)

Get feature names after one-hot encoding

#### Returns

`string`[]

Feature names

***

### transform()

> **transform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:497](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L497)

Transform to one-hot encoding

#### Parameters

##### X

`any`[][]

Categorical features

#### Returns

`number`[][]

One-hot encoded features
