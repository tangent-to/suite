---
title: "svd"
---

> **svd**(`A`, `options?`): `object`

Defined in: [svd.js:23](https://github.com/tangent-to/lina/blob/adb3a553bbd4dae6f9113e782d71a7942bab552d/src/svd.js#L23)

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
