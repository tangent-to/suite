---
title: "holmBonferroni"
---

> **holmBonferroni**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:972](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/stats/tests.js#L972)

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
