---
title: "pseudoInverse"
---

> **pseudoInverse**(`data`): [`Matrix`](../classes/Matrix.md)

Defined in: [core/linalg.js:210](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L210)

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
