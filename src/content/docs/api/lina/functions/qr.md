---
title: "qr"
---

> **qr**(`A`, `options?`): `object`

Defined in: [qr.js:102](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/qr.js#L102)

QR decomposition A = Q R via Householder reflections.

Works for any shape: m >= n and m < n alike.

## Parameters

### A

`number`[][]

m x n matrix

### options?

#### mode?

`string`

'reduced' (Q is m x min(m,n),
  R is min(m,n) x n) or 'full' (Q is m x m, R is m x n)

## Returns

`object`

### Q

> **Q**: `number`[][]

### R

> **R**: `number`[][]
