---
title: "inv"
---

> **inv**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:254](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/linalg.js#L254)

Inverse of a general square matrix.

Prefer `solveGeneral(A, B)` over `matmul(inv(A), B)`: it is cheaper and
better conditioned. This exists for the cases where the inverse itself is
the quantity of interest.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

## Returns

[`Var`](../classes/Var.md)
