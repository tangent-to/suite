---
title: "guardProbability"
---

> **guardProbability**(`value`, `name?`): `number`

Defined in: [core/math.js:56](https://github.com/tangent-to/ds/blob/d419050f9e6d9041137ea692cbd0c91c7ba902e3/src/core/math.js#L56)

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
