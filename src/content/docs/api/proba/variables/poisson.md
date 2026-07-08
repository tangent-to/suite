---
title: "poisson"
---

> `const` **poisson**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"poisson"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `any`; \}\>

Defined in: [poisson.js:12](https://github.com/tangent-to/proba/blob/634a8431b23b1aab57300aef7a6c067655afce91/src/poisson.js#L12)

Poisson distribution, parameterized {lambda} with rate lambda > 0. Support
is the non-negative integers {0, 1, 2, ...}.
