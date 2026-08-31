---
title: "cutHeight"
---

> **cutHeight**(`model`, `height`): `number`[]

Defined in: [ml/hca.js:287](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/hca.js#L287)

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
