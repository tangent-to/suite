---
title: "fit"
---

> **fit**(`X`, `Y?`, `options?`): `object`

Defined in: [ds/src/mva/cca.js:19](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/cca.js#L19)

Fit CCA model.

Accepts either numeric matrices (fit(XMatrix, YMatrix, options)) or a declarative
object: fit({ X: ['col1', ...], Y: ['colA', ...], data, omit_missing, center, scale }).

## Parameters

### X

`any`

### Y?

`any` = `null`

### options?

## Returns

`object`

### center

> **center**: `boolean`

### columnsX

> **columnsX**: `any` = `columnNamesX`

### columnsY

> **columnsY**: `any` = `columnNamesY`

### correlations

> **correlations**: `any`

### nComponents

> **nComponents**: `number` = `components`

### nFeaturesX

> **nFeaturesX**: `any` = `p`

### nFeaturesY

> **nFeaturesY**: `any` = `q`

### nSamples

> **nSamples**: `any` = `n`

### scale

> **scale**: `boolean`

### type

> **type**: `string` = `'cca'`

### xMeans

> **xMeans**: `any`[] = `processedX.means`

### xScores

> **xScores**: `object`[]

### xSds

> **xSds**: `any`[] = `processedX.sds`

### xWeights

> **xWeights**: `object`[]

### yMeans

> **yMeans**: `any`[] = `processedY.means`

### yScores

> **yScores**: `object`[]

### ySds

> **ySds**: `any`[] = `processedY.sds`

### yWeights

> **yWeights**: `object`[]
