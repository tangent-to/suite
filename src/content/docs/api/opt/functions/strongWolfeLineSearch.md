---
title: "strongWolfeLineSearch"
---

> **strongWolfeLineSearch**(`evaluate`, `x`, `p`, `f0`, `g0`, `options?`): `any`

Defined in: [linesearch.js:56](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/linesearch.js#L56)

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
