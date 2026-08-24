---
title: "trainFunction"
---

> **trainFunction**(`lossFn`, `params0`, `options?`): `any`

Defined in: [ml/train.js:148](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/train.js#L148)

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
