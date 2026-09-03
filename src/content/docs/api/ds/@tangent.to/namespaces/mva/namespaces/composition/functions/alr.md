---
title: "alr"
---

> **alr**(`mat`, `denomIdx?`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [mva/composition.js:217](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/mva/composition.js#L217)

Additive log-ratio transformation (ALR)
Uses the last component as the reference denominator

## Parameters

### mat

`any`[] \| `any`[][]

Input compositional data

### denomIdx?

`number` = `null`

Index of denominator component (default: last)

### handleZeros?

`boolean` = `false`

If true, replace zeros before transform

### delta?

`number` = `1e-6`

Replacement value for zeros

## Returns

`any`[] \| `any`[][]

ALR-transformed data (dimension reduced by 1)
