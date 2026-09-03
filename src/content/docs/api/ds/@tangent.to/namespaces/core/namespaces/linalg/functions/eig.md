---
title: "eig"
---

> **eig**(`data`): `any`

Defined in: [core/linalg.js:101](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/linalg.js#L101)

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
