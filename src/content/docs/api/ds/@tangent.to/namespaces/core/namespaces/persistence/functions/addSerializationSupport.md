---
title: "addSerializationSupport"
---

> **addSerializationSupport**(`EstimatorClass`, `toJSONFn`): `void`

Defined in: [core/persistence.js:113](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/persistence.js#L113)

Add toJSON method to an estimator class prototype
This allows models to define their own serialization logic

## Parameters

### EstimatorClass

`Function`

Estimator class

### toJSONFn

`Function`

Custom toJSON function

## Returns

`void`
