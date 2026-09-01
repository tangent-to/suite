---
title: "plotCondensedTree"
---

> **plotCondensedTree**(`model`, `options?`): `any`

Defined in: [plot/plotHDBSCAN.js:17](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/plot/plotHDBSCAN.js#L17)

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
