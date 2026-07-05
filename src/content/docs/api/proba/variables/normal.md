---
title: "normal"
---

> `const` **normal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [normal.js:23](https://github.com/tangent-to/proba/blob/85ddb69de0040f1e8589d4aa03498c3e73f506c2/src/normal.js#L23)

@tangent.to/proba - Probability distributions for JavaScript (ESM)

Every distribution follows the frozen-object contract in CONTRACT.md:
logpdf (source of truth) with analytic gradients (dlogpdf), pdf, cdf,
quantile, seedable sampling, moments, support and validation.
MIT-licensed infrastructure of the tangent suite; consumed by
@tangent.to/ds and @tangent.to/mc.
