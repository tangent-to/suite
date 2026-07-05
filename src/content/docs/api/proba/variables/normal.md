---
title: "normal"
---

> `const` **normal**: `Readonly`\<\{ `kind`: `"continuous"`; `logpdf`: (`x`, `params`) => `number`; `name`: `"normal"`; `params`: `string`[]; `cdf`: `number`; `dlogpdf`: \{ `dmu`: `number`; `dsigma`: `number`; `dx`: `number`; \}; `mean`: `any`; `pdf`: `number`; `quantile`: `any`; `sample`: `any`; `sampleN`: `any`[]; `support`: `number`[]; `validate`: `void`; `variance`: `number`; \}\>

Defined in: [normal.js:23](https://github.com/tangent-to/proba/blob/12a19a1171fcb31973b43d0cfb7201992e38f35d/src/normal.js#L23)

@tangent.to/proba - Probability distributions for JavaScript (ESM)

Every distribution follows the frozen-object contract in CONTRACT.md:
logpdf (source of truth) with analytic gradients (dlogpdf), pdf, cdf,
quantile, seedable sampling, moments, support and validation.
MIT-licensed infrastructure of the tangent suite; consumed by
@tangent.to/ds and @tangent.to/mc.
