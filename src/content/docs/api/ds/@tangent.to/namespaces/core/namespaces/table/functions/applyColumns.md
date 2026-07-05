---
title: "applyColumns"
---

> **applyColumns**(`rows`, `columns`, `matrix`, `options?`): `any`[]

Defined in: [ds/src/core/table.js:170](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/table.js#L170)

Apply a matrix of values to specific columns on each row.
Useful for re-attaching transformed feature matrices to table rows.

## Parameters

### rows

`any`[]

Source rows (will be copied unless copy=false)

### columns

`string`[]

Column names corresponding to matrix columns

### matrix

`number`[][]

Values to assign per row/column

### options?

`any` = `{}`

{ copy: true } to control cloning behaviour

## Returns

`any`[]

Rows with columns assigned
