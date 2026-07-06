---
title: "fit"
---

> **fit**(`X`, `y`, `options?`): `any`

Defined in: [ml/polynomial.js:75](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/polynomial.js#L75)

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
