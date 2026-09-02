---
title: "concat"
---

> **concat**(`parts`): `Var`

Defined in: [ops.js:471](https://github.com/tangent-to/grad/blob/5a636acf7613af4e7113f4cbcc95ee3318ae5698/src/ops.js#L471)

Assemble scalar or vector Vars into one vector, end to end.

The companion to `slice`, and what a vector-valued function needs to return:
an ODE right-hand side is written component by component and concatenated.

## Parameters

### parts

`any`[]

## Returns

`Var`
