---
title: "solvePSD"
---

> **solvePSD**(`aIn`, `bIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:190](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/linalg.js#L190)

Solve A X = B for symmetric positive-definite A, via its Cholesky factor.
Composed from `cholesky` and two `triangularSolve`s, so it needs no adjoint
of its own.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

### bIn

[`Var`](../classes/Var.md) \| `number`[] \| `number`[][]

## Returns

[`Var`](../classes/Var.md)
