---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/dbscan.js:108](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/dbscan.js#L108)

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
