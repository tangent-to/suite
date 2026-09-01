---
title: "logdetPSD"
---

> **logdetPSD**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:169](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/linalg.js#L169)

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
