---
title: "maximum"
---

> `const` **maximum**: (`aIn`, `bIn`, ...`rest`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:292](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L292)

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

### rest

...`any`[]

## Returns

[`Var`](../classes/Var.md)
