---
title: "rankPlot"
---

> **rankPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:489](https://github.com/tangent-to/mc/blob/2b8afe1deaa62c7a44fbc535696f4fc5d7f05470/src/utils/visualize.js#L489)

Generate rank plot specification (for convergence diagnostics)
Useful for detecting non-stationarity and comparing chains

## Parameters

### trace

`any`

MCMC trace object

### variables?

`string`[] = `null`

Variable names to plot

### options?

`any` = `{}`

Plot options

## Returns

`any`

Plot specification with .show() method
