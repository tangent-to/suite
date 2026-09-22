---
title: "gradientStep"
---

> **gradientStep**(`x`, `gradient`, `_state?`, `options?`): `null`

Defined in: [steps.js:34](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/steps.js#L34)

Plain gradient descent: `x -= lr · g`. Stateless; returns `null` so it has
the signature of the others.

## Parameters

### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

### \_state?

`null` = `null`

### options?

`StepOptions` = `{}`

## Returns

`null`
