---
title: "reshape"
---

> **reshape**(`aIn`, `shape`): `Var`

Defined in: [ops.js:392](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L392)

Reinterpret a tensor's shape without moving data. Row-major order is
preserved, so a length-6 vector becomes a 2×3 matrix reading left to right,
top to bottom. The adjoint is the identity — only the shape label changes.

The everyday use is packing a flat parameter vector, which is what an
optimizer or a sampler hands you, into the matrix a model is written in.

## Parameters

### aIn

`any`

### shape

`number`[]

rank 0, 1 or 2; must hold the same element count

## Returns

`Var`
