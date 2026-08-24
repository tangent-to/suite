---
title: "eigSymGeneralized"
---

> **eigSymGeneralized**(`A`, `B`, `options?`): `object`

Defined in: [eigsym.js:286](https://github.com/tangent-to/lina/blob/34950545722822ff72e186732f4f49743e3261c3/src/eigsym.js#L286)

Generalized symmetric eigenproblem A x = lambda B x, for symmetric A and
symmetric positive (semi)definite B.

When B is positive definite this is the textbook Cholesky reduction:
B = L L^T, eigendecompose C = L^-1 A L^-T, then x = L^-T y. The returned
eigenvectors are B-orthonormal (x^T B x = 1), matching LAPACK/scipy's
`eigh(A, B)`.

When B is only semidefinite the Cholesky factorization does not exist —
scipy raises here — so the reduction falls back to B's truncated inverse
square root (see invSqrtSym). Note what this solves: with P the orthogonal
projector onto range(B), the returned pairs satisfy

    P A x = lambda B x

the eigenproblem of A restricted to range(B), which is the most that is
defined when B is singular — off that range A x = lambda B x generally has
no solution at all. Null directions come back as zero eigenvectors with
zero eigenvalues, and the remaining vectors are scaled to unit euclidean
length, since B-orthonormality is undefined once B is singular. `definite`
reports which route ran, so callers needing scipy's strictness can check it
(or pass `strict`).

## Parameters

### A

`number`[][]

Symmetric matrix

### B

`number`[][]

Symmetric positive (semi)definite matrix

### options?

#### rcond?

`number`

Relative eigenvalue cutoff for the
  semidefinite fallback; default n * eps

#### strict?

`boolean`

Throw instead of falling back when
  B is not positive definite

## Returns

`object`

values[i] descending; vectors' column i is the eigenvector for values[i]

### definite

> **definite**: `boolean`

### values

> **values**: `number`[]

### vectors

> **vectors**: `number`[][]

## Throws

When A or B is not symmetric, sizes disagree, or `strict`
  is set and B is not positive definite
