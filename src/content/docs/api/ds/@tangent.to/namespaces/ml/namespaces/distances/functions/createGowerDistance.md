---
title: "createGowerDistance"
---

> **createGowerDistance**(`data`, `types?`): `Function`

Defined in: [ml/distances.js:231](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/distances.js#L231)

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
