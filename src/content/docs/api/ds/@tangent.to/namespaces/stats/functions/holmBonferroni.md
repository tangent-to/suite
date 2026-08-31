---
title: "holmBonferroni"
---

> **holmBonferroni**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:976](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/stats/tests.js#L976)

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
