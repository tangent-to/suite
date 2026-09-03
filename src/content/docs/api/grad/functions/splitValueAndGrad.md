---
title: "splitValueAndGrad"
---

> **splitValueAndGrad**(`vg`): `object`

Defined in: [api.js:201](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/api.js#L201)

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
