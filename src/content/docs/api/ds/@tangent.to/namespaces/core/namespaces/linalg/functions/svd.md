---
title: "svd"
---

> **svd**(`data`): `any`

Defined in: [core/linalg.js:85](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/linalg.js#L85)

Singular Value Decomposition (thin: U is m×k, V is n×k, k = min(m, n))

## Parameters

### data

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Input matrix

## Returns

`any`

{U, s, V} where data ≈ U * diag(s) * V'
