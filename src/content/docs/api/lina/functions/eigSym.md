---
title: "eigSym"
---

> **eigSym**(`A`, `options?`): `object`

Defined in: [eigsym.js:24](https://github.com/tangent-to/lina/blob/e7aceef1d5e9a9130b0f591b23795fe0079f45a6/src/eigsym.js#L24)

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
