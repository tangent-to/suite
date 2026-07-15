---
title: "gamma"
---

> `const` **gamma**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"gamma"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [gamma.js:64](https://github.com/tangent-to/proba/blob/e97f26559736e8c98eff10730aa20dbb3d73d529/src/gamma.js#L64)

Gamma distribution, parameterized {alpha, beta} with shape alpha > 0 and
rate beta > 0. Support is (0, infinity).
