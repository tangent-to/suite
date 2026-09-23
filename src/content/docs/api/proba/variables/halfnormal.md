---
title: "halfnormal"
---

> `const` **halfnormal**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `logpdf`: (`x`, `params`) => `number`; `name`: `"halfnormal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dsigma`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [halfnormal.js:29](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/halfnormal.js#L29)

Half-normal distribution, the absolute value of a zero-mean normal.
Parameterized {sigma} with scale sigma > 0. Support is [0, infinity).
