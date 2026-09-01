---
title: grad
description: Reverse-mode automatic differentiation for JavaScript. An array-valued tape with adjoints for Cholesky, triangular solves and log-determinants, so a log-likelihood written once yields its own exact gradient.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<p class="tg-pkg-head"><span class="tg-slug">tangent<span class="slash">/</span>grad</span> <span class="tg-validated">finite-difference and closed-form validated</span></p>

Write a log-likelihood once; get its exact gradient. An array-valued tape over plain nested arrays, with adjoints for the linear algebra statistical models are made of — no hand-derived derivatives per model, no finite differences.

```bash
npm install @tangent.to/grad      # npm
deno add jsr:@tangent/grad         # Deno / JSR
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

## Why

Gradients are the bottleneck in two distinct ways.

**Correctness.** Hamiltonian Monte Carlo and NUTS need ∇log p. Approximating it by central differences costs 2·(#params) full likelihood evaluations *per leapfrog step*, and — the more serious problem — the leapfrog integrator is no longer symplectic, so the sampler's acceptance rate degrades or it biases silently. Neither Stan nor PyMC will use finite differences for this.

**Coverage.** Hand-derived gradients get written for the cases someone had time for. A Gaussian process with a hand-written gradient for one kernel family leaves every other kernel on a derivative-free search that stops at a visibly worse optimum — so the quality of a fit depends on which kernel you happened to pick.

Both dissolve into the same missing layer.

## Design

**Array-valued, not scalar-valued.** Nodes are matrices and vectors, never individual numbers. In JavaScript the per-node bookkeeping costs a few hundred nanoseconds — noise beside an O(n³) Cholesky, ruinous beside a scalar multiply. A scalar tape cannot carry a statistical model at useful sizes.

**Two hand-written linalg adjoints, and no more.** Only `cholesky` and `triangularSolve` carry a derived adjoint. Log-determinants, SPD solves, quadratic forms and Gaussian log-likelihoods all *compose* from those, and so inherit correct derivatives for free. Every hand-derived formula is a place to be subtly wrong, so there are as few as the problem allows.

**Rank capped at 2.** Scalars, vectors, matrices. Every model in the suite is expressed in those; rank-N would cost broadcasting complexity in every adjoint for no consumer.

Forward factorizations come from [lina](/lina/), which is scipy-validated.

## Differentiation

| Signature | Description |
| --- | --- |
| `valueAndGrad(f)` | Returns `(x) => {value, gradient}` for a scalar objective. Takes a plain array or a `{name: value}` map, and returns the gradient in the same shape. |
| `grad(f)` | Gradient only, discarding the value. |
| `valueAndGradFns(f)` | The `(value, gradient)` function *pair* an API taking two callbacks expects, sharing one evaluation between them. |
| `jacobian(f)` | `∂f/∂x` for a vector-valued `f`, as an m × n array. |
| `variable(x)` | Wrap a value as a leaf of the tape. |

## Linear algebra

The adjoints that make statistical models differentiable.

| Signature | Description |
| --- | --- |
| `cholesky(A)` | Lower-triangular factor of a symmetric positive-definite `A`. The adjoint is Murray (2016); the returned gradient is symmetrized, i.e. with respect to a symmetric perturbation. |
| `triangularSolve(T, B, {lower})` | Solve a triangular system, differentiable in both operands. |
| `logdetPSD(A)` | `log\|A\|` for a symmetric positive-definite `A`. Composed as `2·Σ log Lᵢᵢ`, so `A⁻¹` falls out of the Cholesky adjoint with no second formula to get wrong. |
| `solvePSD(A, B)` | Solve `A X = B` for symmetric positive-definite `A`, via its Cholesky factor. |
| `solveGeneral(A, B)` | The same for a general square `A`, via LU — for the non-symmetric matrices a structural equation model inverts. |
| `inv(A)` | Inverse of a general square matrix. Prefer `solveGeneral` where you can: cheaper and better conditioned. |

## Operations

| Group | Signatures |
| --- | --- |
| Arithmetic | `add` `sub` `mul` `div` `neg` — elementwise, with a scalar broadcasting against anything |
| Functions | `exp` `log` `sqrt` `square` `pow` `tanh` `sigmoid` |
| Reductions | `sum` `mean` |
| Arrays | `matmul` `dot` `transpose` `reshape` `slice` `concat` `diagPart` `trace` `addDiag` |

`addDiag(K, alpha)` is the jitter/noise idiom every Gaussian-process likelihood opens with, differentiable in both the matrix and the noise — scalar or one variance per observation.

## A Gaussian process likelihood

The motivating example. Swap the kernel expression and the gradients follow, with no derivation:

```js
import { addDiag, dot, div, exp, logdetPSD, mul, neg, solvePSD, square, sub, valueAndGrad } from '@tangent.to/grad';

const logML = (p) => {
  const K = addDiag(mul(p.v, exp(neg(div(D2, mul(2, square(p.l)))))), 0.05);
  return sub(mul(-0.5, dot(y, solvePSD(K, y))), mul(0.5, logdetPSD(K)));
};

const { value, gradient } = valueAndGrad(logML)({ l: 1.3, v: 0.9 });
```

## Validation

Every adjoint is checked two ways, because finite differences alone would not catch an adjoint that is systematically wrong but smooth:

- central finite differences on the composed objective;
- closed forms known exactly — `d log|A| / dA = A⁻¹`, and for the Gaussian process the trace identity `∂L/∂θ = ½ tr((ααᵀ − K⁻¹) ∂K/∂θ)`, computed independently with [lina](/lina/).

The GP gradients agree with that identity to 9 decimal places, for both a squared-exponential and a rational-quadratic kernel.

## Where it pays, and where it does not

Measured, not assumed.

**Probabilistic models — yes.** Against a finite-difference fallback on a 21-parameter NUTS run: one likelihood evaluation per gradient instead of 2·P, 7.7× faster end to end, same posterior, cross-validated against PyMC.

**Structural equation models — yes.** The ML discrepancy is a scalar objective in few parameters: reverse mode's best case.

**Stiff ODE Jacobians — no.** Measured against a finite-difference Jacobian on a stiff reaction-diffusion system: identical step counts, and up to 26× slower at n = 30. A Newton iteration converges to the same answer with an approximate Jacobian, so the accuracy buys nothing, and a square Jacobian is reverse mode's worst shape.

## Notes

No GPU backend: WebGPU has no `f64`, and the numerics here depend on double precision. No forward mode, which is what a wide Jacobian would want. This is not a deep learning framework and does not try to be.
