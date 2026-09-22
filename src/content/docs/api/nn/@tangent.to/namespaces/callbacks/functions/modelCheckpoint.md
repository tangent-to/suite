---
title: "modelCheckpoint"
---

> **modelCheckpoint**(`__namedParameters?`): `object`

Defined in: [callbacks.js:47](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/callbacks.js#L47)

Keep the parameters of the best epoch by `monitor` (default `valLoss`, else `loss`).

## Parameters

### \_\_namedParameters?

## Returns

`object`

### getBest

> **getBest**: () => `object`

#### Returns

`object`

##### epoch

> **epoch**: `number`

##### metric

> **metric**: `number` = `best`

##### params

> **params**: `any`

### onEpochEnd()

> **onEpochEnd**(`e`, `logs`, `ctx`): `void`

#### Parameters

##### e

`any`

##### logs

`any`

##### ctx

`any`

#### Returns

`void`
