---
title: "treeShap"
---

> **treeShap**(`spec`, `X`): `object`

Defined in: [ml/explain.js:748](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/ml/explain.js#L748)

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
