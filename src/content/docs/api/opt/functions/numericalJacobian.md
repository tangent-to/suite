---
title: "numericalJacobian"
---

> **numericalJacobian**(`f`, `x`, `options?`): `number`[][]

Defined in: [numdiff.js:42](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/numdiff.js#L42)

Central finite-difference Jacobian of a vector-valued function.
Per-component step h_j = step * max(1, |x_j|).

## Parameters

### f

`Function`

(x: Array<number>) => Array<number> of length m

### x

`number`[]

Point of length n

### options?

#### step?

`number`

Relative step size

## Returns

`number`[][]

m-by-n Jacobian
