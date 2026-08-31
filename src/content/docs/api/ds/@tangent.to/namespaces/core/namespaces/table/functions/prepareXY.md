---
title: "prepareXY"
---

> **prepareXY**(`__namedParameters?`): `object`

Defined in: [core/table.js:751](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/core/table.js#L751)

Prepare feature matrix X and response vector y from table-like data.
Supports categorical encoding for X and y via `encode` option:
  prepareXY({ X, y, data, naOmit = true, encode = null, encoders = null })

encode semantics same as prepareX. For y, only 'label' encoding is supported
(maps categories to integer class labels). Supply `encoders` to reuse previously
fitted encoders (e.g., from a training split) and keep label IDs consistent.

Returns:
  { X, y, columnsX, n, rows, encoders } where encoders may include encoders.y

## Parameters

### \_\_namedParameters?

#### encode?

`any` = `null`

#### encoders?

`any` = `null`

## Returns

`object`

### columnsX

> **columnsX**: `any`[] = `xPrep.columns`

### encoders

> **encoders**: `object` = `encodersOut`

### n

> **n**: `number` = `xPrep.n`

### rows

> **rows**: `any`[] = `preFiltered`

### sourceLength

> **sourceLength**: `number` = `rows.length`

### validIndices

> **validIndices**: `any`[]

### X

> **X**: `any`[][] = `xPrep.X`

### y

> **y**: `any`[] = `yvec`
