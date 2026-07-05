---
title: "fdr"
---

> **fdr**(`pValues`, `alpha?`): `any`

Defined in: [ds/src/stats/tests.js:1013](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/tests.js#L1013)

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
