---
title: "fit"
---

> **fit**(`Y`, `X`, `options?`): `any`

Defined in: [mva/rda.js:29](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/mva/rda.js#L29)

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
