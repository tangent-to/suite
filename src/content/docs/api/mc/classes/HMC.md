---
title: "HMC"
---

Defined in: [samplers/hmc-vector.js:22](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L22)

Vector-aware Hamiltonian Monte Carlo.

Unlike the scalar `HamiltonianMC`/`NUTS` in this package, this sampler flattens
all free variables - scalars and 1-D vectors alike - into a single real vector
and runs leapfrog dynamics on it. That makes it suitable for hierarchical
models whose parameters are vectors (per-group effects, per-site plateaus, …)
and for likelihoods defined through [Model#potential](Model.md#potential) (a deterministic
mean computed from the latent variables and data).

Step size is tuned during warm-up by dual averaging (Hoffman & Gelman, 2014)
toward a target acceptance rate; a unit mass matrix is used.

## Example

```ts
const hmc = new HMC({ stepSize: 0.05, nSteps: 20 });
const { trace } = hmc.sample(model, { slope: 0, intercept: 0, sigma: 1 },
                             { nSamples: 1000, nWarmup: 500 });
```

## Constructors

### Constructor

> **new HMC**(`opts?`): `HMC`

Defined in: [samplers/hmc-vector.js:32](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L32)

Create a vector-aware HMC sampler.

#### Parameters

##### opts?

###### adapt?

`boolean` = `true`

Adapt the step size during warm-up.

###### nSteps?

`number` = `20`

Leapfrog steps per proposal.

###### seed?

`number`

Optional RNG seed for reproducibility.

###### stepSize?

`number` = `0.05`

Initial leapfrog step size (adapted in warm-up).

###### targetAccept?

`number` = `0.8`

Target acceptance for step-size adaptation.

#### Returns

`HMC`

## Properties

### adapt

> **adapt**: `boolean`

Defined in: [samplers/hmc-vector.js:36](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L36)

***

### nSteps

> **nSteps**: `number`

Defined in: [samplers/hmc-vector.js:34](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L34)

***

### seed

> **seed**: `number`

Defined in: [samplers/hmc-vector.js:37](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L37)

***

### stepSize

> **stepSize**: `number`

Defined in: [samplers/hmc-vector.js:33](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L33)

***

### targetAccept

> **targetAccept**: `number`

Defined in: [samplers/hmc-vector.js:35](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L35)

## Methods

### sample()

> **sample**(`model`, `initialValues`, `opts?`): `object`

Defined in: [samplers/hmc-vector.js:53](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L53)

Run a single chain.

#### Parameters

##### model

`Model`

##### initialValues

`any`

{name: number | number[]} starting point.

##### opts?

###### nSamples?

`number` = `1000`

###### nWarmup?

`number` = `500`

###### progress?

`boolean` = `false`

###### thin?

`number` = `1`

#### Returns

`object`

##### acceptanceRate

> **acceptanceRate**: `number`

##### divergences

> **divergences**: `number`

##### specs

> **specs**: `any`[]

##### stepSize

> **stepSize**: `number`

##### trace

> **trace**: `any`

***

### sampleChains()

> **sampleChains**(`model`, `initial`, `opts?`): `any`[]

Defined in: [samplers/hmc-vector.js:196](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L196)

Run several independent chains (sequentially) from (optionally) jittered
starting points. Returns an array of single-chain results, ready for
[summary](../functions/summary.md).

#### Parameters

##### model

`Model`

##### initial

`any`

Starting values, or a
  function returning starting values for each chain index.

##### opts?

`any` = `{}`

As [HMC#sample](#sample), plus `chains` (default 4).

#### Returns

`any`[]

per-chain results
