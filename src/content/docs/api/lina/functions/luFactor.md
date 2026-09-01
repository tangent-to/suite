---
title: "luFactor"
---

> **luFactor**(`A`): `object`

Defined in: [lu.js:134](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/lu.js#L134)

LU factorization in packed flat storage, for callers that back-substitute
many right-hand sides against one factorization on a hot path.

Unlike lu(), this skips building the nested L, U and dense permutation
matrix P: it returns the combined LU array directly (unit-diagonal L
strictly below the diagonal, U on and above, in row-major n*n storage)
together with the permutation vector, so no nested round-trip or
permutation-matrix scan is needed. Pair it with luFactorSolve().

## Parameters

### A

`number`[][]

Square nested matrix

## Returns

`object`

`lu` is the combined LU storage (row-major n*n); `perm` maps factored row k
  to input row perm[k]; `sign` is the permutation sign; `singular` flags a
  pivot at or below 1e-13 * maxAbs(A).

### lu

> **lu**: `Float64Array`

### n

> **n**: `number`

### perm

> **perm**: `Int32Array`

### sign

> **sign**: `number`

### singular

> **singular**: `boolean`
