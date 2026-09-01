---
title: "fitPreprocessor"
---

> **fitPreprocessor**(`options`): `any`

Defined in: [ml/preprocessing.js:1009](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/ml/preprocessing.js#L1009)

Fit a preprocessing pipeline and store the transformers
Use this on training data, then apply the same transformers to test data

## Parameters

### options

`any`

Same as preprocessCategorical

## Returns

`any`

{ data, pipeline: reusable pipeline object }
