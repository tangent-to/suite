---
title: "Distribution"
---

Defined in: [distributions/base.js:40](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L40)

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

Defined in: [distributions/base.js:45](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L45)

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

Defined in: [distributions/base.js:46](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L46)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:47](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L47)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:63](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L63)

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

Defined in: [distributions/base.js:54](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L54)

The proba parameter object for this distribution; subclasses must implement.

#### Returns

`any`

proba parameter object (fields may be numbers or arrays)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `any`

Defined in: [distributions/base.js:76](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L76)

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

Defined in: [distributions/base.js:162](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L162)

Cumulative distribution function (scalar parameters).

#### Parameters

##### value

`number`

#### Returns

`number`

***

### dlogProbDx()

> **dlogProbDx**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:132](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L132)

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

Defined in: [distributions/base.js:224](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L224)

Get the distribution's parameters as a plain object.
Subclasses override to expose their specific parameters.

#### Returns

`any`

Parameters

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:120](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L120)

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

Defined in: [distributions/base.js:91](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L91)

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

Defined in: [distributions/base.js:203](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L203)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

***

### observe()

> **observe**(`data`): `Distribution`

Defined in: [distributions/base.js:194](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L194)

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

Defined in: [distributions/base.js:152](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L152)

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

Defined in: [distributions/base.js:171](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L171)

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

Defined in: [distributions/base.js:183](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L183)

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

Defined in: [distributions/base.js:213](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L213)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance
