---
title: "betaincInv"
---

> **betaincInv**(`p`, `a`, `b`): `number`

Defined in: [special.js:273](https://github.com/tangent-to/proba/blob/85ddb69de0040f1e8589d4aa03498c3e73f506c2/src/special.js#L273)

Inverse of the regularized incomplete beta: x with I_x(a, b) = p.
Newton iteration with a bisection safeguard.

## Parameters

### p

`number`

Probability in [0, 1]

### a

`number`

a > 0

### b

`number`

b > 0

## Returns

`number`

x in [0, 1]
