---
title: "Bernoulli"
---

Defined in: [distributions/bernoulli.js:7](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L7)

Bernoulli distribution for binary outcomes.

## Extends

- [`Distribution`](Distribution.md)

## Constructors

### Constructor

> **new Bernoulli**(`p?`, `name?`): `Bernoulli`

Defined in: [distributions/bernoulli.js:14](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L14)

Create a Bernoulli distribution.

#### Parameters

##### p?

`any` = `0.5`

Probability of success in [0, 1], or an
  options object `{ p, name }`

##### name?

`string` = `'Bernoulli'`

Name of the distribution

#### Returns

`Bernoulli`

#### Overrides

[`Distribution`](Distribution.md).[`constructor`](Distribution.md#constructor)

## Properties

### \_dist

> **\_dist**: `any`

Defined in: [distributions/bernoulli.js:22](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L22)

***

### name

> **name**: `any`

Defined in: [distributions/bernoulli.js:18](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L18)

#### Inherited from

[`Distribution`](Distribution.md).[`name`](Distribution.md#name)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:47](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L47)

#### Inherited from

[`Distribution`](Distribution.md).[`observed`](Distribution.md#observed)

***

### p

> **p**: `any`

Defined in: [distributions/bernoulli.js:21](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L21)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:63](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L63)

Broadcast length across value and parameters (0 = all scalar).

#### Parameters

##### value

`number` \| `any`[]

Value(s) whose length participates in broadcasting

#### Returns

`number`

The broadcast length (0 when every input is scalar)

#### Inherited from

[`Distribution`](Distribution.md).[`_len`](Distribution.md#_len)

***

### \_params()

> **\_params**(): `object`

Defined in: [distributions/bernoulli.js:29](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L29)

The proba parameter object for this distribution.

#### Returns

`object`

##### p

> **p**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`_params`](Distribution.md#_params)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `any`

Defined in: [distributions/base.js:76](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L76)

The proba parameter object with each array parameter indexed at `i`.

#### Parameters

##### i

`number`

Broadcast index

#### Returns

`any`

Per-element parameter object (scalars passed through)

#### Inherited from

[`Distribution`](Distribution.md).[`_paramsAt`](Distribution.md#_paramsat)

***

### cdf()

> **cdf**(`value`): `number`

Defined in: [distributions/base.js:162](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L162)

Cumulative distribution function (scalar parameters).

#### Parameters

##### value

`number`

#### Returns

`number`

#### Inherited from

[`Distribution`](Distribution.md).[`cdf`](Distribution.md#cdf)

***

### dlogProbDx()

> **dlogProbDx**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:132](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L132)

Derivative of logProb with respect to the value, elementwise.
Used by Model.logProbAndGradient for analytic prior gradients.
Discrete distributions return 0 (no dx in their gradient contract).

#### Parameters

##### value

`number` \| `any`[]

Value(s) at which to differentiate

#### Returns

`number` \| `number`[]

#### Inherited from

[`Distribution`](Distribution.md).[`dlogProbDx`](Distribution.md#dlogprobdx)

***

### getParams()

> **getParams**(): `object`

Defined in: [distributions/bernoulli.js:37](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/bernoulli.js#L37)

Get the distribution's parameters.

#### Returns

`object`

##### p

> **p**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`getParams`](Distribution.md#getparams)

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:120](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L120)

Alias for [Distribution#logProb](Distribution.md#logprob), matching the `@tangent.to/proba`
distribution contract (which names the method `logpdf`). Lets code written
against proba's distributions work unchanged on mc's.

#### Parameters

##### value

`any`

Value(s) to evaluate

#### Returns

`number` \| `number`[]

#### Inherited from

[`Distribution`](Distribution.md).[`logpdf`](Distribution.md#logpdf)

***

### logProb()

> **logProb**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:91](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L91)

Log probability density/mass function. Broadcasts over array values
and/or array parameters.

#### Parameters

##### value

`any`

Value(s) to evaluate

#### Returns

`number` \| `number`[]

Log probability, elementwise for arrays

#### Inherited from

[`Distribution`](Distribution.md).[`logProb`](Distribution.md#logprob)

***

### mean()

> **mean**(): `number` \| `number`[]

Defined in: [distributions/base.js:203](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L203)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

#### Inherited from

[`Distribution`](Distribution.md).[`mean`](Distribution.md#mean)

***

### observe()

> **observe**(`data`): [`Distribution`](Distribution.md)

Defined in: [distributions/base.js:194](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L194)

Set observed data for this distribution

#### Parameters

##### data

`number` \| `any`[]

Observed data

#### Returns

[`Distribution`](Distribution.md)

this, for chaining

#### Inherited from

[`Distribution`](Distribution.md).[`observe`](Distribution.md#observe)

***

### pdf()

> **pdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:152](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L152)

Probability density/mass function, `exp(logProb(value))`.

#### Parameters

##### value

`number` \| `any`[]

Value(s) to evaluate

#### Returns

`number` \| `number`[]

#### Inherited from

[`Distribution`](Distribution.md).[`pdf`](Distribution.md#pdf)

***

### quantile()

> **quantile**(`p`): `number`

Defined in: [distributions/base.js:171](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L171)

Quantile (inverse cdf) function (scalar parameters).

#### Parameters

##### p

`number`

Probability in [0, 1]

#### Returns

`number`

#### Inherited from

[`Distribution`](Distribution.md).[`quantile`](Distribution.md#quantile)

***

### sample()

> **sample**(`shape?`): `number` \| `number`[]

Defined in: [distributions/base.js:183](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L183)

Sample from the distribution using the package RNG (see setRandomSeed).
`sample()` / `sample([])` return a number; `sample(n)` / `sample([n])`
return an Array of n draws.

#### Parameters

##### shape?

`number` \| `number`[]

Number of samples

#### Returns

`number` \| `number`[]

#### Inherited from

[`Distribution`](Distribution.md).[`sample`](Distribution.md#sample)

***

### variance()

> **variance**(): `number` \| `number`[]

Defined in: [distributions/base.js:213](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/distributions/base.js#L213)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance

#### Inherited from

[`Distribution`](Distribution.md).[`variance`](Distribution.md#variance)
