---
title: "pow"
---

> **pow**(`aIn`, `k`): `Var`

Defined in: [ops.js:411](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L411)

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
