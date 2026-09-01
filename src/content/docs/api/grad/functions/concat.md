---
title: "concat"
---

> **concat**(`parts`): `Var`

Defined in: [ops.js:413](https://github.com/tangent-to/grad/blob/c31bb722bc35d67380373bb52911c29f93e7920d/src/ops.js#L413)

Assemble scalar or vector Vars into one vector, end to end.

The companion to `slice`, and what a vector-valued function needs to return:
an ODE right-hand side is written component by component and concatenated.

## Parameters

### parts

`any`[]

## Returns

`Var`
