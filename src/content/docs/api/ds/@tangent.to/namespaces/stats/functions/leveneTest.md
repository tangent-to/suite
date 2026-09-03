---
title: "leveneTest"
---

> **leveneTest**(`groups`, `options?`): `any`

Defined in: [stats/tests.js:639](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/stats/tests.js#L639)

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
