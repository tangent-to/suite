---
title: "Distribution"
---

Defined in: [mc/src/distributions/base.js:40](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L40)

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

Defined in: [mc/src/distributions/base.js:44](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L44)

#### Parameters

##### name?

`string` = `'Distribution'`

Name of the distribution

#### Returns

`Distribution`

## Properties

### name

> **name**: `string`

Defined in: [mc/src/distributions/base.js:45](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L45)

***

### observed

> **observed**: `any`

Defined in: [mc/src/distributions/base.js:46](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L46)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [mc/src/distributions/base.js:55](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L55)

Broadcast length across value and parameters (0 = all scalar).

#### Parameters

##### value

`any`

#### Returns

`number`

***

### \_params()

> **\_params**(): `any`

Defined in: [mc/src/distributions/base.js:50](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L50)

#### Returns

`any`

proba parameter object; subclasses must implement

***

### \_paramsAt()

> **\_paramsAt**(`i`): `object`

Defined in: [mc/src/distributions/base.js:63](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L63)

#### Parameters

##### i

`any`

#### Returns

`object`

***

### cdf()

> **cdf**(`value`): `number`

Defined in: [mc/src/distributions/base.js:149](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L149)

Cumulative distribution function (scalar parameters).

#### Parameters

##### value

`number`

#### Returns

`number`

***

### dlogProbDx()

> **dlogProbDx**(`value`): `number` \| `number`[]

Defined in: [mc/src/distributions/base.js:119](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L119)

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

Defined in: [mc/src/distributions/base.js:211](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L211)

Get the distribution's parameters as a plain object.
Subclasses override to expose their specific parameters.

#### Returns

`any`

Parameters

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [mc/src/distributions/base.js:107](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L107)

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

Defined in: [mc/src/distributions/base.js:78](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L78)

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

Defined in: [mc/src/distributions/base.js:190](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L190)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

***

### observe()

> **observe**(`data`): `Distribution`

Defined in: [mc/src/distributions/base.js:181](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L181)

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

Defined in: [mc/src/distributions/base.js:139](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L139)

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

Defined in: [mc/src/distributions/base.js:158](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L158)

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

Defined in: [mc/src/distributions/base.js:170](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L170)

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

Defined in: [mc/src/distributions/base.js:200](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/distributions/base.js#L200)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance
