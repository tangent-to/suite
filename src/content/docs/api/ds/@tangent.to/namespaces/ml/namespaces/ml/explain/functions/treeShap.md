---
title: "treeShap"
---

> **treeShap**(`spec`, `X`): `object`

Defined in: [ml/explain.js:748](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/ml/explain.js#L748)

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
