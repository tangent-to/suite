---
title: "choleskySolve"
---

> **choleskySolve**(`L`, `b`): `number`[]

Defined in: [cholesky.js:48](https://github.com/tangent-to/lina/blob/74997f57cda689a82dc78ce1d90de3eaafa1a0f8/src/cholesky.js#L48)

Solve A x = b given the Cholesky factor L of A (A = L L^T), by forward
substitution (L y = b) then back substitution (L^T x = y).

## Parameters

### L

`number`[][]

Lower triangular factor from cholesky()

### b

`number`[]

Right-hand side vector

## Returns

`number`[]
