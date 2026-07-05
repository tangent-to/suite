---
title: "GridSearchCV"
---

> **GridSearchCV**(`fitFn`, `scoreFn`, `X`, `y`, `paramGrid`, `options?`): `any`

Defined in: [ds/src/ml/tuning.js:20](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/tuning.js#L20)

Grid Search Cross-Validation

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

### paramGrid

`any`

Parameter grid {param1: [values], param2: [values]}

### options?

`any` = `{}`

{k, shuffle, metric}

## Returns

`any`

{bestParams, bestScore, bestModel, results}
