---
title: "uniform"
---

> `const` **uniform**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"uniform"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dhigh`: `number`; `dlow`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [uniform.js:22](https://github.com/tangent-to/proba/blob/e97f26559736e8c98eff10730aa20dbb3d73d529/src/uniform.js#L22)

Continuous uniform distribution, parameterized {low, high} with low < high.
Support is the interval [low, high].
