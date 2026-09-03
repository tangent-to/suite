---
title: "tracePlot"
---

> **tracePlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:23](https://github.com/tangent-to/mc/blob/479ed802039cc6f55191648284819e2988a24579/src/utils/visualize.js#L23)

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
