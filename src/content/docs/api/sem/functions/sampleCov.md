---
title: "sampleCov"
---

> **sampleCov**(`data`, `names`): `object`

Defined in: [fit.js:34](https://github.com/tangent-to/sem/blob/124fa0ee2c1adf1b606c5303cb2e9783909925f0/src/fit.js#L34)

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
