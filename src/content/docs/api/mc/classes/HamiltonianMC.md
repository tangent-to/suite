---
title: "HamiltonianMC"
---

Defined in: [samplers/hmc.js:24](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L24)

Hamiltonian Monte Carlo (HMC) sampler

Uses gradient information for efficient exploration of the posterior.
HMC simulates Hamiltonian dynamics to propose distant states with high acceptance probability.

**Hamiltonian**:
$$
H(\theta, p) = -\log p(\theta|y) + \frac{1}{2}p^T p
$$
where $\theta$ is position (parameters), $p$ is momentum.

**Leapfrog integrator** preserves volume and is reversible:
1. Half-step momentum: $p_{i+1/2} = p_i + \frac{\epsilon}{2}\nabla_\theta \log p(\theta_i|y)$
2. Full-step position: $\theta_{i+1} = \theta_i + \epsilon p_{i+1/2}$
3. Half-step momentum: $p_{i+1} = p_{i+1/2} + \frac{\epsilon}{2}\nabla_\theta \log p(\theta_{i+1}|y)$

## See

[Conceptual Introduction to HMC](https://arxiv.org/abs/1701.02434|A)

## Constructors

### Constructor

> **new HamiltonianMC**(`stepSize?`, `nSteps?`): `HamiltonianMC`

Defined in: [samplers/hmc.js:37](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L37)

Accepts either positional arguments or a single options object.

#### Parameters

##### stepSize?

`any` = `0.01`

Leapfrog step size (epsilon), or an options
  object `{ stepSize, nSteps }`

##### nSteps?

`number` = `10`

Number of leapfrog steps (L)

#### Returns

`HamiltonianMC`

#### Examples

```ts
new HamiltonianMC(0.01, 10)
```

```ts
new HamiltonianMC({ stepSize: 0.01, nSteps: 10 })
```

## Properties

### nSteps

> **nSteps**: `number`

Defined in: [samplers/hmc.js:44](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L44)

***

### stepSize

> **stepSize**: `any`

Defined in: [samplers/hmc.js:43](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L43)

## Methods

### getParams()

> **getParams**(): `object`

Defined in: [samplers/hmc.js:51](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L51)

Get the sampler's configuration.

#### Returns

`object`

##### nSteps

> **nSteps**: `number`

##### stepSize

> **stepSize**: `number`

***

### hamiltonian()

> **hamiltonian**(`position`, `momentum`, `model`): `number`

Defined in: [samplers/hmc.js:113](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L113)

Compute Hamiltonian (total energy)

#### Parameters

##### position

`any`

Current position

##### momentum

`any`

Current momentum

##### model

`Model`

The probabilistic model

#### Returns

`number`

Hamiltonian value

***

### leapfrog()

> **leapfrog**(`position`, `momentum`, `model`): `any`

Defined in: [samplers/hmc.js:62](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L62)

Leapfrog integrator for Hamiltonian dynamics

#### Parameters

##### position

`any`

Current position (parameters)

##### momentum

`any`

Current momentum

##### model

`Model`

The probabilistic model

#### Returns

`any`

New position and momentum

***

### sample()

> **sample**(`model`, `initialValues`, `nSamples?`, `burnIn?`, `thin?`): `any`

Defined in: [samplers/hmc.js:141](https://github.com/tangent-to/mc/blob/eecd6fe07ebd8c8796649fd674572b2291118a97/src/samplers/hmc.js#L141)

Run HMC sampling.

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

Thinning interval (positional form)

#### Returns

`any`

Trace object with samples and diagnostics

#### Examples

```ts
hmc.sample(model, { mu: 0 }, 1000, 500, 1)
```

```ts
hmc.sample(model, { mu: 0 }, { nSamples: 1000, burnIn: 500, thin: 1 })
```
