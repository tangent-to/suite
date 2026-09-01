---
title: "forestPlot"
---

> **forestPlot**(`trace`, `variables?`, `hdi?`, `options?`): `any`

Defined in: [utils/visualize.js:395](https://github.com/tangent-to/mc/blob/6ab72bfaee3ddf99e56ddaa22a4b0f629cd2ec96/src/utils/visualize.js#L395)

Generate forest plot specification
Shows posterior summaries with credible intervals

## Parameters

### trace

`any`

MCMC trace object

### variables?

`string`[] = `null`

Variable names to plot

### hdi?

`number` = `0.95`

Highest Density Interval (default 0.95)

### options?

`any` = `{}`

Plot options

## Returns

`any`

Plot specification with .show() method
