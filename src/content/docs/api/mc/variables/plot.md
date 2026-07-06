---
title: "plot"
---

> `const` **plot**: `object`

Defined in: [index.js:125](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/index.js#L125)

## Type Declaration

### autocorrPlot

> **autocorrPlot**: (`trace`, `variables`, `maxLag`, `options`) => `any`

Generate autocorrelation plot specification
Shows autocorrelation to assess mixing

#### Parameters

##### trace

`any`

MCMC trace object

##### variables?

`string`[] = `null`

Variable names to plot

##### maxLag?

`number` = `50`

Maximum lag to compute

##### options?

`any` = `{}`

Plot options

#### Returns

`any`

Plot specification with .show() method

### forestPlot

> **forestPlot**: (`trace`, `variables`, `hdi`, `options`) => `any`

Generate forest plot specification
Shows posterior summaries with credible intervals

#### Parameters

##### trace

`any`

MCMC trace object

##### variables?

`string`[] = `null`

Variable names to plot

##### hdi?

`number` = `0.95`

Highest Density Interval (default 0.95)

##### options?

`any` = `{}`

Plot options

#### Returns

`any`

Plot specification with .show() method

### pairPlot

> **pairPlot**: (`trace`, `variables`, `options`) => `any`

Generate pair plot specification (scatter plot matrix)
Shows relationships between parameters

#### Parameters

##### trace

`any`

MCMC trace object

##### variables?

`string`[] = `null`

Variable names to plot

##### options?

`any` = `{}`

Plot options

#### Returns

`any`

Plot specification with .show() method

### posteriorPlot

> **posteriorPlot**: (`trace`, `variables`, `options`) => `any`

Generate posterior distribution plot specification
Shows histograms and KDE of posterior samples

#### Parameters

##### trace

`any`

MCMC trace object

##### variables?

`string`[] = `null`

Variable names to plot

##### options?

`any` = `{}`

Plot options

#### Returns

`any`

Plot specification with .show() method

### rankPlot

> **rankPlot**: (`trace`, `variables`, `options`) => `any`

Generate rank plot specification (for convergence diagnostics)
Useful for detecting non-stationarity and comparing chains

#### Parameters

##### trace

`any`

MCMC trace object

##### variables?

`string`[] = `null`

Variable names to plot

##### options?

`any` = `{}`

Plot options

#### Returns

`any`

Plot specification with .show() method

### tracePlot

> **tracePlot**: (`trace`, `variables`, `options`) => `any`

Generate trace plot specification
Shows the sampled values over iterations to assess convergence

#### Parameters

##### trace

`any`

MCMC trace object

##### variables?

`string`[] = `null`

Variable names to plot (null = all)

##### options?

`any` = `{}`

Plot options

#### Returns

`any`

Plot specification with .show() method
