---
title: "featureImportance"
---

> **featureImportance**(`model`, `X`, `y`, `scoreFn`, `options?`): `any`[]

Defined in: [ml/interpret.js:18](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/ml/interpret.js#L18)

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
