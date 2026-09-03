---
title: "RandomSearchCV"
---

> **RandomSearchCV**(`fitFn`, `scoreFn`, `X`, `y`, `paramDistributions`, `options?`): `any`

Defined in: [ml/tuning.js:123](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/tuning.js#L123)

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
