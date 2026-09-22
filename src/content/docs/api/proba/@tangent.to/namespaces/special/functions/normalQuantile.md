---
title: "normalQuantile"
---

> **normalQuantile**(`p`): `number`

Defined in: [special.js:401](https://github.com/tangent-to/proba/blob/553f6ddb839a983351006d4e70b05dc7313098ad/src/special.js#L401)

Inverse standard normal CDF (probit), Acklam's approximation refined
with one Halley step against erfc — accurate to full double precision.

## Parameters

### p

`number`

Probability in (0, 1)

## Returns

`number`

z with Φ(z) = p
