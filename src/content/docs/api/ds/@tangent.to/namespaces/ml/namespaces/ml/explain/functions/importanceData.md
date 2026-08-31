---
title: "importanceData"
---

> **importanceData**(`res`): `object`[]

Defined in: [ml/explain.js:763](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/explain.js#L763)

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
