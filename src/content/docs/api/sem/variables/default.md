---
title: "default"
---

> **default**: `object`

Defined in: [index.js:119](https://github.com/tangent-to/sem/blob/2f66ebbb8ba1e2abe3ca02d42292fde6eba48ff0/src/index.js#L119)

Default export bundling the primary entry points ([sem](../functions/sem.md), [cfa](cfa.md), [parseModel](../functions/parseModel.md)).

## Type Declaration

### cfa

> **cfa**: (`syntax`, `spec`) => `object`

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

Sample covariance (instead of
  data), maximum-likelihood (divisor-N) scaling, matching what `sampleCov`
  produces and the returned `S`. If you hold an unbiased (divisor-(N-1))
  covariance — R's `cov()`, most stats packages — rescale it by (n-1)/n
  first so the chi-square, log-likelihood, AIC and BIC match lavaan.

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

`object`

Fitted model: parameter estimates, fit measures, model-implied `Sigma`,
  reordered sample covariance `S`, and a `summary()` text formatter

##### converged

> **converged**: `boolean`

##### estimates

> **estimates**: `object`[]

##### fit

> **fit**: `object`

###### fit.aic

> **aic**: `number`

###### fit.baselineChisq

> **baselineChisq**: `number`

###### fit.baselineDf

> **baselineDf**: `number`

###### fit.bic

> **bic**: `number`

###### fit.cfi

> **cfi**: `number`

###### fit.chisq

> **chisq**: `number`

###### fit.df

> **df**: `number`

###### fit.fmin

> **fmin**: `number`

###### fit.logLik

> **logLik**: `number`

###### fit.n

> **n**: `number`

###### fit.npar

> **npar**: `number`

###### fit.pvalue

> **pvalue**: `number`

###### fit.rmsea

> **rmsea**: `number`

###### fit.srmr

> **srmr**: `number`

###### fit.tli

> **tli**: `number`

##### iterations

> **iterations**: `number`

##### latents

> **latents**: `string`[]

##### observed

> **observed**: `string`[]

##### S

> **S**: `number`[][]

##### Sigma

> **Sigma**: `number`[][]

##### summary

> **summary**: () => `string`

###### Returns

`string`

##### theta

> **theta**: `number`[]

##### variables

> **variables**: `string`[]

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

> **sem**: (`syntax`, `spec`) => `object`

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

Sample covariance (instead of
  data), maximum-likelihood (divisor-N) scaling, matching what `sampleCov`
  produces and the returned `S`. If you hold an unbiased (divisor-(N-1))
  covariance — R's `cov()`, most stats packages — rescale it by (n-1)/n
  first so the chi-square, log-likelihood, AIC and BIC match lavaan.

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

`object`

Fitted model: parameter estimates, fit measures, model-implied `Sigma`,
  reordered sample covariance `S`, and a `summary()` text formatter

##### converged

> **converged**: `boolean`

##### estimates

> **estimates**: `object`[]

##### fit

> **fit**: `object`

###### fit.aic

> **aic**: `number`

###### fit.baselineChisq

> **baselineChisq**: `number`

###### fit.baselineDf

> **baselineDf**: `number`

###### fit.bic

> **bic**: `number`

###### fit.cfi

> **cfi**: `number`

###### fit.chisq

> **chisq**: `number`

###### fit.df

> **df**: `number`

###### fit.fmin

> **fmin**: `number`

###### fit.logLik

> **logLik**: `number`

###### fit.n

> **n**: `number`

###### fit.npar

> **npar**: `number`

###### fit.pvalue

> **pvalue**: `number`

###### fit.rmsea

> **rmsea**: `number`

###### fit.srmr

> **srmr**: `number`

###### fit.tli

> **tli**: `number`

##### iterations

> **iterations**: `number`

##### latents

> **latents**: `string`[]

##### observed

> **observed**: `string`[]

##### S

> **S**: `number`[][]

##### Sigma

> **Sigma**: `number`[][]

##### summary

> **summary**: () => `string`

###### Returns

`string`

##### theta

> **theta**: `number`[]

##### variables

> **variables**: `string`[]
