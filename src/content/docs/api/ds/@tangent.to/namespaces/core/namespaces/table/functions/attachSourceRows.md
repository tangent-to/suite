---
title: "attachSourceRows"
---

> **attachSourceRows**(`model`, `prepared`): `any`

Defined in: [core/table.js:646](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/core/table.js#L646)

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
