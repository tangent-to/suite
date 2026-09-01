---
title: "NUTS"
---

Defined in: [samplers/nuts.js:29](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L29)

No-U-Turn Sampler (NUTS)

An extension of Hamiltonian Monte Carlo that automatically tunes the trajectory length.
NUTS eliminates the need to manually set the number of leapfrog steps by running
until the trajectory makes a "U-turn" (starts coming back).

**Algorithm**: Uses recursive tree doubling to adaptively determine path length.
The trajectory is stopped when:
$$
(p^+ - p^-) \cdot \theta^+ < 0 \quad \text{or} \quad (p^+ - p^-) \cdot \theta^- < 0
$$
where $\theta^+, p^+$ are the forward endpoint and $\theta^-, p^-$ are the backward endpoint.

**Advantages over HMC:**
- No manual tuning of trajectory length
- Better exploration of complex posteriors
- State-of-the-art MCMC performance

**Dual averaging** is used to automatically tune step size during warm-up.

## See

[No-U-Turn Sampler (Hoffman & Gelman, 2014)](https://arxiv.org/abs/1111.4246|The)

## Constructors

### Constructor

> **new NUTS**(`stepSize?`, `maxTreeDepth?`, `targetAcceptance?`): `NUTS`

Defined in: [samplers/nuts.js:43](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L43)

Accepts either positional arguments or a single options object.

#### Parameters

##### stepSize?

`any` = `0.01`

Initial leapfrog step size (adapted during
  warmup), or an options object `{ stepSize, maxTreeDepth, targetAcceptance }`

##### maxTreeDepth?

`number` = `10`

Maximum tree depth (default 10, up to 2^10 steps)

##### targetAcceptance?

`number` = `0.8`

Target acceptance rate for adaptation (default 0.8)

#### Returns

`NUTS`

#### Examples

```ts
new NUTS(0.01, 10, 0.8)
```

```ts
new NUTS({ stepSize: 0.01, maxTreeDepth: 10, targetAcceptance: 0.8 })
```

## Properties

### gamma

> **gamma**: `number`

Defined in: [samplers/nuts.js:56](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L56)

***

### kappa

> **kappa**: `number`

Defined in: [samplers/nuts.js:58](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L58)

***

### maxTreeDepth

> **maxTreeDepth**: `number`

Defined in: [samplers/nuts.js:51](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L51)

***

### mu

> **mu**: `number`

Defined in: [samplers/nuts.js:55](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L55)

***

### stepSize

> **stepSize**: `any`

Defined in: [samplers/nuts.js:50](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L50)

***

### t0

> **t0**: `number`

Defined in: [samplers/nuts.js:57](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L57)

***

### targetAcceptance

> **targetAcceptance**: `number`

Defined in: [samplers/nuts.js:52](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L52)

## Methods

### buildTree()

> **buildTree**(`position`, `momentum`, `logSlice`, `direction`, `depth`, `stepSize`, `model`, `H0`, `startGrad?`): `any`

Defined in: [samplers/nuts.js:213](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L213)

Build tree recursively (doubling procedure)

#### Parameters

##### position

`any`

Starting position

##### momentum

`any`

Starting momentum

##### logSlice

`number`

LOG slice variable log(u) for the membership test
  (see [NUTS#sample](#sample)); a state is in the slice iff `logSlice ≤ -H`

##### direction

`number`

Direction (+1 forward, -1 backward)

##### depth

`number`

Current tree depth

##### stepSize

`number`

Step size

##### model

`Model`

The probabilistic model

##### H0

`number`

Initial Hamiltonian

##### startGrad?

`any`

Gradient of the log-posterior at `position`
  (the previous step's endpoint gradient). Computed on demand when omitted.

#### Returns

`any`

Tree information (also carries `gradMinus`/`gradPlus`, the
  endpoint gradients, so the caller can thread them onward)

***

### getParams()

> **getParams**(): `object`

Defined in: [samplers/nuts.js:65](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L65)

Get the sampler's configuration.

#### Returns

`object`

##### maxTreeDepth

> **maxTreeDepth**: `number`

##### stepSize

> **stepSize**: `number`

##### targetAcceptance

> **targetAcceptance**: `number`

***

### hamiltonian()

> **hamiltonian**(`position`, `momentum`, `model`): `number`

Defined in: [samplers/nuts.js:169](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L169)

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

### isUTurn()

> **isUTurn**(`positionMinus`, `positionPlus`, `momentumMinus`, `momentumPlus`): `boolean`

Defined in: [samplers/nuts.js:181](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L181)

Check if trajectory is making a U-turn

#### Parameters

##### positionMinus

`any`

Backward endpoint position

##### positionPlus

`any`

Forward endpoint position

##### momentumMinus

`any`

Backward endpoint momentum

##### momentumPlus

`any`

Forward endpoint momentum

#### Returns

`boolean`

True if trajectory is making a U-turn

***

### leapfrog()

> **leapfrog**(`position`, `momentum`, `stepSize`, `model`): `any`

Defined in: [samplers/nuts.js:81](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L81)

Single leapfrog step

#### Parameters

##### position

`any`

Current position (parameters)

##### momentum

`any`

Current momentum

##### stepSize

`number`

Step size for this step

##### model

`Model`

The probabilistic model

#### Returns

`any`

New position and momentum

***

### leapfrogStep()

> **leapfrogStep**(`position`, `momentum`, `startGrad`, `stepSize`, `model`): `object`

Defined in: [samplers/nuts.js:134](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L134)

Single leapfrog step that REUSES the start gradient and computes the
endpoint gradient and log-probability in one combined pass.

The start-of-step gradient is the previous step's endpoint gradient, so
threading it along the trajectory avoids recomputing `gradOf(position)`
that the previous step already produced. The endpoint's potential value is
needed for the Hamiltonian anyway, so `logProbAndGradient` fetches value and
gradient together instead of a separate gradient pass plus a `logProb` pass.

#### Parameters

##### position

`any`

Current position (parameters)

##### momentum

`any`

Current momentum

##### startGrad

`any`

Gradient of the log-posterior at `position`

##### stepSize

`number`

Signed step size for this step

##### model

`Model`

The probabilistic model

#### Returns

`object`

New position/momentum, the endpoint gradient (to thread onward), and the
  endpoint log-probability.

##### grad

> **grad**: `any`

##### logProb

> **logProb**: `number`

##### momentum

> **momentum**: `any`

##### position

> **position**: `any`

***

### sample()

> **sample**(`userModel`, `userInitialValues`, `nSamples?`, `nWarmup?`, `thin?`): `any`

Defined in: [samplers/nuts.js:337](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/samplers/nuts.js#L337)

Run NUTS sampling.

The sampling controls may be passed positionally or as a single options
object. When an options object is supplied as the third argument, the
`nWarmup` and `thin` positional arguments are ignored in favour of the
object's fields.

#### Parameters

##### userModel

`any`

##### userInitialValues

`any`

##### nSamples?

`any` = `1000`

Number of samples, or an options object

##### nWarmup?

`number` = `500`

Number of warmup samples for step-size adaptation (positional form)

##### thin?

`number` = `1`

Thinning interval (positional form)

#### Returns

`any`

Trace object with samples and diagnostics

#### Examples

```ts
nuts.sample(model, { mu: 0 }, 1000, 500, 1)
```

```ts
nuts.sample(model, { mu: 0 }, { nSamples: 1000, nWarmup: 500, thin: 1 })
```
