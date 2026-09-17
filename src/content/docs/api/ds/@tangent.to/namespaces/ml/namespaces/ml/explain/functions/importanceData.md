---
title: "importanceData"
---

> **importanceData**(`res`): `object`[]

Defined in: [ml/explain.js:763](https://github.com/tangent-to/ds/blob/d419050f9e6d9041137ea692cbd0c91c7ba902e3/src/ml/explain.js#L763)

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
