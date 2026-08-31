---
title: "labelEncode"
---

> **labelEncode**(`options`): `any`

Defined in: [ml/preprocessing.js:852](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/preprocessing.js#L852)

Label encode a categorical column
Maps categories to integers (0, 1, 2, ...)

## Parameters

### options

#### categories?

`any`[] = `null`

Predefined category order (optional)

#### column

`string`

Column to encode

#### data

`any`

Input data

#### keepOriginal?

`boolean` = `true`

Keep original column

#### outputColumn?

`string`

Name for encoded column (default: column + '_idx')

## Returns

`any`

{ data, encoder, outputColumn }
