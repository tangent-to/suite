---
title: "norm"
---

> **norm**(`A`, `kind?`): `number`

Defined in: [ops.js:129](https://github.com/tangent-to/lina/blob/f3c886c700fd1caf2484ad1687facfa4797391b1/src/ops.js#L129)

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
