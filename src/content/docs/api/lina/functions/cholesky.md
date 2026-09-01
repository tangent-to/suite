---
title: "cholesky"
---

> **cholesky**(`A`): `number`[][]

Defined in: [cholesky.js:18](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/cholesky.js#L18)

Cholesky factorization of a symmetric positive definite matrix.

## Parameters

### A

`number`[][]

Symmetric positive definite nested matrix

## Returns

`number`[][]

Lower triangular L with A = L L^T

## Throws

When A is not symmetric, or a diagonal pivot is <= 0
  (not positive definite)
