---
title: "lgamma"
---

> `const` **lgamma**: (`aIn`, ...`rest`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:432](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L432)

Elementwise log-gamma, `ln|Γ(x)|`, with the digamma function as its
derivative. What a Gamma or Beta log-density needs when its shape
parameter is itself being differentiated, as in a hierarchical prior.

## Parameters

### aIn

`any`

### rest

...`any`[]

## Returns

[`Var`](../classes/Var.md)
