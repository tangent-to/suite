---
title: "cleanCategorical"
---

> **cleanCategorical**(`options`): `any`

Defined in: [ml/preprocessing.js:822](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/preprocessing.js#L822)

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
