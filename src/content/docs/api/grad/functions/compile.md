---
title: "compile"
---

> **compile**(`f`): (`x`, `inputs?`) => `object`

Defined in: [api.js:532](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/api.js#L532)

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

Data that changes between calls is not a constant: pass it as INPUTS, the
second argument. The plan writes new inputs into its leaves exactly as it
writes new parameters, and reads no gradient from them. A mini-batch, a
dropout mask, a per-fit coefficient all go this way.

A change in a parameter's or an input's SHAPE builds another plan, and the
plans are kept by shape (a handful of them), so a loop that alternates a
full batch and a partial last batch pays for each shape once.

## Parameters

### f

(`x`, `inputs?`) => [`Var`](../classes/Var.md)

objective, as for [valueAndGrad](valueAndGrad.md)

## Returns

with `.value(x, inputs)`, the forward replay alone, which returns the
  root's value and may be a vector or a matrix; and `.toJSON()`, the plan as
  data.

(`x`, `inputs?`) => `object`

## Examples

```ts
const vg = compile((p) => negLogLik(p));
for (const p of chain) vg(p);   // one graph, many evaluations
```

```ts
const step = compile((p, d) => loss(net(p, d.X), d.y));
for (const [X, y] of batches) update(p, step(p, { X, y }).gradient);
step.value(p, { X: Xval, y: yval });   // the validation loss, no backward sweep
```
