---
title: "qr"
---

> **qr**(`A`, `options?`): `object`

Defined in: [qr.js:102](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/qr.js#L102)

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
