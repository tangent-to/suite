---
title: "rosenbrock"
---

> **rosenbrock**(`f`, `tSpan`, `y0`, `options?`): `object`

Defined in: [rosenbrock.js:131](https://github.com/tangent-to/ode/blob/7d70fbe9c2f5edf316845d7d5f257803c52c73a2/src/rosenbrock.js#L131)

Integrate the stiff system y' = f(t, y) with an adaptive 4(3)
Rosenbrock-Wanner method (Kaps-Rentrop with Shampine's coefficients).

## Parameters

### f

`Function`

(t, y) => dydt; y is Array<number>, returns Array<number> (or scalar)

### tSpan

\[`number`, `number`\]

[t0, tEnd] (tEnd may be < t0 for backward integration)

### y0

`number` \| `number`[]

Initial state

### options?

#### atol?

`number`

Absolute tolerance

#### firstStep?

`number`

Initial step size (auto if omitted)

#### jac?

`Function`

(t, y) => nested n x n Jacobian df/dy; central finite
  differences are used when omitted

#### maxStep?

`number`

Maximum step size

#### maxSteps?

`number`

Safety cap on accepted+rejected steps

#### rtol?

`number`

Relative tolerance

#### tEval?

`number`[]

Times at which to report the solution; dense output
  uses cubic Hermite interpolation between accepted steps

## Returns

`object`

Solver result

### message

> **message**: `string`

### nfev

> **nfev**: `number`

### njev

> **njev**: `number`

### nsteps

> **nsteps**: `number`

### success

> **success**: `boolean`

### t

> **t**: `number`[]

### y

> **y**: `number`[] \| `number`[][]
