---
title: "concat"
---

> **concat**(`parts`): `Var`

Defined in: [ops.js:413](https://github.com/tangent-to/grad/blob/2a24439d6dc98a75132dc8e814889d9dbf0a6e20/src/ops.js#L413)

Assemble scalar or vector Vars into one vector, end to end.

The companion to `slice`, and what a vector-valued function needs to return:
an ODE right-hand side is written component by component and concatenated.

## Parameters

### parts

`any`[]

## Returns

`Var`
