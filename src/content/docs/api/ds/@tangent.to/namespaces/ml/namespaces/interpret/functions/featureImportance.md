---
title: "featureImportance"
---

> **featureImportance**(`model`, `X`, `y`, `scoreFn`, `options?`): `any`[]

Defined in: [ml/interpret.js:18](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/interpret.js#L18)

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
