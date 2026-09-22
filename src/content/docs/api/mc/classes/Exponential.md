---
title: "Exponential"
---

Defined in: [distributions/exponential.js:11](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L11)

Exponential distribution, rate parameterized

$$ p(x | \lambda) = \lambda e^{-\lambda x}, \quad x \ge 0 $$

## See

[Distribution](https://en.wikipedia.org/wiki/Exponential_distribution|Exponential)

## Extends

- [`Distribution`](Distribution.md)

## Constructors

### Constructor

> **new Exponential**(`lambda?`, `name?`): `Exponential`

Defined in: [distributions/exponential.js:25](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L25)

Accepts either positional arguments or a single options object, matching the
dual-constructor convention of `@tangent.to/ds`.

#### Parameters

##### lambda?

`any` = `1`

Rate parameter, lambda > 0, or an options object
  `{ lambda | rate, name }`

##### name?

`string` = `'Exponential'`

Name of the distribution

#### Returns

`Exponential`

#### Examples

```ts
new Exponential(2)
```

```ts
new Exponential({ rate: 2 })
```

#### Overrides

[`Distribution`](Distribution.md).[`constructor`](Distribution.md#constructor)

## Properties

### \_dist

> **\_dist**: `any`

Defined in: [distributions/exponential.js:33](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L33)

***

### lambda

> **lambda**: `any`

Defined in: [distributions/exponential.js:32](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L32)

***

### name

> **name**: `any`

Defined in: [distributions/exponential.js:29](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L29)

#### Inherited from

[`Distribution`](Distribution.md).[`name`](Distribution.md#name)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:53](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L53)

#### Inherited from

[`Distribution`](Distribution.md).[`observed`](Distribution.md#observed)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:69](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L69)

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

Defined in: [distributions/exponential.js:39](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L39)

The proba parameter object for this distribution.

#### Returns

`object`

##### lambda

> **lambda**: `any`

#### Overrides

[`Distribution`](Distribution.md).[`_params`](Distribution.md#_params)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `any`

Defined in: [distributions/base.js:82](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L82)

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

Defined in: [distributions/base.js:197](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L197)

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

Defined in: [distributions/base.js:167](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L167)

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

Defined in: [distributions/exponential.js:46](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/exponential.js#L46)

Get the distribution's parameters.

#### Returns

`object`

##### lambda

> **lambda**: `any`

#### Overrides

[`Distribution`](Distribution.md).[`getParams`](Distribution.md#getparams)

***

### logDensity()

> **logDensity**(`value`): `any`

Defined in: [distributions/base.js:137](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L137)

The log-density as a differentiable expression, SUMMED over elements.

Where [Distribution#logProb](Distribution.md#logprob) takes plain numbers and returns the
elementwise density, this takes parameters that may be grad `Var`s, built
from the model's free variables, and returns one scalar `Var`: the total
log-density of `value` under this distribution, differentiable in every
parameter that is a `Var`. It is what `Model#observe` evaluates, so that a
likelihood is derived from the distribution rather than written by hand.

The formula is proba's: every proba distribution carries `logDensity`,
the same density as `logpdf` written in grad ops, elementwise, and this
sums it. A subclass wrapping a distribution that lacks it is still a
valid prior and a valid `logProb`; it is simply not differentiable, and
`observe` will say so.

#### Parameters

##### value

`number` \| `any`[]

observed value(s), plain numbers

#### Returns

`any`

scalar

#### Inherited from

[`Distribution`](Distribution.md).[`logDensity`](Distribution.md#logdensity)

***

### logpdf()

> **logpdf**(`value`): `number` \| `number`[]

Defined in: [distributions/base.js:155](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L155)

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

Defined in: [distributions/base.js:97](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L97)

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

Defined in: [distributions/base.js:238](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L238)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

#### Inherited from

[`Distribution`](Distribution.md).[`mean`](Distribution.md#mean)

***

### observe()

> **observe**(`data`): [`Distribution`](Distribution.md)

Defined in: [distributions/base.js:229](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L229)

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

Defined in: [distributions/base.js:187](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L187)

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

Defined in: [distributions/base.js:206](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L206)

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

Defined in: [distributions/base.js:218](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L218)

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

Defined in: [distributions/base.js:248](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/distributions/base.js#L248)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance

#### Inherited from

[`Distribution`](Distribution.md).[`variance`](Distribution.md#variance)
