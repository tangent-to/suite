---
title: "earlyStopping"
---

> **earlyStopping**(`__namedParameters?`): `object`

Defined in: [callbacks.js:13](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/callbacks.js#L13)

Stop when the monitored quantity has not improved by `minDelta` for
`patience` epochs, and put the best weights back unless told otherwise.
The monitored quantity is `valLoss` when there is validation data, else
`loss`, or the `monitor` key named.

## Parameters

### \_\_namedParameters?

#### minDelta?

`number` = `0`

#### patience?

`number` = `10`

#### restoreBest?

`boolean` = `true`

## Returns

`object`

### best

> **best**: () => `number`

#### Returns

`number`

### onEpochEnd()

> **onEpochEnd**(`epoch`, `logs`, `ctx`): `void`

#### Parameters

##### epoch

`any`

##### logs

`any`

##### ctx

`any`

#### Returns

`void`

### onTrainEnd()

> **onTrainEnd**(`ctx`): `void`

#### Parameters

##### ctx

`any`

#### Returns

`void`
