---
title: "poisson"
---

> `const` **poisson**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"poisson"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `any`; \}\>

Defined in: [poisson.js:12](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/poisson.js#L12)

Poisson distribution, parameterized {lambda} with rate lambda > 0. Support
is the non-negative integers {0, 1, 2, ...}.
