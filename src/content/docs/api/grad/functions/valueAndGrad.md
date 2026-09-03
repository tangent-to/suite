---
title: "valueAndGrad"
---

> **valueAndGrad**(`f`): (`x`) => `object`

Defined in: [api.js:84](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/api.js#L84)

Differentiate a scalar objective, returning both value and gradient.

## Parameters

### f

(`x`) => [`Var`](../classes/Var.md)

objective, built from this package's ops. It
  receives `Var`s in the same structure as the input and must return a
  scalar `Var`.

## Returns

(`x`) => `object`

## Example

```ts
const f = (p) => add(square(p.mu), square(p.sigma));
valueAndGrad(f)({ mu: 3, sigma: 4 });
// { value: 25, gradient: { mu: 6, sigma: 8 } }
```
