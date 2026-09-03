---
title: "addSerializationSupport"
---

> **addSerializationSupport**(`EstimatorClass`, `toJSONFn`): `void`

Defined in: [core/persistence.js:113](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/core/persistence.js#L113)

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
