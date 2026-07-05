---
title: lina
description: Linear algebra for JavaScript. Solve, LU, QR, Cholesky, SVD, symmetric eigendecomposition, and least squares. Validated against numpy and scipy.linalg.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<p class="tg-pkg-head"><span class="tg-slug">tangent<span class="slash">/</span>lina</span> <span class="tg-validated">validated against numpy / scipy.linalg</span></p>

Dense linear algebra on plain JavaScript arrays: solving systems, the standard factorizations (LU, QR, Cholesky, SVD, symmetric eigendecomposition), least squares, and the everyday matrix operations. Matrices are nested arrays (`number[][]`) and vectors are flat arrays (`number[]`); flat `Float64Array` storage is used internally for the numerics.

```bash
npm install @tangent.to/lina      # npm
deno add jsr:@tangent/lina         # Deno / JSR
```

<a class="tg-run" href="https://note.tangent.to/gh/tangent-to/lina/examples/linear-algebra.js">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
Run the example notebook
</a>

<div class="tg-imgph tg-imgph-wide">
<span class="tg-imgph-k">screenshot</span>
lina example notebook: a least-squares fit recovered through the QR factorization, with its residual norm
</div>

## Solving systems

Direct solves for square systems, plus the least-squares and pseudo-inverse routes for over- or under-determined ones.

| Signature | Description |
| --- | --- |
| `solve(A, b)` | Solve `A x = b` for a square `A` via LU with partial pivoting. |
| `lstsq(A, b)` | Least-squares solution of `A x = b`. Returns `{x, residualNorm}`. |
| `pinvSolve(A, b)` | Minimum-norm least-squares solution through the pseudo-inverse (SVD). |

## Factorizations

| Signature | Description |
| --- | --- |
| `lu(A)` | LU decomposition with partial pivoting. Returns `{L, U, P}`. |
| `qr(A)` | QR decomposition. Returns `{Q, R}`. |
| `cholesky(A)` | Cholesky factor of a symmetric positive-definite `A`. |
| `choleskySolve(A, b)` | Solve `A x = b` using the Cholesky factor. |
| `svd(A)` | Singular value decomposition. Returns `{U, s, V}` with singular values `s`. |
| `eigSym(A)` | Eigendecomposition of a symmetric `A`. Returns `{values, vectors}`. |

## Matrix operations

| Signature | Description |
| --- | --- |
| `matmul(A, B)` | Matrix product `A B`. |
| `transpose(A)` | Matrix transpose. |
| `inv(A)` | Inverse of a square `A`. |
| `det(A)` | Determinant. |
| `identity(n)` | `n`-by-`n` identity matrix. |
| `diag(v)` | Diagonal matrix from a vector (or the diagonal of a matrix). |
| `norm(x, ord?)` | Vector or matrix norm. |
| `trace(A)` | Sum of the diagonal entries. |

## Properties

| Signature | Description |
| --- | --- |
| `rank(A)` | Numerical rank from the singular values. |
| `cond(A)` | Condition number (ratio of largest to smallest singular value). |
| `isPositiveDefinite(A)` | Tests symmetric positive-definiteness via an attempted Cholesky. |

## Verified against numpy

The comparison suite runs each routine against `numpy` and `scipy.linalg` on shared matrices: `solve` and `lstsq` match to tolerance, the factorizations reconstruct their inputs (`Q R`, `L U`, `U diag(s) Vᵀ`) and satisfy their defining properties, and `eigSym` recovers the same values and vectors up to sign and ordering. `cond` and `rank` agree on the singular-value spectrum.
