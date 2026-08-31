---
title: "learningCurve"
---

> **learningCurve**(`fitFn`, `scoreFn`, `X`, `y`, `options?`): `any`

Defined in: [ml/interpret.js:244](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/interpret.js#L244)

Learning curve data (performance vs training size)

## Parameters

### fitFn

`Function`

Function to fit model: (X, y) => model

### scoreFn

`Function`

Scoring function: (yTrue, yPred) => score

### X

`number`[][]

Feature matrix

### y

`any`[]

Target values

### options?

`any` = `{}`

{trainSizes, cv}

## Returns

`any`

{trainSizes, trainScores, testScores}
