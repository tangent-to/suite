---
title: "Gamma"
---

Defined in: [distributions/gamma.js:8](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L8)

Gamma distribution (shape/rate parameterization, PyMC convention):
mean = alpha / beta.

## Extends

- [`Distribution`](Distribution.md)

## Constructors

### Constructor

> **new Gamma**(`alpha?`, `beta?`, `name?`): `Gamma`

Defined in: [distributions/gamma.js:20](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L20)

Shape/RATE parameterization (PyMC/Stan convention): mean = alpha / beta.
Note this differs from R and `@tangent.to/ds`, which use shape/SCALE
(scale = 1 / rate). A `scale` key is therefore rejected here rather than
silently misread as a rate — pass `rate` (or `beta`) explicitly.

#### Parameters

##### alpha?

`any` = `1`

Shape, or an options object
  `{ alpha | shape, beta | rate, name }`

##### beta?

`number` \| `any`[]

Rate (NOT scale)

##### name?

`string` = `'Gamma'`

Name of the distribution

#### Returns

`Gamma`

#### Overrides

[`Distribution`](Distribution.md).[`constructor`](Distribution.md#constructor)

## Properties

### \_dist

> **\_dist**: `any`

Defined in: [distributions/gamma.js:36](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L36)

***

### alpha

> **alpha**: `any`

Defined in: [distributions/gamma.js:34](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L34)

***

### beta

> **beta**: `number` \| `any`[]

Defined in: [distributions/gamma.js:35](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L35)

***

### name

> **name**: `any`

Defined in: [distributions/gamma.js:30](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L30)

#### Inherited from

[`Distribution`](Distribution.md).[`name`](Distribution.md#name)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:47](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L47)

#### Inherited from

[`Distribution`](Distribution.md).[`observed`](Distribution.md#observed)

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

#### Inherited from

[`Distribution`](Distribution.md).[`_len`](Distribution.md#_len)

***

### \_params()

> **\_params**(): `object`

Defined in: [distributions/gamma.js:43](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L43)

The proba parameter object for this distribution (shape/rate).

#### Returns

`object`

##### alpha

> **alpha**: `number` \| `any`[]

##### beta

> **beta**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`_params`](Distribution.md#_params)

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

#### Inherited from

[`Distribution`](Distribution.md).[`_paramsAt`](Distribution.md#_paramsat)

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

#### Inherited from

[`Distribution`](Distribution.md).[`cdf`](Distribution.md#cdf)

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

#### Inherited from

[`Distribution`](Distribution.md).[`dlogProbDx`](Distribution.md#dlogprobdx)

***

### getParams()

> **getParams**(): `object`

Defined in: [distributions/gamma.js:51](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/gamma.js#L51)

Get the distribution's parameters.

#### Returns

`object`

##### alpha

> **alpha**: `number` \| `any`[]

##### beta

> **beta**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`getParams`](Distribution.md#getparams)

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:120](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L120)

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

#### Inherited from

[`Distribution`](Distribution.md).[`logProb`](Distribution.md#logprob)

***

### mean()

> **mean**(): `number` \| `number`[]

Defined in: [distributions/base.js:203](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L203)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

#### Inherited from

[`Distribution`](Distribution.md).[`mean`](Distribution.md#mean)

***

### observe()

> **observe**(`data`): [`Distribution`](Distribution.md)

Defined in: [distributions/base.js:194](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L194)

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

Defined in: [distributions/base.js:152](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L152)

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

Defined in: [distributions/base.js:171](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L171)

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

#### Inherited from

[`Distribution`](Distribution.md).[`sample`](Distribution.md#sample)

***

### variance()

> **variance**(): `number` \| `number`[]

Defined in: [distributions/base.js:213](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/distributions/base.js#L213)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance

#### Inherited from

[`Distribution`](Distribution.md).[`variance`](Distribution.md#variance)
