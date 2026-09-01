---
title: "eigSym"
---

> **eigSym**(`A`, `options?`): `object`

Defined in: [eigsym.js:25](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/eigsym.js#L25)

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
