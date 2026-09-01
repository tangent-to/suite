---
title: "lstsq"
---

> **lstsq**(`A`, `b`): `object`

Defined in: [qr.js:128](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/qr.js#L128)

Least-squares solution of A x ≈ b via reduced QR.

Requires m >= n and full column rank: solves R x = Q^T b by back
substitution. Throws for rank-deficient R.

## Parameters

### A

`number`[][]

m x n matrix with m >= n

### b

`number`[]

Right-hand side of length m

## Returns

`object`

residualNorm = ||A x - b||_2

### residualNorm

> **residualNorm**: `number`

### x

> **x**: `number`[]
