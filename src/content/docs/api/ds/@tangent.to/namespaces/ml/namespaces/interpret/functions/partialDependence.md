---
title: "partialDependence"
---

> **partialDependence**(`model`, `X`, `feature`, `options?`): `any`

Defined in: [ds/src/ml/interpret.js:101](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/interpret.js#L101)

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
