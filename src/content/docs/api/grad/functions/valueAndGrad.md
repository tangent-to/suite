---
title: "valueAndGrad"
---

> **valueAndGrad**(`f`): (`x`, `inputs?`) => `object`

Defined in: [api.js:154](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/api.js#L154)

Differentiate a scalar objective, returning both value and gradient.

## Parameters

### f

(`x`, `inputs?`) => [`Var`](../classes/Var.md)

objective, built from this
  package's ops. It receives `Var`s in the same structure as the parameters,
  and, when the returned function is called with a second argument, a map of
  input `Var`s as its own second argument. It must return a scalar `Var`.

## Returns

with a `.value(x, inputs)` that evaluates the objective alone, and may
  return a non-scalar in the boundary currency.

(`x`, `inputs?`) => `object`

## Examples

```ts
const f = (p) => add(square(p.mu), square(p.sigma));
valueAndGrad(f)({ mu: 3, sigma: 4 });
// { value: 25, gradient: { mu: 6, sigma: 8 } }
```

```ts
// Data as inputs rather than closed-over constants: the same objective
// evaluates on any batch.
const sse = (p, d) => sum(square(sub(d.y, mul(p.slope, d.x))));
valueAndGrad(sse)({ slope: 2 }, { x: [1, 2], y: [2, 5] });
```
