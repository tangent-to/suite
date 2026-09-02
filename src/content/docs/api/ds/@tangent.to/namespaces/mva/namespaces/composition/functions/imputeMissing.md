---
title: "imputeMissing"
---

> **imputeMissing**(`mat`, `opts?`): `number`[][]

Defined in: [mva/composition.js:434](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/mva/composition.js#L434)

Impute missing values in compositional data, respecting the simplex.

Missing cells (`null`, `undefined` or `NaN`) are filled by an EM-style
iteration in centred-log-ratio (CLR) space: each incomplete row is updated so
that its CLR coordinates on the missing parts match the compositional
(CLR) mean of the complete observations, while the observed parts are
preserved. This is the log-ratio analogue of mean imputation and keeps the
imputed values strictly positive and coherent with the observed
sub-composition (cf. Martín-Fernández et al.; Palarea-Albaladejo &
Martín-Fernández, 2008). Combine with [multiplicativeReplacement](multiplicativeReplacement.md) to
additionally handle essential zeros.

## Parameters

### mat

`number`[][]

Composition with missing entries.

### opts?

#### maxIter?

`number` = `100`

Maximum EM iterations.

#### tol?

`number` = `1e-9`

Convergence tolerance on the CLR mean.

## Returns

`number`[][]

Completed, strictly-positive composition.
