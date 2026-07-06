---
title: "HalfNormal"
---

Defined in: [distributions/halfnormal.js:8](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L8)

Half-normal distribution on [0, Infinity) — the absolute value of a
Normal(0, sigma^2). A standard weakly-informative prior for scales.

## Extends

- [`Distribution`](Distribution.md)

## Constructors

### Constructor

> **new HalfNormal**(`sigma?`, `name?`): `HalfNormal`

Defined in: [distributions/halfnormal.js:14](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L14)

#### Parameters

##### sigma?

`any` = `1`

Scale, or an options object
  `{ sigma | sd | std | scale, name }`

##### name?

`string` = `'HalfNormal'`

Name of the distribution

#### Returns

`HalfNormal`

#### Overrides

[`Distribution`](Distribution.md).[`constructor`](Distribution.md#constructor)

## Properties

### \_dist

> **\_dist**: `any`

Defined in: [distributions/halfnormal.js:22](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L22)

***

### name

> **name**: `any`

Defined in: [distributions/halfnormal.js:18](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L18)

#### Inherited from

[`Distribution`](Distribution.md).[`name`](Distribution.md#name)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:46](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L46)

#### Inherited from

[`Distribution`](Distribution.md).[`observed`](Distribution.md#observed)

***

### sigma

> **sigma**: `any`

Defined in: [distributions/halfnormal.js:21](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L21)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:55](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L55)

Broadcast length across value and parameters (0 = all scalar).

#### Parameters

##### value

`any`

#### Returns

`number`

#### Inherited from

[`Distribution`](Distribution.md).[`_len`](Distribution.md#_len)

***

### \_params()

> **\_params**(): `object`

Defined in: [distributions/halfnormal.js:25](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L25)

#### Returns

`object`

proba parameter object; subclasses must implement

##### sigma

> **sigma**: `any`

#### Overrides

[`Distribution`](Distribution.md).[`_params`](Distribution.md#_params)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `object`

Defined in: [distributions/base.js:63](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L63)

#### Parameters

##### i

`any`

#### Returns

`object`

#### Inherited from

[`Distribution`](Distribution.md).[`_paramsAt`](Distribution.md#_paramsat)

***

### cdf()

> **cdf**(`value`): `number`

Defined in: [distributions/base.js:149](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L149)

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

Defined in: [distributions/base.js:119](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L119)

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

Defined in: [distributions/halfnormal.js:33](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/halfnormal.js#L33)

Get the distribution's parameters.

#### Returns

`object`

##### sigma

> **sigma**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`getParams`](Distribution.md#getparams)

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:107](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L107)

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

Defined in: [distributions/base.js:78](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L78)

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

Defined in: [distributions/base.js:190](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L190)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

#### Inherited from

[`Distribution`](Distribution.md).[`mean`](Distribution.md#mean)

***

### observe()

> **observe**(`data`): [`Distribution`](Distribution.md)

Defined in: [distributions/base.js:181](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L181)

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

Defined in: [distributions/base.js:139](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L139)

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

Defined in: [distributions/base.js:158](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L158)

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

Defined in: [distributions/base.js:170](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L170)

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

Defined in: [distributions/base.js:200](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/distributions/base.js#L200)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance

#### Inherited from

[`Distribution`](Distribution.md).[`variance`](Distribution.md#variance)
