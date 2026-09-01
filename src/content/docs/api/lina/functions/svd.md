---
title: "svd"
---

> **svd**(`A`, `options?`): `object`

Defined in: [svd.js:23](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/svd.js#L23)

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
