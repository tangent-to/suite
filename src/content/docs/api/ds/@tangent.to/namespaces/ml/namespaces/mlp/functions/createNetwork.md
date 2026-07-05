---
title: "createNetwork"
---

> **createNetwork**(`layerSizes`, `activation?`): `any`[]

Defined in: [ds/src/ml/mlp.js:157](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/mlp.js#L157)

Create MLP architecture

## Parameters

### layerSizes

`number`[]

Size of each layer [input, hidden1, ..., output]

### activation?

`string` = `'relu'`

Activation function ('sigmoid', 'relu', 'tanh')

## Returns

`any`[]

Initialized layers
