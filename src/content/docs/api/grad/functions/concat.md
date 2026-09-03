---
title: "concat"
---

> **concat**(`parts`): `Var`

Defined in: [ops.js:755](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/ops.js#L755)

Assemble scalar or vector Vars into one vector, end to end.

The companion to `slice`, and what a vector-valued function needs to return:
an ODE right-hand side is written component by component and concatenated.

## Parameters

### parts

`any`[]

## Returns

`Var`
