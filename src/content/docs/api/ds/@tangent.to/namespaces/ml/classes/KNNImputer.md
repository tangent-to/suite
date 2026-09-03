---
title: "KNNImputer"
---

Defined in: [ml/impute.js:434](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L434)

Imputation using k-Nearest Neighbors
Compatible with sklearn.impute.KNNImputer

Missing values are imputed using the mean value from the k nearest
neighbors found in the training set.

## Example

```ts
const imputer = new KNNImputer({ n_neighbors: 5 });
imputer.fit(X_train);
const X_filled = imputer.transform(X_test);
```

## Constructors

### Constructor

> **new KNNImputer**(`options?`): `KNNImputer`

Defined in: [ml/impute.js:442](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L442)

#### Parameters

##### options?

###### copy

`boolean` = `true`

If true, create copy of X (default: true)

###### metric

`Function` = `null`

Distance function (default: euclidean)

###### n_neighbors

`number` = `5`

Number of neighbors to use (default: 5)

###### weights

`string` = `"uniform"`

'uniform' or 'distance' (default: 'uniform')

#### Returns

`KNNImputer`

## Properties

### \_columnTypes

> **\_columnTypes**: `any`

Defined in: [ml/impute.js:501](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L501)

***

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/impute.js:458](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L458)

***

### \_useGowerDistance

> **\_useGowerDistance**: `boolean`

Defined in: [ml/impute.js:506](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L506)

***

### copy

> **copy**: `boolean`

Defined in: [ml/impute.js:455](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L455)

***

### metric

> **metric**: `Function`

Defined in: [ml/impute.js:454](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L454)

***

### n\_neighbors

> **n\_neighbors**: `number`

Defined in: [ml/impute.js:452](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L452)

***

### nFeatures\_

> **nFeatures\_**: `number`

Defined in: [ml/impute.js:457](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L457)

***

### weights

> **weights**: `string`

Defined in: [ml/impute.js:453](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L453)

***

### X\_

> **X\_**: `any`[]

Defined in: [ml/impute.js:456](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L456)

## Methods

### \_euclideanDistance()

> **\_euclideanDistance**(`a`, `b`): `number`

Defined in: [ml/impute.js:464](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L464)

Euclidean distance between two vectors (ignoring missing values)

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`number`

***

### \_findNeighbors()

> **\_findNeighbors**(`row`, `k`, `excludeIdx?`): `object`[]

Defined in: [ml/impute.js:677](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L677)

Find k nearest neighbors for a given row

#### Parameters

##### row

`any`

##### k

`any`

##### excludeIdx?

`number` = `-1`

Row index to exclude (-1 for none)

#### Returns

`object`[]

***

### fit()

> **fit**(`X`): `KNNImputer`

Defined in: [ml/impute.js:491](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L491)

Fit the imputer on training data

#### Parameters

##### X

`any`

Training data, table object, or {data, columns} format

#### Returns

`KNNImputer`

this

***

### fit\_transform()

> **fit\_transform**(`X`): `any`[] \| `number`[][]

Defined in: [ml/impute.js:710](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L710)

Fit and transform in one step

#### Parameters

##### X

`any`

Data to fit and transform

#### Returns

`any`[] \| `number`[][]

Transformed data

***

### transform()

> **transform**(`X`, `exclude_indices?`): `any`[] \| `number`[][]

Defined in: [ml/impute.js:535](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/impute.js#L535)

Transform data by filling missing values using KNN

#### Parameters

##### X

`any`

Data to transform, table object, or {data, columns} format

##### exclude\_indices?

`number`[] = `[]`

Row indices to exclude from neighbors (for fit_transform)

#### Returns

`any`[] \| `number`[][]

Transformed data (array if input was table)
