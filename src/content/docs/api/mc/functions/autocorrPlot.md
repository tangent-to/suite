---
title: "autocorrPlot"
---

> **autocorrPlot**(`trace`, `variables?`, `maxLag?`, `options?`): `any`

Defined in: [utils/visualize.js:213](https://github.com/tangent-to/mc/blob/f22d94c7dfed239d858791e7e0d263abb3191973/src/utils/visualize.js#L213)

Generate autocorrelation plot specification
Shows autocorrelation to assess mixing

## Parameters

### trace

`any`

MCMC trace object

### variables?

`string`[] = `null`

Variable names to plot

### maxLag?

`number` = `50`

Maximum lag to compute

### options?

`any` = `{}`

Plot options

## Returns

`any`

Plot specification with .show() method
