---
title: "poisson"
---

> `const` **poisson**: `Readonly`\<\{ `kind`: `"discrete"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `name`: `"poisson"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `any`; \}\>

Defined in: [poisson.js:13](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/poisson.js#L13)

Poisson distribution, parameterized {lambda} with rate lambda > 0. Support
is the non-negative integers {0, 1, 2, ...}.
