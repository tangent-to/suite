---
title: "fdr"
---

> **fdr**(`pValues`, `alpha?`): `any`

Defined in: [stats/tests.js:1025](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/stats/tests.js#L1025)

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
