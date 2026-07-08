---
title: "fit"
---

> **fit**(`X`, `y`, `options?`): `any`

Defined in: [ml/polynomial.js:75](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/polynomial.js#L75)

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
