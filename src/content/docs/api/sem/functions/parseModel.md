---
title: "parseModel"
---

> **parseModel**(`syntax`): `object`[]

Defined in: [parse.js:97](https://github.com/tangent-to/sem/blob/b576802250ac549a7b2f70307d7d21b4a1858e4b/src/parse.js#L97)

Parse lavaan-style model syntax into a flat array of parameter rows.

Rows preserve source order; the same lhs on multiple lines simply appends
rows. Duplicate parameters (same lhs/op/rhs; for '~~' the pair is treated
as unordered, so a~~b duplicates b~~a) raise an Error.

## Parameters

### syntax

`string`

Model syntax, one statement per line or ';' segment

## Returns

`object`[]

Parameter rows in source order
