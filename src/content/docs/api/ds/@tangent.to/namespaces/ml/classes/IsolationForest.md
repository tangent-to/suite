---
title: "IsolationForest"
---

Defined in: [ds/src/ml/outliers.js:242](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L242)

Isolation Forest for outlier detection
Compatible with sklearn.ensemble.IsolationForest

Detects outliers using ensemble of isolation trees.
Outliers are isolated closer to the root of the tree.

## Example

```ts
const iso = new IsolationForest({ contamination: 0.1, n_estimators: 100 });
iso.fit(X_train);
const predictions = iso.predict(X_test);  // -1 for outliers, 1 for inliers
const scores = iso.score_samples(X_test); // Anomaly scores
```

## Constructors

### Constructor

> **new IsolationForest**(`options?`): `IsolationForest`

Defined in: [ds/src/ml/outliers.js:252](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L252)

#### Parameters

##### options?

###### contamination

`number` = `0.1`

Expected proportion of outliers (default: 0.1)

###### label_column

`string` = `"outlier"`

Name of output column for predictions (default: 'outlier')

###### max_features

`number` = `1.0`

Features to draw for each tree (default: 1.0 = all)

###### max_samples

`number` = `"auto"`

Samples to draw for each tree (default: 'auto' = min(256, n))

###### n_estimators

`number` = `100`

Number of trees (default: 100)

###### random_state

`number` = `null`

Random seed (default: null)

#### Returns

`IsolationForest`

## Properties

### \_groupModels

> **\_groupModels**: `Map`\<`any`, `any`\>

Defined in: [ds/src/ml/outliers.js:274](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L274)

***

### \_originalData

> **\_originalData**: `any`

Defined in: [ds/src/ml/outliers.js:273](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L273)

***

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ds/src/ml/outliers.js:272](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L272)

***

### contamination

> **contamination**: `number`

Defined in: [ds/src/ml/outliers.js:262](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L262)

***

### label\_column

> **label\_column**: `string`

Defined in: [ds/src/ml/outliers.js:265](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L265)

***

### max\_features

> **max\_features**: `number`

Defined in: [ds/src/ml/outliers.js:263](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L263)

***

### max\_samples

> **max\_samples**: `number`

Defined in: [ds/src/ml/outliers.js:261](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L261)

***

### max\_samples\_

> **max\_samples\_**: `number`

Defined in: [ds/src/ml/outliers.js:268](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L268)

***

### n\_estimators

> **n\_estimators**: `number`

Defined in: [ds/src/ml/outliers.js:260](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L260)

***

### nFeatures\_

> **nFeatures\_**: `number`

Defined in: [ds/src/ml/outliers.js:271](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L271)

***

### offset\_

> **offset\_**: `number`

Defined in: [ds/src/ml/outliers.js:269](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L269)

***

### random\_state

> **random\_state**: `number`

Defined in: [ds/src/ml/outliers.js:264](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L264)

***

### threshold\_

> **threshold\_**: `number`

Defined in: [ds/src/ml/outliers.js:270](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L270)

***

### trees\_

> **trees\_**: `any`[]

Defined in: [ds/src/ml/outliers.js:267](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L267)

## Methods

### \_fitSingleModel()

> **\_fitSingleModel**(`X`): `any`

Defined in: [ds/src/ml/outliers.js:354](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L354)

Internal method to fit a single isolation forest model

#### Parameters

##### X

`number`[][]

2D array of numeric data

#### Returns

`any`

Model parameters

***

### \_predictWithModel()

> **\_predictWithModel**(`X`, `model`): `number`[]

Defined in: [ds/src/ml/outliers.js:591](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L591)

Internal method to predict with a specific model

#### Parameters

##### X

`number`[][]

Data

##### model

`any`

Model parameters

#### Returns

`number`[]

Predictions

***

### fit()

> **fit**(`X`): `IsolationForest`

Defined in: [ds/src/ml/outliers.js:282](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L282)

Fit the model

#### Parameters

##### X

`any`

Training data (2D array or {data, columns, group})

#### Returns

`IsolationForest`

this

***

### fit\_predict()

> **fit\_predict**(`X`): `any`[] \| `number`[]

Defined in: [ds/src/ml/outliers.js:632](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L632)

Fit and predict in one step (sklearn compatibility)

#### Parameters

##### X

`any`

Data (2D array or {data, columns, group})

#### Returns

`any`[] \| `number`[]

Predictions: -1 for outliers, 1 for inliers (or table with outlier column)

***

### fit\_transform()

> **fit\_transform**(`X`): `any`[] \| `number`[]

Defined in: [ds/src/ml/outliers.js:623](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L623)

Fit and transform in one step
Primary API for outlier detection with tables

#### Parameters

##### X

`any`

Data (2D array or {data, columns, group})

#### Returns

`any`[] \| `number`[]

Labels or table with outlier column

***

### predict()

> **predict**(`X`): `any`[] \| `number`[]

Defined in: [ds/src/ml/outliers.js:499](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L499)

Predict if samples are outliers

#### Parameters

##### X

`any`

Data (2D array or {data, columns, group})

#### Returns

`any`[] \| `number`[]

Predictions: -1 for outliers, 1 for inliers (or table with outlier column)

***

### score\_samples()

> **score\_samples**(`X`): `number`[]

Defined in: [ds/src/ml/outliers.js:426](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L426)

Compute anomaly scores for samples
Lower (more negative) scores indicate outliers
Scores range approximately from -1 to 0

#### Parameters

##### X

`any`

Data (2D array, {data, columns}, or array of objects)

#### Returns

`number`[]

Anomaly scores (negative values)

***

### transform()

> **transform**(`X`): `any`[] \| `number`[]

Defined in: [ds/src/ml/outliers.js:613](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/outliers.js#L613)

Transform data by adding outlier labels
Alias for predict() - primary API for table-based workflows

#### Parameters

##### X

`any`

Data (2D array or {data, columns, group})

#### Returns

`any`[] \| `number`[]

Labels or table with outlier column
