---
title: "rmsprop"
---

> **rmsprop**(`f`, `x0`, `options?`): `any`

Defined in: [gradient.js:184](https://github.com/tangent-to/opt/blob/3fa4117a98aec86cceff2025f67639bcb80ba817/src/gradient.js#L184)

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
