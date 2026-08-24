---
title: "kernelShap"
---

> **kernelShap**(`spec`, `X`, `opts`): `object`

Defined in: [ml/explain.js:733](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/explain.js#L733)

Convenience: KernelSHAP in one call. See [KernelExplainer](../classes/KernelExplainer.md).

## Parameters

### spec

Explainer specification

#### background

`number`[][]

Background/reference dataset (n × p)

#### featureNames

`string`[]

Feature names for each column

#### model

`any`

Model object to explain (used when no predict function is supplied)

#### predict

`Function`

Prediction function mapping instances to outputs

### X

`number`[][]

Instances to explain (n × p)

### opts

`any`

Options forwarded to KernelExplainer.shapValues

## Returns

`object`

SHAP values per instance and feature

### featureNames?

> `optional` **featureNames?**: `string`[]

### values

> **values**: `number`[][]
