---
title: "buildModel"
---

> **buildModel**(`rows`, `observedNames`): `object`

Defined in: [model.js:30](https://github.com/tangent-to/sem/blob/124fa0ee2c1adf1b606c5303cb2e9783909925f0/src/model.js#L30)

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
