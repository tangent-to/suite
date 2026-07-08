---
title: "RandomSearchCV"
---

> **RandomSearchCV**(`fitFn`, `scoreFn`, `X`, `y`, `paramDistributions`, `options?`): `any`

Defined in: [ml/tuning.js:123](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/tuning.js#L123)

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
