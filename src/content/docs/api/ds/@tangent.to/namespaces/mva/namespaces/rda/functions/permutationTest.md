---
title: "permutationTest"
---

> **permutationTest**(`model`, `options?`): `any`

Defined in: [mva/rda.js:373](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/mva/rda.js#L373)

Permutation test of the global RDA (equivalent to vegan's
`anova.cca(model)`): tests H0 that the constraints explain no more response
variance than expected by chance. Under H0 the response rows are exchangeable,
so we permute the rows of the (centred) response matrix, refit, and compare the
permuted pseudo-F to the observed one. Because a row permutation leaves each
response column's total sum of squares unchanged, the total inertia and the
degrees of freedom are invariant, so only the constrained inertia is recomputed.

The pseudo-F is `(constrained inertia / dfModel) / (residual inertia / dfResidual)`
with `dfModel` the rank of the constraints and `dfResidual = n - dfModel - 1`,
matching vegan. The p-value uses the standard `(1 + #{F* >= F}) / (nperm + 1)`
correction. F, the proportion constrained and the df are divisor-invariant, so
they match vegan regardless of its n-1 inertia convention; the reported inertia
values use the n-1 divisor to match vegan's "Variance" column directly.

## Parameters

### model

`any`

A constrained RDA model from fit().

### options?

#### permutations?

`number`

Number of row permutations.

#### seed?

`number`

Seed for reproducibility.

## Returns

`any`

{ pseudoF, pValue, permutations, dfModel, dfResidual,
  constrainedInertia, residualInertia, totalInertia, constrainedProportion, eigenvalues }
