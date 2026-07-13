---
title: "fdr"
---

> **fdr**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:1013](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/stats/tests.js#L1013)

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
