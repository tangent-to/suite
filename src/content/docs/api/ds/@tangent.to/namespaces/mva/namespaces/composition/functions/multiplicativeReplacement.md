---
title: "multiplicativeReplacement"
---

> **multiplicativeReplacement**(`mat`, `delta?`): `any`[] \| `any`[][]

Defined in: [ds/src/mva/composition.js:110](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/mva/composition.js#L110)

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
