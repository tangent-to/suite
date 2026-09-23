---
title: "lognormal"
---

> `const` **lognormal**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `logpdf`: (`x`, `params`) => `number`; `name`: `"lognormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [lognormal.js:31](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/lognormal.js#L31)

Log-normal distribution: exp(X) where X ~ Normal(mu, sigma). Parameterized
{mu, sigma} with sigma > 0. Support is (0, infinity).
