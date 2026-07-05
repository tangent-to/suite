---
title: "guardProbability"
---

> **guardProbability**(`value`, `name?`): `number`

Defined in: [ds/src/core/math.js:56](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/core/math.js#L56)

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
