---
title: "matmul"
---

> **matmul**(`aIn`, `bIn`): `Var`

Defined in: [ops.js:220](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L220)

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
