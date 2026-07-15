---
title: "momentumDescent"
---

> **momentumDescent**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:158](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/gradient.js#L158)

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
