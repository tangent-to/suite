---
title: "pow"
---

> **pow**(`aIn`, `k`): `Var`

Defined in: [ops.js:171](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L171)

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
