---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/dbscan.js:108](https://github.com/tangent-to/ds/blob/d419050f9e6d9041137ea692cbd0c91c7ba902e3/src/ml/dbscan.js#L108)

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
