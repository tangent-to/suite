---
title: "resolveGroupValues"
---

> **resolveGroupValues**(`spec`, `result?`, `name?`): `any`[]

Defined in: [ds/src/plot/utils.js:26](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/plot/utils.js#L26)

Normalize a colorBy (or labels) specification into a plain array of
per-observation values.

Accepted forms:
- an array (used as-is)
- any iterable, e.g. an Arquero column or a typed array (converted)
- a { data, column } descriptor (column extracted from table-like data)
- a column-name string, resolved against the source rows the model kept
  from a declarative fit (e.g. pca.fit({ data, columns }) stores the
  naOmit-filtered rows so values stay aligned with the scores)

## Parameters

### spec

`any`

colorBy specification

### result?

`any` = `null`

Fitted model (for string column lookup)

### name?

`string` = `'colorBy'`

Option name used in error messages

## Returns

`any`[]

Array of values, or null when spec is null
