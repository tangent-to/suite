---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/dbscan.js:108](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/dbscan.js#L108)

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
