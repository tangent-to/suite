---
title: "momentumDescent"
---

> **momentumDescent**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:156](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/gradient.js#L156)

Gradient descent with momentum.

## Parameters

### f

`Function`

Objective

### x0

`number`[]

Initial parameters

### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, momentum, verbose}

## Returns

`any`

{x, fx, iterations, converged, history}
