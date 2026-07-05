---
title: "fit"
---

> **fit**(`Y`, `X`, `options?`): `any`

Defined in: [ds/src/mva/rda.js:29](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/mva/rda.js#L29)

Fit RDA model.

## Parameters

### Y

`number`[][]

Response matrix (n x q)

### X

`number`[][]

Explanatory matrix (n x p)

### options?

#### constrained?

`boolean`

When true, perform PCA on fitted values (constrained ordination); when false, perform PCA on residuals (unconstrained ordination).

#### scale?

`boolean`

Standardise response variables before regression.

## Returns

`any`

RDA model
