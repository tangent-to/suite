---
title: "reshape"
---

> **reshape**(`aIn`, `shape`): `Var`

Defined in: [ops.js:666](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L666)

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
