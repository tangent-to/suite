---
title: "pow"
---

> **pow**(`aIn`, `k`): `Var`

Defined in: [ops.js:113](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/ops.js#L113)

Raise elementwise to a CONSTANT power. The exponent is not differentiated —
for a variable exponent write `exp(mul(k, log(x)))`, which carries both
partials and makes the domain restriction on `x` explicit.

## Parameters

### aIn

`any`

### k

`number`

## Returns

`Var`
