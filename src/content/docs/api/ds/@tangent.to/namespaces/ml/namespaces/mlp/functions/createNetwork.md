---
title: "createNetwork"
---

> **createNetwork**(`layerSizes`, `activation?`): `any`[]

Defined in: [ml/mlp.js:157](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/mlp.js#L157)

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
