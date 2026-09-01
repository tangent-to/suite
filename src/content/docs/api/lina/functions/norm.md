---
title: "norm"
---

> **norm**(`A`, `kind?`): `number`

Defined in: [ops.js:168](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/ops.js#L168)

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
