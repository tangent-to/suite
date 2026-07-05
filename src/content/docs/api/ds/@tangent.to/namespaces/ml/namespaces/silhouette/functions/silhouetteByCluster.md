---
title: "silhouetteByCluster"
---

> **silhouetteByCluster**(`X`, `labels`): `object`[]

Defined in: [ds/src/ml/silhouette.js:130](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/silhouette.js#L130)

Group per-sample silhouette values by cluster and compute cluster averages

## Parameters

### X

`number`[][] \| \{ `columns`: `string`[]; `data`: `number`[][]; \}

Data matrix (n × p) or an options object with data/columns

### labels

`number`[] \| `string`[]

Cluster label for each sample (length n)

## Returns

`object`[]

Clusters sorted by descending average silhouette
