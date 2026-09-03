---
title: "valueAndGradFns"
---

> **valueAndGradFns**(`f`, `options?`): `object`

Defined in: [api.js:185](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/api.js#L185)

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

### options?

#### compile?

`boolean`

build the tape once and replay it,
  via [compile](compile.md). Worth an order of magnitude on a sampler, which calls
  this thousands of times at the same shapes; read `compile`'s constraint
  before turning it on. Off by default: a static graph is an assumption about
  your objective, and one this package cannot check for you.

## Returns

`object`

With `compile: true`, `compiled` is the underlying [compile](compile.md) closure,
  so its `toJSON()` is reachable: what lets a model send its likelihood to a
  worker as data.

### compiled?

> `optional` **compiled?**: `Function`

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
const { value, gradient } = valueAndGradFns((p) => logLik(p), { compile: true });
model.potential('y', value, gradient);
```
