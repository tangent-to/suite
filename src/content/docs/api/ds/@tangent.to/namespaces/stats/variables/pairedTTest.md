---
title: "pairedTTest"
---

> `const` **pairedTTest**: (`sample1`, `sample2`, `options`) => `any` = `pairedTTestFn`

Defined in: [stats/index.js:55](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/stats/index.js#L55)

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
