---
title: "solve"
---

> **solve**(`f`, `tSpan`, `y0`, `options?`): `object`

Defined in: [index.js:33](https://github.com/tangent-to/ode/blob/7d70fbe9c2f5edf316845d7d5f257803c52c73a2/src/index.js#L33)

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

`object`

Solver result (fields depend on the chosen method)

### events?

> `optional` **events?**: `object`[]

### message

> **message**: `string`

### nfev

> **nfev**: `number`

### njev?

> `optional` **njev?**: `number`

### nsteps

> **nsteps**: `number`

### success

> **success**: `boolean`

### t

> **t**: `number`[]

### y

> **y**: `number`[] \| `number`[][]
