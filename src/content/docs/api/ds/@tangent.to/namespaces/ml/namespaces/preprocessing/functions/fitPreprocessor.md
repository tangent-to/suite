---
title: "fitPreprocessor"
---

> **fitPreprocessor**(`options`): `any`

Defined in: [ml/preprocessing.js:1026](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/ml/preprocessing.js#L1026)

Fit a preprocessing pipeline and store the transformers
Use this on training data, then apply the same transformers to test data

## Parameters

### options

`any`

Same as preprocessCategorical

## Returns

`any`

{ data, pipeline: reusable pipeline object }
