---
title: "gradientDescent"
---

> **gradientDescent**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:136](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/gradient.js#L136)

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
