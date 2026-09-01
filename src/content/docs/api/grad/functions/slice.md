---
title: "slice"
---

> **slice**(`aIn`, `start`, `size`): `Var`

Defined in: [ops.js:359](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/ops.js#L359)

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
