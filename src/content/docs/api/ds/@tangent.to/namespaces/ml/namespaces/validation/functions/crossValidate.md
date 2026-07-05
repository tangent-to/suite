---
title: "crossValidate"
---

> **crossValidate**(`fitFn`, `scoreFn`, `X`, `y?`, `folds?`): `object`

Defined in: [ds/src/ml/validation.js:559](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/ml/validation.js#L559)

Execute cross-validation with a model.

Array API:
  crossValidate(fitFn, scoreFn, X, y, folds?)

Declarative table API:
  crossValidate(fitFn, scoreFn, { data, X, y, encoders? }, options?)
Options can include { k, shuffle, folds } when using descriptors.

Returns:
  { scores, meanScore, stdScore, nFolds, metadata?, tableFolds? }
When invoked with a descriptor, metadata/tableFolds include the training encoders
and per-fold table views for further inspection.

## Parameters

### fitFn

`any`

### scoreFn

`any`

### X

`any`

### y?

`any` = `null`

### folds?

`any` = `null`

## Returns

`object`

### meanScore

> **meanScore**: `number`

### nFolds

> **nFolds**: `number` = `foldDefs.length`

### scores

> **scores**: `any`[]

### stdScore

> **stdScore**: `number`
