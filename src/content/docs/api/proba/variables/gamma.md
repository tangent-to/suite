---
title: "gamma"
---

> `const` **gamma**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"gamma"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [gamma.js:64](https://github.com/tangent-to/proba/blob/634a8431b23b1aab57300aef7a6c067655afce91/src/gamma.js#L64)

Gamma distribution, parameterized {alpha, beta} with shape alpha > 0 and
rate beta > 0. Support is (0, infinity).
