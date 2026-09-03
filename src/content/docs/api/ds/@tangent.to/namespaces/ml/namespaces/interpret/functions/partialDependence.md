---
title: "partialDependence"
---

> **partialDependence**(`model`, `X`, `feature`, `options?`): `any`

Defined in: [ml/interpret.js:101](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/interpret.js#L101)

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
