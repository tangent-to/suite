---
title: "LocalOutlierFactor"
---

Defined in: [ml/outliers.js:663](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L663)

Local Outlier Factor for outlier detection
Compatible with sklearn.neighbors.LocalOutlierFactor

Detects outliers using local density deviation.
LOF > 1 indicates outlier (lower local density than neighbors).

## Example

```ts
const lof = new LocalOutlierFactor({ n_neighbors: 20, contamination: 0.1 });
lof.fit(X_train);
const predictions = lof.predict(X_test);  // -1 for outliers, 1 for inliers
```

## Constructors

### Constructor

> **new LocalOutlierFactor**(`options?`): `LocalOutlierFactor`

Defined in: [ml/outliers.js:672](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L672)

#### Parameters

##### options?

###### algorithm

`string` = `"auto"`

'auto' (only option for now)

###### contamination

`number` = `0.1`

Expected proportion of outliers (default: 0.1)

###### metric

`Function` = `null`

Distance function (default: euclidean)

###### n_neighbors

`number` = `20`

Number of neighbors (default: 20)

###### novelty

`string` = `false`

If true, can predict on new data (default: false)

#### Returns

`LocalOutlierFactor`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/outliers.js:696](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L696)

***

### algorithm

> **algorithm**: `string`

Defined in: [ml/outliers.js:685](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L685)

***

### contamination

> **contamination**: `number`

Defined in: [ml/outliers.js:687](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L687)

***

### label\_column

> **label\_column**: `any`

Defined in: [ml/outliers.js:689](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L689)

***

### metric

> **metric**: `Function`

Defined in: [ml/outliers.js:686](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L686)

***

### n\_neighbors

> **n\_neighbors**: `number`

Defined in: [ml/outliers.js:684](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L684)

***

### negative\_outlier\_factor\_

> **negative\_outlier\_factor\_**: `any`[]

Defined in: [ml/outliers.js:692](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L692)

***

### nFeatures\_

> **nFeatures\_**: `number`

Defined in: [ml/outliers.js:695](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L695)

***

### novelty

> **novelty**: `string`

Defined in: [ml/outliers.js:688](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L688)

***

### offset\_

> **offset\_**: `number`

Defined in: [ml/outliers.js:693](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L693)

***

### threshold\_

> **threshold\_**: `number`

Defined in: [ml/outliers.js:694](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L694)

***

### X\_

> **X\_**: `any`[][]

Defined in: [ml/outliers.js:691](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L691)

## Accessors

### negative\_outlier\_factor

#### Get Signature

> **get** **negative\_outlier\_factor**(): `number`[]

Defined in: [ml/outliers.js:917](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L917)

Get negative outlier factor for each sample

##### Returns

`number`[]

Negative outlier factors

## Methods

### \_pairwiseDistances()

> **\_pairwiseDistances**(`X`): `any`[][]

Defined in: [ml/outliers.js:840](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L840)

Compute pairwise distances

#### Parameters

##### X

`any`

#### Returns

`any`[][]

***

### fit()

> **fit**(`X`): `LocalOutlierFactor`

Defined in: [ml/outliers.js:704](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L704)

Fit the model

#### Parameters

##### X

`any`

Training data (2D array, {data, columns}, or array of objects)

#### Returns

`LocalOutlierFactor`

this

***

### fit\_predict()

> **fit\_predict**(`X`): `number`[]

Defined in: [ml/outliers.js:900](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L900)

Fit and predict in one step

#### Parameters

##### X

`any`

Data

#### Returns

`number`[]

Predictions: -1 for outliers, 1 for inliers

***

### fit\_transform()

> **fit\_transform**(`X`): `any`[] \| `number`[]

Defined in: [ml/outliers.js:909](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L909)

Fit and transform in one step (parity with IsolationForest).

#### Parameters

##### X

`any`

Data

#### Returns

`any`[] \| `number`[]

Labels or table with outlier column

***

### predict()

> **predict**(`X`): `number`[]

Defined in: [ml/outliers.js:860](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L860)

Predict if samples are outliers

#### Parameters

##### X

`any`

Data (must be training data if novelty=false)

#### Returns

`number`[]

Predictions: -1 for outliers, 1 for inliers

***

### transform()

> **transform**(`X`): `any`[] \| `number`[]

Defined in: [ml/outliers.js:888](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/outliers.js#L888)

Transform data by adding outlier labels (parity with IsolationForest).
Table or array-of-objects input -> original rows augmented with the label
column, realigned to every original row (rows dropped for missing values
default to inlier). 2D-array input -> bare -1/1 label array (sklearn-style).

#### Parameters

##### X

`any`

Data

#### Returns

`any`[] \| `number`[]

Labels or table with outlier column
