---
title: "beta"
---

> `const` **beta**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `logpdf`: (`x`, `params`) => `number`; `name`: `"beta"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [beta.js:41](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/beta.js#L41)

Beta distribution, parameterized {alpha, beta} with shape parameters
alpha > 0 and beta > 0. Support is the open interval (0, 1).
