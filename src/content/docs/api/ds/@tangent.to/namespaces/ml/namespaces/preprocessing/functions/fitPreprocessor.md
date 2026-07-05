---
title: "fitPreprocessor"
---

> **fitPreprocessor**(`options`): `any`

Defined in: [ds/src/ml/preprocessing.js:1026](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L1026)

Fit a preprocessing pipeline and store the transformers
Use this on training data, then apply the same transformers to test data

## Parameters

### options

`any`

Same as preprocessCategorical

## Returns

`any`

{ data, pipeline: reusable pipeline object }
