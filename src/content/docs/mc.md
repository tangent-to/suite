---
title: mc
description: Bayesian modeling and MCMC for JavaScript. Declare priors and a likelihood, then sample the posterior with NUTS. Browser-first, validated against PyMC.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<p class="tg-pkg-head"><span class="tg-slug">tangent<span class="slash">/</span>mc</span> <span class="tg-validated">validated against PyMC</span></p>

Bayesian modeling the way PyMC does it: declare priors and a likelihood as a directed acyclic graph of random variables, then draw from the posterior with Markov chain Monte Carlo.

```bash
npm install @tangent.to/mc       # npm
deno add jsr:@tangent/mc         # Deno / JSR
```

<a class="tg-run" href="https://note.tangent.to/gh/tangent-to/mc/examples/bayesian-inference.js">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
Run the example notebook
</a>

![mc example: NUTS posterior summary](../../assets/screenshots/mc.png)

## Building a model

A `Model` is a container of named random variables. Add priors with `addVariable`, attach a likelihood or factor with `potential`, and record post-hoc transforms with `deterministic`. All three methods return the model, so calls chain.

| Signature | Description |
| --- | --- |
| `new Model(name?)` | Create a model. Accepts a name string or `{ name }`. |
| `model.addVariable(name, dist, observed?)` | Register a random variable under a prior distribution. |
| `model.potential(name, fn)` | Add a log-density factor. `fn(params)` returns the term's log density; priors get analytic gradients, potentials use finite differences. |
| `model.deterministic(name, fn)` | Record a named transform of the parameters in the trace. Does not affect the log probability. |
| `model.logProb(params)` | Evaluate the unnormalized joint log probability at a point. |

## Distributions

The distribution classes back both priors and likelihoods. Each constructor takes positional parameters or a single options object, matching the tangent convention. Call `.logProb(x)` for the log density and `.sample(n)` to draw.

| Signature | Description |
| --- | --- |
| `new Normal(mu, sigma)` | Normal, also `{ mu \| mean, sigma \| sd \| std }`. |
| `new Uniform(lower, upper)` | Uniform, also `{ lower \| min, upper \| max }`. |
| `new Bernoulli(p)` | Bernoulli, also `{ p }`. |
| `new Beta(alpha, beta)` | Beta, also `{ alpha, beta }`. |
| `new Gamma(alpha, beta)` | Gamma parameterized by shape and RATE, also `{ alpha \| shape, beta \| rate }`. Passing a `scale` key throws (use `rate = 1/scale`). |
| `new Lognormal(mu, sigma)` | Lognormal, also `{ mu \| mean, sigma \| sd \| std }`. |
| `new HalfNormal(sigma)` | Half-normal on the positive line, also `{ sigma \| sd \| std \| scale }`. |

## Samplers

Every sampler exposes `sample(model, initialValues, options)`, where `options` is `{ nSamples, nWarmup, thin }` (Metropolis and HMC use `burnIn` as the warmup key; NUTS accepts either `nWarmup` or `burnIn`). The call returns a trace keyed by variable name plus run diagnostics. NUTS is the recommended default.

| Signature | Description |
| --- | --- |
| `new NUTS(options?)` | No-U-Turn Sampler, e.g. `{ stepSize, targetAcceptance }`. Tunes trajectory length and adapts step size by dual averaging. Recommended. |
| `new HamiltonianMC(stepSize?, nSteps?)` | Hamiltonian Monte Carlo with a fixed number of leapfrog steps. |
| `new MetropolisHastings(proposalStd?)` | Random-walk Metropolis-Hastings. Gradient-free baseline. |
| `new HMC(...)` | Vector-valued Hamiltonian sampler for models expressed over a single parameter vector. |
| `sampler.sample(model, init, options?)` | Draw from the posterior. Returns `{ trace, acceptanceRate, stepSize, ... }`. |

## Diagnostics

The diagnostics namespace summarizes and audits a trace after sampling.

| Signature | Description |
| --- | --- |
| `summarize(draws)` | Reduce a column of draws to mean, std, and a 95 percent credible interval (`hdi_2_5` to `hdi_97_5`). |
| `effectiveSampleSize(draws)` | Effective sample size accounting for autocorrelation. |
| `gelmanRubin(chains)` | Gelman-Rubin R-hat convergence statistic across chains. |
| `printSummary(trace)` | Print a formatted posterior summary table. |
| `traceToJSON(trace)` / `traceToCSV(trace)` | Serialize a trace for storage or external tools. |

## Reproducibility

Every sampler and every `.sample()` call draws from a single RNG stream. Seed it once for a fully reproducible run across machines.

| Signature | Description |
| --- | --- |
| `setRandomSeed(seed)` | Seed the shared RNG stream. |
| `getRng()` | Access the shared random-number generator. |

## Verified against PyMC

mc is browser-first and PyMC-like: the modeling API (priors, a likelihood, `Model`) mirrors PyMC, and the samplers reproduce PyMC's behavior on shared problems. On the estimate-a-mean example NUTS recovers the true value with a credible interval that brackets it, acceptance adapts to the 0.8 target, and the analytic gradients let the whole run happen in the browser.
