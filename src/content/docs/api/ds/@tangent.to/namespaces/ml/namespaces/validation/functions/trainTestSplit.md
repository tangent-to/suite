---
title: "trainTestSplit"
---

> **trainTestSplit**(`X`, `y?`, `options?`): `any`

Defined in: [ml/validation.js:245](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/validation.js#L245)

Split data into train and test sets
Supports both raw matrices and declarative table descriptors

## Parameters

### X

`any`

Design matrix (n × p) or a table descriptor ({ data, X, y, ... })

### y?

`any` = `null`

Response vector, or options object when X is a table descriptor

### options?

Split options

#### ratio?

`number`

Fraction of samples assigned to the train set (default 0.8)

#### seed?

`number`

Optional random seed for reproducible shuffling

#### shuffle?

`boolean`

Whether to shuffle indices before splitting (default true)

## Returns

`any`

Split result with XTrain/XTest, optional yTrain/yTest, and trainIndices/testIndices (or table views for descriptor input)
