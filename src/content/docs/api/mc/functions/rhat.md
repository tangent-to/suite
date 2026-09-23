---
title: "rhat"
---

> **rhat**(`chains`): `number`

Defined in: [utils/trace.js:208](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/utils/trace.js#L208)

Rank-normalized split-R̂ (Vehtari et al. 2021): the larger of the R̂ of the rank-normalized
split chains and of their folded version (distance to the median), which also catches chains
that agree on location but not on scale. Values below 1.01 indicate convergence.

## Parameters

### chains

`number`[][]

Array of chains (each chain is an array of samples)

## Returns

`number`

R-hat, or NaN with fewer than 2 chains or 4 draws per chain
