---
title: "solve"
---

> **solve**(`A`, `b`): `number`[] \| `number`[][]

Defined in: [lu.js:149](https://github.com/tangent-to/lina/blob/f3c886c700fd1caf2484ad1687facfa4797391b1/src/lu.js#L149)

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
