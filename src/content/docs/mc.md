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

<!-- Placeholder screenshot hidden until a real one is ready:
![mc example: NUTS posterior summary](../../assets/screenshots/mc.png)
-->

## Building a model

A `Model` is a container of named random variables. Add priors with `addVariable`, declare what was observed with `observe`, and record post-hoc transforms with `deterministic`. All of them return the model, so calls chain.

```js
import mc, { Model, Normal, HalfNormal, NUTS } from '@tangent.to/mc';
const { add, mul } = mc.ops;

const model = new Model('regression');
model.addVariable('a', new Normal(0, 10));
model.addVariable('b', new Normal(0, 10));
model.addVariable('sigma', new HalfNormal(5));                       // natural scale; mc transforms
model.observe('y', (v) => new Normal(add(v.a, mul(v.b, x)), v.sigma), y);

const fit = await new NUTS().sample(model, { a: 0, b: 0, sigma: 1 }, { chains: 4, nSamples: 1000, nWarmup: 500 });
```

That is the whole model. The likelihood and its exact gradient come from the Normal; the transform that keeps `sigma` positive comes from the sampler; the four chains go to worker threads where the runtime allows and run in series where it does not, with the same draws either way. The one trace of JavaScript in it is that `a + b * x` is written as a call, since the language cannot overload `+` on an object, and `add` and `mul` take any number of operands so that nothing nests.

| Signature | Description |
| --- | --- |
| `new Model(name?)` | Create a model. Accepts a name string or `{ name }`. |
| `model.addVariable(name, dist, observed?)` | Register a random variable under a prior distribution. |
| `model.observe(name, factory, data)` | Declare an observed variable. `factory(v)` returns a distribution whose parameters are expressions in the free variables; its log-density at `data` becomes the likelihood term, differentiated exactly. See [Exact gradients](#exact-gradients). |
| `model.autoPotential(name, fn, options?)` | A term written directly in [grad](/grad/) operations, for a likelihood no distribution supplies. |
| `model.potential(name, fn, gradFn?)` | A term as a plain function of the parameters. Without a `gradFn` it falls back to central finite differences, and it cannot be sent to a worker. |
| `mc.ops` | grad's operations, re-exported so a model needs no second import of the package. |
| `model.deterministic(name, fn)` | Record a named transform of the parameters in the trace. It receives plain numbers after sampling and does not affect the log probability, so it is not the place to build a model expression. |
| `model.logProb(params)` | Evaluate the unnormalized joint log probability at a point. |

## Distributions

The distribution classes back both priors and likelihoods. Each constructor takes positional parameters or a single options object, matching the tangent convention, and its parameters may be numbers, arrays, or grad expressions. Call `.logProb(x)` for the elementwise log density on plain numbers, `.logDensity(x)` for the total as a differentiable expression, and `.sample(n)` to draw.

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
| `sampler.sample(model, init, options?)` | Draw from the posterior. Returns `{ trace, acceptanceRate, stepSize, ... }`. With `{ chains: n }` in the options it returns a Promise of `{ trace, byChain, chains, parallel, parallelReason, ... }`, pooled and per chain; see [Chains](#chains). |

## Exact gradients

A gradient-based sampler needs the gradient of the joint log probability. Priors are differentiated analytically from [proba](/proba/), and a term added with `potential` falls back to central finite differences: `2·P` extra evaluations of the whole term per gradient, accurate to about `1e-7`, which is enough error to cost the leapfrog integrator its symplectic property.

`observe` avoids both costs and writes nothing out. The factory returns one of mc's distributions with parameters that are expressions in the free variables; the distribution's own log-density at the data is the term, differentiated by reverse-mode autodiff at one evaluation per gradient regardless of the parameter count, and to about `1e-13` against a hand-derived closed form. Every one of the seven distributions can be observed, a Gamma or Beta with a differentiated shape parameter included.

A bounded parameter is declared on its natural scale, `sigma ~ HalfNormal(5)`, and every gradient sampler moves through an unconstrained transform with the log-Jacobian applied, so there is no log-scale variable to write and no Jacobian to add.

`autoPotential` is the form beneath `observe`, for a term no distribution supplies: a censored likelihood, a custom factor, a Jacobian for a transform mc does not know about. The term is written as an expression in [grad](/grad/) operations.

The operations come from `mc.ops`, not from a separate import of [grad](/grad/). That distinction is about correctness rather than convenience: pinning grad alongside mc loads a second copy of the module the moment mc's own dependency range resolves to a different version, and the two copies have different `Var` classes, so `autoPotential` rejects an expression built with the other one.

```js
const { add, div, log, mul, square, sub, sum } = mc.ops;

model.autoPotential('y', (v) => {
  const mu = add(v.intercept, mul(v.slope, xData), seasonOffset);
  const z = div(sub(yData, mu), v.sigma);
  return sub(mul(-0.5, sum(square(z))), mul(yData.length, log(v.sigma)));
});
```

The tape is compiled by default: built once and replayed at each new set of parameters rather than reconstructed on every call. That is worth roughly a factor of three on a real fit. It is safe as a default because of the contract the method already states. The term is an expression built from grad's operations, which fixes its graph by construction, and a sampler holds every parameter's shape constant for the length of a run. The two ways to break that assumption both mean writing something that is not such an expression, namely branching on a parameter's numeric value by reaching into `.data`, or closing over data that is mutated while the sampler runs. Pass `{ compile: false }` for those.

## Chains

Chains are independent by construction, so several should run at once. `sampler.sample(model, init, { chains: 4 })` runs them, and decides where.

```js
const fit = await new NUTS().sample(model, init, { chains: 4, nSamples: 400, nWarmup: 400, seed: 20240115 });
fit.byChain.a        // [[chain-0 draws], [chain-1 draws], ...], ready for gelmanRubin
fit.trace.a          // the chains pooled
fit.parallel         // true when the chains ran on workers
fit.parallelReason   // why not, when they did not
```

A JavaScript worker starts with an empty module graph and cannot receive a closure, which is why parallel chains in JavaScript have meant writing the model as a self-contained factory. mc no longer needs that. Once a term has been compiled, what it holds is not a closure but a static graph of operations, with whatever the closure captured stored as constant leaves; that is plain data. The model is serialized, its variables as their distribution's kind and parameters and its terms as those graphs, and one worker per chain rebuilds it from the data. The model is written as it is, closures and all.

The decision, in order: `parallel: false` runs the chains in series. Otherwise the model must be serializable, every variable one of mc's distributions and every term written with `observe` or `autoPotential`, and the runtime must be able to start a worker. If both hold, workers; if either fails, series, with the reason named once on the console and in `parallelReason`. Both paths derive the same per-chain seed from `seed`, so the draws are identical either way and the choice is invisible in the result. Deterministics are applied on the calling thread when the chains return. On a 340-observation model with 15 parameters, four chains of 400 draws after 400 warmup take 17 seconds in series and 4.8 across four workers.

`sampleChains` remains for a model that holds a term written as a plain function and still wants workers: it sends a factory's source to each worker, where it can reference nothing but its two arguments, so grad's operations arrive as `mc.ops`.

```js
const fit = await sampleChains((data, mc) => {
  const { add, div, log, mul, square, sub, sum } = mc.ops;   // the same namespace, inside the worker
  const model = new mc.Model('lin');
  model.addVariable('a', new mc.distributions.Normal(0, 5));
  model.addVariable('logSig', new mc.distributions.Normal(0, 1));
  model.autoPotential('lik', (v) => { /* ... written in those ops ... */ });
  return model;
}, { data, chains: 4, inits, nSamples: 400, nWarmup: 400, seed: 20240115 });

fit.byChain.a   // [[chain-0 draws], [chain-1 draws], ...], ready for gelmanRubin
fit.trace.a     // the chains pooled
```

Each chain derives its own seed from `seed`, and `{ parallel: false }` runs the same chains in process from the same seeds and the same factory source, producing identical draws.

## Diagnostics

The diagnostics namespace summarizes and audits a trace after sampling.

| Signature | Description |
| --- | --- |
| `summarize(draws)` | Reduce a column of draws to mean, std, and a 95 percent credible interval (`hdi_2_5` to `hdi_97_5`). |
| `effectiveSampleSize(draws)` | Effective sample size accounting for autocorrelation. |
| `gelmanRubin(chains)` | Gelman-Rubin R-hat convergence statistic across chains. |
| `fit.divergences` | Divergent transitions after warmup, on every NUTS result and per chain on a multi-chain one. The diagnostic R-hat and ESS cannot give: a chain that diverges is exploring a region its step size cannot resolve, typically a scale parameter near zero, and both of those statistics look fine while it happens. A positive count is reported once on the console. |
| `printSummary(trace)` | Print a formatted posterior summary table. |
| `traceToJSON(trace)` / `traceToCSV(trace)` | Serialize a trace for storage or external tools. |

## Reproducibility

Every sampler and every `.sample()` call draws from a single RNG stream. Seed it once for a fully reproducible run across machines.

A multi-chain run, `sample(model, init, { chains })` or `sampleChains`, is the exception, and deliberately so: it seeds each chain independently from its own `seed` option rather than sharing one stream, since a worker has no access to the parent's. That is what R-hat assumes anyway, and it means the run is reproducible from its own seed without depending on how much randomness the cells above it happened to consume.

| Signature | Description |
| --- | --- |
| `setRandomSeed(seed)` | Seed the shared RNG stream. |
| `getRng()` | Access the shared random-number generator. |

## Verified against PyMC

mc is browser-first and PyMC-like: the modeling API (priors, a likelihood, `Model`) mirrors PyMC, and the samplers reproduce PyMC's behavior on shared problems. On the estimate-a-mean example NUTS recovers the true value with a credible interval that brackets it, acceptance adapts to the 0.8 target, and the analytic gradients let the whole run happen in the browser.
