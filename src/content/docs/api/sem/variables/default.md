---
title: "default"
---

> **default**: `object`

Defined in: [index.js:102](https://github.com/tangent-to/sem/blob/a377415108494623387d492893bb95c1809541cc/src/index.js#L102)

## Type Declaration

### cfa

> **cfa**: (`syntax`, `spec`) => `any`

Alias: confirmatory factor analysis (same engine, reads better in code).

Fit a structural equation model.

#### Parameters

##### syntax

`string`

lavaan-style model syntax:
  `factor =~ ind1 + ind2` (measurement), `y ~ x1 + x2` (regression),
  `a ~~ b` ((co)variance), `1*x` (fix), `NA*x` (free a default-fixed
  parameter)

##### spec?

###### cov?

`number`[][]

Sample covariance (instead of data)

###### data?

`any`[]

Rows as objects (column per variable)

###### n?

`number`

Sample size (required with cov)

###### names?

`string`[]

Variable names (required with cov)

#### Returns

`any`

{estimates, fit, Sigma, S, converged, summary()}

### parseModel

> **parseModel**: (`syntax`) => `object`[]

Parse lavaan-style model syntax into a flat array of parameter rows.

Rows preserve source order; the same lhs on multiple lines simply appends
rows. Duplicate parameters (same lhs/op/rhs; for '~~' the pair is treated
as unordered, so a~~b duplicates b~~a) raise an Error.

#### Parameters

##### syntax

`string`

Model syntax, one statement per line or ';' segment

#### Returns

`object`[]

Parameter rows in source order

### sem

> **sem**: (`syntax`, `spec`) => `any`

Fit a structural equation model.

#### Parameters

##### syntax

`string`

lavaan-style model syntax:
  `factor =~ ind1 + ind2` (measurement), `y ~ x1 + x2` (regression),
  `a ~~ b` ((co)variance), `1*x` (fix), `NA*x` (free a default-fixed
  parameter)

##### spec?

###### cov?

`number`[][]

Sample covariance (instead of data)

###### data?

`any`[]

Rows as objects (column per variable)

###### n?

`number`

Sample size (required with cov)

###### names?

`string`[]

Variable names (required with cov)

#### Returns

`any`

{estimates, fit, Sigma, S, converged, summary()}
