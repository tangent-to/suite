---
title: "labelEncode"
---

> **labelEncode**(`options`): `any`

Defined in: [ds/src/ml/preprocessing.js:869](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L869)

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
