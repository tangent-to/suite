---
title: "plotSilhouette"
---

> **plotSilhouette**(`options?`, `__namedParameters?`): `any`

Defined in: [ds/src/plot/plotSilhouette.js:73](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/plot/plotSilhouette.js#L73)

Generate silhouette plot configuration displaying per-sample scores.
Accepts either precomputed samples or raw data/labels for convenience.

## Parameters

### options?

#### clusterOptions?

`any`

Options for cluster summary inset

#### data?

`any`[]

Data matrix used to compute silhouette scores

#### labels?

`any`[]

Cluster labels for each observation

#### maxSilhouette?

`number`

Maximum silhouette value displayed

#### minSilhouette?

`number`

Minimum silhouette value displayed

#### samples?

`any`[]

Output from ml.silhouette.silhouetteSamples()

#### sorted?

`boolean`

Whether to sort samples by silhouette desc

### \_\_namedParameters?

#### clusterInsetHeight?

`number` = `160`

#### clusterInsetWidth?

`number` = `160`

#### height?

`number` = `420`

#### maxSilhouette?

`number` = `1`

#### minSilhouette?

`number` = `-1`

#### showAverageLines?

`boolean` = `true`

#### width?

`number` = `720`

## Returns

`any`

Observable Plot-compatible configuration with `.show()`
