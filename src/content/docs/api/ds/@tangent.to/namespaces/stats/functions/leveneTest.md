---
title: "leveneTest"
---

> **leveneTest**(`groups`, `options?`): `any`

Defined in: [ds/src/stats/tests.js:639](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/stats/tests.js#L639)

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
