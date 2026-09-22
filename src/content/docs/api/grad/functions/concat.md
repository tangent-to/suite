---
title: "concat"
---

> **concat**(`parts`, `options?`): `Var`

Defined in: [ops.js:800](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L800)

Join parts end to end. Scalars and vectors become one vector. Matrices join
along `axis`: 0 stacks their rows (same column count), 1 puts them side by
side (same row count), which is how a network joins the outputs of two
branches for every row of a batch. The adjoint hands each part its slice.

## Parameters

### parts

`any`[]

### options?

for matrices; 0 by default

#### axis?

`number`

## Returns

`Var`
