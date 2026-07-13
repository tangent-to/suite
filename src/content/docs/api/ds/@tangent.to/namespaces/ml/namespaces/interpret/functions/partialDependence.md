---
title: "partialDependence"
---

> **partialDependence**(`model`, `X`, `feature`, `options?`): `any`

Defined in: [ml/interpret.js:101](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/interpret.js#L101)

Compute partial dependence for a feature

## Parameters

### model

`any`

Fitted model with predict method

### X

`number`[][]

Feature matrix

### feature

`number`

Feature index

### options?

`any` = `{}`

{gridSize, percentiles}

## Returns

`any`

{values, predictions}
