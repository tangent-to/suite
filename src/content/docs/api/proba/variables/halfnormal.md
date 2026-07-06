---
title: "halfnormal"
---

> `const` **halfnormal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"halfnormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [halfnormal.js:28](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/halfnormal.js#L28)

Half-normal distribution, the absolute value of a zero-mean normal.
Parameterized {sigma} with scale sigma > 0. Support is [0, infinity).
