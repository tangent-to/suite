---
title: "bonferroni"
---

> **bonferroni**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:956](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/stats/tests.js#L956)

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
