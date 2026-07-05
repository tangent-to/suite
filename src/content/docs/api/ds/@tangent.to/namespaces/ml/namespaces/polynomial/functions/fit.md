---
title: "fit"
---

> **fit**(`X`, `y`, `options?`): `any`

Defined in: [ds/src/ml/polynomial.js:75](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/polynomial.js#L75)

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
