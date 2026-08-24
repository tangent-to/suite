---
title: "fit"
---

> **fit**(`Y`, `X`, `options?`): `any`

Defined in: [mva/rda.js:29](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/rda.js#L29)

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
