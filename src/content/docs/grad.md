---
title: grad
description: Reverse-mode automatic differentiation for JavaScript. An array-valued tape with adjoints for Cholesky, triangular solves and log-determinants, so a log-likelihood written once yields its own exact gradient.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<p class="tg-pkg-head"><span class="tg-slug">tangent<span class="slash">/</span>grad</span> <span class="tg-validated">finite-difference and closed-form validated</span></p>

Reverse-mode automatic differentiation over plain nested arrays, with adjoints for the linear algebra statistical models are built from: Cholesky factorization, triangular solves, log-determinants and symmetric positive-definite systems. A log-likelihood written in these operations yields its own exact gradient, which is what gradient-based inference and hyperparameter optimization consume instead of a hand-derived formula per model or a finite-difference approximation.

```bash
npm install @tangent.to/grad     # npm
deno add jsr:@tangent/grad        # Deno / JSR
```

<a class="tg-run" href="https://note.tangent.to/gh/tangent-to/grad/examples/gradients.js">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
Run the example notebook
</a>

```js
import { valueAndGrad, add, square } from '@tangent.to/grad';

const f = (p) => add(square(p.mu), square(p.sigma));
valueAndGrad(f)({ mu: 3, sigma: 4 });
// { value: 25, gradient: { mu: 6, sigma: 8 } }
```

## Differentiation

`valueAndGrad` takes either a plain array or a `{name: value}` map, and returns the gradient in the shape the parameters went in.

| Signature | Description |
| --- | --- |
| `valueAndGrad(f)` | Returns `(x) => {value, gradient}` for a scalar objective. |
| `grad(f)` | Gradient only, discarding the value. |
| `valueAndGradFns(f)` | The value and gradient as two separate functions, for an API that takes a callback pair. They share one evaluation, so calling both at the same point runs the tape once. |
| `jacobian(f)` | `∂f/∂x` for a vector-valued `f`, as an m by n array. One forward pass and one reverse sweep per output. |
| `variable(x)` | Wrap a value as a leaf of the tape. |

## Linear algebra

Only `cholesky` and `triangularSolve` carry a hand-derived adjoint. The log-determinant and the two solves compose from them, so they inherit correct derivatives without a second formula.

| Signature | Description |
| --- | --- |
| `cholesky(A)` | Lower-triangular factor of a symmetric positive-definite `A`. The adjoint follows Murray (2016). `A` is assumed symmetric, so the returned gradient is symmetrized: it is the derivative with respect to a symmetric perturbation. |
| `triangularSolve(T, B, {lower})` | Solve a triangular system, differentiable in both operands. |
| `logdetPSD(A)` | `log\|A\|` for a symmetric positive-definite `A`, computed as `2·Σ log Lᵢᵢ` so that `A⁻¹` falls out of the Cholesky adjoint. |
| `solvePSD(A, B)` | Solve `A X = B` for symmetric positive-definite `A`, through its Cholesky factor. |
| `solveGeneral(A, B)` | The same for a general square `A`, through LU. A structural equation model inverts `I - A`, a matrix of directed paths that is not symmetric. |
| `inv(A)` | Inverse of a general square matrix. `solveGeneral` is cheaper and better conditioned where it applies. |

## Operations

| Group | Signatures |
| --- | --- |
| Arithmetic | `add` `sub` `mul` `div` `neg`, elementwise, with a scalar broadcasting against anything |
| Functions | `exp` `log` `sqrt` `square` `pow` `tanh` `sigmoid` |
| Reductions | `sum` `mean` |
| Arrays | `matmul` `dot` `transpose` `reshape` `slice` `concat` `diagPart` `trace` `addDiag` |

`addDiag(K, alpha)` adds observation noise to a kernel matrix, differentiable in both the matrix and the noise, which may be a scalar or one variance per observation.

## A Gaussian process likelihood

The log marginal likelihood `-½ yᵀK⁻¹y - ½ log|K| - n/2 log 2π`, with gradients in the kernel hyperparameters:

```js
import { addDiag, dot, div, exp, logdetPSD, mul, neg, solvePSD, square, sub, valueAndGrad } from '@tangent.to/grad';

const logML = (p) => {
  const K = addDiag(mul(p.v, exp(neg(div(D2, mul(2, square(p.l)))))), 0.05);
  return sub(mul(-0.5, dot(y, solvePSD(K, y))), mul(0.5, logdetPSD(K)));
};

const { value, gradient } = valueAndGrad(logML)({ l: 1.3, v: 0.9 });
```

Replacing the kernel expression gives the gradients of the new kernel with no further derivation.

## Design

Nodes on the tape are matrices and vectors, not individual numbers. The per-node bookkeeping costs a few hundred nanoseconds, which is negligible against an O(n³) Cholesky and prohibitive against a scalar multiply, so a scalar tape cannot carry a statistical model at useful sizes.

Rank is capped at 2: scalars, vectors and matrices. Broadcasting is limited to a scalar against anything. Forward factorizations come from [lina](/lina/), which is validated against numpy and scipy.linalg.

## Validation

Each adjoint is checked against two references, since finite differences alone would not catch an adjoint that is wrong but smooth. The first is central finite differences on the composed objective. The second is a closed form known exactly: `d log|A| / dA = A⁻¹`, and for the Gaussian process the trace identity `∂L/∂θ = ½ tr((ααᵀ - K⁻¹) ∂K/∂θ)` computed independently with [lina](/lina/).

The Gaussian process gradients agree with that identity to 9 decimal places, for a squared-exponential and for a rational-quadratic kernel.

## Scope

Reverse mode suits objectives with few outputs and many inputs. A square Jacobian is its worst case: measured against a finite-difference Jacobian inside a stiff ODE solver, the step counts were identical and the exact version ran up to 26 times slower at n = 30. A Newton iteration converges to the same answer with an approximate Jacobian, so the accuracy buys nothing there.

There is no GPU backend, because WGSL has no `f64` and the numerics here depend on double precision. There is no forward mode, which is what a wide Jacobian would want.
