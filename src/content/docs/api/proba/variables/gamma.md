---
title: "gamma"
---

> `const` **gamma**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `logpdf`: (`x`, `params`) => `number`; `name`: `"gamma"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [gamma.js:65](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/gamma.js#L65)

Gamma distribution, parameterized {alpha, beta} with shape alpha > 0 and
rate beta > 0. Support is (0, infinity).
