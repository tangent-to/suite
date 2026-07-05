---
title: "bernoulli"
---

> `const` **bernoulli**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"bernoulli"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `0` \| `1`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [bernoulli.js:6](https://github.com/tangent-to/proba/blob/12a19a1171fcb31973b43d0cfb7201992e38f35d/src/bernoulli.js#L6)

Bernoulli distribution, parameterized {p} with success probability
p in [0, 1]. Support is {0, 1}.
