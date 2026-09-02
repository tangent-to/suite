---
title: "gammaincInv"
---

> **gammaincInv**(`p`, `a`): `number`

Defined in: [special.js:181](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/special.js#L181)

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
