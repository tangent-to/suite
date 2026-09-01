---
title: "cholesky"
---

> **cholesky**(`A`): `number`[][]

Defined in: [cholesky.js:18](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/cholesky.js#L18)

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
