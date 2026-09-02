---
title: "maximum"
---

> `const` **maximum**: (`aIn`, `bIn`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:121](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L121)

Elementwise maximum, broadcasting a scalar against anything.

The subgradient at a tie is a convention, not a derivation: when `a === b`
the whole adjoint goes to the LEFT operand, so `maximum(x, 0)` at `x = 0`
reports `dx = 1`. Deterministic and cheap, and the caller landing exactly on
the tie can predict which way it falls. Splitting the adjoint evenly would
be defensible too, but it is not what this does.

`Math.max` is the forward, so a NaN operand propagates rather than being
quietly outranked. A sampler stepping outside a support needs the non-finite
value to reach it.

## Parameters

### aIn

`any`

### bIn

`any`

## Returns

[`Var`](../classes/Var.md)
