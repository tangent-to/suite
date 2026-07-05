---
title: "cut"
---

> **cut**(`model`, `k`): `number`[]

Defined in: [ds/src/ml/hca.js:233](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/hca.js#L233)

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
