---
title: "createGowerDistance"
---

> **createGowerDistance**(`data`, `types?`): `Function`

Defined in: [ml/distances.js:231](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/distances.js#L231)

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
