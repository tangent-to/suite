---
title: "samplers"
---

> `const` **samplers**: `object`

Defined in: [index.js:108](https://github.com/tangent-to/mc/blob/434d88822f9b6d48679ec786993b8e73f230b0f8/src/index.js#L108)

## Type Declaration

### HamiltonianMC

> **HamiltonianMC**: *typeof* [`HamiltonianMC`](../classes/HamiltonianMC.md)

### HMC

> **HMC**: *typeof* [`HMC`](../classes/HMC.md)

### MetropolisHastings

> **MetropolisHastings**: *typeof* [`MetropolisHastings`](../classes/MetropolisHastings.md)

### NUTS

> **NUTS**: *typeof* [`NUTS`](../classes/NUTS.md)

### summary

> **summary**: (`chainsOrResults`, `opts?`) => `any`[]

ArviZ-style posterior summary across one or more chains.

#### Parameters

##### chainsOrResults

`any`

Array of chain results (`{trace}` from
  [HMC#sample](../classes/HMC.md#sample)), an array of raw trace dicts, or a single trace dict.

##### opts?

###### hdi?

`number` = `0.94`

HDI mass (e.g. 0.94 → hdi_3%/hdi_97%).

#### Returns

`any`[]

One row per scalar parameter component with
  `{ param, mean, sd, hdi_lo, hdi_hi, ess, rhat }`.
