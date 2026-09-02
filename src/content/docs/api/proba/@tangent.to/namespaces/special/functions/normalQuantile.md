---
title: "normalQuantile"
---

> **normalQuantile**(`p`): `number`

Defined in: [special.js:401](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/special.js#L401)

Inverse standard normal CDF (probit), Acklam's approximation refined
with one Halley step against erfc — accurate to full double precision.

## Parameters

### p

`number`

Probability in (0, 1)

## Returns

`number`

z with Φ(z) = p
