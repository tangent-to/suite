---
title: "fit"
---

> **fit**(`X`, `y`, `options?`): `any`

Defined in: [ml/polynomial.js:75](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/ml/polynomial.js#L75)

Fit polynomial regression model

## Parameters

### X

`number`[] \| `number`[][]

Input data (can be 1D for univariate)

### y

`number`[]

Target values

### options?

`any` = `{}`

{degree: polynomial degree, intercept: include intercept}

## Returns

`any`

{coefficients, degree, fitted, residuals, rSquared}
