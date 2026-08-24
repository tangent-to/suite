---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/kmeans.js:166](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/kmeans.js#L166)

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
