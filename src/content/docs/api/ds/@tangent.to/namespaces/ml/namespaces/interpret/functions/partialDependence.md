---
title: "partialDependence"
---

> **partialDependence**(`model`, `X`, `feature`, `options?`): `any`

Defined in: [ml/interpret.js:101](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/interpret.js#L101)

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
