---
title: "uniform"
---

> `const` **uniform**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"uniform"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dhigh`: `number`; `dlow`: `number`; `dx`: `number`; \}; `mean`: `number`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `any`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [uniform.js:22](https://github.com/tangent-to/proba/blob/ddb61197ca2a47551bb998b11b9a236599b71035/src/uniform.js#L22)

Continuous uniform distribution, parameterized {low, high} with low < high.
Support is the interval [low, high].
