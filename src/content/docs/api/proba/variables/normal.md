---
title: "normal"
---

> `const` **normal**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [normal.js:28](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/normal.js#L28)

Normal (Gaussian) distribution, parameterized {mu, sigma} with mean mu and
standard deviation sigma > 0. Support is the whole real line.
