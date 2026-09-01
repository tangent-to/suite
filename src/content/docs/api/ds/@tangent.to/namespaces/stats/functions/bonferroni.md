---
title: "bonferroni"
---

> **bonferroni**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:956](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/stats/tests.js#L956)

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
