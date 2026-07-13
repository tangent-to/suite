---
title: "MahalanobisDistance"
---

Defined in: [ml/outliers.js:937](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L937)

Mahalanobis distance-based outlier detection
Compatible with sklearn.covariance.EllipticEnvelope approach

Detects outliers based on statistical distance from the mean,
accounting for covariance structure. Uses pseudoinverse to handle
singular/near-singular covariance matrices.

## Example

```ts
const md = new MahalanobisDistance({ contamination: 0.1 });
md.fit(X_train);
const predictions = md.predict(X_test);
```

## Constructors

### Constructor

> **new MahalanobisDistance**(`options?`): `MahalanobisDistance`

Defined in: [ml/outliers.js:943](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L943)

#### Parameters

##### options?

###### contamination

`number` = `0.1`

Expected proportion of outliers (default: 0.1)

###### use_chi2

`boolean` = `true`

Use chi-squared distribution for threshold (default: true)

#### Returns

`MahalanobisDistance`

## Properties

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/outliers.js:955](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L955)

***

### contamination

> **contamination**: `number`

Defined in: [ml/outliers.js:948](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L948)

***

### label\_column

> **label\_column**: `any`

Defined in: [ml/outliers.js:950](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L950)

***

### mean\_

> **mean\_**: `any`[]

Defined in: [ml/outliers.js:951](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L951)

***

### nFeatures\_

> **nFeatures\_**: `number`

Defined in: [ml/outliers.js:954](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L954)

***

### precision\_

> **precision\_**: `any`

Defined in: [ml/outliers.js:952](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L952)

***

### threshold\_

> **threshold\_**: `number`

Defined in: [ml/outliers.js:953](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L953)

***

### use\_chi2

> **use\_chi2**: `boolean`

Defined in: [ml/outliers.js:949](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L949)

## Accessors

### mahalanobis\_distances

#### Get Signature

> **get** **mahalanobis\_distances**(): `number`[]

Defined in: [ml/outliers.js:1191](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1191)

Get Mahalanobis distances for fitted data

##### Returns

`number`[]

Mahalanobis distances

## Methods

### \_mahalanobis\_distances()

> **\_mahalanobis\_distances**(`X`): `number`[]

Defined in: [ml/outliers.js:1059](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1059)

Compute Mahalanobis distances for samples

#### Parameters

##### X

`number`[][]

Data

#### Returns

`number`[]

Mahalanobis distances

***

### fit()

> **fit**(`X`): `MahalanobisDistance`

Defined in: [ml/outliers.js:963](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L963)

Fit the detector on training data

#### Parameters

##### X

`any`

Training data (2D array, {data, columns}, or array of objects)

#### Returns

`MahalanobisDistance`

this

***

### fit\_predict()

> **fit\_predict**(`X`): `number`[]

Defined in: [ml/outliers.js:1159](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1159)

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

Defined in: [ml/outliers.js:1183](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1183)

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

Defined in: [ml/outliers.js:1144](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1144)

Predict if samples are outliers

#### Parameters

##### X

`any`

Data

#### Returns

`number`[]

Predictions: -1 for outliers, 1 for inliers

***

### score\_samples()

> **score\_samples**(`X`): `number`[]

Defined in: [ml/outliers.js:1089](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1089)

Compute Mahalanobis distances for samples

#### Parameters

##### X

`any`

Data to score (2D array, {data, columns}, or array of objects)

#### Returns

`number`[]

Negative Mahalanobis distances (outliers have lower scores)

***

### transform()

> **transform**(`X`): `any`[] \| `number`[]

Defined in: [ml/outliers.js:1171](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/outliers.js#L1171)

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
