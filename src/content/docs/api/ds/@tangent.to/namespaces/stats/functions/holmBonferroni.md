---
title: "holmBonferroni"
---

> **holmBonferroni**(`pValues`, `alpha?`): `any`

Defined in: [ds/src/stats/tests.js:972](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/tests.js#L972)

Holm-Bonferroni correction for multiple testing
Sequentially rejective Bonferroni procedure (more powerful)

## Parameters

### pValues

`number`[]

Array of p-values

### alpha?

`number` = `0.05`

Family-wise error rate (default 0.05)

## Returns

`any`

{adjustedPValues, rejected}
