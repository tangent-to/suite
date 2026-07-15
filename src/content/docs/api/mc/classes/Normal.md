---
title: "Normal"
---

Defined in: [distributions/normal.js:11](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L11)

Normal (Gaussian) distribution

$$ p(x | \mu, \sigma) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) $$

## See

[Distribution](https://en.wikipedia.org/wiki/Normal_distribution|Normal)

## Extends

- [`Distribution`](Distribution.md)

## Constructors

### Constructor

> **new Normal**(`mu?`, `sigma?`, `name?`): `Normal`

Defined in: [distributions/normal.js:26](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L26)

Accepts either positional arguments or a single options object, matching the
dual-constructor convention of `@tangent.to/ds`.

#### Parameters

##### mu?

`any` = `0`

Mean parameter, or an options object
  `{ mu | mean, sigma | sd | std, name }`

##### sigma?

`number` \| `any`[]

Standard deviation, sigma > 0

##### name?

`string` = `'Normal'`

Name of the distribution

#### Returns

`Normal`

#### Examples

```ts
new Normal(0, 1)
```

```ts
new Normal({ mean: 0, sd: 1 })
```

#### Overrides

[`Distribution`](Distribution.md).[`constructor`](Distribution.md#constructor)

## Properties

### \_dist

> **\_dist**: `any`

Defined in: [distributions/normal.js:36](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L36)

***

### mu

> **mu**: `any`

Defined in: [distributions/normal.js:34](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L34)

***

### name

> **name**: `any`

Defined in: [distributions/normal.js:30](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L30)

#### Inherited from

[`Distribution`](Distribution.md).[`name`](Distribution.md#name)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:47](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L47)

#### Inherited from

[`Distribution`](Distribution.md).[`observed`](Distribution.md#observed)

***

### sigma

> **sigma**: `number` \| `any`[]

Defined in: [distributions/normal.js:35](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L35)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:63](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L63)

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

Defined in: [distributions/normal.js:43](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L43)

The proba parameter object for this distribution.

#### Returns

`object`

##### mu

> **mu**: `number` \| `any`[]

##### sigma

> **sigma**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`_params`](Distribution.md#_params)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `any`

Defined in: [distributions/base.js:76](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L76)

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

Defined in: [distributions/base.js:162](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L162)

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

Defined in: [distributions/base.js:132](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L132)

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

Defined in: [distributions/normal.js:51](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/normal.js#L51)

Get the distribution's parameters.

#### Returns

`object`

##### mu

> **mu**: `number` \| `any`[]

##### sigma

> **sigma**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`getParams`](Distribution.md#getparams)

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:120](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L120)

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

Defined in: [distributions/base.js:91](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L91)

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

Defined in: [distributions/base.js:203](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L203)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

#### Inherited from

[`Distribution`](Distribution.md).[`mean`](Distribution.md#mean)

***

### observe()

> **observe**(`data`): [`Distribution`](Distribution.md)

Defined in: [distributions/base.js:194](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L194)

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

Defined in: [distributions/base.js:152](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L152)

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

Defined in: [distributions/base.js:171](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L171)

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

Defined in: [distributions/base.js:183](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L183)

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

Defined in: [distributions/base.js:213](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/distributions/base.js#L213)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance

#### Inherited from

[`Distribution`](Distribution.md).[`variance`](Distribution.md#variance)
