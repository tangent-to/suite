---
title: "inv"
---

> **inv**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:254](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/linalg.js#L254)

Inverse of a general square matrix.

Prefer `solveGeneral(A, B)` over `matmul(inv(A), B)`: it is cheaper and
better conditioned. This exists for the cases where the inverse itself is
the quantity of interest.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

## Returns

[`Var`](../classes/Var.md)
