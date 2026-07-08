---
title: "gower"
---

> **gower**(`a`, `b`, `options?`): `number`

Defined in: [ml/distances.js:172](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/distances.js#L172)

Gower distance for mixed-type data (numeric + categorical)
Handles missing values gracefully

## Parameters

### a

`any`[]

First vector (can contain numbers, strings, or null/undefined)

### b

`any`[]

Second vector

### options?

Configuration

#### ranges

`number`[] = `null`

Array of ranges for numeric features (max - min)

#### types

`string`[] = `null`

Array indicating type of each feature: 'numeric' or 'categorical'

## Returns

`number`

Gower distance (0 = identical, 1 = maximally different)
