---
title: "eigGeneralized"
---

> **eigGeneralized**(`A`, `B`): `any`

Defined in: [core/linalg.js:123](https://github.com/tangent-to/ds/blob/d419050f9e6d9041137ea692cbd0c91c7ba902e3/src/core/linalg.js#L123)

Generalized symmetric eigendecomposition: solve A x = lambda B x for
symmetric A and symmetric positive (semi)definite B. Eigenvalues are
returned in descending order; eigenvectors are the columns of `vectors`.

When B is positive definite the vectors are B-orthonormal (x'Bx = 1), as
from scipy's eigh(A, B). When B is singular the problem is solved on
range(B) and the vectors have unit euclidean length instead; `definite`
reports which case applied.

## Parameters

### A

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Symmetric matrix

### B

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Symmetric positive (semi)definite matrix

## Returns

`any`

{values, vectors, definite}
