---
title: "clr"
---

> **clr**(`mat`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [mva/composition.js:176](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/mva/composition.js#L176)

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
