---
title: "cfa"
---

> `const` **cfa**: (`syntax`, `spec`) => `object` = `sem`

Defined in: [index.js:108](https://github.com/tangent-to/sem/blob/c40df55cba16961fece3315fb019f24e9333c9ec/src/index.js#L108)

Alias: confirmatory factor analysis (same engine, reads better in code).

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

`object`

Fitted model: parameter estimates, fit measures, model-implied `Sigma`,
  reordered sample covariance `S`, and a `summary()` text formatter

### converged

> **converged**: `boolean`

### estimates

> **estimates**: `object`[]

### fit

> **fit**: `object`

#### fit.aic

> **aic**: `number`

#### fit.baselineChisq

> **baselineChisq**: `number`

#### fit.baselineDf

> **baselineDf**: `number`

#### fit.bic

> **bic**: `number`

#### fit.cfi

> **cfi**: `number`

#### fit.chisq

> **chisq**: `number`

#### fit.df

> **df**: `number`

#### fit.fmin

> **fmin**: `number`

#### fit.logLik

> **logLik**: `number`

#### fit.n

> **n**: `number`

#### fit.npar

> **npar**: `number`

#### fit.pvalue

> **pvalue**: `number`

#### fit.rmsea

> **rmsea**: `number`

#### fit.srmr

> **srmr**: `number`

#### fit.tli

> **tli**: `number`

### iterations

> **iterations**: `number`

### latents

> **latents**: `string`[]

### observed

> **observed**: `string`[]

### S

> **S**: `number`[][]

### Sigma

> **Sigma**: `number`[][]

### summary

> **summary**: () => `string`

#### Returns

`string`

### theta

> **theta**: `number`[]

### variables

> **variables**: `string`[]
