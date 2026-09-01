---
title: "addDiag"
---

> **addDiag**(`aIn`, `alphaIn`): `Var`

Defined in: [ops.js:295](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/ops.js#L295)

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
