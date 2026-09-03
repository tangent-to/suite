---
title: "compile"
---

> **compile**(`f`): (`x`) => `object`

Defined in: [api.js:424](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/api.js#L424)

Like [valueAndGrad](valueAndGrad.md), but the tape is built once and replayed.

`valueAndGrad` reconstructs the whole graph on every call: a `Var` and a
closure per operation, a topological sort, a fresh gradient buffer per node.
On a 340-observation regression that bookkeeping is 92% of the runtime — the
arithmetic itself is the small part. None of it changes between calls, since
the shapes are fixed and the sequence of operations is the same; only the
parameter values move. So this keeps the graph, writes the new values into
its leaves, and replays it. Measured on that model: 0.59 ms per gradient
becomes 0.024 ms.

THE CONSTRAINT. The graph must be the same on every call. Two ways to break
that, both of them things you have to go out of your way to write:

  - branching on a parameter's numeric value, by reaching into `.data`, so
    that different inputs take different paths through the objective;
  - closing over data that is mutated between calls, which the plan captured
    as a constant when it was built.

A branch INSIDE an op is fine, and is the reason `relu` and `maximum` exist:
the kernel picks a side per element, while the graph stays put. If your
objective needs a genuine structural branch, use `valueAndGrad`.

A change in a parameter's SHAPE is detected and rebuilds the plan, so
varying dimensions cost a rebuild rather than a wrong answer.

## Parameters

### f

(`x`) => [`Var`](../classes/Var.md)

objective, as for [valueAndGrad](valueAndGrad.md)

## Returns

(`x`) => `object`

## Example

```ts
const vg = compile((p) => negLogLik(p));
for (const p of chain) vg(p);   // one graph, many evaluations
```
