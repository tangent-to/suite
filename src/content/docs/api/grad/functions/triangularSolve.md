---
title: "triangularSolve"
---

> **triangularSolve**(`tIn`, `bIn`, `opts?`): [`Var`](../classes/Var.md)

Defined in: [linalg.js:120](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/linalg.js#L120)

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
