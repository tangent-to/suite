---
title: "cholesky"
---

> **cholesky**(`A`): `number`[][]

Defined in: [cholesky.js:18](https://github.com/tangent-to/lina/blob/e7aceef1d5e9a9130b0f591b23795fe0079f45a6/src/cholesky.js#L18)

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
