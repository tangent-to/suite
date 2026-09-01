---
title: "invSqrtSym"
---

> **invSqrtSym**(`A`, `options?`): `number`[][]

Defined in: [eigsym.js:244](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/eigsym.js#L244)

Inverse square root of a symmetric positive semidefinite matrix:
the symmetric W with W A W = I on A's range, and W = 0 on its null space.

## Parameters

### A

`number`[][]

Symmetric positive semidefinite matrix

### options?

#### rcond?

`number`

Relative eigenvalue cutoff below which a
  direction is treated as null; default n * eps

## Returns

`number`[][]

Symmetric n x n inverse square root

## Throws

When A is not symmetric or has a clearly negative eigenvalue
