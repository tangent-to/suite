---
title: "numericalGradient"
---

> **numericalGradient**(`f`, `x`, `options?`): `number`[]

Defined in: [numdiff.js:14](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/numdiff.js#L14)

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
