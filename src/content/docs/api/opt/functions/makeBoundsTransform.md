---
title: "makeBoundsTransform"
---

> **makeBoundsTransform**(`bounds`, `n`): `any`

Defined in: [bounds.js:33](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/bounds.js#L33)

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
