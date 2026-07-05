---
title: "solve"
---

> **solve**(`A`, `b`): `number`[] \| `number`[][]

Defined in: [lu.js:149](https://github.com/tangent-to/lina/blob/adb3a553bbd4dae6f9113e782d71a7942bab552d/src/lu.js#L149)

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
