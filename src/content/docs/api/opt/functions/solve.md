---
title: "solve"
---

> **solve**(`A`, `b`): `number`[]

Defined in: [linsolve.js:17](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/linsolve.js#L17)

Solve the linear system A x = b.

## Parameters

### A

`number`[][]

n-by-n coefficient matrix (not mutated)

### b

`number`[]

Right-hand side of length n (not mutated)

## Returns

`number`[]

Solution vector x

## Throws

If A is not square, b has the wrong length, or A is singular
