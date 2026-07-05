---
title: "normalQuantile"
---

> **normalQuantile**(`p`): `number`

Defined in: [special.js:374](https://github.com/tangent-to/proba/blob/85ddb69de0040f1e8589d4aa03498c3e73f506c2/src/special.js#L374)

Inverse standard normal CDF (probit), Acklam's approximation refined
with one Halley step against erfc — accurate to full double precision.

## Parameters

### p

`number`

Probability in (0, 1)

## Returns

`number`

z with Φ(z) = p
