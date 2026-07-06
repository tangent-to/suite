---
title: "Recipe"
---

Defined in: [ml/recipe.js:143](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L143)

Recipe class for building inspectable preprocessing workflows

A Recipe defines a sequence of data preprocessing steps that can be:
1. Defined declaratively through chainable methods
2. Executed with prep() to fit transformers on training data
3. Applied to new data with bake() using fitted transformers
4. Inspected at every step to understand transformations

Supported preprocessing operations:

Data Cleaning:
- parseNumeric(): Convert string columns to numbers
- clean(): Remove rows with invalid categorical values

Missing Value Imputation:
- imputeMean(): Impute with mean values
- imputeMedian(): Impute with median values
- imputeMode(): Impute with mode (most frequent)
- imputeKNN(): Impute using K-Nearest Neighbors
- imputeIterative(): Impute using iterative MICE algorithm

Outlier Handling:
- removeOutliers(): Remove outliers using isolation forest, LOF, or Mahalanobis distance
- clipOutliers(): Clip outliers using IQR method

Encoding:
- oneHot(): One-hot encode categorical columns

Scaling:
- scale(): Scale numeric columns (standard or minmax)

Feature Engineering:
- createInteractions(): Create pairwise interaction features
- createPolynomial(): Create polynomial features
- binContinuous(): Bin continuous variables into discrete categories

Dimensionality Reduction:
- pca(): Principal Component Analysis
- lda(): Linear Discriminant Analysis (supervised)
- rda(): Redundancy Analysis (constrained ordination)

Sampling:
- upsample(): Oversample minority class for imbalanced data
- downsample(): Undersample majority class for imbalanced data

Feature Selection:
- selectByVariance(): Remove low-variance features
- selectByCorrelation(): Remove highly correlated features

Data Splitting:
- split(): Split into train/test sets

## Example

```ts
// Complete workflow
const recipe = new Recipe({ data: myData, X: features, y: 'target' })
  .parseNumeric(['age', 'price'])
  .clean({ category: ['A', 'B', 'C'] })
  .oneHot(['category'])
  .scale(['age', 'price'], { method: 'standard' })
  .split({ ratio: 0.7, seed: 42 });

const result = recipe.prep();
// result.train.data - training data
// result.test.data - test data
// result.transformers - fitted transformers (scale, oneHot, etc.)
// result.steps - intermediate outputs for inspection
```

## Constructors

### Constructor

> **new Recipe**(`__namedParameters`): `Recipe`

Defined in: [ml/recipe.js:144](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L144)

#### Parameters

##### \_\_namedParameters

###### data

`any`

###### X

`any`

###### y

`any`

#### Returns

`Recipe`

## Properties

### \_prepared

> **\_prepared**: `boolean`

Defined in: [ml/recipe.js:149](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L149)

***

### \_splitResult

> **\_splitResult**: `any`

Defined in: [ml/recipe.js:1579](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1579)

***

### \_stepOutputs

> **\_stepOutputs**: (\{ `name`: `any`; `output`: `any`; `transformer`: `any`; \} \| \{ `name`: `any`; `output`: `any`; `transformer?`: `undefined`; \})[]

Defined in: [ml/recipe.js:1578](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1578)

***

### \_transformers

> **\_transformers**: `object`

Defined in: [ml/recipe.js:150](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L150)

***

### initialData

> **initialData**: `any`

Defined in: [ml/recipe.js:145](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L145)

***

### splitConfig

> **splitConfig**: `object`

Defined in: [ml/recipe.js:1496](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1496)

#### ratio

> **ratio**: `number`

#### seed

> **seed**: `number`

#### shuffle

> **shuffle**: `boolean`

***

### steps

> **steps**: `any`[]

Defined in: [ml/recipe.js:148](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L148)

***

### X

> **X**: `any`[]

Defined in: [ml/recipe.js:146](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L146)

***

### y

> **y**: `any`

Defined in: [ml/recipe.js:147](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L147)

## Methods

### bake()

> **bake**(`data`): `any`

Defined in: [ml/recipe.js:1613](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1613)

Apply fitted transformers to new data

#### Parameters

##### data

`any`[]

New data to transform

#### Returns

`any`

Transformed data

***

### binContinuous()

> **binContinuous**(`column`, `options?`): `Recipe`

Defined in: [ml/recipe.js:1047](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1047)

Bin continuous variables into discrete categories

#### Parameters

##### column

`string`

Column to bin

##### options?

Binning options

###### bins

`number` = `5`

Number of bins (default 5)

###### labels

`string`[] = `null`

Custom bin labels

#### Returns

`Recipe`

this

#### Example

```ts
recipe.binContinuous('age', { bins: 5, labels: ['child', 'teen', 'adult', 'middle', 'senior'] });
```

***

### clean()

> **clean**(`validCategories`): `Recipe`

Defined in: [ml/recipe.js:195](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L195)

Clean categorical columns

#### Parameters

##### validCategories

`any`

Map of column -> valid values

#### Returns

`Recipe`

this

***

### clipOutliers()

> **clipOutliers**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:844](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L844)

Clip outliers using IQR method

#### Parameters

##### columns

`string`[]

Columns to clip

##### options?

Clipping options

###### multiplier

`number` = `1.5`

IQR multiplier (default 1.5)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.clipOutliers(['price', 'age'], { multiplier: 1.5 });
```

***

### createInteractions()

> **createInteractions**(`columns`): `Recipe`

Defined in: [ml/recipe.js:933](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L933)

Create pairwise interaction features

#### Parameters

##### columns

`string`[]

Columns to create interactions from

#### Returns

`Recipe`

this

#### Example

```ts
recipe.createInteractions(['feature1', 'feature2', 'feature3']);
// Creates: feature1_x_feature2, feature1_x_feature3, feature2_x_feature3
```

***

### createPolynomial()

> **createPolynomial**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:993](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L993)

Create polynomial features

#### Parameters

##### columns

`string`[]

Columns to create polynomials from

##### options?

Polynomial options

###### degree

`number` = `2`

Polynomial degree (default 2)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.createPolynomial(['age', 'income'], { degree: 2 });
// Creates: age^2, income^2
```

***

### downsample()

> **downsample**(`options?`): `Recipe`

Defined in: [ml/recipe.js:1223](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1223)

Downsample majority class for imbalanced classification

#### Parameters

##### options?

Downsampling options

###### seed

`number` = `null`

Random seed

###### strategy

`string` = `'balance'`

'balance' (equal classes) or 'ratio' (custom ratio)

###### targetRatio

`number` = `1.0`

Target ratio of majority to minority (for 'ratio' strategy)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.downsample({ strategy: 'balance', seed: 42 });
```

***

### imputeIterative()

> **imputeIterative**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:764](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L764)

Impute missing values using iterative imputation (MICE)

#### Parameters

##### columns

`string`[]

Columns to impute

##### options?

Iterative imputer options

###### maxIter

`number` = `10`

Maximum iterations (default 10)

###### tol

`number` = `0.001`

Convergence tolerance (default 0.001)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.imputeIterative(['age', 'income'], { maxIter: 20 });
```

***

### imputeKNN()

> **imputeKNN**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:725](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L725)

Impute missing values using KNN

#### Parameters

##### columns

`string`[]

Columns to impute

##### options?

KNN imputer options

###### k

`number` = `5`

Number of neighbors (default 5)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.imputeKNN(['age', 'income'], { k: 3 });
```

***

### imputeMean()

> **imputeMean**(`columns`): `Recipe`

Defined in: [ml/recipe.js:618](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L618)

Impute missing values with mean

#### Parameters

##### columns

`string`[]

Columns to impute

#### Returns

`Recipe`

this

#### Example

```ts
recipe.imputeMean(['age', 'income']);
```

***

### imputeMedian()

> **imputeMedian**(`columns`): `Recipe`

Defined in: [ml/recipe.js:653](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L653)

Impute missing values with median

#### Parameters

##### columns

`string`[]

Columns to impute

#### Returns

`Recipe`

this

#### Example

```ts
recipe.imputeMedian(['age', 'price']);
```

***

### imputeMode()

> **imputeMode**(`columns`): `Recipe`

Defined in: [ml/recipe.js:688](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L688)

Impute missing values with mode (most frequent value)

#### Parameters

##### columns

`string`[]

Columns to impute

#### Returns

`Recipe`

this

#### Example

```ts
recipe.imputeMode(['category', 'status']);
```

***

### lda()

> **lda**(`options?`): `Recipe`

Defined in: [ml/recipe.js:439](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L439)

Apply Linear Discriminant Analysis for supervised dimensionality reduction

Reduces dimensionality while maximizing class separation. Requires a target
variable. This is both feature extraction and supervised learning.

#### Parameters

##### options?

LDA options

###### columns

`string`[]

Columns to include in LDA

###### nComponents?

`number` = `null`

Number of discriminants to keep

###### scale?

`boolean` = `false`

Scale features before LDA

#### Returns

`Recipe`

this (for chaining)

#### Example

```ts
recipe.lda({
  columns: ['feature1', 'feature2', 'feature3'],
  nComponents: 2
});
```

***

### oneHot()

> **oneHot**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:223](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L223)

One-hot encode categorical columns

#### Parameters

##### columns

`string`[]

Columns to encode

##### options?

Encoding options

###### dropFirst

`boolean` = `true`

Drop first category

###### prefix

`boolean` = `true`

Use column name prefix

#### Returns

`Recipe`

this

***

### parseNumeric()

> **parseNumeric**(`columns`): `Recipe`

Defined in: [ml/recipe.js:165](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L165)

Parse string columns as numeric

Converts string representations of numbers to actual numeric values.
Useful when CSV parsers incorrectly infer column types.

#### Parameters

##### columns

`string`[]

Column names to parse

#### Returns

`Recipe`

this (for chaining)

#### Example

```ts
recipe.parseNumeric(['age', 'price', 'quantity']);
```

***

### pca()

> **pca**(`options?`): `Recipe`

Defined in: [ml/recipe.js:342](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L342)

Apply Principal Component Analysis for dimensionality reduction

Reduces the dimensionality of numeric features by projecting them onto
principal components. This is a feature extraction/transformation step.

#### Parameters

##### options?

PCA options

###### center?

`boolean` = `true`

Center features before PCA

###### columns

`string`[]

Columns to include in PCA

###### nComponents?

`number` = `null`

Number of components to keep (default: all)

###### scale?

`boolean` = `true`

Scale features before PCA

#### Returns

`Recipe`

this (for chaining)

#### Example

```ts
recipe.pca({
  columns: ['feature1', 'feature2', 'feature3'],
  nComponents: 2,
  scale: true
});
```

***

### prep()

> **prep**(): `any`

Defined in: [ml/recipe.js:1505](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1505)

Execute the recipe on the initial data
Returns train/test data and all fitted transformers

#### Returns

`any`

Prepared data with train, test, transformers

***

### rda()

> **rda**(`options?`): `Recipe`

Defined in: [ml/recipe.js:539](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L539)

Apply Redundancy Analysis for constrained ordination

RDA combines regression and PCA to find patterns in response variables
that are explained by predictor variables. Useful for ecological data.

#### Parameters

##### options?

RDA options

###### nComponents?

`number` = `null`

Number of RDA axes to keep

###### predictors

`string`[]

Predictor variable columns

###### response

`string`[]

Response variable columns

###### scale?

`boolean` = `false`

Scale variables before RDA

#### Returns

`Recipe`

this (for chaining)

#### Example

```ts
recipe.rda({
  response: ['species1', 'species2', 'species3'],
  predictors: ['temperature', 'rainfall'],
  nComponents: 2
});
```

***

### removeOutliers()

> **removeOutliers**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:804](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L804)

Remove outliers from the dataset

#### Parameters

##### columns

`string`[]

Columns to check for outliers

##### options?

Outlier detection options

###### contamination

`number` = `0.1`

Expected proportion of outliers (default 0.1)

###### method

`string` = `'isolation_forest'`

Detection method: 'isolation_forest', 'lof', or 'mahalanobis'

#### Returns

`Recipe`

this

#### Example

```ts
recipe.removeOutliers(['price', 'quantity'], { method: 'isolation_forest', contamination: 0.05 });
```

***

### scale()

> **scale**(`columns`, `options?`): `Recipe`

Defined in: [ml/recipe.js:293](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L293)

Scale numeric columns

#### Parameters

##### columns

`string`[]

Columns to scale

##### options?

Scaling options

###### method

`string` = `'standard'`

'standard' or 'minmax'

#### Returns

`Recipe`

this

***

### selectByCorrelation()

> **selectByCorrelation**(`options?`): `Recipe`

Defined in: [ml/recipe.js:1384](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1384)

Remove highly correlated features

#### Parameters

##### options?

Feature selection options

###### threshold

`number` = `0.95`

Correlation threshold (default 0.95)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.selectByCorrelation({ threshold: 0.9 });
```

***

### selectByVariance()

> **selectByVariance**(`options?`): `Recipe`

Defined in: [ml/recipe.js:1299](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1299)

Remove low-variance features

#### Parameters

##### options?

Feature selection options

###### threshold

`number` = `0.0`

Variance threshold (default 0.0)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.selectByVariance({ threshold: 0.01 });
```

***

### split()

> **split**(`options?`): `Recipe`

Defined in: [ml/recipe.js:1495](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1495)

Split data into train/test sets

#### Parameters

##### options?

Split options

###### ratio

`number` = `0.7`

Training ratio (default 0.7)

###### seed

`number` = `null`

Random seed

###### shuffle

`boolean` = `true`

Shuffle before split

#### Returns

`Recipe`

this

***

### summary()

> **summary**(): `string`

Defined in: [ml/recipe.js:1661](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1661)

Get a summary of the recipe

#### Returns

`string`

Recipe summary

***

### upsample()

> **upsample**(`options?`): `Recipe`

Defined in: [ml/recipe.js:1160](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/recipe.js#L1160)

Upsample minority class for imbalanced classification

#### Parameters

##### options?

Upsampling options

###### seed

`number` = `null`

Random seed

###### targetRatio

`number` = `1.0`

Target ratio of minority to majority (default 1.0 for balanced)

#### Returns

`Recipe`

this

#### Example

```ts
recipe.upsample({ targetRatio: 1.0, seed: 42 });
```
