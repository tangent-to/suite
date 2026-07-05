---
title: "trainTestSplit"
---

> **trainTestSplit**(`X`, `y?`, `options?`): \{ `testIndices`: `number`[]; `trainIndices`: `number`[]; `XTest`: `any`[]; `XTrain`: `any`[]; `yTest?`: `undefined`; `yTrain?`: `undefined`; \} \| \{ `testIndices`: `number`[]; `trainIndices`: `number`[]; `XTest`: `any`[]; `XTrain`: `any`[]; `yTest`: `any`[]; `yTrain`: `any`[]; \}

Defined in: [ds/src/ml/validation.js:238](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/validation.js#L238)

Split data into train and test sets
Supports both raw matrices and declarative table descriptors

## Parameters

### X

`any`

### y?

`any` = `null`

### options?

## Returns

\{ `testIndices`: `number`[]; `trainIndices`: `number`[]; `XTest`: `any`[]; `XTrain`: `any`[]; `yTest?`: `undefined`; `yTrain?`: `undefined`; \} \| \{ `testIndices`: `number`[]; `trainIndices`: `number`[]; `XTest`: `any`[]; `XTrain`: `any`[]; `yTest`: `any`[]; `yTrain`: `any`[]; \}
