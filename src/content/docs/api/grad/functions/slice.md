---
title: "slice"
---

> **slice**(`aIn`, `start`, `size`): `Var`

Defined in: [ops.js:738](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L738)

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
