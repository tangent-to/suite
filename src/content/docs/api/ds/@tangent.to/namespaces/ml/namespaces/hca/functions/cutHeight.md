---
title: "cutHeight"
---

> **cutHeight**(`model`, `height`): `number`[]

Defined in: [ml/hca.js:287](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/hca.js#L287)

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
