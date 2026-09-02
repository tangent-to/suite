---
title: "normal"
---

> `const` **normal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [normal.js:27](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/normal.js#L27)

Normal (Gaussian) distribution, parameterized {mu, sigma} with mean mu and
standard deviation sigma > 0. Support is the whole real line.
