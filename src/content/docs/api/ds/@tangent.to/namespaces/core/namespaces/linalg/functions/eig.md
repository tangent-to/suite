---
title: "eig"
---

> **eig**(`data`): `any`

Defined in: [core/linalg.js:101](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/core/linalg.js#L101)

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
