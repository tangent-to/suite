---
title: "mannWhitneyU"
---

> `const` **mannWhitneyU**: (`sample1`, `sample2`, `options`) => `any` = `mannWhitneyUFn`

Defined in: [stats/index.js:56](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/stats/index.js#L56)

Mann-Whitney U test (Wilcoxon rank-sum test)
Non-parametric alternative to two-sample t-test

## Parameters

### sample1

`number`[]

First sample

### sample2

`number`[]

Second sample

### options?

`any` = `{}`

{alternative: 'two-sided'|'less'|'greater'}

## Returns

`any`

{statistic (U), pValue, alternative}
