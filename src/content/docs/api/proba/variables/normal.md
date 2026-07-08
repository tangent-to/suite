---
title: "normal"
---

> `const` **normal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [normal.js:27](https://github.com/tangent-to/proba/blob/634a8431b23b1aab57300aef7a6c067655afce91/src/normal.js#L27)

Normal (Gaussian) distribution, parameterized {mu, sigma} with mean mu and
standard deviation sigma > 0. Support is the whole real line.
