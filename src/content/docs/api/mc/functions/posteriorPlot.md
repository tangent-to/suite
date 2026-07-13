---
title: "posteriorPlot"
---

> **posteriorPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:106](https://github.com/tangent-to/mc/blob/f22d94c7dfed239d858791e7e0d263abb3191973/src/utils/visualize.js#L106)

Generate posterior distribution plot specification
Shows histograms and KDE of posterior samples

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
