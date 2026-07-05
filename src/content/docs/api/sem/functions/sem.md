---
title: "sem"
---

> **sem**(`syntax`, `spec?`): `any`

Defined in: [index.js:28](https://github.com/tangent-to/sem/blob/a484d1af5ccb86fdee92726ba3c75d48dc82c663/src/index.js#L28)

Fit a structural equation model.

## Parameters

### syntax

`string`

lavaan-style model syntax:
  `factor =~ ind1 + ind2` (measurement), `y ~ x1 + x2` (regression),
  `a ~~ b` ((co)variance), `1*x` (fix), `NA*x` (free a default-fixed
  parameter)

### spec?

#### cov?

`number`[][]

Sample covariance (instead of data)

#### data?

`any`[]

Rows as objects (column per variable)

#### n?

`number`

Sample size (required with cov)

#### names?

`string`[]

Variable names (required with cov)

## Returns

`any`

{estimates, fit, Sigma, S, converged, summary()}
