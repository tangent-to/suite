---
title: "trainFunction"
---

> **trainFunction**(`lossFn`, `params0`, `options?`): `any`

Defined in: [ds/src/ml/train.js:148](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/train.js#L148)

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
