---
title: "posteriorPlot"
---

> **posteriorPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:106](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/utils/visualize.js#L106)

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
