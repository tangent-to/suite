---
title: "lbfgs"
---

> **lbfgs**(`f`, `x0`, `options?`): `any`

Defined in: [lbfgs.js:39](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/lbfgs.js#L39)

Minimize a function with L-BFGS.

## Parameters

### f

`Function`

Objective: (x) => number or (x) => {loss, gradient}

### x0

`number`[]

Initial parameters

### options?

#### c1?

`number`

Line search sufficient-decrease constant

#### c2?

`number`

Line search curvature constant

#### fTol?

`number`

Relative function-decrease tolerance

#### grad?

`Function`

Gradient: (x) => Array<number> (finite differences otherwise)

#### maxIter?

`number`

Maximum iterations

#### memory?

`number`

Number of curvature pairs kept

#### tol?

`number`

Convergence tolerance on the gradient norm

#### verbose?

`boolean`

## Returns

`any`

{x, fx, iterations, fevals, converged, history}
