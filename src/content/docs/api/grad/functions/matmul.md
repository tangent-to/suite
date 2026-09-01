---
title: "matmul"
---

> **matmul**(`aIn`, `bIn`): `Var`

Defined in: [ops.js:162](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/ops.js#L162)

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
