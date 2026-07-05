---
title: "default"
---

> **default**: `object`

Defined in: [mc/src/index.js:135](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/index.js#L135)

## Type Declaration

### diagnostics

> **diagnostics**: `object`

#### diagnostics.effectiveSampleSize

> **effectiveSampleSize**: (`samples`) => `number`

Compute effective sample size (ESS) using autocorrelation

##### Parameters

###### samples

`number`[]

Array of samples

##### Returns

`number`

Effective sample size

#### diagnostics.gelmanRubin

> **gelmanRubin**: (`chains`) => `number`

Compute the Gelman-Rubin diagnostic (R-hat) for convergence
Requires multiple chains

##### Parameters

###### chains

`number`[][]

Array of chains (each chain is an array of samples)

##### Returns

`number`

R-hat statistic

#### diagnostics.printSummary

> **printSummary**: (`trace`) => `void`

Print trace summary for all variables

##### Parameters

###### trace

`any`

Trace object from sampling

##### Returns

`void`

#### diagnostics.summarize

> **summarize**: (`samples`) => `object`

Compute summary statistics for a trace

##### Parameters

###### samples

`number`[]

Array of samples

##### Returns

`object`

Summary statistics: the
  mean, median, standard deviation, variance, 2.5%/97.5% interval bounds,
  and the sample count

###### hdi\_2\_5

> **hdi\_2\_5**: `number`

###### hdi\_97\_5

> **hdi\_97\_5**: `number`

###### mean

> **mean**: `number`

###### median

> **median**: `number`

###### n

> **n**: `number`

###### std

> **std**: `number`

###### variance

> **variance**: `number`

#### diagnostics.traceToCSV

> **traceToCSV**: (`samples`) => `string`

Save trace to CSV format (for a single variable)

##### Parameters

###### samples

`number`[]

Array of samples

##### Returns

`string`

CSV string

#### diagnostics.traceToJSON

> **traceToJSON**: (`trace`) => `string`

Export trace to JSON format

##### Parameters

###### trace

`any`

Trace object

##### Returns

`string`

JSON string

### distributions

> **distributions**: `object`

#### distributions.Bernoulli

> **Bernoulli**: *typeof* [`Bernoulli`](../classes/Bernoulli.md)

#### distributions.Beta

> **Beta**: *typeof* [`Beta`](../classes/Beta.md)

#### distributions.Distribution

> **Distribution**: *typeof* [`Distribution`](../classes/Distribution.md)

#### distributions.Gamma

> **Gamma**: *typeof* [`Gamma`](../classes/Gamma.md)

#### distributions.HalfNormal

> **HalfNormal**: *typeof* [`HalfNormal`](../classes/HalfNormal.md)

#### distributions.Lognormal

> **Lognormal**: *typeof* [`Lognormal`](../classes/Lognormal.md)

#### distributions.Normal

> **Normal**: *typeof* [`Normal`](../classes/Normal.md)

#### distributions.Uniform

> **Uniform**: *typeof* [`Uniform`](../classes/Uniform.md)

### getRng

> **getRng**: () => `any`

Get the current package RNG ({float, int, normal}).

#### Returns

`any`

### Model

> **Model**: *typeof* [`Model`](../classes/Model.md)

### plot

> **plot**: `object`

#### plot.autocorrPlot

> **autocorrPlot**: (`trace`, `variables`, `maxLag`, `options`) => `any`

Generate autocorrelation plot specification
Shows autocorrelation to assess mixing

##### Parameters

###### trace

`any`

MCMC trace object

###### variables?

`string`[] = `null`

Variable names to plot

###### maxLag?

`number` = `50`

Maximum lag to compute

###### options?

`any` = `{}`

Plot options

##### Returns

`any`

Plot specification with .show() method

#### plot.forestPlot

> **forestPlot**: (`trace`, `variables`, `hdi`, `options`) => `any`

Generate forest plot specification
Shows posterior summaries with credible intervals

##### Parameters

###### trace

`any`

MCMC trace object

###### variables?

`string`[] = `null`

Variable names to plot

###### hdi?

`number` = `0.95`

Highest Density Interval (default 0.95)

###### options?

`any` = `{}`

Plot options

##### Returns

`any`

Plot specification with .show() method

#### plot.pairPlot

> **pairPlot**: (`trace`, `variables`, `options`) => `any`

Generate pair plot specification (scatter plot matrix)
Shows relationships between parameters

##### Parameters

###### trace

`any`

MCMC trace object

###### variables?

`string`[] = `null`

Variable names to plot

###### options?

`any` = `{}`

Plot options

##### Returns

`any`

Plot specification with .show() method

#### plot.posteriorPlot

> **posteriorPlot**: (`trace`, `variables`, `options`) => `any`

Generate posterior distribution plot specification
Shows histograms and KDE of posterior samples

##### Parameters

###### trace

`any`

MCMC trace object

###### variables?

`string`[] = `null`

Variable names to plot

###### options?

`any` = `{}`

Plot options

##### Returns

`any`

Plot specification with .show() method

#### plot.rankPlot

> **rankPlot**: (`trace`, `variables`, `options`) => `any`

Generate rank plot specification (for convergence diagnostics)
Useful for detecting non-stationarity and comparing chains

##### Parameters

###### trace

`any`

MCMC trace object

###### variables?

`string`[] = `null`

Variable names to plot

###### options?

`any` = `{}`

Plot options

##### Returns

`any`

Plot specification with .show() method

#### plot.tracePlot

> **tracePlot**: (`trace`, `variables`, `options`) => `any`

Generate trace plot specification
Shows the sampled values over iterations to assess convergence

##### Parameters

###### trace

`any`

MCMC trace object

###### variables?

`string`[] = `null`

Variable names to plot (null = all)

###### options?

`any` = `{}`

Plot options

##### Returns

`any`

Plot specification with .show() method

### samplers

> **samplers**: `object`

#### samplers.HamiltonianMC

> **HamiltonianMC**: *typeof* [`HamiltonianMC`](../classes/HamiltonianMC.md)

#### samplers.HMC

> **HMC**: *typeof* [`HMC`](../classes/HMC.md)

#### samplers.MetropolisHastings

> **MetropolisHastings**: *typeof* [`MetropolisHastings`](../classes/MetropolisHastings.md)

#### samplers.NUTS

> **NUTS**: *typeof* [`NUTS`](../classes/NUTS.md)

#### samplers.summary

> **summary**: (`chainsOrResults`, `opts?`) => `any`[]

ArviZ-style posterior summary across one or more chains.

##### Parameters

###### chainsOrResults

`any`

Array of chain results (`{trace}` from
  [HMC#sample](../classes/HMC.md#sample)), an array of raw trace dicts, or a single trace dict.

###### opts?

###### hdi?

`number` = `0.94`

HDI mass (e.g. 0.94 → hdi_3%/hdi_97%).

##### Returns

`any`[]

One row per scalar parameter component with
  `{ param, mean, sd, hdi_lo, hdi_hi, ess, rhat }`.

### setRandomSeed

> **setRandomSeed**: (`seed`) => `void`

Seed the package RNG for reproducible sampling.

#### Parameters

##### seed

`number`

Any finite number

#### Returns

`void`
