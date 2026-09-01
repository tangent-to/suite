---
title: "eig"
---

> **eig**(`data`): `any`

Defined in: [core/linalg.js:101](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/linalg.js#L101)

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
