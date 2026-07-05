---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ds/src/ml/kmeans.js:166](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/kmeans.js#L166)

Fit k-means clustering model

## Parameters

### X

`any`

Data matrix (n samples × d features)

### options?

`any` = `{}`

{k: number of clusters, maxIter: max iterations, tol: tolerance}

## Returns

`any`

{labels, centroids, inertia, iterations, converged}
