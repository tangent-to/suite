---
title: "minimize"
---

> **minimize**(`spec?`): `any`

Defined in: [minimize.js:64](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/minimize.js#L64)

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
