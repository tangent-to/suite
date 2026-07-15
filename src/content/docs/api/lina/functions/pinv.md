---
title: "pinv"
---

> **pinv**(`A`, `rcond?`): `number`[][]

Defined in: [svd.js:169](https://github.com/tangent-to/lina/blob/74997f57cda689a82dc78ce1d90de3eaafa1a0f8/src/svd.js#L169)

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
