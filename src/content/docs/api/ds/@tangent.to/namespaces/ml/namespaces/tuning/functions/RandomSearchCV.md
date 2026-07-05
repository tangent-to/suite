---
title: "RandomSearchCV"
---

> **RandomSearchCV**(`fitFn`, `scoreFn`, `X`, `y`, `paramDistributions`, `options?`): `any`

Defined in: [ds/src/ml/tuning.js:123](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/tuning.js#L123)

Random Search Cross-Validation

## Parameters

### fitFn

`Function`

Function (X, y, params) => model

### scoreFn

`Function`

Function (model, X, y) => score

### X

`any`[]

Feature matrix

### y

`any`[]

Target values

### paramDistributions

`any`

Parameter distributions

### options?

`any` = `{}`

{nIter, k, shuffle, seed}

## Returns

`any`

{bestParams, bestScore, bestModel, results}
