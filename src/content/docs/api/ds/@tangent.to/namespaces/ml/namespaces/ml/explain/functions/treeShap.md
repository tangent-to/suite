---
title: "treeShap"
---

> **treeShap**(`spec`, `X`): `object`

Defined in: [ds/src/ml/explain.js:748](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/explain.js#L748)

Convenience: TreeSHAP in one call. See [TreeExplainer](../classes/TreeExplainer.md).

## Parameters

### spec

Explainer specification

#### featureNames

`string`[]

Feature names for each column

#### model

`any`

Tree model to explain

### X

`number`[][]

Instances to explain (n × p)

## Returns

`object`

SHAP values per instance and feature

### featureNames?

> `optional` **featureNames?**: `string`[]

### values

> **values**: `number`[][]
