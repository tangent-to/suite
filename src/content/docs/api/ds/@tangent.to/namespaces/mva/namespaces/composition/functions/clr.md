---
title: "clr"
---

> **clr**(`mat`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [mva/composition.js:176](https://github.com/tangent-to/ds/blob/bece0899e8ecc5f8fd2c8b895ca1767e5f9717dd/src/mva/composition.js#L176)

Centered log-ratio transformation (CLR)

## Parameters

### mat

`any`[] \| `any`[][]

Input compositional data (positive values)

### handleZeros?

`boolean` = `false`

If true, replace zeros before transform

### delta?

`number` = `1e-6`

Replacement value for zeros

## Returns

`any`[] \| `any`[][]

CLR-transformed data
