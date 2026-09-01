---
title: "rankPlot"
---

> **rankPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:489](https://github.com/tangent-to/mc/blob/6ab72bfaee3ddf99e56ddaa22a4b0f629cd2ec96/src/utils/visualize.js#L489)

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
