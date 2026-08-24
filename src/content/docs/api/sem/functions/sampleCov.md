---
title: "sampleCov"
---

> **sampleCov**(`data`, `names`): `object`

Defined in: [fit.js:34](https://github.com/tangent-to/sem/blob/2f66ebbb8ba1e2abe3ca02d42292fde6eba48ff0/src/fit.js#L34)

Sample covariance matrix and means from raw data.

Uses the maximum-likelihood divisor N (lavaan's default rescaling), not the
unbiased N - 1. Every value must be finite; missing or non-numeric data
raises an Error, so impute or drop it first.

## Parameters

### data

`any`[]

Rows as objects, one field per variable

### names

`string`[]

Variable names to include, in output order

## Returns

`object`

`S` is
  the `names.length` square covariance matrix, `means` the per-variable
  means, `n` the number of rows

### means

> **means**: `number`[]

### n

> **n**: `number`

### S

> **S**: `number`[][]
