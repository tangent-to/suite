---
title: "ess"
---

> **ess**(`chains`, `options?`): `number`

Defined in: [utils/trace.js:225](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/utils/trace.js#L225)

Multi-chain effective sample size (Vehtari et al. 2021). `kind: 'bulk'` (default) is the ESS
of the rank-normalized split chains, for the precision of means and medians; `kind: 'tail'` is
the smaller ESS of the 5% and 95% quantile indicators, for the precision of intervals. Both
should exceed 100 per chain.

## Parameters

### chains

`number`[][]

Array of chains (each chain is an array of samples)

### options?

#### kind?

`"bulk"` \| `"tail"` = `'bulk'`

## Returns

`number`

ESS, or NaN with fewer than 4 draws per chain
