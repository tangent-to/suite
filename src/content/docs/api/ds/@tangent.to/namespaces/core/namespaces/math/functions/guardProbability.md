---
title: "guardProbability"
---

> **guardProbability**(`value`, `name?`): `number`

Defined in: [core/math.js:56](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/core/math.js#L56)

Guard against values outside [0, 1]

## Parameters

### value

`number`

Value to check

### name?

`string` = `'value'`

Name for error message

## Returns

`number`

The value if valid

## Throws

If value is outside [0, 1]
