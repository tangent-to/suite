---
title: "slice"
---

> **slice**(`aIn`, `start`, `size`): `Var`

Defined in: [ops.js:694](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L694)

Extract a contiguous submatrix (or subvector) — the differentiable form of
`rows.slice(...).map((r) => r.slice(...))`.

A structural equation model needs it: Σ is built over latent AND observed
variables, then only the observed block is compared with the data.

## Parameters

### aIn

`any`

### start

`number`[]

starting index per axis

### size

`number`[]

extent per axis

## Returns

`Var`
