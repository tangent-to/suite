---
title: "svd"
---

> **svd**(`A`, `options?`): `object`

Defined in: [svd.js:23](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/svd.js#L23)

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
