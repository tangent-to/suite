---
title: "predict"
---

> **predict**(`model`, `X`, `X_train`, `eps`): `number`[]

Defined in: [ml/dbscan.js:205](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/ml/dbscan.js#L205)

Predict cluster labels for new data points
Note: DBSCAN doesn't naturally support prediction on new points.
This implementation assigns new points to the cluster of their nearest core point
if within eps distance, otherwise marks as noise.

## Parameters

### model

`any`

Fitted model from fit()

### X

`number`[][]

New data points

### X\_train

`number`[][]

Original training data

### eps

`number`

Maximum distance for neighborhood

## Returns

`number`[]

Cluster labels
