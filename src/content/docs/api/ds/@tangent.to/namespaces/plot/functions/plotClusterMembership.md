---
title: "plotClusterMembership"
---

> **plotClusterMembership**(`model`, `data?`, `options?`): `any`

Defined in: [ds/src/plot/plotHDBSCAN.js:146](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/plot/plotHDBSCAN.js#L146)

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
