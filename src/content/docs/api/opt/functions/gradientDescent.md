---
title: "gradientDescent"
---

> **gradientDescent**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:133](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/gradient.js#L133)

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
