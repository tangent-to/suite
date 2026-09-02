---
title: "addSerializationSupport"
---

> **addSerializationSupport**(`EstimatorClass`, `toJSONFn`): `void`

Defined in: [core/persistence.js:113](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/core/persistence.js#L113)

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
