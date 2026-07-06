---
title: "gammaincc"
---

> **gammaincc**(`a`, `x`): `number`

Defined in: [special.js:149](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/special.js#L149)

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
