---
title: "SimpleImputer"
---

Defined in: [ml/impute.js:148](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L148)

Simple imputation strategies for missing values
Compatible with sklearn.impute.SimpleImputer

## Example

```ts
const imputer = new SimpleImputer({ strategy: 'mean' });
imputer.fit(X_train);
const X_filled = imputer.transform(X_test);
```

## Constructors

### Constructor

> **new SimpleImputer**(`options?`): `SimpleImputer`

Defined in: [ml/impute.js:155](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L155)

#### Parameters

##### options?

###### copy

`boolean` = `true`

If true, create copy of X (default: true)

###### fill_value

`string` \| `number` = `null`

Value to use for 'constant' strategy

###### strategy

`string` = `"mean"`

'mean', 'median', 'most_frequent', or 'constant' (default: 'mean')

#### Returns

`SimpleImputer`

## Properties

### \_groupModels

> **\_groupModels**: `Map`\<`any`, `any`\>

Defined in: [ml/impute.js:175](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L175)

***

### \_originalData

> **\_originalData**: `any`

Defined in: [ml/impute.js:176](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L176)

***

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/impute.js:174](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L174)

***

### copy

> **copy**: `boolean`

Defined in: [ml/impute.js:171](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L171)

***

### fill\_value

> **fill\_value**: `string` \| `number`

Defined in: [ml/impute.js:170](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L170)

***

### nFeatures\_

> **nFeatures\_**: `number`

Defined in: [ml/impute.js:173](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L173)

***

### statistics\_

> **statistics\_**: `any`[]

Defined in: [ml/impute.js:172](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L172)

***

### strategy

> **strategy**: `string`

Defined in: [ml/impute.js:169](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L169)

## Methods

### \_fitSingleModel()

> **\_fitSingleModel**(`X`): `any`

Defined in: [ml/impute.js:262](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L262)

Internal method to fit a single imputation model

#### Parameters

##### X

`number`[][]

2D array of numeric data

#### Returns

`any`

Model statistics

***

### \_transformWithModel()

> **\_transformWithModel**(`X`, `statistics`): `number`[][]

Defined in: [ml/impute.js:394](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L394)

Internal method to transform data with specific statistics

#### Parameters

##### X

`number`[][]

Data to transform

##### statistics

`number`[]

Statistics to use for imputation

#### Returns

`number`[][]

Transformed data

***

### fit()

> **fit**(`X`): `SimpleImputer`

Defined in: [ml/impute.js:184](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L184)

Fit the imputer on training data

#### Parameters

##### X

`any`

Training data, table object, or {data, columns, group} format

#### Returns

`SimpleImputer`

this

***

### fit\_transform()

> **fit\_transform**(`X`): `number`[][]

Defined in: [ml/impute.js:415](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L415)

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

Defined in: [ml/impute.js:311](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/impute.js#L311)

Transform data by filling missing values

#### Parameters

##### X

`any`

Data to transform, table object, or {data, columns, group} format

#### Returns

`any`[] \| `number`[][]

Transformed data (array if input was table)
