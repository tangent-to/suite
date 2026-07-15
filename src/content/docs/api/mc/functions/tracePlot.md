---
title: "tracePlot"
---

> **tracePlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:23](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/utils/visualize.js#L23)

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
