---
title: "triangularSolve"
---

> **triangularSolve**(`tIn`, `bIn`, `opts?`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:120](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/linalg.js#L120)

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
