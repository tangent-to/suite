---
title: "hypothesis"
---

> `const` **hypothesis**: `object`

Defined in: [stats/index.js:101](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/stats/index.js#L101)

Functional hypothesis-test helpers grouped under a single namespace for
direct (non-estimator) usage. Each property is the functional form of the
corresponding test (`oneSampleTTest`, `twoSampleTTest`, `pairedTTest`,
`chiSquareTest`, `oneWayAnova`, `tukeyHSD`, `mannWhitneyU`, `kruskalWallis`).

## Type Declaration

### chiSquareTest

> **chiSquareTest**: (`observed`, `expected`) => `any` = `chiSquareTestFn`

Chi-square goodness of fit test

#### Parameters

##### observed

`number`[]

Observed frequencies

##### expected

`number`[]

Expected frequencies

#### Returns

`any`

{statistic, pValue, df}

### kruskalWallis

> **kruskalWallis**: (`groups`) => `any` = `kruskalWallisFn`

Kruskal-Wallis H test
Non-parametric alternative to one-way ANOVA

#### Parameters

##### groups

`number`[][]

Array of group samples

#### Returns

`any`

{statistic (H), pValue, df}

### mannWhitneyU

> **mannWhitneyU**: (`sample1`, `sample2`, `options`) => `any` = `mannWhitneyUFn`

Mann-Whitney U test (Wilcoxon rank-sum test)
Non-parametric alternative to two-sample t-test

#### Parameters

##### sample1

`number`[]

First sample

##### sample2

`number`[]

Second sample

##### options?

`any` = `{}`

{alternative: 'two-sided'|'less'|'greater'}

#### Returns

`any`

{statistic (U), pValue, alternative}

### oneSampleTTest

> **oneSampleTTest**: (`sample`, `options`) => `any` = `oneSampleTTestFn`

One-sample t-test

#### Parameters

##### sample

`number`[]

Sample data

##### options?

`any` = `{}`

{mu: hypothesized mean, alternative: 'two-sided'|'less'|'greater'}

#### Returns

`any`

{statistic, pValue, df, mean, se}

### oneWayAnova

> **oneWayAnova**: (`groups`) => `any` = `oneWayAnovaFn`

One-way ANOVA

#### Parameters

##### groups

`number`[][]

Array of group samples

#### Returns

`any`

{statistic, pValue, dfBetween, dfWithin, MSbetween, MSwithin}

### pairedTTest

> **pairedTTest**: (`sample1`, `sample2`, `options`) => `any` = `pairedTTestFn`

Paired t-test for dependent samples

#### Parameters

##### sample1

`number`[]

First sample (before)

##### sample2

`number`[]

Second sample (after)

##### options?

`any` = `{}`

{mu: hypothesized mean difference (default 0), alternative: 'two-sided'|'less'|'greater'}

#### Returns

`any`

{statistic, pValue, df, meanDiff, se}

### tukeyHSD

> **tukeyHSD**: (`groups`, `options`) => `any` = `tukeyHSDFn`

Tukey's Honestly Significant Difference (HSD) test
Post-hoc test for pairwise comparisons after ANOVA

#### Parameters

##### groups

`number`[][]

Array of group samples

##### options?

`any` = `{}`

{alpha: significance level (default 0.05), anovaResult: optional precomputed ANOVA result}

#### Returns

`any`

{
  comparisons: Array of {groups: [i,j], diff, lowerCI, upperCI, pValue, significant},
  groupMeans: Array of group means,
  groupNames: Array of group indices,
  MSwithin: Mean square within groups,
  dfWithin: Degrees of freedom,
  alpha: Significance level
}

### twoSampleTTest

> **twoSampleTTest**: (`sample1`, `sample2`, `options`) => `any` = `twoSampleTTestFn`

Two-sample t-test (assuming equal variances)

#### Parameters

##### sample1

`number`[]

First sample

##### sample2

`number`[]

Second sample

##### options?

`any` = `{}`

{alternative: 'two-sided'|'less'|'greater'}

#### Returns

`any`

{statistic, pValue, df, mean1, mean2, pooledSE}
