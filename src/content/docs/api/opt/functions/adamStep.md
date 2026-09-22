---
title: "adamStep"
---

> **adamStep**(`x`, `gradient`, `state?`, `options?`): `object`

Defined in: [steps.js:95](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/steps.js#L95)

Adam (Kingma and Ba, 2015): bias-corrected first and second moments. The
step count lives in the state, so bias correction is right however many
tensors share one options object.

## Parameters

### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

### state?

#### m

`Float64Array`

#### t

`number`

#### v

`Float64Array`

### options?

`StepOptions` & `object` = `{}`

## Returns

`object`

### m

> **m**: `Float64Array`

### t

> **t**: `number`

### v

> **v**: `Float64Array`
