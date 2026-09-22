---
title: "solveGeneral"
---

> **solveGeneral**(`aIn`, `bIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:210](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/linalg.js#L210)

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
