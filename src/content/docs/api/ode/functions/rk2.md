---
title: "rk2"
---

> **rk2**(`f`, `tSpan`, `y0`, `options`): `object`

Defined in: [fixed.js:144](https://github.com/tangent-to/ode/blob/7b840a99e38056e3f6fb91e69d6a0c56a7b38d05/src/fixed.js#L144)

Integrate y' = f(t, y) with the explicit midpoint method (2nd order).

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
