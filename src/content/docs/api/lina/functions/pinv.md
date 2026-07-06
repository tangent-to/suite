---
title: "pinv"
---

> **pinv**(`A`, `rcond?`): `number`[][]

Defined in: [svd.js:169](https://github.com/tangent-to/lina/blob/e7aceef1d5e9a9130b0f591b23795fe0079f45a6/src/svd.js#L169)

Moore-Penrose pseudoinverse via SVD, with numpy's default cutoff.
Solves rank-deficient least squares: x = pinv(A) b is the minimum-norm
solution.

## Parameters

### A

`number`[][]

Matrix (any shape)

### rcond?

`number`

Relative cutoff; default max(m,n) * eps

## Returns

`number`[][]

n×m pseudoinverse
