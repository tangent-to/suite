---
title: "importanceData"
---

> **importanceData**(`res`): `object`[]

Defined in: [ml/explain.js:763](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/explain.js#L763)

Global feature importance = mean(|SHAP|) per feature, sorted descending.
Plug into `Plot.barX(importanceData(res), { x: "importance", y: "feature" })`.

## Parameters

### res

shapValues() output.

#### featureNames?

`string`[]

#### values

`number`[][]

## Returns

`object`[]
