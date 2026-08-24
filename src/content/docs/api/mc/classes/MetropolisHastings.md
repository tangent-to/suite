---
title: "MetropolisHastings"
---

Defined in: [samplers/metropolis.js:21](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/samplers/metropolis.js#L21)

Metropolis-Hastings MCMC sampler

A simple but effective MCMC algorithm for sampling from posterior distributions.

**Algorithm**: At each iteration, a proposal $\theta'$ is generated from a symmetric
proposal distribution $q(\theta'|\theta) = \mathcal{N}(\theta, \sigma^2)$.
The proposal is accepted with probability:
$$
\alpha = \min\left(1, \frac{p(\theta'|y)}{p(\theta|y)}\right)
$$

**Optimal acceptance rate**: Target ~23.4% for high-dimensional problems, 44% for 1D.

## See

[https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings\_algorithm\|Metropolis-Hastings](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm|Metropolis-Hastings)

## Constructors

### Constructor

> **new MetropolisHastings**(`proposalStd?`): `MetropolisHastings`

Defined in: [samplers/metropolis.js:33](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/samplers/metropolis.js#L33)

Accepts either a positional argument or a single options object.

#### Parameters

##### proposalStd?

`any` = `0.1`

Standard deviation for the Gaussian
  proposal distribution, or an options object `{ proposalStd }`

#### Returns

`MetropolisHastings`

#### Examples

```ts
new MetropolisHastings(0.5)
```

```ts
new MetropolisHastings({ proposalStd: 0.5 })
```

## Properties

### proposalStd

> **proposalStd**: `any`

Defined in: [samplers/metropolis.js:37](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/samplers/metropolis.js#L37)

## Methods

### getParams()

> **getParams**(): `object`

Defined in: [samplers/metropolis.js:44](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/samplers/metropolis.js#L44)

Get the sampler's configuration.

#### Returns

`object`

##### proposalStd

> **proposalStd**: `number`

***

### sample()

> **sample**(`model`, `initialValues`, `nSamples?`, `burnIn?`, `thin?`): `any`

Defined in: [samplers/metropolis.js:72](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/samplers/metropolis.js#L72)

Run Metropolis-Hastings sampling.

The sampling controls may be passed positionally or as a single options
object. When an options object is supplied as the third argument, the
`burnIn` and `thin` positional arguments are ignored in favour of the
object's fields.

#### Parameters

##### model

`Model`

The probabilistic model

##### initialValues

`any`

Initial parameter values

##### nSamples?

`any` = `1000`

Number of samples, or an options object

##### burnIn?

`number` = `500`

Number of burn-in samples to discard (positional form)

##### thin?

`number` = `1`

Thinning interval, keep every nth sample (positional form)

#### Returns

`any`

Trace object with samples and diagnostics

#### Examples

```ts
mh.sample(model, { mu: 0 }, 1000, 500, 1)
```

```ts
mh.sample(model, { mu: 0 }, { nSamples: 1000, burnIn: 500, thin: 1 })
```

***

### tuneProposal()

> **tuneProposal**(`currentAcceptanceRate`): `number`

Defined in: [samplers/metropolis.js:153](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/samplers/metropolis.js#L153)

Tune the proposal standard deviation to achieve target acceptance rate

#### Parameters

##### currentAcceptanceRate

`number`

Current acceptance rate

#### Returns

`number`

New proposal standard deviation
