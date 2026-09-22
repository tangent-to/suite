---
title: "splitValueAndGrad"
---

> **splitValueAndGrad**(`vg`): `object`

Defined in: [api.js:275](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/api.js#L275)

Split any `(x) => { value, gradient }` function into the separate value and
gradient functions a `(fn, gradFn)` API takes, sharing one evaluation
between them exactly as [valueAndGradFns](valueAndGradFns.md) does. For a function that
already exists, such as one rebuilt by [compileFromJSON](compileFromJSON.md).

## Parameters

### vg

(`x`) => `object`

## Returns

`object`

### gradient

> **gradient**: (`x`) => `any`

#### Parameters

##### x

`any`

#### Returns

`any`

### value

> **value**: (`x`) => `number`

#### Parameters

##### x

`any`

#### Returns

`number`
