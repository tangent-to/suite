---
title: "ensemble"
---

> **ensemble**(`model`, `X`, `y`, `options?`): `Promise`\<\{ `members`: [`Model`](../classes/Model.md)[]; `predict`: `Function`; \}\>

Defined in: [ensemble.js:18](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/ensemble.js#L18)

## Parameters

### model

[`Model`](../classes/Model.md)

the template; it is not trained itself

### X

`number`[][]

### y

`number`[] \| `number`[][]

### options?

#### fit?

`any` = `{}`

options passed to each member's `fit`

#### members?

`number` = `5`

#### seeds?

`number`[]

one per member; drawn from the template's rng otherwise

## Returns

`Promise`\<\{ `members`: [`Model`](../classes/Model.md)[]; `predict`: `Function`; \}\>
