---
title: "cutHeight"
---

> **cutHeight**(`model`, `height`): `number`[]

Defined in: [ds/src/ml/hca.js:287](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/hca.js#L287)

Cut a hierarchical clustering dendrogram at a given merge height

## Parameters

### model

`any`

Fitted HCA model with { dendrogram, linkage, n }

### height

`number`

Non-negative distance threshold; merges with distance above it are not applied

## Returns

`number`[]

Cluster label for each of the n samples
