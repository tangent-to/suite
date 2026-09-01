---
title: "pinv"
---

> **pinv**(`A`, `rcond?`): `number`[][]

Defined in: [svd.js:169](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/svd.js#L169)

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
