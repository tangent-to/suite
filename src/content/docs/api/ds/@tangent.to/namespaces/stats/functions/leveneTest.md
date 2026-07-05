---
title: "leveneTest"
---

> **leveneTest**(`groups`, `options?`): `any`

Defined in: [ds/src/stats/tests.js:639](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/tests.js#L639)

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
