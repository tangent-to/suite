---
title: "addSerializationSupport"
---

> **addSerializationSupport**(`EstimatorClass`, `toJSONFn`): `void`

Defined in: [core/persistence.js:113](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/core/persistence.js#L113)

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
