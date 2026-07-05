---
title: "rk4"
---

> **rk4**(`f`, `tSpan`, `y0`, `options`): `any`

Defined in: [fixed.js:159](https://github.com/tangent-to/ode/blob/f60ce54dcabcad232e27fc7b0fa8c897e9efb83e/src/fixed.js#L159)

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

`any`

{t, y, success, message, nfev, nsteps}
