---
title: "eigSym"
---

> **eigSym**(`A`, `options?`): `object`

Defined in: [eigsym.js:25](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/eigsym.js#L25)

Eigendecomposition of a symmetric matrix: A = V diag(values) V^T.

## Parameters

### A

`number`[][]

Symmetric matrix (validated to 1e-10)

### options?

#### maxSweeps?

`number`

Maximum Jacobi sweeps

#### tol?

`number`

Off-diagonal convergence tolerance,
  relative to the Frobenius norm of the diagonal

## Returns

`object`

values[i] descending; vectors' column i is the eigenvector for values[i]

### values

> **values**: `number`[]

### vectors

> **vectors**: `number`[][]
