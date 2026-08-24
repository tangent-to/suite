---
title: "pairPlot"
---

> **pairPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:315](https://github.com/tangent-to/mc/blob/8640ecb73b28b14d256dcd197cd7d61ab10c7757/src/utils/visualize.js#L315)

Generate pair plot specification (scatter plot matrix)
Shows relationships between parameters

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
