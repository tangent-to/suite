---
title: "matmul"
---

> **matmul**(`A`, `B`): `number`[] \| `number`[][]

Defined in: [ops.js:20](https://github.com/tangent-to/lina/blob/adb3a553bbd4dae6f9113e782d71a7942bab552d/src/ops.js#L20)

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
