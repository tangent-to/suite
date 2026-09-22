---
title: "rmspropStep"
---

> **rmspropStep**(`x`, `gradient`, `state?`, `options?`): `object`

Defined in: [steps.js:70](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/steps.js#L70)

RMSProp: a running mean of squared gradients scales each coordinate's step.

## Parameters

### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

### state?

#### cache

`Float64Array`

### options?

`StepOptions` & `object` = `{}`

## Returns

`object`

### cache

> **cache**: `Float64Array`
