---
title: "norm"
---

> **norm**(`A`, `kind?`): `number`

Defined in: [ops.js:168](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/ops.js#L168)

Matrix or vector norm.

For a nested matrix: 'fro' (Frobenius), 1 (max column abs sum), or
Infinity (max row abs sum). For a vector: 'fro' or 2 (euclidean),
1 (abs sum), or Infinity (max abs).

## Parameters

### A

`number`[] \| `number`[][]

Nested matrix or vector

### kind?

`number` \| `"fro"`

Norm kind

## Returns

`number`
