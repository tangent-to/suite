---
title: "solve"
---

> **solve**(`A`, `b`): `number`[]

Defined in: [linsolve.js:17](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/linsolve.js#L17)

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
