---
title: "fdr"
---

> **fdr**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:1025](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/stats/tests.js#L1025)

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
