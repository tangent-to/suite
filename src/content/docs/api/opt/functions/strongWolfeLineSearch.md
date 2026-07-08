---
title: "strongWolfeLineSearch"
---

> **strongWolfeLineSearch**(`evaluate`, `x`, `p`, `f0`, `g0`, `options?`): `any`

Defined in: [linesearch.js:56](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/linesearch.js#L56)

Strong Wolfe line search along direction p from x.

## Parameters

### evaluate

`Function`

(x) => {loss, gradient}

### x

`number`[]

Starting point

### p

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

Descent direction (g0'p must be < 0)

### f0

`number`

f(x)

### g0

`number`[]

gradient at x

### options?

#### c1?

`number`

Sufficient-decrease constant

#### c2?

`number`

Curvature constant

#### maxIter?

`number`

Bracketing iterations

#### t0?

`number`

Initial step

#### tMax?

`number`

Maximum step

## Returns

`any`

{success, t, fx, gradient, xNew, fevals}
