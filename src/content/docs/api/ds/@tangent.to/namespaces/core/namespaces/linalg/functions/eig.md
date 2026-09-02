---
title: "eig"
---

> **eig**(`data`): `any`

Defined in: [core/linalg.js:101](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/linalg.js#L101)

Eigenvalue decomposition of a symmetric matrix.
Eigenvalues are returned in descending order; eigenvectors are the
columns of `vectors`. Throws for non-symmetric input.

## Parameters

### data

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Symmetric square matrix

## Returns

`any`

{values, vectors}
