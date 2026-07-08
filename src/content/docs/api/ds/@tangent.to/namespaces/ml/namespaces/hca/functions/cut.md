---
title: "cut"
---

> **cut**(`model`, `k`): `number`[]

Defined in: [ml/hca.js:233](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/hca.js#L233)

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
