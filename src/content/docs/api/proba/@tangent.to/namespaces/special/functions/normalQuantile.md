---
title: "normalQuantile"
---

> **normalQuantile**(`p`): `number`

Defined in: [special.js:401](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/special.js#L401)

Inverse standard normal CDF (probit), Acklam's approximation refined
with one Halley step against erfc — accurate to full double precision.

## Parameters

### p

`number`

Probability in (0, 1)

## Returns

`number`

z with Φ(z) = p
