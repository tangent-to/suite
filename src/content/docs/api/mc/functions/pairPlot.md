---
title: "pairPlot"
---

> **pairPlot**(`trace`, `variables?`, `options?`): `any`

Defined in: [utils/visualize.js:315](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/utils/visualize.js#L315)

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
