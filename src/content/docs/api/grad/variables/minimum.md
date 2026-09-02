---
title: "minimum"
---

> `const` **minimum**: (`aIn`, `bIn`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:138](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L138)

Elementwise minimum, broadcasting a scalar against anything.

Mirrors [maximum](maximum.md): at a tie the whole adjoint goes to the LEFT operand,
so `minimum(x, 0)` at `x = 0` reports `dx = 1`. A NaN operand propagates.

## Parameters

### aIn

`any`

### bIn

`any`

## Returns

[`Var`](../classes/Var.md)
