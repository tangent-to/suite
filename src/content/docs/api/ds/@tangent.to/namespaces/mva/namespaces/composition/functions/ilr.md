---
title: "ilr"
---

> **ilr**(`mat`, `basis?`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [mva/composition.js:317](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/mva/composition.js#L317)

Isometric log-ratio transformation (ILR)

## Parameters

### mat

`any`[] \| `any`[][]

Input compositional data

### basis?

`any`[][] = `null`

Orthonormal basis (default: Gram-Schmidt basis)

### handleZeros?

`boolean` = `false`

If true, replace zeros before transform

### delta?

`number` = `1e-6`

Replacement value for zeros

## Returns

`any`[] \| `any`[][]

ILR-transformed data
