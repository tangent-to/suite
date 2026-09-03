---
title: "pseudoInverse"
---

> **pseudoInverse**(`data`): [`Matrix`](../classes/Matrix.md)

Defined in: [core/linalg.js:210](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/linalg.js#L210)

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
