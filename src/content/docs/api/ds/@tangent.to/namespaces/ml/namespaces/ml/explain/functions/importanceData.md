---
title: "importanceData"
---

> **importanceData**(`res`): `object`[]

Defined in: [ml/explain.js:763](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/explain.js#L763)

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
