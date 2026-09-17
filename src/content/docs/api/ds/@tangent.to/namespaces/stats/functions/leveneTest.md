---
title: "leveneTest"
---

> **leveneTest**(`groups`, `options?`): `any`

Defined in: [stats/tests.js:639](https://github.com/tangent-to/ds/blob/d419050f9e6d9041137ea692cbd0c91c7ba902e3/src/stats/tests.js#L639)

Levene's test for equality of variances
Tests homogeneity of variance assumption (homoscedasticity)

## Parameters

### groups

`number`[][]

Array of group samples

### options?

`any` = `{}`

{center: 'mean'|'median'|'trimmed', trim: trim proportion for trimmed mean (default 0.1)}

## Returns

`any`

{statistic, pValue, df1, df2}
