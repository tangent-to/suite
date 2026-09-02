---
title: "choleskySolve"
---

> **choleskySolve**(`L`, `b`): `number`[] \| `number`[][]

Defined in: [cholesky.js:121](https://github.com/tangent-to/lina/blob/b2d75c870931aa9ccc78651d5f88e37681f92092/src/cholesky.js#L121)

Solve A x = b (or A X = B) given the Cholesky factor L of A (A = L L^T), by
forward substitution (L y = b) then back substitution (L^T x = y).

Accepts either a single right-hand side vector or a matrix of them. Passing
the whole set at once matters: the alternative — calling this once per
column — repeats the triangular walk's setup per column, which turns
building an inverse into markedly more work than it needs. Measured on a
340x340 factor, one call with 340 right-hand sides against 340 single-vector
calls: 76 ms against 371 ms.

Reads the factor's nested rows directly rather than copying it to flat
storage, and divides rather than multiplying by a reciprocal so the scaling
step stays exact. The two paths accumulate in different orders — a scalar
per element for one right-hand side, an axpy across the row for many — so
they agree to roundoff (~1e-19 relative on the sizes measured) rather than
bit for bit.

## Parameters

### L

`number`[][]

Lower triangular factor from cholesky()

### b

`number`[] \| `number`[][]

Right-hand side vector, or
  an n x k matrix of right-hand sides

## Returns

`number`[] \| `number`[][]

Solution, matching the shape
  of `b`
