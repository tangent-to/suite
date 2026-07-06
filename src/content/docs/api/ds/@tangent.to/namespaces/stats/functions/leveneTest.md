---
title: "leveneTest"
---

> **leveneTest**(`groups`, `options?`): `any`

Defined in: [stats/tests.js:639](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/stats/tests.js#L639)

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
