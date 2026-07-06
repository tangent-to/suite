---
title: "poisson"
---

> `const` **poisson**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"poisson"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `any`; \}\>

Defined in: [poisson.js:12](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/poisson.js#L12)

Poisson distribution, parameterized {lambda} with rate lambda > 0. Support
is the non-negative integers {0, 1, 2, ...}.
