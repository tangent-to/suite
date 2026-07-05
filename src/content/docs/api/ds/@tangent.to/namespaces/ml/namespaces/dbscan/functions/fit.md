---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ds/src/ml/dbscan.js:108](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/dbscan.js#L108)

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
