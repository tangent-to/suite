---
title: "makeBoundsTransform"
---

> **makeBoundsTransform**(`bounds`, `n`): `any`

Defined in: [bounds.js:33](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/bounds.js#L33)

Build a bounds transform, or return null when every parameter is free.

## Parameters

### bounds

`number`[][]

Per-parameter [lo, hi];
  null/undefined/±Infinity mean unbounded on that side

### n

`number`

Number of parameters

## Returns

`any`

{toInternal, toExternal, dExtDInt, clamp}
