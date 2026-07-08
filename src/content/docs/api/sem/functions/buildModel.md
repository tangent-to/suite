---
title: "buildModel"
---

> **buildModel**(`rows`, `observedNames`): `object`

Defined in: [model.js:30](https://github.com/tangent-to/sem/blob/c40df55cba16961fece3315fb019f24e9333c9ec/src/model.js#L30)

Build the model specification from parsed rows.

## Parameters

### rows

`any`[]

Output of parseModel

### observedNames

`string`[]

Observed variable names present in the data

## Returns

`object`

RAM specification: variable ordering, the parameter
  table (directed paths in `A`, (co)variances in `S`), total `t` and observed `p` counts

### latents

> **latents**: `string`[]

### observed

> **observed**: `string`[]

### p

> **p**: `number`

### params

> **params**: `object`[]

### t

> **t**: `number`

### variables

> **variables**: `string`[]
