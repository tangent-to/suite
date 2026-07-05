---
title: "plotCondensedTree"
---

> **plotCondensedTree**(`model`, `options?`): `any`

Defined in: [ds/src/plot/plotHDBSCAN.js:17](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/plot/plotHDBSCAN.js#L17)

Generate condensed cluster tree visualization configuration

## Parameters

### model

`any`

HDBSCAN model or result from hdbscan.fit()

### options?

Visualization options

#### height?

`number` = `600`

Plot height

#### showStability?

`boolean` = `true`

Show cluster stability scores

#### width?

`number` = `800`

Plot width

## Returns

`any`

Observable Plot-compatible configuration
