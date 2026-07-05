---
title: "summary"
---

> **summary**(`chainsOrResults`, `opts?`): `any`[]

Defined in: [mc/src/samplers/hmc-vector.js:216](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/samplers/hmc-vector.js#L216)

ArviZ-style posterior summary across one or more chains.

## Parameters

### chainsOrResults

`any`

Array of chain results (`{trace}` from
  [HMC#sample](../classes/HMC.md#sample)), an array of raw trace dicts, or a single trace dict.

### opts?

#### hdi?

`number` = `0.94`

HDI mass (e.g. 0.94 → hdi_3%/hdi_97%).

## Returns

`any`[]

One row per scalar parameter component with
  `{ param, mean, sd, hdi_lo, hdi_hi, ess, rhat }`.
