---
title: "default"
---

> **default**: `object`

Defined in: [index.js:24](https://github.com/tangent-to/lina/blob/e7aceef1d5e9a9130b0f591b23795fe0079f45a6/src/index.js#L24)

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

> **choleskySolve**: (`L`, `b`) => `number`[]

Solve A x = b given the Cholesky factor L of A (A = L L^T), by forward
substitution (L y = b) then back substitution (L^T x = y).

#### Parameters

##### L

`number`[][]

Lower triangular factor from cholesky()

##### b

`number`[]

Right-hand side vector

#### Returns

`number`[]

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
