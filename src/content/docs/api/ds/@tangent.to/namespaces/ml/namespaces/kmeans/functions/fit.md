---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/kmeans.js:166](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/kmeans.js#L166)

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
