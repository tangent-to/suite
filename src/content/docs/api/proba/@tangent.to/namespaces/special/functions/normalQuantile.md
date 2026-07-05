---
title: "normalQuantile"
---

> **normalQuantile**(`p`): `number`

Defined in: [special.js:386](https://github.com/tangent-to/proba/blob/12a19a1171fcb31973b43d0cfb7201992e38f35d/src/special.js#L386)

Inverse standard normal CDF (probit), Acklam's approximation refined
with one Halley step against erfc — accurate to full double precision.

## Parameters

### p

`number`

Probability in (0, 1)

## Returns

`number`

z with Φ(z) = p
