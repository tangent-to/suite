---
title: "multiplicativeReplacement"
---

> **multiplicativeReplacement**(`mat`, `delta?`): `any`[] \| `any`[][]

Defined in: [mva/composition.js:110](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/mva/composition.js#L110)

Replaces zeros with small delta values before closure

## Parameters

### mat

`any`[] \| `any`[][]

Input compositional data

### delta?

`number` = `1e-6`

Replacement value for zeros (default: 1e-6)

## Returns

`any`[] \| `any`[][]

Composition with zeros replaced
