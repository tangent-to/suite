---
title: "addSerializationSupport"
---

> **addSerializationSupport**(`EstimatorClass`, `toJSONFn`): `void`

Defined in: [core/persistence.js:113](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/persistence.js#L113)

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
