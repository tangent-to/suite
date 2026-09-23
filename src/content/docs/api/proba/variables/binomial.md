---
title: "binomial"
---

> `const` **binomial**: `Readonly`\<\{ `kind`: `"discrete"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `name`: `"binomial"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [binomial.js:15](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/binomial.js#L15)

Binomial distribution: successes in n independent trials. Parameterized
{n, p} with trial count n and success probability p in [0, 1]. Support is
the integers {0, 1, ..., n}.
