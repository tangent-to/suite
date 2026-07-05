---
title: "solve"
---

> **solve**(`f`, `tSpan`, `y0`, `options?`): `any`

Defined in: [index.js:33](https://github.com/tangent-to/ode/blob/f60ce54dcabcad232e27fc7b0fa8c897e9efb83e/src/index.js#L33)

Solve an initial value problem, dispatching by method name (scipy
solve_ivp style). Defaults to adaptive RK45.

## Parameters

### f

`Function`

(t, y) => dydt

### tSpan

\[`number`, `number`\]

[t0, tEnd]

### y0

`number` \| `number`[]

Initial state

### options?

{method, ...solver options}

#### method?

`string`

'rk45' | 'rosenbrock' | 'euler' | 'rk2' | 'rk4'

## Returns

`any`

Solver result {t, y, success, ...}
