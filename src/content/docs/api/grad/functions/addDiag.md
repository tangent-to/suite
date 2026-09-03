---
title: "addDiag"
---

> **addDiag**(`aIn`, `alphaIn`): `Var`

Defined in: [ops.js:620](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L620)

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
