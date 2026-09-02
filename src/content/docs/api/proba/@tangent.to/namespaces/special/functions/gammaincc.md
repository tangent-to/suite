---
title: "gammaincc"
---

> **gammaincc**(`a`, `x`): `number`

Defined in: [special.js:164](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/special.js#L164)

Regularized upper incomplete gamma Q(a, x) = 1 - P(a, x), computed
without the cancellation of literally doing 1 - P.

## Parameters

### a

`number`

Shape parameter, a > 0

### x

`number`

Argument, x >= 0

## Returns

`number`

Q(a, x) in [0, 1]
