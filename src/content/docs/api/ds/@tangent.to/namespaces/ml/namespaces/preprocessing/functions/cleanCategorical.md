---
title: "cleanCategorical"
---

> **cleanCategorical**(`options`): `any`

Defined in: [ml/preprocessing.js:822](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/preprocessing.js#L822)

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
