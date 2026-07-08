---
title: "minimizeScalar"
---

> **minimizeScalar**(`f`, `options?`): `any`

Defined in: [scalar.js:336](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/scalar.js#L336)

Minimize a univariate function.

## Parameters

### f

`Function`

Objective: (x: number) => number

### options?

#### bracket?

`number`[]

[a, b] to auto-bracket
  from, or a full bracketing triple [a, b, c] with f(b) <= f(a), f(b) <= f(c)

#### maxIter?

`number`

Maximum iterations

#### method?

`string`

'brent' or 'golden'

#### xTol?

`number`

Relative tolerance on x

## Returns

`any`

{x, fx, iterations, fevals, converged}
