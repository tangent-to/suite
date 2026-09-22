---
title: "buildModel"
---

> **buildModel**(`rows`, `observedNames`): `object`

Defined in: [model.js:30](https://github.com/tangent-to/sem/blob/8cbfcf7338eed351e3ac258460cdda17e8ccf14d/src/model.js#L30)

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
