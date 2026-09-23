---
title: "gammaincc"
---

> **gammaincc**(`a`, `x`): `number`

Defined in: [special.js:164](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/special.js#L164)

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
