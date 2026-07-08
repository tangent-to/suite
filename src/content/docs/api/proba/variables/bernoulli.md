---
title: "bernoulli"
---

> `const` **bernoulli**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"bernoulli"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `0` \| `1`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [bernoulli.js:6](https://github.com/tangent-to/proba/blob/634a8431b23b1aab57300aef7a6c067655afce91/src/bernoulli.js#L6)

Bernoulli distribution, parameterized {p} with success probability
p in [0, 1]. Support is {0, 1}.
