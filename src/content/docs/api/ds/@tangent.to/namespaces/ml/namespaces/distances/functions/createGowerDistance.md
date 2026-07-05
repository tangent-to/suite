---
title: "createGowerDistance"
---

> **createGowerDistance**(`data`, `types?`): `Function`

Defined in: [ds/src/ml/distances.js:231](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/distances.js#L231)

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
