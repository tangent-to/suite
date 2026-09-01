---
title: "sampleChains"
---

> **sampleChains**(`modelFactory`, `options?`): `Promise`\<\{ `acceptanceRates`: `number`[]; `byChain`: `any`; `chains`: `any`[]; `parallel`: `boolean`; `seeds`: `number`[]; `trace`: `any`; \}\>

Defined in: [parallel.js:260](https://github.com/tangent-to/mc/blob/6ab72bfaee3ddf99e56ddaa22a4b0f629cd2ec96/src/parallel.js#L260)

Sample several MCMC chains in parallel, one worker per chain.

Accepts a SELF-CONTAINED model factory `(data, mc) => Model` — see the
module doc for the contract — and returns the per-chain fits plus pooled
and by-chain traces ready for `gelmanRubin` / `effectiveSampleSize`.

Falls back to running the chains sequentially in-process (identical
numbers, same per-chain seeds) when the runtime has no workers or when
`parallel: false` is passed.

## Parameters

### modelFactory

(`data`, `mc`) => [`Model`](../classes/Model.md)

Builds the model
  from `data` and the mc toolkit; must not reference outer variables.

### options?

#### chains?

`number`

Number of chains

#### data?

`any`

Structured-clonable data for the factory

#### inits?

`any`

Per-chain initial values
  (array, one per chain — over-dispersed starts recommended), or a single
  init object used for every chain. Required.

#### nSamples?

`number`

Draws per chain

#### nWarmup?

`number`

Warmup iterations per chain

#### parallel?

`boolean`

Force the sequential in-process
  path with `false` (same results, no workers)

#### sampler?

`string`

'nuts' | 'hmc' | 'metropolis'

#### samplerOptions?

`any`

Constructor options for the sampler
  (e.g. `{stepSize, maxTreeDepth, targetAcceptance}`)

#### seed?

`number`

Base seed; chain c uses a seed derived
  from it, so runs are reproducible and chains are independent

#### thin?

`number`

Thinning interval

## Returns

`Promise`\<\{ `acceptanceRates`: `number`[]; `byChain`: `any`; `chains`: `any`[]; `parallel`: `boolean`; `seeds`: `number`[]; `trace`: `any`; \}\>
