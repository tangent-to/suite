---
title: "Distribution"
---

Defined in: [distributions/base.js:46](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L46)

Base class for probability distributions.

Subclasses set `this._dist` (a @tangent.to/proba distribution) in their
constructor and implement `_params()` returning the proba parameter
object (fields may be numbers or arrays of numbers).

## Extended by

- [`Normal`](Normal.md)
- [`Uniform`](Uniform.md)
- [`Bernoulli`](Bernoulli.md)
- [`Beta`](Beta.md)
- [`Gamma`](Gamma.md)
- [`Lognormal`](Lognormal.md)
- [`HalfNormal`](HalfNormal.md)

## Constructors

### Constructor

> **new Distribution**(`name?`): `Distribution`

Defined in: [distributions/base.js:51](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L51)

Create a base distribution; subclasses set `this._dist` and parameters.

#### Parameters

##### name?

`string` = `'Distribution'`

Name of the distribution

#### Returns

`Distribution`

## Properties

### name

> **name**: `string`

Defined in: [distributions/base.js:52](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L52)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:53](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L53)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:69](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L69)

Broadcast length across value and parameters (0 = all scalar).

#### Parameters

##### value

`number` \| `any`[]

Value(s) whose length participates in broadcasting

#### Returns

`number`

The broadcast length (0 when every input is scalar)

***

### \_params()

> **\_params**(): `any`

Defined in: [distributions/base.js:60](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L60)

The proba parameter object for this distribution; subclasses must implement.

#### Returns

`any`

proba parameter object (fields may be numbers or arrays)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `any`

Defined in: [distributions/base.js:82](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L82)

The proba parameter object with each array parameter indexed at `i`.

#### Parameters

##### i

`number`

Broadcast index

#### Returns

`any`

Per-element parameter object (scalars passed through)

***

### cdf()

> **cdf**(`value`): `number`

Defined in: [distributions/base.js:192](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L192)

Cumulative distribution function (scalar parameters).

#### Parameters

##### value

`number`

#### Returns

`number`

***

### dlogProbDx()

> **dlogProbDx**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:162](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L162)

Derivative of logProb with respect to the value, elementwise.
Used by Model.logProbAndGradient for analytic prior gradients.
Discrete distributions return 0 (no dx in their gradient contract).

#### Parameters

##### value

`number` \| `any`[]

Value(s) at which to differentiate

#### Returns

`number` \| `number`[]

***

### getParams()

> **getParams**(): `any`

Defined in: [distributions/base.js:254](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L254)

Get the distribution's parameters as a plain object.
Subclasses override to expose their specific parameters.

#### Returns

`any`

Parameters

***

### logDensity()

> **logDensity**(`_value`): `any`

Defined in: [distributions/base.js:135](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L135)

The log-density as a differentiable expression, SUMMED over elements.

Where [Distribution#logProb](#logprob) takes plain numbers and returns the
elementwise density, this takes parameters that may be grad `Var`s, built
from the model's free variables, and returns one scalar `Var`: the total
log-density of `value` under this distribution, differentiable in every
parameter that is a `Var`. It is what `Model#observe` evaluates, so that a
likelihood is derived from the distribution rather than written by hand.

The seven built-in distributions implement it. A subclass that does not is
still a valid prior and a valid `logProb`; it is simply not differentiable,
and `observe` will say so.

#### Parameters

##### \_value

`any`

#### Returns

`any`

scalar

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:150](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L150)

Alias for [Distribution#logProb](#logprob), matching the `@tangent.to/proba`
distribution contract (which names the method `logpdf`). Lets code written
against proba's distributions work unchanged on mc's.

#### Parameters

##### value

`any`

Value(s) to evaluate

#### Returns

`number` \| `number`[]

***

### logProb()

> **logProb**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:97](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L97)

Log probability density/mass function. Broadcasts over array values
and/or array parameters.

#### Parameters

##### value

`any`

Value(s) to evaluate

#### Returns

`number` \| `number`[]

Log probability, elementwise for arrays

***

### mean()

> **mean**(): `number` \| `number`[]

Defined in: [distributions/base.js:233](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L233)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

***

### observe()

> **observe**(`data`): `Distribution`

Defined in: [distributions/base.js:224](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L224)

Set observed data for this distribution

#### Parameters

##### data

`number` \| `any`[]

Observed data

#### Returns

`Distribution`

this, for chaining

***

### pdf()

> **pdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:182](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L182)

Probability density/mass function, `exp(logProb(value))`.

#### Parameters

##### value

`number` \| `any`[]

Value(s) to evaluate

#### Returns

`number` \| `number`[]

***

### quantile()

> **quantile**(`p`): `number`

Defined in: [distributions/base.js:201](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L201)

Quantile (inverse cdf) function (scalar parameters).

#### Parameters

##### p

`number`

Probability in [0, 1]

#### Returns

`number`

***

### sample()

> **sample**(`shape?`): `number` \| `number`[]

Defined in: [distributions/base.js:213](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L213)

Sample from the distribution using the package RNG (see setRandomSeed).
`sample()` / `sample([])` return a number; `sample(n)` / `sample([n])`
return an Array of n draws.

#### Parameters

##### shape?

`number` \| `number`[]

Number of samples

#### Returns

`number` \| `number`[]

***

### variance()

> **variance**(): `number` \| `number`[]

Defined in: [distributions/base.js:243](https://github.com/tangent-to/mc/blob/f38d89de05ced575b3f6ced1ee3aba6345b5d160/src/distributions/base.js#L243)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance
