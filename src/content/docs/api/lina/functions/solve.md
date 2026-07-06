---
title: "solve"
---

> **solve**(`A`, `b`): `number`[] \| `number`[][]

Defined in: [lu.js:149](https://github.com/tangent-to/lina/blob/e7aceef1d5e9a9130b0f591b23795fe0079f45a6/src/lu.js#L149)

Solve A x = b via LU factorization with partial pivoting.

## Parameters

### A

`number`[][]

Square nested matrix

### b

`number`[] \| `number`[][]

Right-hand side vector (length n)
  or nested matrix of right-hand sides (n x k, solved column by column)

## Returns

`number`[] \| `number`[][]

Solution vector, or nested n x k matrix
