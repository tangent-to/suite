---
title: "prepareX"
---

> **prepareX**(`__namedParameters?`): `object`

Defined in: [core/table.js:478](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/table.js#L478)

Prepare feature matrix X from table-like data.
Supports optional categorical encoding:
  prepareX({ columns, data, naOmit = true, encode = null, encoders = null })

encode can be:
  - null/false: no encoding (default)
  - true: auto-label encode any non-numeric columns
  - { colName: 'label' | 'onehot' } mapping per-column
encoders allows you to reuse previously fitted encoders per column.

Returns:
  { X, columns, n, rows, encoders } where encoders is a mapping of column->encoder used

## Parameters

### \_\_namedParameters?

#### encode?

`any` = `null`

#### encoders?

`any` = `null`

## Returns

`object`

### columns

> **columns**: `any`[] = `finalColumnNames`

### encoders

> **encoders**: `object` = `resolvedEncoders`

### n

> **n**: `number` = `X.length`

### rows

> **rows**: `any`[] = `preFiltered`

### sourceLength

> **sourceLength**: `number` = `rows.length`

### validIndices

> **validIndices**: `any`[]

### X

> **X**: `any`[][]
