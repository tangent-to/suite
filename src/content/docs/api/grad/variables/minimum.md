---
title: "minimum"
---

> `const` **minimum**: (`aIn`, `bIn`, ...`rest`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:316](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L316)

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
