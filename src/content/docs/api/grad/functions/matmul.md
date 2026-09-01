---
title: "matmul"
---

> **matmul**(`aIn`, `bIn`): `Var`

Defined in: [ops.js:162](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/ops.js#L162)

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
