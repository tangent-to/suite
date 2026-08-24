---
title: "bernoulli"
---

> `const` **bernoulli**: `Readonly`\<\{ `kind`: `"discrete"`; `name`: `"bernoulli"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dp`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `0` \| `1`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [bernoulli.js:6](https://github.com/tangent-to/proba/blob/ddb61197ca2a47551bb998b11b9a236599b71035/src/bernoulli.js#L6)

Bernoulli distribution, parameterized {p} with success probability
p in [0, 1]. Support is {0, 1}.
