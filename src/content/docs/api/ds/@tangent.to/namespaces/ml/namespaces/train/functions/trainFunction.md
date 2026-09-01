---
title: "trainFunction"
---

> **trainFunction**(`lossFn`, `params0`, `options?`): `any`

Defined in: [ml/train.js:148](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/train.js#L148)

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
