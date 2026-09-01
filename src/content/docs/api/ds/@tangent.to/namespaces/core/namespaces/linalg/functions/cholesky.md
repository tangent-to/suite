---
title: "cholesky"
---

> **cholesky**(`data`): [`Matrix`](../classes/Matrix.md)

Defined in: [core/linalg.js:185](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/linalg.js#L185)

Cholesky factorization of a symmetric positive definite matrix

## Parameters

### data

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Symmetric positive definite matrix

## Returns

[`Matrix`](../classes/Matrix.md)

Lower triangular L with data = L * L'

## Throws

When the matrix is not symmetric or not positive definite
