---
title: "Model"
---

Defined in: [model.js:36](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L36)

## Constructors

### Constructor

> **new Model**(`name?`): `Model`

Defined in: [model.js:47](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L47)

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

### deterministics

> **deterministics**: `Map`\<`any`, `any`\>

Defined in: [model.js:55](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L55)

***

### name

> **name**: `any`

Defined in: [model.js:51](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L51)

***

### observedVars

> **observedVars**: `Map`\<`any`, `any`\>

Defined in: [model.js:53](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L53)

***

### potentials

> **potentials**: `Map`\<`any`, `any`\>

Defined in: [model.js:54](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L54)

***

### variables

> **variables**: `Map`\<`any`, `any`\>

Defined in: [model.js:52](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L52)

## Methods

### \_potentialSum()

> **\_potentialSum**(`params`): `number`

Defined in: [model.js:128](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L128)

Sum of all potential terms at the given parameter values.

#### Parameters

##### params

`any`

#### Returns

`number`

***

### addVariable()

> **addVariable**(`name`, `distribution`, `observed?`): `Distribution`

Defined in: [model.js:107](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L107)

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

### computeDeterministics()

> **computeDeterministics**(`trace`): `any`

Defined in: [model.js:267](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L267)

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

Defined in: [model.js:95](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L95)

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

Defined in: [model.js:246](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L246)

Get list of unobserved variable names

#### Returns

`string`[]

Variable names

***

### getVariable()

> **getVariable**(`name`): `Distribution`

Defined in: [model.js:123](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L123)

Get a variable from the model

#### Parameters

##### name

`string`

Name of the variable

#### Returns

`Distribution`

The distribution

***

### logProb()

> **logProb**(`params`): `number`

Defined in: [model.js:141](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L141)

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

Defined in: [model.js:175](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L175)

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

### potential()

> **potential**(`name`, `fn`): `Model`

Defined in: [model.js:80](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L80)

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

Gradients of potentials are computed by central finite differences; priors
added with [Model#addVariable](#addvariable) get analytic gradients.

#### Parameters

##### name

`string`

Identifier for the term

##### fn

(`params`) => `number` \| `number`[]

Returns log-density value(s)

#### Returns

`Model`

this

***

### predictPosterior()

> **predictPosterior**(`trace`, `predictFn`, `nSamples?`): `any`[]

Defined in: [model.js:299](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L299)

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

Defined in: [model.js:328](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L328)

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

Defined in: [model.js:230](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L230)

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

Defined in: [model.js:377](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/model.js#L377)

Create a summary of the model

#### Returns

`string`

Model summary
