---
title: "adam"
---

> **adam**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:211](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/gradient.js#L211)

Adam (adaptive moment estimation).

## Parameters

### f

`Function`

Objective

### x0

`number`[]

Initial parameters

### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, beta1, beta2, epsilon, verbose}

## Returns

`any`

{x, fx, iterations, converged, history}
