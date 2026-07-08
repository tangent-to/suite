---
title: "treeShap"
---

> **treeShap**(`spec`, `X`): `object`

Defined in: [ml/explain.js:748](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/ml/explain.js#L748)

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
