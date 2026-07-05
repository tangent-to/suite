---
title: "buildModel"
---

> **buildModel**(`rows`, `observedNames`): `any`

Defined in: [model.js:26](https://github.com/tangent-to/sem/blob/a377415108494623387d492893bb95c1809541cc/src/model.js#L26)

Build the model specification from parsed rows.

## Parameters

### rows

`any`[]

Output of parseModel

### observedNames

`string`[]

Observed variable names present in the data

## Returns

`any`

{variables, latents, observed, params, aIndex, sIndex, t, p}
