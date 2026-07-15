---
title: "bernoulli"
---

> `const` **bernoulli**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"bernoulli"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `0` \| `1`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [bernoulli.js:6](https://github.com/tangent-to/proba/blob/e97f26559736e8c98eff10730aa20dbb3d73d529/src/bernoulli.js#L6)

Bernoulli distribution, parameterized {p} with success probability
p in [0, 1]. Support is {0, 1}.
