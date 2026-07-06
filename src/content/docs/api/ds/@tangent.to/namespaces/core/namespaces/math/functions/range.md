---
title: "range"
---

> **range**(`start`, `stop`, `step?`): `number`[]

Defined in: [core/math.js:320](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/core/math.js#L320)

Generate a sequence of numbers

## Parameters

### start

`number`

Start value (inclusive)

### stop

`number`

Stop value (inclusive)

### step?

`number` = `1`

Step size (default: 1)

## Returns

`number`[]

Array of evenly spaced numbers

## Example

```ts
range(0, 10, 2) // [0, 2, 4, 6, 8, 10]
range(1, 5)     // [1, 2, 3, 4, 5]
range(1, 2, 0.5) // [1, 1.5, 2]
```
