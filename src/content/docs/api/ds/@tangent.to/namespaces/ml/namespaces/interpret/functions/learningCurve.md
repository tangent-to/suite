---
title: "learningCurve"
---

> **learningCurve**(`fitFn`, `scoreFn`, `X`, `y`, `options?`): `any`

Defined in: [ml/interpret.js:244](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/interpret.js#L244)

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
