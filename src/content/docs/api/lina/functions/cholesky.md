---
title: "cholesky"
---

> **cholesky**(`A`): `number`[][]

Defined in: [cholesky.js:18](https://github.com/tangent-to/lina/blob/f3c886c700fd1caf2484ad1687facfa4797391b1/src/cholesky.js#L18)

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
