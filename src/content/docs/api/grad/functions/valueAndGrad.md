---
title: "valueAndGrad"
---

> **valueAndGrad**(`f`): (`x`) => `object`

Defined in: [api.js:53](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/api.js#L53)

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
