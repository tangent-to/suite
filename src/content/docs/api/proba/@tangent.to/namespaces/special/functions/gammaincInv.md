---
title: "gammaincInv"
---

> **gammaincInv**(`p`, `a`): `number`

Defined in: [special.js:166](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/special.js#L166)

Inverse of the regularized lower incomplete gamma: x with P(a, x) = p.
Halley-refined Newton from the Wilson-Hilferty starting point
(following the approach in Numerical Recipes §6.2.1, reimplemented).

## Parameters

### p

`number`

Probability in [0, 1]

### a

`number`

Shape, a > 0

## Returns

`number`

x >= 0
