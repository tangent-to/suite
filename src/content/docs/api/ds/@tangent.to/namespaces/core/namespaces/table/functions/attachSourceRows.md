---
title: "attachSourceRows"
---

> **attachSourceRows**(`model`, `prepared`): `any`

Defined in: [core/table.js:646](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/core/table.js#L646)

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
