---
title: "default"
---

> **default**: `object`

Defined in: [index.js:24](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/index.js#L24)

## Type Declaration

### cholesky

> **cholesky**: (`A`) => `number`[][]

Cholesky factorization of a symmetric positive definite matrix.

#### Parameters

##### A

`number`[][]

Symmetric positive definite nested matrix

#### Returns

`number`[][]

Lower triangular L with A = L L^T

#### Throws

When A is not symmetric, or a diagonal pivot is <= 0
  (not positive definite)

### choleskySolve

> **choleskySolve**: (`L`, `b`) => `number`[] \| `number`[][]

Solve A x = b (or A X = B) given the Cholesky factor L of A (A = L L^T), by
forward substitution (L y = b) then back substitution (L^T x = y).

Accepts either a single right-hand side vector or a matrix of them. Passing
the whole set at once matters: the alternative — calling this once per
column — repeats the triangular walk's setup per column, which turns
building an inverse into markedly more work than it needs. Measured on a
340x340 factor, one call with 340 right-hand sides against 340 single-vector
calls: 76 ms against 371 ms.

Reads the factor's nested rows directly rather than copying it to flat
storage, and divides rather than multiplying by a reciprocal so the scaling
step stays exact. The two paths accumulate in different orders — a scalar
per element for one right-hand side, an axpy across the row for many — so
they agree to roundoff (~1e-19 relative on the sizes measured) rather than
bit for bit.

#### Parameters

##### L

`number`[][]

Lower triangular factor from cholesky()

##### b

`number`[] \| `number`[][]

Right-hand side vector, or
  an n x k matrix of right-hand sides

#### Returns

`number`[] \| `number`[][]

Solution, matching the shape
  of `b`

### cond

> **cond**: (`A`) => `number`

Condition number (2-norm): s_max / s_min. Infinity when singular.

#### Parameters

##### A

`number`[][]

Matrix

#### Returns

`number`

### det

> **det**: (`A`) => `number`

Determinant via LU factorization (permutation sign times product of pivots).
Returns 0 for singular matrices instead of throwing.

#### Parameters

##### A

`number`[][]

Square nested matrix

#### Returns

`number`

### diag

> **diag**: (`x`) => `number`[] \| `number`[][]

Build a diagonal matrix from a vector, or extract the diagonal of a matrix.

#### Parameters

##### x

`number`[] \| `number`[][]

Vector (returns an n x n
  nested matrix) or nested matrix (returns its diagonal, length min(m, n))

#### Returns

`number`[] \| `number`[][]

### eigSym

> **eigSym**: (`A`, `options?`) => `object`

Eigendecomposition of a symmetric matrix: A = V diag(values) V^T.

#### Parameters

##### A

`number`[][]

Symmetric matrix (validated to 1e-10)

##### options?

###### maxSweeps?

`number`

Maximum Jacobi sweeps

###### tol?

`number`

Off-diagonal convergence tolerance,
  relative to the Frobenius norm of the diagonal

#### Returns

`object`

values[i] descending; vectors' column i is the eigenvector for values[i]

##### values

> **values**: `number`[]

##### vectors

> **vectors**: `number`[][]

### eigSymGeneralized

> **eigSymGeneralized**: (`A`, `B`, `options?`) => `object`

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

#### Parameters

##### A

`number`[][]

Symmetric matrix

##### B

`number`[][]

Symmetric positive (semi)definite matrix

##### options?

###### rcond?

`number`

Relative eigenvalue cutoff for the
  semidefinite fallback; default n * eps

###### strict?

`boolean`

Throw instead of falling back when
  B is not positive definite

#### Returns

`object`

values[i] descending; vectors' column i is the eigenvector for values[i]

##### definite

> **definite**: `boolean`

##### values

> **values**: `number`[]

##### vectors

> **vectors**: `number`[][]

#### Throws

When A or B is not symmetric, sizes disagree, or `strict`
  is set and B is not positive definite

### identity

> **identity**: (`n`) => `number`[][]

Identity matrix of size n.

#### Parameters

##### n

`number`

Dimension (positive integer)

#### Returns

`number`[][]

### inv

> **inv**: (`A`) => `number`[][]

Matrix inverse via solve(A, I).

#### Parameters

##### A

`number`[][]

Square nested matrix

#### Returns

`number`[][]

### invSqrtSym

> **invSqrtSym**: (`A`, `options?`) => `number`[][]

Inverse square root of a symmetric positive semidefinite matrix:
the symmetric W with W A W = I on A's range, and W = 0 on its null space.

#### Parameters

##### A

`number`[][]

Symmetric positive semidefinite matrix

##### options?

###### rcond?

`number`

Relative eigenvalue cutoff below which a
  direction is treated as null; default n * eps

#### Returns

`number`[][]

Symmetric n x n inverse square root

#### Throws

When A is not symmetric or has a clearly negative eigenvalue

### isPositiveDefinite

> **isPositiveDefinite**: (`A`) => `boolean`

Test positive definiteness by attempting a Cholesky factorization.
Never throws; non-symmetric or malformed input returns false.

#### Parameters

##### A

`number`[][]

Nested matrix

#### Returns

`boolean`

### lstsq

> **lstsq**: (`A`, `b`) => `object`

Least-squares solution of A x ≈ b via reduced QR.

Requires m >= n and full column rank: solves R x = Q^T b by back
substitution. Throws for rank-deficient R.

#### Parameters

##### A

`number`[][]

m x n matrix with m >= n

##### b

`number`[]

Right-hand side of length m

#### Returns

`object`

residualNorm = ||A x - b||_2

##### residualNorm

> **residualNorm**: `number`

##### x

> **x**: `number`[]

### lu

> **lu**: (`A`) => `object`

LU factorization with partial pivoting: P A = L U.

#### Parameters

##### A

`number`[][]

Square nested matrix

#### Returns

`object`

L unit lower triangular, U upper triangular, P a permutation matrix.

##### L

> **L**: `number`[][]

##### P

> **P**: `number`[][]

##### U

> **U**: `number`[][]

### luFactor

> **luFactor**: (`A`) => `object`

LU factorization in packed flat storage, for callers that back-substitute
many right-hand sides against one factorization on a hot path.

Unlike lu(), this skips building the nested L, U and dense permutation
matrix P: it returns the combined LU array directly (unit-diagonal L
strictly below the diagonal, U on and above, in row-major n*n storage)
together with the permutation vector, so no nested round-trip or
permutation-matrix scan is needed. Pair it with luFactorSolve().

#### Parameters

##### A

`number`[][]

Square nested matrix

#### Returns

`object`

`lu` is the combined LU storage (row-major n*n); `perm` maps factored row k
  to input row perm[k]; `sign` is the permutation sign; `singular` flags a
  pivot at or below 1e-13 * maxAbs(A).

##### lu

> **lu**: `Float64Array`

##### n

> **n**: `number`

##### perm

> **perm**: `Int32Array`

##### sign

> **sign**: `number`

##### singular

> **singular**: `boolean`

### luFactorSolve

> **luFactorSolve**: (`fac`, `b`) => `Float64Array`\<`ArrayBufferLike`\>

Solve A x = b from a packed factorization returned by luFactor().

#### Parameters

##### fac

luFactor() result

###### lu

`Float64Array`

###### n

`number`

###### perm

`Int32Array`

##### b

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

Right-hand side (length n, not modified)

#### Returns

`Float64Array`\<`ArrayBufferLike`\>

Solution vector x

### matmul

> **matmul**: (`A`, `B`) => `number`[] \| `number`[][]

Matrix product A B, or matrix-vector product A b.

#### Parameters

##### A

`number`[][]

m x n nested matrix

##### B

`number`[] \| `number`[][]

n x p nested matrix, or
  vector of length n

#### Returns

`number`[] \| `number`[][]

m x p nested matrix, or
  vector of length m

### norm

> **norm**: (`A`, `kind?`) => `number`

Matrix or vector norm.

For a nested matrix: 'fro' (Frobenius), 1 (max column abs sum), or
Infinity (max row abs sum). For a vector: 'fro' or 2 (euclidean),
1 (abs sum), or Infinity (max abs).

#### Parameters

##### A

`number`[] \| `number`[][]

Nested matrix or vector

##### kind?

`number` \| `"fro"`

Norm kind

#### Returns

`number`

### pinv

> **pinv**: (`A`, `rcond?`) => `number`[][]

Moore-Penrose pseudoinverse via SVD, with numpy's default cutoff.
Solves rank-deficient least squares: x = pinv(A) b is the minimum-norm
solution.

#### Parameters

##### A

`number`[][]

Matrix (any shape)

##### rcond?

`number`

Relative cutoff; default max(m,n) * eps

#### Returns

`number`[][]

n×m pseudoinverse

### pinvSolve

> **pinvSolve**: (`A`, `b`) => `number`[]

Minimum-norm least squares via the pseudoinverse (works for any rank).

#### Parameters

##### A

`number`[][]

m×n matrix

##### b

`number`[]

Vector of length m

#### Returns

`number`[]

x of length n

### qr

> **qr**: (`A`, `options?`) => `object`

QR decomposition A = Q R via Householder reflections.

Works for any shape: m >= n and m < n alike.

#### Parameters

##### A

`number`[][]

m x n matrix

##### options?

###### mode?

`string`

'reduced' (Q is m x min(m,n),
  R is min(m,n) x n) or 'full' (Q is m x m, R is m x n)

#### Returns

`object`

##### Q

> **Q**: `number`[][]

##### R

> **R**: `number`[][]

### rank

> **rank**: (`A`, `tol?`) => `number`

Numerical rank via SVD.

#### Parameters

##### A

`number`[][]

Matrix

##### tol?

`number`

Threshold; default max(m,n) * eps * s[0] (numpy convention)

#### Returns

`number`

### solve

> **solve**: (`A`, `b`) => `number`[] \| `number`[][]

Solve A x = b via LU factorization with partial pivoting.

#### Parameters

##### A

`number`[][]

Square nested matrix

##### b

`number`[] \| `number`[][]

Right-hand side vector (length n)
  or nested matrix of right-hand sides (n x k, solved column by column)

#### Returns

`number`[] \| `number`[][]

Solution vector, or nested n x k matrix

### svd

> **svd**: (`A`, `options?`) => `object`

Thin SVD: A = U diag(s) V^T with U m×k, s length k, V n×k, k = min(m, n).
Singular values are non-negative and descending.

#### Parameters

##### A

`number`[][]

Matrix (any shape)

##### options?

###### maxSweeps?

`number`

Maximum Jacobi sweeps

###### tol?

`number`

Column-pair orthogonality tolerance

#### Returns

`object`

##### s

> **s**: `number`[]

##### U

> **U**: `number`[][]

##### V

> **V**: `number`[][]

### trace

> **trace**: (`A`) => `number`

Sum of the diagonal of a square matrix.

#### Parameters

##### A

`number`[][]

Square nested matrix

#### Returns

`number`

### transpose

> **transpose**: (`A`) => `number`[][]

Matrix transpose.

#### Parameters

##### A

`number`[][]

m x n nested matrix

#### Returns

`number`[][]

n x m nested matrix
