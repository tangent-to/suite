---
title: "slice"
---

> **slice**(`aIn`, `start`, `size`): `Var`

Defined in: [ops.js:359](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/ops.js#L359)

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
