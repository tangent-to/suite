---
title: "jacobian"
---

> **jacobian**(`f`): (`x`) => `number`[][]

Defined in: [api.js:209](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/api.js#L209)

Jacobian of a VECTOR-valued function: `J[i][j] = ∂f(x)ᵢ / ∂xⱼ`.

Cost is one forward pass plus one reverse pass per OUTPUT — the tape is
built once and seeded m times.

DO NOT reach for this to supply a stiff ODE solver's ∂f/∂y. It was written
for that and measured against `@tangent.to/ode`'s finite-difference
Jacobian on a stiff reaction-diffusion system; it lost, and lost worse as
the system grew:

    n     FD      exact     steps (FD / exact)
    2    15 ms    27 ms          175 / 175
   10    23 ms   218 ms          171 / 171
   30    60 ms  1559 ms          171 / 171

The step counts are identical, which is the whole story: a Newton iteration
converges to the same answer with an approximate Jacobian — the residual is
still evaluated exactly — so finite-difference error costs nothing there.
Meanwhile a square Jacobian is the worst case for reverse mode: n sweeps
over an n-node graph, against n+1 evaluations of cheap scalar arithmetic.
Forward mode, or finite differences with sparsity colouring, is the right
tool for that shape.

Reverse mode pays when outputs are FEW and the map to them is expensive —
a delta-method standard error, the sensitivity of a handful of summaries to
many inputs.

## Parameters

### f

(`x`) => [`Var`](../classes/Var.md)

vector-valued function built from these ops

## Returns

m × n Jacobian

(`x`) => `number`[][]

## Example

```ts
const J = jacobian((y) => stack([mul(-2, y0(y)), sub(y0(y), y1(y))]));
```
