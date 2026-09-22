---
title: "summaryData"
---

> **summaryData**(`res`, `X`): `object`[]

Defined in: [ml/explain.js:786](https://github.com/tangent-to/ds/blob/9dbc626cfabd94d37405b8d2e2c24fdf3fdfe65f/src/ml/explain.js#L786)

Tidy long-form rows for a beeswarm / summary plot: one row per
(instance, feature) carrying the SHAP value and the original feature value.
Plug into `Plot.dot(summaryData(res, X), { x: "shap", y: "feature", fill: "featureValue" })`.

## Parameters

### res

shapValues() output.

#### featureNames?

`string`[]

#### values

`number`[][]

### X

`number`[][]

The explained instances (same order as res.values).

## Returns

`object`[]
