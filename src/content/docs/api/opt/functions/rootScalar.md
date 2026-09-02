---
title: "rootScalar"
---

> **rootScalar**(`f`, `options?`): `any`

Defined in: [scalar.js:565](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/scalar.js#L565)

Find a root of a univariate function inside a sign-changing bracket.

## Parameters

### f

`Function`

Function: (x: number) => number

### options?

#### bracket

`number`[]

[a, b] with f(a) and f(b) of
  opposite signs (required)

#### maxIter?

`number`

Maximum iterations

#### method?

`string`

'brent' or 'bisect'

#### rTol?

`number`

Relative tolerance on x

#### xTol?

`number`

Absolute tolerance on x

## Returns

`any`

{x, fx, iterations, fevals, converged}
