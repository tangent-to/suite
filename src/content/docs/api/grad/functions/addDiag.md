---
title: "addDiag"
---

> **addDiag**(`aIn`, `alphaIn`): `Var`

Defined in: [ops.js:295](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/ops.js#L295)

Add a constant to the diagonal of a square matrix — the jitter/noise idiom
(`K + αI`) that every Gaussian-process likelihood opens with. Differentiable
in both the matrix and the scalar.

## Parameters

### aIn

`any`

square matrix

### alphaIn

`any`

scalar, or one variance per row

## Returns

`Var`
