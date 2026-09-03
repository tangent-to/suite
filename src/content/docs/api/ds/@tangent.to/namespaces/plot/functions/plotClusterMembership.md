---
title: "plotClusterMembership"
---

> **plotClusterMembership**(`model`, `data?`, `options?`): `any`

Defined in: [plot/plotHDBSCAN.js:146](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/plot/plotHDBSCAN.js#L146)

Visualize cluster membership probabilities

## Parameters

### model

`any`

HDBSCAN model or result from hdbscan.fit()

### data?

`number`[][] = `null`

Original data for scatter plot (optional)

### options?

Visualization options

#### columns?

`string`[] = `...`

Column names for 2D projection

#### height?

`number` = `480`

Plot height

#### showNoise?

`boolean` = `true`

Show noise points

#### width?

`number` = `720`

Plot width

## Returns

`any`

Observable Plot-compatible configuration
