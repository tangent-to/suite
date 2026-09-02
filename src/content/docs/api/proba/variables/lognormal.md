---
title: "lognormal"
---

> `const` **lognormal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"lognormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [lognormal.js:30](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/lognormal.js#L30)

Log-normal distribution: exp(X) where X ~ Normal(mu, sigma). Parameterized
{mu, sigma} with sigma > 0. Support is (0, infinity).
