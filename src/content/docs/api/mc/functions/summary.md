---
title: "summary"
---

> **summary**(`chainsOrResults`, `opts?`): `any`[]

Defined in: [samplers/hmc-vector.js:217](https://github.com/tangent-to/mc/blob/d3c922a65e80c0bea72daa79834773fc47134143/src/samplers/hmc-vector.js#L217)

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
