---
title: "binomial"
---

> `const` **binomial**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"binomial"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [binomial.js:14](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/binomial.js#L14)

Binomial distribution: successes in n independent trials. Parameterized
{n, p} with trial count n and success probability p in [0, 1]. Support is
the integers {0, 1, ..., n}.
