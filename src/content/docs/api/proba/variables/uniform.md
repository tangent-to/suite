---
title: "uniform"
---

> `const` **uniform**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"uniform"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dhigh`: `number`; `dlow`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [uniform.js:22](https://github.com/tangent-to/proba/blob/ff137b26a2ab80e007338fcc2f63e88a0db76119/src/uniform.js#L22)

Continuous uniform distribution, parameterized {low, high} with low < high.
Support is the interval [low, high].
