---
title: "CompositionalOutlierDetector"
---

Defined in: [ds/src/mva/composition.js:616](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L616)

Detect compositional outliers via the Mahalanobis distance in log-ratio
space, tested as a chi-squared variable (Filzmoser & Hron; Parent & Dafir,
1992).

Each observation's CLR (or ILR) vector is compared to a centroid using the
(pseudo-inverse) covariance; the squared Mahalanobis distance follows a
chi-squared distribution with `D − 1` degrees of freedom under compositional
normality. The centroid and covariance may be estimated from a reference
subpopulation (e.g. a high-yielding group) via `reference`.

## Param

**mat**

Strictly-positive composition.

## Param

**opts**

## Param

**opts.reference**

Boolean mask selecting the rows
  that define the centroid/covariance (default: all rows).

## Param

**opts.alpha**

Significance level for the outlier flag.

## Param

**opts.transform**

Log-ratio coordinates to use.

## Constructors

### Constructor

> **new CompositionalOutlierDetector**(`opts?`): `CompositionalOutlierDetector`

Defined in: [ds/src/mva/composition.js:622](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L622)

#### Parameters

##### opts?

###### alpha?

`number` = `0.05`

Significance level for the outlier flag.

###### transform?

`"clr"` \| `"ilr"` = `"clr"`

Log-ratio coordinates to use.

#### Returns

`CompositionalOutlierDetector`

## Properties

### alpha

> **alpha**: `number`

Defined in: [ds/src/mva/composition.js:624](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L624)

***

### center

> **center**: `any`[]

Defined in: [ds/src/mva/composition.js:646](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L646)

***

### covInverse

> **covInverse**: `number`[][] \| [`Matrix`](../../../../core/namespaces/linalg/classes/Matrix.md)

Defined in: [ds/src/mva/composition.js:657](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L657)

***

### df

> **df**: `any`

Defined in: [ds/src/mva/composition.js:641](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L641)

***

### dim

> **dim**: `any`

Defined in: [ds/src/mva/composition.js:640](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L640)

***

### fitted

> **fitted**: `boolean`

Defined in: [ds/src/mva/composition.js:625](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L625)

***

### nParts

> **nParts**: `any`

Defined in: [ds/src/mva/composition.js:639](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L639)

***

### transform

> **transform**: `"clr"` \| `"ilr"`

Defined in: [ds/src/mva/composition.js:623](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L623)

## Methods

### distance()

> **distance**(`mat`): `number`[]

Defined in: [ds/src/mva/composition.js:663](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L663)

Squared Mahalanobis distance in log-ratio space for each row of `mat`.

#### Parameters

##### mat

`any`

#### Returns

`number`[]

***

### fit()

> **fit**(`mat`): `CompositionalOutlierDetector`

Defined in: [ds/src/mva/composition.js:634](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L634)

Estimate the centroid and (pseudo-inverse) covariance in log-ratio space
from a reference composition - e.g. a healthy / high-yielding subpopulation.

#### Parameters

##### mat

`number`[][]

Strictly-positive reference composition.

#### Returns

`CompositionalOutlierDetector`

this

***

### pValue()

> **pValue**(`mat`): `number`[]

Defined in: [ds/src/mva/composition.js:680](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L680)

Chi-squared p-value (1 − CDF) for each row's Mahalanobis distance.

#### Parameters

##### mat

`any`

#### Returns

`number`[]

***

### test()

> **test**(`mat`): `object`

Defined in: [ds/src/mva/composition.js:690](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L690)

Test rows for compositional outlyingness against the fitted reference.

#### Parameters

##### mat

`number`[][]

Composition(s) to test (e.g. all
  experimental samples, or external standards to project).

#### Returns

`object`

##### df

> **df**: `number`

##### distances

> **distances**: `number`[]

##### outliers

> **outliers**: `boolean`[]

##### pValues

> **pValues**: `number`[]
