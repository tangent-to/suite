---
title: "fdr"
---

> **fdr**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:1025](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/stats/tests.js#L1025)

Benjamini-Hochberg FDR correction
Controls false discovery rate

## Parameters

### pValues

`number`[]

Array of p-values

### alpha?

`number` = `0.05`

False discovery rate (default 0.05)

## Returns

`any`

{adjustedPValues, rejected, criticalValues}
