---
title: "lgamma"
---

> `const` **lgamma**: (`aIn`, ...`rest`) => [`Var`](../classes/Var.md)

Defined in: [ops.js:388](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L388)

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
