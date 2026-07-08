---
title: "minimize"
---

> **minimize**(`spec?`): `any`

Defined in: [minimize.js:64](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/minimize.js#L64)

Minimize a scalar function of one or more variables.

## Parameters

### spec?

#### f

`Function`

Objective: (x) => number or (x) => {loss, gradient}

#### grad?

`Function`

Gradient: (x) => Array<number> (gradient methods only)

#### method?

`string`

One of methods()

#### options?

`any`

Remaining keys are passed to the method
  (maxIter, tol, learningRate, fTol, xTol, history, verbose, ...)

#### x0

`number`[]

Initial parameters

## Returns

`any`

{x, fx, iterations, converged, method, ...}
