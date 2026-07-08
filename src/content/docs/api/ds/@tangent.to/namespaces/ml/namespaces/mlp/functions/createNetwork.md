---
title: "createNetwork"
---

> **createNetwork**(`layerSizes`, `activation?`): `any`[]

Defined in: [ml/mlp.js:157](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/mlp.js#L157)

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
