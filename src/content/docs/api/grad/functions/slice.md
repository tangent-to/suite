---
title: "slice"
---

> **slice**(`aIn`, `start`, `size`): `Var`

Defined in: [ops.js:417](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L417)

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
