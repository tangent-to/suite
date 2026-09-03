---
title: "createGowerDistance"
---

> **createGowerDistance**(`data`, `types?`): `Function`

Defined in: [ml/distances.js:231](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/distances.js#L231)

Create a Gower distance function with pre-computed ranges
Useful for KNN when you want to compute ranges once from training data

## Parameters

### data

`any`[][]

Training data to compute ranges from

### types?

`string`[] = `null`

Feature types ('numeric' or 'categorical')

## Returns

`Function`

Configured Gower distance function
