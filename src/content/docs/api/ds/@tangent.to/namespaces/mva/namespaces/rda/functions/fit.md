---
title: "fit"
---

> **fit**(`Y`, `X`, `options?`): `any`

Defined in: [mva/rda.js:29](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/mva/rda.js#L29)

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
