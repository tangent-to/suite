---
title: "solve"
---

> **solve**(`A`, `b`): `number`[] \| `number`[][]

Defined in: [lu.js:186](https://github.com/tangent-to/lina/blob/74997f57cda689a82dc78ce1d90de3eaafa1a0f8/src/lu.js#L186)

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
