---
title: "fit"
---

> **fit**(`X`, `Y?`, `options?`): `any`

Defined in: [mva/cca.js:28](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/cca.js#L28)

Fit CCA model.

Accepts either numeric matrices (fit(XMatrix, YMatrix, options)) or a declarative
object: fit({ X: ['col1', ...], Y: ['colA', ...], data, omit_missing, center, scale }).

## Parameters

### X

`any`

Design matrix (n × p) for the first dataset, or a declarative config object

### Y?

`number`[][] = `null`

Design matrix (n × q) for the second dataset (ignored when X is declarative)

### options?

Fitting options

#### center?

`boolean`

Center columns to zero mean (default true)

#### columnsX?

`string`[]

Column names for X

#### columnsY?

`string`[]

Column names for Y

#### scale?

`boolean`

Scale columns to unit variance (default false)

## Returns

`any`

Fitted CCA model
