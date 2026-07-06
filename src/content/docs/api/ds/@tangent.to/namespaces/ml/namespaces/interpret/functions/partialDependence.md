---
title: "partialDependence"
---

> **partialDependence**(`model`, `X`, `feature`, `options?`): `any`

Defined in: [ml/interpret.js:101](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/interpret.js#L101)

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
