---
title: "cholesky"
---

> **cholesky**(`aIn`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:69](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/linalg.js#L69)

Cholesky factorization: returns lower-triangular L with A = L Lᵀ.

The adjoint is Murray (2016), *Differentiation of the Cholesky
decomposition*: with Φ(X) = tril(X) halved on the diagonal,

    Ā = L⁻ᵀ Φ(Lᵀ L̄) L⁻¹, symmetrized.

`A` is assumed symmetric — only its lower triangle affects the factor — so
the returned gradient is symmetrized: it is the derivative with respect to a
SYMMETRIC perturbation of A. That is what you want when A is a covariance
built by a kernel, which is every use here. Feeding a matrix whose two
triangles disagree is a modelling error, and lina's forward rejects it.

## Parameters

### aIn

[`Var`](../classes/Var.md) \| `number`[][]

symmetric positive-definite matrix

## Returns

[`Var`](../classes/Var.md)

lower-triangular factor (n × n)
