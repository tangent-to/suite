---
title: "pow"
---

> **pow**(`aIn`, `k`): `Var`

Defined in: [ops.js:455](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/ops.js#L455)

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
