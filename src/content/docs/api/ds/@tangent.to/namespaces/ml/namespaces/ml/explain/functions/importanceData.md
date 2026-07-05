---
title: "importanceData"
---

> **importanceData**(`res`): `object`[]

Defined in: [ds/src/ml/explain.js:763](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L763)

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
