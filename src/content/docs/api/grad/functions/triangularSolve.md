---
title: "triangularSolve"
---

> **triangularSolve**(`tIn`, `bIn`, `opts?`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:124](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/linalg.js#L124)

Solve a triangular system T X = B.

## Parameters

### tIn

[`Var`](../classes/Var.md) \| `number`[][]

triangular matrix (n × n)

### bIn

[`Var`](../classes/Var.md) \| `number`[] \| `number`[][]

right-hand side (n × k) or (n)

### opts?

#### lower?

`boolean`

whether T is lower triangular

## Returns

[`Var`](../classes/Var.md)

solution, shaped like `b`
