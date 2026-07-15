---
title: "alr"
---

> **alr**(`mat`, `denomIdx?`, `handleZeros?`, `delta?`): `any`[] \| `any`[][]

Defined in: [mva/composition.js:217](https://github.com/tangent-to/ds/blob/906004976edc5a867a581f4e234a37a94ce2f592/src/mva/composition.js#L217)

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
