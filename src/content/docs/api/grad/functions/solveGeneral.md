---
title: "solveGeneral"
---

> **solveGeneral**(`aIn`, `bIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:202](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/linalg.js#L202)

Solve A X = B for a GENERAL square A, via LU.

`solvePSD` covers the symmetric positive-definite case more cheaply, but a
structural equation model's Σ(θ) = F(I−A)⁻¹ S (I−A)⁻ᵀ Fᵀ has to invert
I−A, which is a matrix of directed paths and is not symmetric. Hence this.

The adjoint follows from X = A⁻¹B, so dX = −A⁻¹ dA X + A⁻¹ dB:

    B̄ = A⁻ᵀ X̄,     Ā = −B̄ Xᵀ

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

square matrix (n × n)

### bIn

[`Var`](../classes/Var.md) \| `number`[] \| `number`[][]

(n × k) or (n)

## Returns

[`Var`](../classes/Var.md)

solution, shaped like `b`
