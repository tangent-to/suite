---
title: "logdetPSD"
---

> **logdetPSD**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:177](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/linalg.js#L177)

Log-determinant of a symmetric positive-definite matrix.

Composed as 2·Σ log Lᵢᵢ rather than given its own adjoint: the derivative
(A⁻¹) then falls out of the Cholesky adjoint, with one fewer formula to get
wrong and no second factorization.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

## Returns

[`Var`](../classes/Var.md)

scalar
