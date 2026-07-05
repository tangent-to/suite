---
title: "mannWhitneyU"
---

> `const` **mannWhitneyU**: (`sample1`, `sample2`, `options`) => `any` = `mannWhitneyUFn`

Defined in: [ds/src/stats/index.js:56](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/index.js#L56)

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
