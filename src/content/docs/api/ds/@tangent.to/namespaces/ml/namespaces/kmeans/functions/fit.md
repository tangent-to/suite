---
title: "fit"
---

> **fit**(`X`, `options?`): `any`

Defined in: [ml/kmeans.js:166](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/kmeans.js#L166)

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
