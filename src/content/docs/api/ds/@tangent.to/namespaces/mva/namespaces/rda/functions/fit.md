---
title: "fit"
---

> **fit**(`Y`, `X`, `options?`): `any`

Defined in: [mva/rda.js:29](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/mva/rda.js#L29)

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
