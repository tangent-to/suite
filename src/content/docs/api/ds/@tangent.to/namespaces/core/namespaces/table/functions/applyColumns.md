---
title: "applyColumns"
---

> **applyColumns**(`rows`, `columns`, `matrix`, `options?`): `any`[]

Defined in: [core/table.js:170](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/table.js#L170)

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
