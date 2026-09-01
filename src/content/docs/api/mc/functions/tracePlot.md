---
title: "tracePlot"
---

> **tracePlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:23](https://github.com/tangent-to/mc/blob/3b74504f4618f4c9ba8e2a1c2c54dc6ea10d6ce5/src/utils/visualize.js#L23)

Generate trace plot specification
Shows the sampled values over iterations to assess convergence

## Parameters

### trace

`any`

MCMC trace object

### variables?

`string`[] = `null`

Variable names to plot (null = all)

### options?

`any` = `{}`

Plot options

## Returns

`any`

Plot specification with .show() method
