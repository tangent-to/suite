---
title: "trainFunction"
---

> **trainFunction**(`lossFn`, `params0`, `options?`): `any`

Defined in: [ml/train.js:148](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/train.js#L148)

Simple training loop for functions (not models)

## Parameters

### lossFn

`Function`

Loss function that returns {loss, gradient}

### params0

`number`[]

Initial parameters

### options?

`any` = `{}`

Training options

## Returns

`any`

{params, history}
