---
title: "beta"
---

> `const` **beta**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"beta"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dalpha`: `number`; `dbeta`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [beta.js:40](https://github.com/tangent-to/proba/blob/88b3efca7fefde9cb5ed623d00168a1014ef3c1a/src/beta.js#L40)

Beta distribution, parameterized {alpha, beta} with shape parameters
alpha > 0 and beta > 0. Support is the open interval (0, 1).
