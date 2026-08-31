---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/dbscan.js:108](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/dbscan.js#L108)

Fit DBSCAN clustering model

## Parameters

### X

`any`

Data matrix (n samples × d features)

### options?

`any` = `{}`

{eps: neighborhood radius, minSamples: min points for core}

## Returns

`any`

{labels, nClusters, nNoise, coreSampleIndices}
