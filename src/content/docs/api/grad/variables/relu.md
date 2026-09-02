---
title: "relu"
---

> `const` **relu**: (`aIn`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:160](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L160)

Rectified linear unit, `max(x, 0)`.

The same thing as `maximum(x, 0)`, as a unary op: no second operand and no
broadcast machinery for the case that wants neither. It is also the
primitive that makes a piecewise-linear model expressible at all, a
quadratic-plateau dose response being the case in hand: the join sits at a
PARAMETER, so which observations fall below it changes as the optimizer or
sampler moves, and no precomputed mask can stand in for the clamp.

`relu'(0) = 0`, matching JAX and PyTorch. A NaN propagates.

## Parameters

### aIn

`any`

## Returns

[`Var`](../classes/Var.md)
