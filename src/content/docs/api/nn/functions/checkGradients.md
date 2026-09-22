---
title: "checkGradients"
---

> **checkGradients**(`model`, `X`, `y`, `options?`): `object`

Defined in: [check.js:20](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/check.js#L20)

## Parameters

### model

[`Model`](../classes/Model.md)

### X

`number`[][]

### y

`number`[] \| `number`[][]

### options?

#### h?

`number` = `1e-6`

#### perTensor?

`number` = `3`

coordinates checked in each parameter tensor

#### seed?

`number` = `1`

for the masks, held fixed across the differences

## Returns

`object`

### maxRelativeError

> **maxRelativeError**: `number`

### worst

> **worst**: `object`

#### worst.analytic

> **analytic**: `number`

#### worst.index

> **index**: `number`

#### worst.key

> **key**: `string`

#### worst.numeric

> **numeric**: `number`
