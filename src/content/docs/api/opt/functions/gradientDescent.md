---
title: "gradientDescent"
---

> **gradientDescent**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:133](https://github.com/tangent-to/opt/blob/3fa4117a98aec86cceff2025f67639bcb80ba817/src/gradient.js#L133)

Plain gradient descent, with optional backtracking line search.

## Parameters

### f

`Function`

Objective: (x) => number or (x) => {loss, gradient}

### x0

`number`[]

Initial parameters

### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, lineSearch, verbose}

## Returns

`any`

{x, fx, iterations, converged, history}
