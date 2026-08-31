---
title: "oneHotEncodeTable"
---

> **oneHotEncodeTable**(`options?`): `any`

Defined in: [core/table.js:676](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/table.js#L676)

Utility to one-hot encode columns in a table-like object.

## Parameters

### options?

#### columns

`string` \| `string`[]

Column or columns to encode

#### data

`any`

Array of row objects or table-like input

#### dropFirst?

`boolean` = `true`

Drop first dummy (gives D-1 columns)

#### handleUnknown?

`string` = `'ignore'`

Behaviour for unseen categories

#### keepOriginal?

`boolean` = `false`

Keep the original categorical column

#### prefix?

`boolean` = `true`

Prefix generated column names with original column name

## Returns

`any`

{ data, dummyInfo }
