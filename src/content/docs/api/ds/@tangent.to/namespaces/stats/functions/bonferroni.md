---
title: "bonferroni"
---

> **bonferroni**(`pValues`, `alpha?`): `any`

Defined in: [ds/src/stats/tests.js:952](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/tests.js#L952)

Bonferroni correction for multiple testing

## Parameters

### pValues

`number`[]

Array of p-values

### alpha?

`number` = `0.05`

Family-wise error rate (default 0.05)

## Returns

`any`

{adjustedPValues, rejected, adjustedAlpha}
