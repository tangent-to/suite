---
title: "attachSourceRows"
---

> **attachSourceRows**(`model`, `prepared`): `any`

Defined in: [ds/src/core/table.js:646](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/table.js#L646)

Attach naOmit alignment metadata to a fitted model as non-enumerable
properties, so plot helpers can realign external per-row values (colorBy,
labels) to the rows that survived missing-value filtering.

## Parameters

### model

`any`

Fitted model to annotate

### prepared

`any`

A prepareX() result ({ rows, validIndices, sourceLength })

## Returns

`any`

The same model
