---
title: "svd"
---

> **svd**(`data`): `any`

Defined in: [core/linalg.js:85](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/linalg.js#L85)

Singular Value Decomposition (thin: U is m×k, V is n×k, k = min(m, n))

## Parameters

### data

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Input matrix

## Returns

`any`

{U, s, V} where data ≈ U * diag(s) * V'
