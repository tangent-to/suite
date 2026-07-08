---
title: "CompositionalOutlierDetector"
---

Defined in: [mva/composition.js:620](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L620)

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

Defined in: [mva/composition.js:626](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L626)

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

Defined in: [mva/composition.js:628](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L628)

***

### center

> **center**: `any`[]

Defined in: [mva/composition.js:650](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L650)

***

### covInverse

> **covInverse**: `any`

Defined in: [mva/composition.js:661](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L661)

***

### df

> **df**: `any`

Defined in: [mva/composition.js:645](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L645)

***

### dim

> **dim**: `any`

Defined in: [mva/composition.js:644](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L644)

***

### fitted

> **fitted**: `boolean`

Defined in: [mva/composition.js:629](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L629)

***

### nParts

> **nParts**: `any`

Defined in: [mva/composition.js:643](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L643)

***

### transform

> **transform**: `"clr"` \| `"ilr"`

Defined in: [mva/composition.js:627](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L627)

## Methods

### distance()

> **distance**(`mat`): `number`[]

Defined in: [mva/composition.js:667](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L667)

Squared Mahalanobis distance in log-ratio space for each row of `mat`.

#### Parameters

##### mat

`any`

#### Returns

`number`[]

***

### fit()

> **fit**(`mat`): `CompositionalOutlierDetector`

Defined in: [mva/composition.js:638](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L638)

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

Defined in: [mva/composition.js:684](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L684)

Chi-squared p-value (1 − CDF) for each row's Mahalanobis distance.

#### Parameters

##### mat

`any`

#### Returns

`number`[]

***

### test()

> **test**(`mat`): `object`

Defined in: [mva/composition.js:694](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/composition.js#L694)

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
