---
title: "default"
---

> **default**: `object`

Defined in: [index.js:48](https://github.com/tangent-to/ode/blob/ff4ab8c1888e351a8fc6218293fe2e62f2aa5185/src/index.js#L48)

Convenience bundle of every solver under one object, so consumers can
`import ode from '@tangent.to/ode'` and call `ode.solve(...)`, `ode.rk45(...)`, etc.

## Type Declaration

### euler

> **euler**: (`f`, `tSpan`, `y0`, `options`) => `object`

Integrate y' = f(t, y) with the forward Euler method (1st order).

#### Parameters

##### f

`Function`

(t, y) => dydt; y is Array<number>, returns Array<number> (or scalar)

##### tSpan

\[`number`, `number`\]

[t0, tEnd] (tEnd may be < t0 for backward integration)

##### y0

`number` \| `number`[]

Initial state

##### options

###### nSteps?

`number`

Number of equal steps across tSpan

###### step?

`number`

Fixed step size h > 0 (required unless nSteps given; wins if both)

#### Returns

`object`

Solver result

##### message

> **message**: `string`

##### nfev

> **nfev**: `number`

##### nsteps

> **nsteps**: `number`

##### success

> **success**: `boolean`

##### t

> **t**: `number`[]

##### y

> **y**: `number`[] \| `number`[][]

### rk2

> **rk2**: (`f`, `tSpan`, `y0`, `options`) => `object`

Integrate y' = f(t, y) with the explicit midpoint method (2nd order).

#### Parameters

##### f

`Function`

(t, y) => dydt; y is Array<number>, returns Array<number> (or scalar)

##### tSpan

\[`number`, `number`\]

[t0, tEnd] (tEnd may be < t0 for backward integration)

##### y0

`number` \| `number`[]

Initial state

##### options

###### nSteps?

`number`

Number of equal steps across tSpan

###### step?

`number`

Fixed step size h > 0 (required unless nSteps given; wins if both)

#### Returns

`object`

Solver result

##### message

> **message**: `string`

##### nfev

> **nfev**: `number`

##### nsteps

> **nsteps**: `number`

##### success

> **success**: `boolean`

##### t

> **t**: `number`[]

##### y

> **y**: `number`[] \| `number`[][]

### rk4

> **rk4**: (`f`, `tSpan`, `y0`, `options`) => `object`

Integrate y' = f(t, y) with the classic 4th-order Runge-Kutta method.

#### Parameters

##### f

`Function`

(t, y) => dydt; y is Array<number>, returns Array<number> (or scalar)

##### tSpan

\[`number`, `number`\]

[t0, tEnd] (tEnd may be < t0 for backward integration)

##### y0

`number` \| `number`[]

Initial state

##### options

###### nSteps?

`number`

Number of equal steps across tSpan

###### step?

`number`

Fixed step size h > 0 (required unless nSteps given; wins if both)

#### Returns

`object`

Solver result

##### message

> **message**: `string`

##### nfev

> **nfev**: `number`

##### nsteps

> **nsteps**: `number`

##### success

> **success**: `boolean`

##### t

> **t**: `number`[]

##### y

> **y**: `number`[] \| `number`[][]

### rk45

> **rk45**: (`f`, `tSpan`, `y0`, `options?`) => `object`

Integrate y' = f(t, y) with adaptive Dormand-Prince RK45.

#### Parameters

##### f

`Function`

(t, y) => dydt; y is Array<number>, returns Array<number> (or scalar)

##### tSpan

\[`number`, `number`\]

[t0, tEnd] (tEnd may be < t0 for backward integration)

##### y0

`number` \| `number`[]

Initial state

##### options?

###### atol?

`number`

Absolute tolerance

###### events?

`Function` \| `Function`[]

g(t, y) => number; a root marks an event

###### firstStep?

`number`

Initial step size (auto if omitted)

###### maxStep?

`number`

Maximum step size

###### maxSteps?

`number`

Safety cap on accepted+rejected steps

###### rtol?

`number`

Relative tolerance

###### tEval?

`number`[]

Times at which to report the solution (dense output)

#### Returns

`object`

Solver result

##### events?

> `optional` **events?**: `object`[]

##### message

> **message**: `string`

##### nfev

> **nfev**: `number`

##### nsteps

> **nsteps**: `number`

##### success

> **success**: `boolean`

##### t

> **t**: `number`[]

##### y

> **y**: `number`[] \| `number`[][]

### rosenbrock

> **rosenbrock**: (`f`, `tSpan`, `y0`, `options?`) => `object`

Integrate the stiff system y' = f(t, y) with an adaptive 4(3)
Rosenbrock-Wanner method (Kaps-Rentrop with Shampine's coefficients).

#### Parameters

##### f

`Function`

(t, y) => dydt; y is Array<number>, returns Array<number> (or scalar)

##### tSpan

\[`number`, `number`\]

[t0, tEnd] (tEnd may be < t0 for backward integration)

##### y0

`number` \| `number`[]

Initial state

##### options?

###### atol?

`number`

Absolute tolerance

###### firstStep?

`number`

Initial step size (auto if omitted)

###### jac?

`Function`

(t, y) => nested n x n Jacobian df/dy; central finite
  differences are used when omitted

###### maxStep?

`number`

Maximum step size

###### maxSteps?

`number`

Safety cap on accepted+rejected steps

###### rtol?

`number`

Relative tolerance

###### tEval?

`number`[]

Times at which to report the solution; dense output
  uses cubic Hermite interpolation between accepted steps

#### Returns

`object`

Solver result

##### message

> **message**: `string`

##### nfev

> **nfev**: `number`

##### njev

> **njev**: `number`

##### nsteps

> **nsteps**: `number`

##### success

> **success**: `boolean`

##### t

> **t**: `number`[]

##### y

> **y**: `number`[] \| `number`[][]

### solve

> **solve**: (`f`, `tSpan`, `y0`, `options?`) => `object`

Solve an initial value problem, dispatching by method name (scipy
solve_ivp style). Defaults to adaptive RK45.

#### Parameters

##### f

`Function`

(t, y) => dydt

##### tSpan

\[`number`, `number`\]

[t0, tEnd]

##### y0

`number` \| `number`[]

Initial state

##### options?

{method, ...solver options}

###### method?

`string`

'rk45' | 'rosenbrock' | 'euler' | 'rk2' | 'rk4'

#### Returns

`object`

Solver result (fields depend on the chosen method)

##### events?

> `optional` **events?**: `object`[]

##### message

> **message**: `string`

##### nfev

> **nfev**: `number`

##### njev?

> `optional` **njev?**: `number`

##### nsteps

> **nsteps**: `number`

##### success

> **success**: `boolean`

##### t

> **t**: `number`[]

##### y

> **y**: `number`[] \| `number`[][]
