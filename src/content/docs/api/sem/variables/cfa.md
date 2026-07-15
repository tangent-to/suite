---
title: "cfa"
---

> `const` **cfa**: (`syntax`, `spec`) => `object` = `sem`

Defined in: [index.js:112](https://github.com/tangent-to/sem/blob/124fa0ee2c1adf1b606c5303cb2e9783909925f0/src/index.js#L112)

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

Sample covariance (instead of
  data), maximum-likelihood (divisor-N) scaling, matching what `sampleCov`
  produces and the returned `S`. If you hold an unbiased (divisor-(N-1))
  covariance — R's `cov()`, most stats packages — rescale it by (n-1)/n
  first so the chi-square, log-likelihood, AIC and BIC match lavaan.

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
