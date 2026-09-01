---
title: "Model"
---

Defined in: [model.js:45](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L45)

Bayesian probabilistic model: a DAG of random variables (priors), observed
likelihoods, generic [Model#potential](#potential) log-density terms, and named
[Model#deterministic](#deterministic) transforms, exposing the joint log-probability
and its gradient for the MCMC samplers.

## Constructors

### Constructor

> **new Model**(`name?`): `Model`

Defined in: [model.js:56](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L56)

Accepts either a positional name or a single options object `{ name }`.

#### Parameters

##### name?

`any` = `'model'`

Model name, or an options object `{ name }`

#### Returns

`Model`

#### Examples

```ts
new Model('linear_regression')
```

```ts
new Model({ name: 'linear_regression' })
```

## Properties

### \_transformCache

> **\_transformCache**: `Map`\<`any`, `any`\>

Defined in: [model.js:178](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L178)

***

### deterministics

> **deterministics**: `Map`\<`any`, `any`\>

Defined in: [model.js:65](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L65)

***

### name

> **name**: `any`

Defined in: [model.js:60](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L60)

***

### observedVars

> **observedVars**: `Map`\<`any`, `any`\>

Defined in: [model.js:62](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L62)

***

### potentialGrads

> **potentialGrads**: `Map`\<`any`, `any`\>

Defined in: [model.js:64](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L64)

***

### potentials

> **potentials**: `Map`\<`any`, `any`\>

Defined in: [model.js:63](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L63)

***

### variables

> **variables**: `Map`\<`any`, `any`\>

Defined in: [model.js:61](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L61)

## Methods

### \_potentialSum()

> **\_potentialSum**(`params`): `number`

Defined in: [model.js:198](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L198)

Sum of all potential terms at the given parameter values.

#### Parameters

##### params

`any`

#### Returns

`number`

***

### addVariable()

> **addVariable**(`name`, `distribution`, `observed?`): `Distribution`

Defined in: [model.js:176](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L176)

Add a random variable to the model

#### Parameters

##### name

`string`

Name of the variable

##### distribution

`Distribution`

Distribution of the variable

##### observed?

`any` = `null`

Observed data (optional)

#### Returns

`Distribution`

The distribution

***

### autoPotential()

> **autoPotential**(`name`, `fn`): `Model`

Defined in: [model.js:149](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L149)

Register a potential written in `@tangent.to/grad` ops, differentiated
exactly by reverse-mode autodiff.

The same term as [Model#potential](#potential), but `fn` builds its log-density
from grad's ops instead of plain arithmetic, and returns that expression
rather than a number. No gradient is derived by hand and none is
approximated:

```js
import { add, mul, sub, div, log, square, sum, matmul } from '@tangent.to/grad';

model.autoPotential('y', (v) => {
  const z = div(sub(yData, matmul(X, v.beta)), v.sigma);
  return sub(mul(-0.5, sum(square(z))), mul(yData.length, log(v.sigma)));
});
```

Against the finite-difference fallback on a 21-parameter regression with
300 observations: one likelihood evaluation per gradient instead of 2·P,
NUTS 7.7× faster end to end, and the same posterior. The gradient matches
a hand-derived closed form to ~1e-13, where central differences are off by
~2e-7.

The value and gradient share one evaluation, so the sampler's
value-and-gradient path sweeps the data once rather than twice.

#### Parameters

##### name

`string`

Identifier for the term

##### fn

(`params`) => `any`

Builds the log-density as a grad
  expression; receives the free variables as grad `Var`s keyed by name

#### Returns

`Model`

this

***

### computeDeterministics()

> **computeDeterministics**(`trace`): `any`

Defined in: [model.js:529](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L529)

Evaluate registered [Model#deterministic](#deterministic) transforms on each posterior
draw and append them to the trace as extra columns. Computed post-hoc - they
do not affect sampling - and the MCMC samplers call this automatically before
returning their trace. Each `fn(params)` receives a `{name: number}` map of
the free-variable values for one draw and may return a number or an array
(legacy tensor-like returns with `arraySync` are read out too).

#### Parameters

##### trace

`any`

Trace map `{ name: [...] }` or a `{ trace }` wrapper.

#### Returns

`any`

The same trace, with one column per deterministic.

***

### deterministic()

> **deterministic**(`name`, `fn`): `Model`

Defined in: [model.js:164](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L164)

Register a named deterministic transform of the parameters for recording in
the trace (computed post-hoc from posterior draws). Deterministics do NOT
affect the log-probability - use [Model#potential](#potential) for likelihood or
factor terms.

#### Parameters

##### name

`string`

Identifier for the transform

##### fn

(`params`) => `number` \| `any`[]

The transform

#### Returns

`Model`

this

***

### getFreeVariableNames()

> **getFreeVariableNames**(): `string`[]

Defined in: [model.js:508](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L508)

Get list of unobserved variable names

#### Returns

`string`[]

Variable names

***

### getVariable()

> **getVariable**(`name`): `Distribution`

Defined in: [model.js:193](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L193)

Get a variable from the model

#### Parameters

##### name

`string`

Name of the variable

#### Returns

`Distribution`

The distribution

***

### gradientsOnly()

> **gradientsOnly**(`params`): `any`

Defined in: [model.js:284](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L284)

Gradient of the joint log-probability WITHOUT its value — exactly
`logProbAndGradient(params).gradients`, skipping the potential-value pass.

Samplers' leapfrog steps only consume the gradient, but for a model with
an analytic potential gradient, computing the discarded value costs a
full extra pass over the data at every leapfrog step. This method
omits it; the returned gradients are identical.

#### Parameters

##### params

`any`

Parameter values as {name: number|Array} pairs

#### Returns

`any`

`{name: number|Array}` map of gradients

***

### gradientsOnlyUnconstrained()

> **gradientsOnlyUnconstrained**(`uparams`): `any`

Defined in: [model.js:416](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L416)

Gradient only, in unconstrained space — the leapfrog hot path.

#### Parameters

##### uparams

`any`

#### Returns

`any`

`{name: number|Array}`

***

### hasConstrainedVariables()

> **hasConstrainedVariables**(): `boolean`

Defined in: [model.js:327](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L327)

Does any free variable have a bounded support?

When nothing is constrained the unconstrained space IS the constrained one
and every transform is the identity, so a sampler can skip the mapping
entirely and behave exactly as it did before this existed.

#### Returns

`boolean`

***

### logProb()

> **logProb**(`params`): `number`

Defined in: [model.js:211](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L211)

Compute the log probability of the model given parameter values

#### Parameters

##### params

`any`

Parameter values as {name: number|Array} pairs

#### Returns

`number`

Log probability (scalar)

***

### logProbAndGradient()

> **logProbAndGradient**(`params`): `object`

Defined in: [model.js:245](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L245)

Compute the log probability and its gradient with respect to parameters.

Prior terms are differentiated analytically (proba dlogpdf); potential
terms by central finite differences with step h = 1e-6 * max(1, |x|)
per scalar component.

#### Parameters

##### params

`any`

Parameter values as {name: number|Array} pairs

#### Returns

`object`

The scalar log probability
  and a `{name: number|Array}` map of gradients, one per parameter

##### gradients

> **gradients**: `any`

##### logProb

> **logProb**: `number`

***

### logProbAndGradientUnconstrained()

> **logProbAndGradientUnconstrained**(`uparams`): `object`

Defined in: [model.js:384](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L384)

Joint log-probability and gradient in UNCONSTRAINED space.

The change of variables adds Σ log|dx/du| to the log-density, which is
what keeps the posterior invariant: without it the sampler would explore
the transformed density, not the one you wrote. The gradient is chained
through the same derivative, plus the d/du of that Jacobian term.

For a lower-bounded parameter x = a + eᵘ the Jacobian term is just u, so
its derivative is 1 — the "+1" below. For a doubly-bounded one it is
1 − 2σ(u).

#### Parameters

##### uparams

`any`

`{name: number|Array}`, unconstrained

#### Returns

`object`

both in unconstrained terms

##### gradients

> **gradients**: `any`

##### logProb

> **logProb**: `number`

***

### potential()

> **potential**(`name`, `fn`, `gradFn?`): `Model`

Defined in: [model.js:110](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L110)

Register a generic log-density term (a "potential" / factor) contributing to
the joint log-probability. `fn(params)` receives the current free-variable
values as plain numbers (or arrays) keyed by name and must return a number
or an array of log-density values (which are summed into the total).

This is the general mechanism for likelihoods whose parameters are arbitrary
deterministic functions of the latent variables and data - the deterministic
expression is computed inside `fn` with ordinary JavaScript math:

```js
model.potential('y', (v) =>
  new Normal(xData.map((x) => v.slope * x + v.intercept), v.sigma).logProb(yData));
```

Gradients of potentials are estimated by central finite differences by
default; priors added with [Model#addVariable](#addvariable) get analytic gradients.
For a large data term this finite-difference cost (2·(#free params) extra
evaluations of `fn` per gradient) dominates NUTS/HMC — and, more seriously,
finite-difference error costs the leapfrog integrator its symplectic
property, degrading the acceptance rate. Two ways to avoid it:

[Model#autoPotential](#autopotential) writes the term in `@tangent.to/grad` ops and
differentiates it exactly, with no derivation by hand. Prefer it.

Otherwise pass an explicit `gradFn` returning the analytic gradient:

```js
model.potential('y', (v) => new Normal(mu(v), v.sigma).logProb(yData),
  (v) => ({ slope: dSlope(v), intercept: dIntercept(v), sigma: dSigma(v) }));
```

`gradFn(params)` must return an object mapping each free-variable name to the
partial derivative of THIS term's log-density with respect to it (a number,
or an array for a vector-valued variable). It is added to the analytic prior
gradients; omit an entry whose partial is zero.

#### Parameters

##### name

`string`

Identifier for the term

##### fn

(`params`) => `number` \| `number`[]

Returns log-density value(s)

##### gradFn?

(`params`) => `any`

Optional analytic gradient of `fn`

#### Returns

`Model`

this

***

### predictPosterior()

> **predictPosterior**(`trace`, `predictFn`, `nSamples?`): `any`[]

Defined in: [model.js:561](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L561)

Posterior predictive sampling
Generate predictions by sampling from the posterior

#### Parameters

##### trace

`any`

Trace object from MCMC sampling

##### predictFn

`Function`

Function that takes params and returns predictions

##### nSamples?

`number` = `null`

Number of posterior samples to use (null = use all)

#### Returns

`any`[]

Array of predictions from each posterior sample

***

### predictPosteriorSummary()

> **predictPosteriorSummary**(`trace`, `predictFn`, `credibleInterval?`): `any`

Defined in: [model.js:590](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L590)

Compute posterior predictive mean and credible intervals

#### Parameters

##### trace

`any`

Trace object from MCMC sampling

##### predictFn

`Function`

Function that takes params and returns predictions

##### credibleInterval?

`number` = `0.95`

Credible interval (e.g., 0.95 for 95%)

#### Returns

`any`

{mean, lower, upper} predictions

***

### samplePrior()

> **samplePrior**(`nSamples?`): `any`

Defined in: [model.js:492](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L492)

Sample from the prior distributions

#### Parameters

##### nSamples?

`number` = `1`

Number of samples to generate

#### Returns

`any`

Samples as {name: Array} pairs

***

### summary()

> **summary**(): `string`

Defined in: [model.js:639](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L639)

Create a summary of the model

#### Returns

`string`

Model summary

***

### toConstrained()

> **toConstrained**(`uparams`): `any`

Defined in: [model.js:358](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L358)

Map unconstrained values back into the model's units.

#### Parameters

##### uparams

`any`

`{name: number|Array}`, unconstrained

#### Returns

`any`

the same shape, constrained

***

### toUnconstrained()

> **toUnconstrained**(`params`): `any`

Defined in: [model.js:341](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/model.js#L341)

Map constrained parameter values into the unconstrained space a gradient
sampler should move through.

#### Parameters

##### params

`any`

`{name: number|Array}` in the model's own units

#### Returns

`any`

the same shape, unconstrained
