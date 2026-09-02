---
title: "matmul"
---

> **matmul**(`A`, `B`): `number`[] \| `number`[][]

Defined in: [ops.js:31](https://github.com/tangent-to/lina/blob/b2d75c870931aa9ccc78651d5f88e37681f92092/src/ops.js#L31)

Matrix product A B, or matrix-vector product A b.

## Parameters

### A

`number`[][]

m x n nested matrix

### B

`number`[] \| `number`[][]

n x p nested matrix, or
  vector of length n

## Returns

`number`[] \| `number`[][]

m x p nested matrix, or
  vector of length m
