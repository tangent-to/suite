---
title: "fitPreprocessor"
---

> **fitPreprocessor**(`options`): `any`

Defined in: [ml/preprocessing.js:1026](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/ml/preprocessing.js#L1026)

Fit a preprocessing pipeline and store the transformers
Use this on training data, then apply the same transformers to test data

## Parameters

### options

`any`

Same as preprocessCategorical

## Returns

`any`

{ data, pipeline: reusable pipeline object }
