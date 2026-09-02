---
title: "nelderMead"
---

> **nelderMead**(`f`, `x0`, `options?`): `any`

Defined in: [neldermead.js:35](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/neldermead.js#L35)

Minimize a function using the Nelder-Mead downhill simplex method.

## Parameters

### f

`Function`

Objective: (x) => number (or (x) => {loss, ...})

### x0

`number`[]

Initial parameters

### options?

#### chi?

`number`

Expansion coefficient

#### fTol?

`number`

Convergence tolerance on f spread across the simplex

#### history?

`boolean`

Record {x, fx, simplex} per iteration

#### maxIter?

`number`

Maximum iterations

#### nonZeroDelta?

`number`

Relative perturbation for nonzero x0 entries

#### psi?

`number`

Contraction coefficient

#### rho?

`number`

Reflection coefficient

#### sigma?

`number`

Reduction (shrink) coefficient

#### xTol?

`number`

Convergence tolerance on x spread across the simplex

#### zeroDelta?

`number`

Absolute perturbation for zero x0 entries

## Returns

`any`

{x, fx, iterations, fevals, converged, history?}
