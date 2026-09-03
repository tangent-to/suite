---
title: "matmul"
---

> **matmul**(`aIn`, `bIn`): `Var`

Defined in: [ops.js:470](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L470)

Matrix product. Accepts matrix × matrix and matrix × vector; a vector on the
right is treated as a column, as in numpy.

## Parameters

### aIn

`any`

(m × k)

### bIn

`any`

(k × n) or (k)

## Returns

`Var`

(m × n) or (m)
