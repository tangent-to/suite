---
title: "asTensor"
---

> **asTensor**(`x`, `name?`): `Tensor`

Defined in: [tensor.js:101](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/tensor.js#L101)

Coerce user input to a tensor: a number becomes a scalar, a flat array a
vector, a nested array a matrix. An existing tensor passes through untouched.

## Parameters

### x

`number` \| `Tensor` \| `Float64Array`\<`ArrayBufferLike`\> \| `number`[] \| `number`[][]

### name?

`string` = `'value'`

argument name for error messages

## Returns

`Tensor`
