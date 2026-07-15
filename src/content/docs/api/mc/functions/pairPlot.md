---
title: "pairPlot"
---

> **pairPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:315](https://github.com/tangent-to/mc/blob/4e1a8875b27c524a6bb9d33d86ba168603452f2a/src/utils/visualize.js#L315)

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
