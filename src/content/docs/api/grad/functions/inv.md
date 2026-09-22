---
title: "inv"
---

> **inv**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:268](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/linalg.js#L268)

Inverse of a general square matrix.

Prefer `solveGeneral(A, B)` over `matmul(inv(A), B)`: it is cheaper and
better conditioned. This exists for the cases where the inverse itself is
the quantity of interest.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

## Returns

[`Var`](../classes/Var.md)
