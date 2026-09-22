---
title: "leveneTest"
---

> **leveneTest**(`groups`, `options?`): `any`

Defined in: [stats/tests.js:639](https://github.com/tangent-to/ds/blob/9dbc626cfabd94d37405b8d2e2c24fdf3fdfe65f/src/stats/tests.js#L639)

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
