---
title: "numericalGradient"
---

> **numericalGradient**(`f`, `x`, `options?`): `number`[]

Defined in: [numdiff.js:14](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/numdiff.js#L14)

Approximate the gradient of a scalar function by central finite differences.

## Parameters

### f

`Function`

Scalar function (x: Array<number>) => number

### x

`number`[]

Point at which to evaluate the gradient

### options?

#### h?

`number`

Step size

## Returns

`number`[]

Gradient approximation
