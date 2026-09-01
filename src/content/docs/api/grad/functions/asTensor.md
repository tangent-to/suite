---
title: "asTensor"
---

> **asTensor**(`x`, `name?`): `Tensor`

Defined in: [tensor.js:90](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/tensor.js#L90)

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
