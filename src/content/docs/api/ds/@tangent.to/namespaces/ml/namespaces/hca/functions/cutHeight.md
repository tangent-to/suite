---
title: "cutHeight"
---

> **cutHeight**(`model`, `height`): `number`[]

Defined in: [ml/hca.js:287](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/hca.js#L287)

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
