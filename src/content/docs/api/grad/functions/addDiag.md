---
title: "addDiag"
---

> **addDiag**(`aIn`, `alphaIn`): `Var`

Defined in: [ops.js:664](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L664)

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
