---
title: "triangularSolve"
---

> **triangularSolve**(`tIn`, `bIn`, `opts?`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:120](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/linalg.js#L120)

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
