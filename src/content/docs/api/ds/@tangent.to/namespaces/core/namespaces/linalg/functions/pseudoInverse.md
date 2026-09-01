---
title: "pseudoInverse"
---

> **pseudoInverse**(`data`): [`Matrix`](../classes/Matrix.md)

Defined in: [core/linalg.js:210](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/linalg.js#L210)

Moore-Penrose pseudoinverse via SVD with a singular-value cutoff
scaled by the matrix size and largest singular value (numpy
convention), so near-zero singular values are zeroed instead of
inverted into garbage for nearly rank-deficient matrices.

## Parameters

### data

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Input matrix

## Returns

[`Matrix`](../classes/Matrix.md)

Pseudoinverse
