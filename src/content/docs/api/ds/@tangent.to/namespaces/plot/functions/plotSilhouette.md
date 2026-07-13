---
title: "plotSilhouette"
---

> **plotSilhouette**(`options?`, `__namedParameters?`): `any`

Defined in: [plot/plotSilhouette.js:73](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/plot/plotSilhouette.js#L73)

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
