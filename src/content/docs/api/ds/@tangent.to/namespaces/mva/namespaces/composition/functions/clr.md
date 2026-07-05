---
title: "clr"
---

> **clr**(`mat`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [ds/src/mva/composition.js:176](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/mva/composition.js#L176)

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
