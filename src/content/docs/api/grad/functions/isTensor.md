---
title: "isTensor"
---

> **isTensor**(`x`): `boolean`

Defined in: [tensor.js:89](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/tensor.js#L89)

Is this already a tensor, `{ data: Float64Array, shape }`? The form a caller
may use for a parameter when it wants its gradient back as the same thing,
with no conversion to nested arrays on either side.

## Parameters

### x

`any`

## Returns

`boolean`
