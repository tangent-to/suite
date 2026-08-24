---
title: "featureImportance"
---

> **featureImportance**(`model`, `X`, `y`, `scoreFn`, `options?`): `any`[]

Defined in: [ml/interpret.js:18](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/interpret.js#L18)

Compute feature importance via permutation

## Parameters

### model

`any`

Fitted model with predict method

### X

`number`[][]

Feature matrix

### y

`number`[]

Target values

### scoreFn

`Function`

Scoring function (yTrue, yPred) => score

### options?

`any` = `{}`

{nRepeats, seed}

## Returns

`any`[]

Feature importance scores
