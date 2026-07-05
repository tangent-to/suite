---
title: "default"
---

> **default**: `object`

Defined in: [index.js:43](https://github.com/tangent-to/ode/blob/f60ce54dcabcad232e27fc7b0fa8c897e9efb83e/src/index.js#L43)

## Type Declaration

### euler

> **euler**: (`f`, `tSpan`, `y0`, `options`) => `any`

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

`any`

{t, y, success, message, nfev, nsteps}

### rk2

> **rk2**: (`f`, `tSpan`, `y0`, `options`) => `any`

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

`any`

{t, y, success, message, nfev, nsteps}

### rk4

> **rk4**: (`f`, `tSpan`, `y0`, `options`) => `any`

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

`any`

{t, y, success, message, nfev, nsteps}

### rk45

> **rk45**: (`f`, `tSpan`, `y0`, `options?`) => `any`

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

`any`

{t, y, success, message, nfev, nsteps, events?}

### rosenbrock

> **rosenbrock**: (`f`, `tSpan`, `y0`, `options?`) => `any`

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

`any`

{t, y, success, message, nfev, njev, nsteps}

### solve

> **solve**: (`f`, `tSpan`, `y0`, `options?`) => `any`

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

`any`

Solver result {t, y, success, ...}
