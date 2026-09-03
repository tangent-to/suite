---
title: "featureImportance"
---

> **featureImportance**(`model`, `X`, `y`, `scoreFn`, `options?`): `any`[]

Defined in: [ml/interpret.js:18](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/interpret.js#L18)

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
