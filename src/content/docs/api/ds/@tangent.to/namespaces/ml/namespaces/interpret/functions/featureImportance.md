---
title: "featureImportance"
---

> **featureImportance**(`model`, `X`, `y`, `scoreFn`, `options?`): `any`[]

Defined in: [ds/src/ml/interpret.js:18](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/interpret.js#L18)

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
