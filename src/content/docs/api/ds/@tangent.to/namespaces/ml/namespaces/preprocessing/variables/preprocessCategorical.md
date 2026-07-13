---
title: "preprocessCategorical"
---

> `const` **preprocessCategorical**: (`options`) => `any` = `preprocess`

Defined in: [ml/preprocessing.js:1158](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/preprocessing.js#L1158)

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
