---
title: "valueAndGradFns"
---

> **valueAndGradFns**(`f`): `object`

Defined in: [api.js:157](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/api.js#L157)

Split an objective into the SEPARATE value and gradient functions that an
API taking a `(fn, gradFn)` pair expects — `@tangent.to/mc`'s
`model.potential(name, fn, gradFn)` is the case this exists for.

The two share one evaluation: calling `.value(p)` then `.gradient(p)` on the
same parameters runs the tape once, not twice. That matters because a
sampler's value-and-gradient path calls both in turn, and the forward pass
is a full sweep over the data.

The cache holds exactly one entry and compares parameters structurally
against a defensive copy, so mutating a parameter array in place invalidates
it correctly rather than returning a stale gradient.

## Parameters

### f

(`x`) => [`Var`](../classes/Var.md)

objective built from this package's ops

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

## Example

```ts
const { value, gradient } = valueAndGradFns((p) => logLik(p));
model.potential('y', value, gradient);
```
