---
title: "preprocess"
---

> **preprocess**(`options`): `any`

Defined in: [ml/preprocessing.js:920](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/preprocessing.js#L920)

Declarative preprocessing pipeline for tabular data
Handles numeric parsing, data validation, and categorical encoding in one step

## Parameters

### options

#### data

`any`

Input data (array of objects or Arquero table)

#### labelEncode?

`any`[] = `[]`

Columns to label encode: [{ column, outputColumn?, categories? }]

#### oneHotEncode?

`any`[] = `[]`

Columns to one-hot encode: [{ columns, dropFirst?, prefix? }]

#### parseNumeric?

`string`[] = `null`

Column names to convert from string to numeric

#### validCategories?

`any` = `null`

Validation rules for categorical columns (removes invalid rows)

#### verbose?

`boolean` = `true`

Print preprocessing info

## Returns

`any`

{ data, info: { parsed, cleaned, labelEncoders, oneHotInfo } }
