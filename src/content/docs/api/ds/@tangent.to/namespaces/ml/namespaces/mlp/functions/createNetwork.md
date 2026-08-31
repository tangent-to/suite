---
title: "createNetwork"
---

> **createNetwork**(`layerSizes`, `activation?`): `any`[]

Defined in: [ml/mlp.js:157](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/mlp.js#L157)

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
