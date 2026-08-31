---
title: "fitPreprocessor"
---

> **fitPreprocessor**(`options`): `any`

Defined in: [ml/preprocessing.js:1009](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/ml/preprocessing.js#L1009)

Fit a preprocessing pipeline and store the transformers
Use this on training data, then apply the same transformers to test data

## Parameters

### options

`any`

Same as preprocessCategorical

## Returns

`any`

{ data, pipeline: reusable pipeline object }
