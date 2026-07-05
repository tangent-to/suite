---
title: "pairedTTest"
---

> `const` **pairedTTest**: (`sample1`, `sample2`, `options`) => `any` = `pairedTTestFn`

Defined in: [ds/src/stats/index.js:55](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/stats/index.js#L55)

Paired t-test for dependent samples

## Parameters

### sample1

`number`[]

First sample (before)

### sample2

`number`[]

Second sample (after)

### options?

`any` = `{}`

{mu: hypothesized mean difference (default 0), alternative: 'two-sided'|'less'|'greater'}

## Returns

`any`

{statistic, pValue, df, meanDiff, se}
