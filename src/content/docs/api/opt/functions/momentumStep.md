---
title: "momentumStep"
---

> **momentumStep**(`x`, `gradient`, `state?`, `options?`): `object`

Defined in: [steps.js:49](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/steps.js#L49)

Gradient descent with momentum: `v = μ v + lr · g; x -= v`.

## Parameters

### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

### state?

#### velocity

`Float64Array`

### options?

`StepOptions` & `object` = `{}`

## Returns

`object`

### velocity

> **velocity**: `Float64Array`
