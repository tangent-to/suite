---
title: "createNetwork"
---

> **createNetwork**(`layerSizes`, `activation?`): `any`[]

Defined in: [ml/mlp.js:157](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/mlp.js#L157)

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
