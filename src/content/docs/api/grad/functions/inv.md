---
title: "inv"
---

> **inv**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:268](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/linalg.js#L268)

Inverse of a general square matrix.

Prefer `solveGeneral(A, B)` over `matmul(inv(A), B)`: it is cheaper and
better conditioned. This exists for the cases where the inverse itself is
the quantity of interest.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

## Returns

[`Var`](../classes/Var.md)
