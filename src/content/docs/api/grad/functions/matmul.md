---
title: "matmul"
---

> **matmul**(`aIn`, `bIn`): `Var`

Defined in: [ops.js:514](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L514)

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
