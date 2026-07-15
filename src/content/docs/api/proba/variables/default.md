---
title: "default"
---

> **default**: `object`

Defined in: [index.js:72](https://github.com/tangent-to/proba/blob/e97f26559736e8c98eff10730aa20dbb3d73d529/src/index.js#L72)

Default export: every distribution by name, the `distributions` registry,
`createRng`, and the `special` namespace, bundled for a single import.

## Type Declaration

### bernoulli

> **bernoulli**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"bernoulli"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `0` \| `1`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Bernoulli distribution, parameterized {p} with success probability
p in [0, 1]. Support is {0, 1}.

### beta

> **beta**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"beta"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Beta distribution, parameterized {alpha, beta} with shape parameters
alpha > 0 and beta > 0. Support is the open interval (0, 1).

### binomial

> **binomial**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"binomial"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Binomial distribution: successes in n independent trials. Parameterized
{n, p} with trial count n and success probability p in [0, 1]. Support is
the integers {0, 1, ..., n}.

### chi2

> **chi2**: `Readonly`\<\{ `kind`: `"continuous"`; `name`: `"chi2"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dk`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Chi-squared distribution, parameterized {k} with degrees of freedom k > 0.
Support is (0, infinity).

### createRng

> **createRng**: (`seed?`) => `any`

Create a seedable RNG.

#### Parameters

##### seed?

`number` = `...`

Any finite number; omit for a time-based seed

#### Returns

`any`

{float, int, normal, seed}

### distributions

> **distributions**: `Readonly`\<\{ `bernoulli`: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"bernoulli"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `0` \| `1`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `beta`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"beta"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `binomial`: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"binomial"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>; `chi2`: `Readonly`\<\{ `kind`: `"continuous"`; `name`: `"chi2"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dk`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `exponential`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"exponential"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `f`: `Readonly`\<\{ `kind`: `"continuous"`; `name`: `"f"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dd1`: `number`; `dd2`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `gamma`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"gamma"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `halfnormal`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"halfnormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `lognormal`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"lognormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `normal`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `poisson`: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"poisson"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `any`; \}\>; `studentT`: `Readonly`\<\{ `kind`: `"continuous"`; `name`: `"studentT"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dnu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>; `uniform`: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"uniform"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dhigh`: `number`; `dlow`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>; \}\>

Registry of all distributions keyed by name, for dynamic lookup
(e.g. model specifications that name distributions as strings).

### exponential

> **exponential**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"exponential"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Exponential distribution, parameterized {lambda} with rate lambda > 0.
Support is [0, infinity).

### f

> **f**: `Readonly`\<\{ `kind`: `"continuous"`; `name`: `"f"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dd1`: `number`; `dd2`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

F distribution, parameterized {d1, d2} with numerator and denominator
degrees of freedom d1 > 0 and d2 > 0. Support is (0, infinity).

### gamma

> **gamma**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"gamma"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Gamma distribution, parameterized {alpha, beta} with shape alpha > 0 and
rate beta > 0. Support is (0, infinity).

### halfnormal

> **halfnormal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"halfnormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Half-normal distribution, the absolute value of a zero-mean normal.
Parameterized {sigma} with scale sigma > 0. Support is [0, infinity).

### lognormal

> **lognormal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"lognormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Log-normal distribution: exp(X) where X ~ Normal(mu, sigma). Parameterized
{mu, sigma} with sigma > 0. Support is (0, infinity).

### normal

> **normal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Normal (Gaussian) distribution, parameterized {mu, sigma} with mean mu and
standard deviation sigma > 0. Support is the whole real line.

### poisson

> **poisson**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"poisson"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `any`; \}\>

Poisson distribution, parameterized {lambda} with rate lambda > 0. Support
is the non-negative integers {0, 1, 2, ...}.

### special

> **special**: [`special`](../@tangent.to/namespaces/special/README.md)

Special functions underpinning the distribution numerics:
log-gamma, digamma, regularized incomplete gamma/beta and their
inverses, erf/erfc, and the inverse normal CDF.

Implemented from the standard published algorithms (Lanczos
approximation; series and modified-Lentz continued fractions for the
incomplete functions; Acklam's rational approximation with Halley
refinement for the normal quantile). Accuracy targets are 1e-12 or
better across the usual parameter ranges; the scipy comparison suite
enforces this.

### studentT

> **studentT**: `Readonly`\<\{ `kind`: `"continuous"`; `name`: `"studentT"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dnu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Student's t distribution, parameterized {nu} with degrees of freedom nu > 0.
Support is the whole real line.

### uniform

> **uniform**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"uniform"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dhigh`: `number`; `dlow`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Continuous uniform distribution, parameterized {low, high} with low < high.
Support is the interval [low, high].
