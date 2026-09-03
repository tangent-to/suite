---
title: "labelEncode"
---

> **labelEncode**(`options`): `any`

Defined in: [ml/preprocessing.js:852](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/ml/preprocessing.js#L852)

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
