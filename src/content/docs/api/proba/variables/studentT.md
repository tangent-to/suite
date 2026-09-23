---
title: "studentT"
---

> `const` **studentT**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `name`: `"studentT"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dnu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [studentt.js:40](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/studentt.js#L40)

Student's t distribution, parameterized {nu} with degrees of freedom nu > 0.
Support is the whole real line.
