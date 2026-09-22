---
title: "minimum"
---

> `const` **minimum**: (`aIn`, `bIn`, ...`rest`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:360](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L360)

Elementwise minimum, broadcasting a scalar against anything.

Mirrors [maximum](maximum.md): at a tie the whole adjoint goes to the LEFT operand,
so `minimum(x, 0)` at `x = 0` reports `dx = 1`. A NaN operand propagates.

## Parameters

### aIn

`any`

### bIn

`any`

### rest

...`any`[]

## Returns

[`Var`](../classes/Var.md)
