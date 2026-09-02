---
title: "addDiag"
---

> **addDiag**(`aIn`, `alphaIn`): `Var`

Defined in: [ops.js:353](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L353)

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
