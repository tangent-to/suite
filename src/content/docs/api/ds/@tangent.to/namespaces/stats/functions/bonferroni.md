---
title: "bonferroni"
---

> **bonferroni**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:956](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/stats/tests.js#L956)

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
