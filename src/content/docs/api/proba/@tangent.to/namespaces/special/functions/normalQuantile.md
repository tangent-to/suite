---
title: "normalQuantile"
---

> **normalQuantile**(`p`): `number`

Defined in: [special.js:386](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/special.js#L386)

Inverse standard normal CDF (probit), Acklam's approximation refined
with one Halley step against erfc — accurate to full double precision.

## Parameters

### p

`number`

Probability in (0, 1)

## Returns

`number`

z with Φ(z) = p
