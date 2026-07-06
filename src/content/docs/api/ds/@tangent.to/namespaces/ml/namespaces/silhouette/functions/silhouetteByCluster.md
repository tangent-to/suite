---
title: "silhouetteByCluster"
---

> **silhouetteByCluster**(`X`, `labels`): `object`[]

Defined in: [ml/silhouette.js:130](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/silhouette.js#L130)

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
