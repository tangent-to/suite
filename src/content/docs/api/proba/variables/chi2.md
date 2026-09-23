---
title: "chi2"
---

> `const` **chi2**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `name`: `"chi2"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dk`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [chi2.js:41](https://github.com/tangent-to/proba/blob/0dacd237d4491015fc8940f23991a06450968594/src/chi2.js#L41)

Chi-squared distribution, parameterized {k} with degrees of freedom k > 0.
Support is (0, infinity).
