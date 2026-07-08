---
title: "numericalHessian"
---

> **numericalHessian**(`f`, `x`, `options?`): `number`[][]

Defined in: [numdiff.js:78](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/numdiff.js#L78)

Central finite-difference Hessian of a scalar function.

## Parameters

### f

`Function`

(x: Array<number>) => number

### x

`number`[]

Point of length n

### options?

#### step?

`number`

Relative step size

## Returns

`number`[][]

n-by-n symmetric Hessian
