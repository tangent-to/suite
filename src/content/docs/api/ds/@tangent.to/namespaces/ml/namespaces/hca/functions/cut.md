---
title: "cut"
---

> **cut**(`model`, `k`): `number`[]

Defined in: [ml/hca.js:233](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/hca.js#L233)

Cut a hierarchical clustering dendrogram into k flat clusters

## Parameters

### model

`any`

Fitted HCA model with { dendrogram, linkage, n }

### k

`number`

Desired number of clusters (1 ≤ k ≤ n)

## Returns

`number`[]

Cluster label for each of the n samples
