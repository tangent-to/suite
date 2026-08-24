---
title: "exponential"
---

> `const` **exponential**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"exponential"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dlambda`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [exponential.js:22](https://github.com/tangent-to/proba/blob/ddb61197ca2a47551bb998b11b9a236599b71035/src/exponential.js#L22)

Exponential distribution, parameterized {lambda} with rate lambda > 0.
Support is [0, infinity).
