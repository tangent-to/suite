---
title: "cleanCategorical"
---

> **cleanCategorical**(`options`): `any`

Defined in: [ml/preprocessing.js:839](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/preprocessing.js#L839)

Clean and validate categorical columns
Removes rows with invalid categories

## Parameters

### options

#### data

`any`

Input data

#### validCategories

`any` = `{}`

Map of column names to arrays of valid values

## Returns

`any`

{ data: cleaned data, removed: count of removed rows }
