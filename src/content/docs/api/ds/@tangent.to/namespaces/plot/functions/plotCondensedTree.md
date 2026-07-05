---
title: "plotCondensedTree"
---

> **plotCondensedTree**(`model`, `options?`): `any`

Defined in: [ds/src/plot/plotHDBSCAN.js:17](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/plot/plotHDBSCAN.js#L17)

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
