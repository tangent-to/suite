---
title: "rmsprop"
---

> **rmsprop**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:184](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/gradient.js#L184)

RMSProp.

## Parameters

### f

`Function`

Objective

### x0

`number`[]

Initial parameters

### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, decay, epsilon, verbose}

## Returns

`any`

{x, fx, iterations, converged, history}
