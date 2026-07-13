---
title: "fitPreprocessor"
---

> **fitPreprocessor**(`options`): `any`

Defined in: [ml/preprocessing.js:1026](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/preprocessing.js#L1026)

Fit a preprocessing pipeline and store the transformers
Use this on training data, then apply the same transformers to test data

## Parameters

### options

`any`

Same as preprocessCategorical

## Returns

`any`

{ data, pipeline: reusable pipeline object }
