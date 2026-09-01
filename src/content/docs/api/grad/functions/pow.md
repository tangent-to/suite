---
title: "pow"
---

> **pow**(`aIn`, `k`): `Var`

Defined in: [ops.js:113](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/ops.js#L113)

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
