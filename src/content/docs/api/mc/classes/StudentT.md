---
title: "StudentT"
---

Defined in: [distributions/studentt.js:15](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L15)

Student-t distribution, with location and scale

$$ p(x | \nu, \mu, \sigma) = \frac{\Gamma((\nu+1)/2)}{\Gamma(\nu/2)\sqrt{\nu\pi}\,\sigma}
   \left(1 + \frac{1}{\nu}\left(\frac{x-\mu}{\sigma}\right)^2\right)^{-(\nu+1)/2} $$

A robust alternative to the Normal as an observation model: its heavy tails
let an outlying observation pull the mean less. `nu` may be a free variable.

## See

[t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution|Student's)

## Extends

- [`Distribution`](Distribution.md)

## Constructors

### Constructor

> **new StudentT**(`nu?`, `mu?`, `sigma?`, `name?`): `StudentT`

Defined in: [distributions/studentt.js:31](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L31)

Accepts either positional arguments or a single options object, matching the
dual-constructor convention of `@tangent.to/ds`.

#### Parameters

##### nu?

`any` = `1`

Degrees of freedom, nu > 0, or an options object
  `{ nu | df, mu | mean, sigma | sd | std, name }`

##### mu?

`number` \| `any`[]

Location

##### sigma?

`number` \| `any`[]

Scale, sigma > 0

##### name?

`string` = `'StudentT'`

Name of the distribution

#### Returns

`StudentT`

#### Examples

```ts
new StudentT(4, 0, 1)
```

```ts
new StudentT({ df: 4, mean: 0, sd: 1 })
```

#### Overrides

[`Distribution`](Distribution.md).[`constructor`](Distribution.md#constructor)

## Properties

### \_dist

> **\_dist**: `any`

Defined in: [distributions/studentt.js:43](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L43)

***

### mu

> **mu**: `number` \| `any`[]

Defined in: [distributions/studentt.js:41](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L41)

***

### name

> **name**: `any`

Defined in: [distributions/studentt.js:35](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L35)

#### Inherited from

[`Distribution`](Distribution.md).[`name`](Distribution.md#name)

***

### nu

> **nu**: `any`

Defined in: [distributions/studentt.js:40](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L40)

***

### observed

> **observed**: `any`

Defined in: [distributions/base.js:53](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L53)

#### Inherited from

[`Distribution`](Distribution.md).[`observed`](Distribution.md#observed)

***

### sigma

> **sigma**: `number` \| `any`[]

Defined in: [distributions/studentt.js:42](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L42)

## Methods

### \_len()

> **\_len**(`value`): `number`

Defined in: [distributions/base.js:69](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L69)

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

Defined in: [distributions/studentt.js:49](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L49)

The proba parameter object for this distribution.

#### Returns

`object`

##### mu

> **mu**: `number` \| `any`[]

##### nu

> **nu**: `any`

##### sigma

> **sigma**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`_params`](Distribution.md#_params)

***

### \_paramsAt()

> **\_paramsAt**(`i`): `any`

Defined in: [distributions/base.js:82](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L82)

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

Defined in: [distributions/base.js:211](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L211)

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

Defined in: [distributions/base.js:181](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L181)

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

Defined in: [distributions/studentt.js:56](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/studentt.js#L56)

Get the distribution's parameters.

#### Returns

`object`

##### mu

> **mu**: `number` \| `any`[]

##### nu

> **nu**: `any`

##### sigma

> **sigma**: `number` \| `any`[]

#### Overrides

[`Distribution`](Distribution.md).[`getParams`](Distribution.md#getparams)

***

### logDensity()

> **logDensity**(`value`): `any`

Defined in: [distributions/base.js:137](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L137)

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

Defined in: [distributions/base.js:169](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L169)

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

Defined in: [distributions/base.js:97](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L97)

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

Defined in: [distributions/base.js:252](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L252)

Get the mean of the distribution

#### Returns

`number` \| `number`[]

The mean

#### Inherited from

[`Distribution`](Distribution.md).[`mean`](Distribution.md#mean)

***

### observe()

> **observe**(`data`): [`Distribution`](Distribution.md)

Defined in: [distributions/base.js:243](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L243)

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

Defined in: [distributions/base.js:201](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L201)

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

Defined in: [distributions/base.js:220](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L220)

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

Defined in: [distributions/base.js:232](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L232)

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

Defined in: [distributions/base.js:262](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/distributions/base.js#L262)

Get the variance of the distribution

#### Returns

`number` \| `number`[]

The variance

#### Inherited from

[`Distribution`](Distribution.md).[`variance`](Distribution.md#variance)
