---
title: "choleskySolve"
---

> **choleskySolve**(`L`, `b`): `number`[] \| `number`[][]

Defined in: [core/linalg.js:198](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/linalg.js#L198)

Solve A x = b (or A X = B) from the Cholesky factor L of A, by forward then
back substitution. Passing every right-hand side at once is much cheaper
than one call per column when building an inverse.

## Parameters

### L

`number`[][] \| [`Matrix`](../classes/Matrix.md)

Lower triangular factor

### b

`number`[] \| `number`[][]

Right-hand side vector, or a
  matrix whose columns are right-hand sides

## Returns

`number`[] \| `number`[][]

Solution, matching b's shape
