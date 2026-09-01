---
title: "crossValidate"
---

> **crossValidate**(`fitFn`, `scoreFn`, `X`, `y?`, `folds?`): `object`

Defined in: [ml/validation.js:573](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/validation.js#L573)

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

`Function`

Fits a model given (XTrain, yTrain) and returns the model

### scoreFn

`Function`

Scores a model given (model, XTest, yTest) and returns a number

### X

`any`

Design matrix (n × p) or a table descriptor ({ data, X, y, encoders? })

### y?

`any` = `null`

Response vector, or options object when X is a table descriptor

### folds?

`any`[] = `null`

Optional fold definitions (each with trainIndices/testIndices); defaults to k-fold

## Returns

`object`

Cross-validation results

### meanScore

> **meanScore**: `number`

### metadata?

> `optional` **metadata?**: `any`

### nFolds

> **nFolds**: `number`

### scores

> **scores**: `number`[]

### stdScore

> **stdScore**: `number`

### tableFolds?

> `optional` **tableFolds?**: `any`[]
