---
title: "alr"
---

> **alr**(`mat`, `denomIdx?`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [ds/src/mva/composition.js:217](https://github.com/tangent-to/ds/blob/f89855ceeb3a13b193f334d5de06a63a92d31f2a/src/mva/composition.js#L217)

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
