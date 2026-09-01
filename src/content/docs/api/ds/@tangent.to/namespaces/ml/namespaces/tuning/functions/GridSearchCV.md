---
title: "GridSearchCV"
---

> **GridSearchCV**(`fitFn`, `scoreFn`, `X`, `y`, `paramGrid`, `options?`): `any`

Defined in: [ml/tuning.js:20](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/tuning.js#L20)

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
