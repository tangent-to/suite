---
title: "maximum"
---

> `const` **maximum**: (`aIn`, `bIn`, ...`rest`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:336](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L336)

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
