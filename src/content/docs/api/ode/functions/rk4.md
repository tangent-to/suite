---
title: "rk4"
---

> **rk4**(`f`, `tSpan`, `y0`, `options`): `object`

Defined in: [fixed.js:159](https://github.com/tangent-to/ode/blob/7d70fbe9c2f5edf316845d7d5f257803c52c73a2/src/fixed.js#L159)

Integrate y' = f(t, y) with the classic 4th-order Runge-Kutta method.

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

### options

#### nSteps?

`number`

Number of equal steps across tSpan

#### step?

`number`

Fixed step size h > 0 (required unless nSteps given; wins if both)

## Returns

`object`

Solver result

### message

> **message**: `string`

### nfev

> **nfev**: `number`

### nsteps

> **nsteps**: `number`

### success

> **success**: `boolean`

### t

> **t**: `number`[]

### y

> **y**: `number`[] \| `number`[][]
