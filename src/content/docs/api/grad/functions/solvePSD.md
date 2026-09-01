---
title: "solvePSD"
---

> **solvePSD**(`aIn`, `bIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:182](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/linalg.js#L182)

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
