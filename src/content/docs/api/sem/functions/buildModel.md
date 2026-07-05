---
title: "buildModel"
---

> **buildModel**(`rows`, `observedNames`): `any`

Defined in: [model.js:26](https://github.com/tangent-to/sem/blob/a484d1af5ccb86fdee92726ba3c75d48dc82c663/src/model.js#L26)

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
