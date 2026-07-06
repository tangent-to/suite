---
title: "svd"
---

> **svd**(`A`, `options?`): `object`

Defined in: [svd.js:23](https://github.com/tangent-to/lina/blob/e7aceef1d5e9a9130b0f591b23795fe0079f45a6/src/svd.js#L23)

Thin SVD: A = U diag(s) V^T with U m×k, s length k, V n×k, k = min(m, n).
Singular values are non-negative and descending.

## Parameters

### A

`number`[][]

Matrix (any shape)

### options?

#### maxSweeps?

`number`

Maximum Jacobi sweeps

#### tol?

`number`

Column-pair orthogonality tolerance

## Returns

`object`

### s

> **s**: `number`[]

### U

> **U**: `number`[][]

### V

> **V**: `number`[][]
