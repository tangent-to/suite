---
title: "triangularSolve"
---

> **triangularSolve**(`tIn`, `bIn`, `opts?`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:124](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/linalg.js#L124)

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
