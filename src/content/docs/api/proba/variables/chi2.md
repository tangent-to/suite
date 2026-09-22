---
title: "chi2"
---

> `const` **chi2**: `Readonly`\<\{ `kind`: `"continuous"`; `logDensity`: (`x`, `__namedParameters`) => `any`; `name`: `"chi2"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dk`: `number`; `dx`: `number`; \}; `logpdf`: `number`; `mean`: `any`; `pdf`: `number`; `quantile`: `number`; `sample`: `number`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [chi2.js:41](https://github.com/tangent-to/proba/blob/553f6ddb839a983351006d4e70b05dc7313098ad/src/chi2.js#L41)

Chi-squared distribution, parameterized {k} with degrees of freedom k > 0.
Support is (0, infinity).
